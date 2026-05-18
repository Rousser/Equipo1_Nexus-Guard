const { DataTypes } = require('sequelize');
const { sequelize } = require('../db');

const Acceso = sequelize.define('Acceso', {
    id_acceso: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    id_cita: { type: DataTypes.INTEGER, allowNull: true },
    id_persona: { type: DataTypes.INTEGER, allowNull: false },
    id_empleado: { type: DataTypes.INTEGER, allowNull: false },
    fecha_hora_entrada: { type: DataTypes.DATE, defaultValue: DataTypes.NOW },
    fecha_hora_salida: { type: DataTypes.DATE, allowNull: true },
    motivo_acceso: { type: DataTypes.TEXT }
}, { tableName: 'acceso' });

module.exports = Acceso;