const express  = require('express');
const bcrypt   = require('bcryptjs');
const jwt      = require('jsonwebtoken');
const router   = express.Router();
const { Usuario, Empleado } = require('../models');

const SECRET = 'nexusguard_secret_2024';
const codigosTemporal = {};

// ── POST /api/auth/registro ──
router.post('/registro', async (req, res) => {
    const { nombre, email, password } = req.body;

    try {
        // 1. Verificar si el usuario ya existe en la DB
        const existe = await Usuario.findOne({ where: { correo_usuario: email } });
        if (existe) {
            return res.status(400).json({ mensaje: 'Este correo ya está registrado' });
        }

        // 2. Encriptar contraseña
        const hash = await bcrypt.hash(password, 10);

        // 3. Crear el usuario (Asumiendo que id_rol 2 es para empleados, ajusta según tus datos)
        // Separamos nombre y apellidos (el front envía "nombre", lo dividiremos para tu tabla)
        const [nombre_u, ...apellidos_u] = nombre.split(' ');
        
        const nuevoUsuario = await Usuario.create({
            nombre_usuario: nombre_u,
            apellidos_usuario: apellidos_u.join(' ') || ' ',
            correo_usuario: email,
            contraseña_usuario: hash,
            id_rol: 2 // Rol por defecto
        });

        res.status(201).json({ mensaje: 'Usuario registrado exitosamente' });
    } catch (error) {
        res.status(500).json({ mensaje: 'Error en el servidor', error: error.message });
    }
});

// ── POST /api/auth/login ──
router.post('/login', async (req, res) => {
    const { email, password } = req.body;

    try {
        const usuario = await Usuario.findOne({ where: { correo_usuario: email } });

        if (!usuario) {
            return res.status(401).json({ mensaje: 'Correo o contraseña incorrectos' });
        }

        const passwordValido = await bcrypt.compare(password, usuario.contraseña_usuario);
        if (!passwordValido) {
            return res.status(401).json({ mensaje: 'Correo o contraseña incorrectos' });
        }

        const token = jwt.sign(
            { id: usuario.id_usuario, nombre: usuario.nombre_usuario, email: usuario.correo_usuario },
            SECRET,
            { expiresIn: '8h' }
        );

        res.json({ 
            token, 
            nombre: `${usuario.nombre_usuario} ${usuario.apellidos_usuario}`, 
            email: usuario.correo_usuario 
        });
    } catch (error) {
        res.status(500).json({ mensaje: 'Error en el servidor' });
    }
});

// ── POST /api/auth/verificar-correo ──
router.post('/verificar-correo', async (req, res) => {
    const { email } = req.body;
    try {
        const usuario = await Usuario.findOne({ where: { correo_usuario: email } });
        if (!usuario) return res.status(404).json({ mensaje: 'Correo no registrado' });

        const codigo = Math.floor(1000 + Math.random() * 9000).toString();
        codigosTemporal[email] = codigo;
        console.log(`📧 Código para ${email}: ${codigo}`);

        res.json({ codigo, mensaje: 'Código generado exitosamente' });
    } catch (error) {
        res.status(500).json({ mensaje: 'Error al verificar correo' });
    }
});

// ── POST /api/auth/cambiar-password ──
router.post('/cambiar-password', async (req, res) => {
    const { email, password } = req.body;
    try {
        const hash = await bcrypt.hash(password, 10);
        const actualizado = await Usuario.update(
            { contraseña_usuario: hash },
            { where: { correo_usuario: email } }
        );

        if (actualizado[0] === 0) return res.status(404).json({ mensaje: 'Usuario no encontrado' });

        delete codigosTemporal[email];
        res.json({ mensaje: 'Contraseña actualizada exitosamente' });
    } catch (error) {
        res.status(500).json({ mensaje: 'Error al cambiar contraseña' });
    }
});

module.exports = router;