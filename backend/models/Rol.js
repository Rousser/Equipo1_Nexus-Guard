const { DataTypes } = require('sequelize');
const { sequelize } = require('../db');

const Rol = sequelize.define('Rol', {
    id_rol: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    nombre_rol: { type: DataTypes.STRING(100), allowNull: false },
    descripcion_rol: { type: DataTypes.TEXT }
}, { tableName: 'rol' });

module.exports = Rol;