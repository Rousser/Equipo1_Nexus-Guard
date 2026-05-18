const { DataTypes } = require('sequelize');
const { sequelize } = require('../db');

const Cita = sequelize.define('Cita', {
    id_cita: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    id_persona: { type: DataTypes.INTEGER, allowNull: false },
    id_empleado: { type: DataTypes.INTEGER, allowNull: false },
    fecha_hora_cita: { type: DataTypes.DATE, allowNull: false },
    motivo_cita: { type: DataTypes.TEXT },
    estado_cita: { 
        type: DataTypes.ENUM('pendiente', 'confirmada', 'cancelada', 'finalizada'),
        defaultValue: 'pendiente' 
    }
}, { tableName: 'cita' });

module.exports = Cita;