const { DataTypes } = require('sequelize');
const { sequelize } = require('../db');

const Visitante = sequelize.define('Visitante', {
    id_persona: { type: DataTypes.INTEGER, primaryKey: true },
    numero_identificacion: { type: DataTypes.STRING(30) }
}, { tableName: 'visitante' });

module.exports = Visitante;