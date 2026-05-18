const { DataTypes } = require('sequelize');
const { sequelize } = require('../db');

const Bitacora = sequelize.define('Bitacora', {
    id_bitacora: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    id_usuario: { type: DataTypes.INTEGER, allowNull: false },
    accion_bitacora: { type: DataTypes.STRING(50), allowNull: false },
    fecha_hora_bitacora: { type: DataTypes.DATE, defaultValue: DataTypes.NOW },
    detalle_bitacora: { type: DataTypes.TEXT }
}, { tableName: 'bitacora' });

module.exports = Bitacora;