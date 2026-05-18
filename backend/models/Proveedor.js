const { DataTypes } = require('sequelize');
const { sequelize } = require('../db');

const Proveedor = sequelize.define('Proveedor', {
    id_persona: { type: DataTypes.INTEGER, primaryKey: true },
    empresa_proveedor: { type: DataTypes.STRING(100) }
}, { tableName: 'proveedor' });

module.exports = Proveedor;