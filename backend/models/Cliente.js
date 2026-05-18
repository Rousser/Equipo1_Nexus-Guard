const { DataTypes } = require('sequelize');
const { sequelize } = require('../db');

const Cliente = sequelize.define('Cliente', {
    id_persona: { type: DataTypes.INTEGER, primaryKey: true },
    rfc_cliente: { type: DataTypes.STRING(20) },
    fecha_registro_cliente: { type: DataTypes.DATE, defaultValue: DataTypes.NOW }
}, { tableName: 'cliente' });

module.exports = Cliente;