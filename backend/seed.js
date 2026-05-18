const bcrypt = require('bcryptjs');
const { sequelize } = require('./db');
const { Usuario, Empleado, Rol } = require('./models');

async function sembrarDatos() {
    try {
        // 1. Limpiar tablas (Opcional, cuidado en producción)
        // await sequelize.sync({ force: true }); 

        const passwordHash = await bcrypt.hash('Nexus2024', 10);

        // 2. Crear Roles
        const [rolAdmin, rolEmp] = await Rol.bulkCreate([
            { nombre_rol: 'Administrador', descripcion_rol: 'Acceso total' },
            { nombre_rol: 'Empleado', descripcion_rol: 'Acceso a gestión de citas' }
        ]);

        console.log('✅ Roles creados.');

        // 3. Lista de empleados originales
        const datosEmpleados = [
            { nombre: 'Jesus Ramón', apellidos: 'Camarillo Núñez', email: 'jcamarillo@nexusguard.com', area: 'Sistemas' },
            { nombre: 'Marco Gerardo', apellidos: 'Ceballos Valdez', email: 'mceballos@nexusguard.com', area: 'Seguridad' },
            { nombre: 'Jesus Enrique', apellidos: 'Felix Olea', email: 'jfelix@nexusguard.com', area: 'Operaciones' },
            { nombre: 'Claudia Guadalupe', apellidos: 'Romero', email: 'cromero@nexusguard.com', area: 'Administración' },
            { nombre: 'Ignacio', apellidos: 'Sanz Hernandez', email: 'isanz@nexusguard.com', area: 'Recursos Humanos' },
            { nombre: 'José Luis', apellidos: 'Toscano Sosa', email: 'jltoscano@nexusguard.com', area: 'Mantenimiento' }
        ];

        for (const emp of datosEmpleados) {
            // Crear el Usuario
            const nuevoUsuario = await Usuario.create({
                nombre_usuario: emp.nombre,
                apellidos_usuario: emp.apellidos,
                correo_usuario: emp.email,
                contraseña_usuario: passwordHash,
                id_rol: rolEmp.id_rol
            });

            // Crear el Empleado vinculado
            await Empleado.create({
                id_usuario: nuevoUsuario.id_usuario,
                area_empleado: emp.area
            });
        }

        console.log('✅ Los 6 empleados han sido migrados a MySQL exitosamente.');
        process.exit();
    } catch (error) {
        console.error('❌ Error al sembrar datos:', error);
        process.exit(1);
    }
}

sembrarDatos();