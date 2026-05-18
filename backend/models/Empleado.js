const { DataTypes } = require('sequelize');
const { sequelize } = require('../db');

const Empleado = sequelize.define('Empleado', {
    id_empleado: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    id_usuario: { type: DataTypes.INTEGER, unique: true, allowNull: false },
    area_empleado: { type: DataTypes.STRING(50) }
}, { tableName: 'empleado' });

module.exports = Empleado;