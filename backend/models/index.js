const Usuario = require('./Usuario');
const Empleado = require('./Empleado');
const Rol = require('./Rol');
const PersonaExterna = require('./PersonaExterna');
const Cita = require('./Cita');
const Proveedor = require('./Proveedor');
const Cliente = require('./Cliente');
const Visitante = require('./Visitante');
const Acceso = require('./Acceso');
const Bitacora = require('./Bitacora');

// --- Relaciones de Usuarios y Empleados ---
Rol.hasMany(Usuario, { foreignKey: 'id_rol' });
Usuario.belongsTo(Rol, { foreignKey: 'id_rol' });

Usuario.hasOne(Empleado, { foreignKey: 'id_usuario' });
Empleado.belongsTo(Usuario, { foreignKey: 'id_usuario' });

Usuario.hasMany(Bitacora, { foreignKey: 'id_usuario' });
Bitacora.belongsTo(Usuario, { foreignKey: 'id_usuario' });

// --- Relaciones de Persona Externa (Herencia) ---
PersonaExterna.hasOne(Proveedor, { foreignKey: 'id_persona' });
Proveedor.belongsTo(PersonaExterna, { foreignKey: 'id_persona' });

PersonaExterna.hasOne(Cliente, { foreignKey: 'id_persona' });
Cliente.belongsTo(PersonaExterna, { foreignKey: 'id_persona' });

PersonaExterna.hasOne(Visitante, { foreignKey: 'id_persona' });
Visitante.belongsTo(PersonaExterna, { foreignKey: 'id_persona' });

// --- Relaciones de Citas ---
PersonaExterna.hasMany(Cita, { foreignKey: 'id_persona' });
Cita.belongsTo(PersonaExterna, { foreignKey: 'id_persona' });

Empleado.hasMany(Cita, { foreignKey: 'id_empleado' });
Cita.belongsTo(Empleado, { foreignKey: 'id_empleado' });

// --- Relaciones de Accesos ---
Cita.hasMany(Acceso, { foreignKey: 'id_cita' });
Acceso.belongsTo(Cita, { foreignKey: 'id_cita' });

PersonaExterna.hasMany(Acceso, { foreignKey: 'id_persona' });
Acceso.belongsTo(PersonaExterna, { foreignKey: 'id_persona' });

Empleado.hasMany(Acceso, { foreignKey: 'id_empleado' });
Acceso.belongsTo(Empleado, { foreignKey: 'id_empleado' });

module.exports = {
    Usuario,
    Empleado,
    Rol,
    PersonaExterna,
    Cita,
    Proveedor,
    Cliente,
    Visitante,
    Acceso,
    Bitacora
};