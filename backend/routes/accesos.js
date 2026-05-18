const express = require('express');
const router  = express.Router();
const { Cita, PersonaExterna, Empleado, Usuario, Proveedor } = require('../models');
const { sequelize } = require('../db');

// --- FUNCIÓN DE FORMATEO CORREGIDA ---
const formatearCita = (c) => {
    const fechaHora = new Date(c.fecha_hora_cita);
    
    // Mapeo inverso: De SQL a Front-end
    let estadoFront = c.estado_cita.charAt(0).toUpperCase() + c.estado_cita.slice(1); // ej: confirmada -> Confirmada
    
    if (c.estado_cita === 'cancelada') {
        estadoFront = 'Rechazada'; // Traducimos para que el <select> lo reconozca
    }

    return {
        id: c.id_cita.toString(),
        visitante: `${c.PersonaExterna.nombre_persona} ${c.PersonaExterna.apellidos_persona}`.trim(),
        correo: c.PersonaExterna.correo_persona,
        empresa: c.PersonaExterna.Proveedor ? c.PersonaExterna.Proveedor.empresa_proveedor : '',
        empleadoVisitar: `${c.Empleado.Usuario.nombre_usuario} ${c.Empleado.Usuario.apellidos_usuario}`.trim(),
        fecha: fechaHora.toISOString().split('T')[0],
        hora: fechaHora.toTimeString().split(' ')[0].substring(0, 5),
        motivo: c.motivo_cita,
        estado: estadoFront, // Aquí enviamos "Rechazada" en lugar de "Cancelada"
        vigilante: "Sistema"
    };
};

// ── GET /api/accesos ── (Sin cambios, usa la función corregida)
router.get('/', async (req, res) => {
    try {
        const citas = await Cita.findAll({
            include: [
                { model: PersonaExterna, include: [Proveedor] },
                { model: Empleado, include: [{ model: Usuario }] }
            ],
            order: [['fecha_hora_cita', 'DESC']]
        });
        res.json(citas.map(formatearCita));
    } catch (error) {
        res.status(500).json({ mensaje: 'Error al obtener registros' });
    }
});

// ── GET /api/accesos/:id ── (Sin cambios, usa la función corregida)
router.get('/:id', async (req, res) => {
    try {
        const cita = await Cita.findByPk(req.params.id, {
            include: [
                { model: PersonaExterna, include: [Proveedor] },
                { model: Empleado, include: [{ model: Usuario }] }
            ]
        });
        if (!cita) return res.status(404).json({ mensaje: 'Cita no encontrada' });
        res.json(formatearCita(cita));
    } catch (error) {
        res.status(500).json({ mensaje: 'Error al cargar la cita' });
    }
});

// ── POST /api/accesos ── (Mismo código de antes)
router.post('/', async (req, res) => {
    const { visitante, correo, empleadoVisitar, fecha, hora, motivo, empresa } = req.body;
    try {
        const empleadoEncontrado = await Empleado.findOne({
            include: [{
                model: Usuario,
                where: sequelize.where(
                    sequelize.fn('concat', sequelize.col('nombre_usuario'), ' ', sequelize.col('apellidos_usuario')),
                    empleadoVisitar
                )
            }]
        });

        if (!empleadoEncontrado) return res.status(404).json({ mensaje: 'Empleado no encontrado' });

        const partes = visitante.trim().split(' ');
        const [persona] = await PersonaExterna.findOrCreate({
            where: { correo_persona: correo },
            defaults: {
                nombre_persona: partes[0],
                apellidos_persona: partes.slice(1).join(' ') || ' ',
                tipo_persona: empresa ? 'proveedor' : 'visitante'
            }
        });

        if (empresa) {
            await Proveedor.findOrCreate({
                where: { id_persona: persona.id_persona },
                defaults: { empresa_proveedor: empresa }
            });
        }

        const nuevaCita = await Cita.create({
            id_persona: persona.id_persona,
            id_empleado: empleadoEncontrado.id_empleado,
            fecha_hora_cita: `${fecha} ${hora}`,
            motivo_cita: motivo
        });

        res.status(201).json({ id: nuevaCita.id_cita });
    } catch (error) {
        res.status(500).json({ mensaje: 'Error al crear' });
    }
});

// ── PUT /api/accesos/:id ── (Aseguramos el mapeo al guardar)
router.put('/:id', async (req, res) => {
    try {
        const { estado, motivo, fecha, hora } = req.body;
        const updateData = {};
        
        if (estado) {
            let estadoSQL = estado.toLowerCase();
            // Si viene "Rechazada", lo guardamos como "cancelada"
            if (estadoSQL === 'rechazada') estadoSQL = 'cancelada';
            updateData.estado_cita = estadoSQL;
        }
        
        if (motivo) updateData.motivo_cita = motivo;
        if (fecha && hora) updateData.fecha_hora_cita = `${fecha} ${hora}`;

        await Cita.update(updateData, { where: { id_cita: req.params.id } });
        res.json({ mensaje: 'Actualizado correctamente' });
    } catch (error) {
        res.status(500).json({ mensaje: 'Error al actualizar' });
    }
});

// ── DELETE /api/accesos/:id ──
router.delete('/:id', async (req, res) => {
    try {
        await Cita.destroy({ where: { id_cita: req.params.id } });
        res.json({ mensaje: 'Eliminado' });
    } catch (error) {
        res.status(500).json({ mensaje: 'Error al eliminar' });
    }
});

module.exports = router;