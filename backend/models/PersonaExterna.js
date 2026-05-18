const { DataTypes } = require('sequelize');
const { sequelize } = require('../db');

const PersonaExterna = sequelize.define('PersonaExterna', {
    id_persona: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    nombre_persona: { type: DataTypes.STRING(100), allowNull: false },
    apellidos_persona: { type: DataTypes.STRING(100), allowNull: false },
    correo_persona: { type: DataTypes.STRING(100) },
    telefono_persona: { type: DataTypes.STRING(20) },
    tipo_persona: { type: DataTypes.ENUM('cliente', 'visitante', 'proveedor'), allowNull: false }
}, { tableName: 'persona_externa' });

module.exports = PersonaExterna;