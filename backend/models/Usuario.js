const { DataTypes } = require('sequelize');
const { sequelize } = require('../db');

const Usuario = sequelize.define('Usuario', {
    id_usuario: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    nombre_usuario: { type: DataTypes.STRING(100), allowNull: false },
    apellidos_usuario: { type: DataTypes.STRING(100), allowNull: false },
    correo_usuario: { type: DataTypes.STRING(100), unique: true, allowNull: false },
    contraseña_usuario: { type: DataTypes.STRING(255), allowNull: false },
    telefono_usuario: { type: DataTypes.STRING(20) },
    id_rol: { type: DataTypes.INTEGER, allowNull: false },
    estado_usuario: { type: DataTypes.BOOLEAN, defaultValue: true },
    fecha_creacion_usuario: { type: DataTypes.DATE, defaultValue: DataTypes.NOW }
}, { tableName: 'usuario' });

module.exports = Usuario;