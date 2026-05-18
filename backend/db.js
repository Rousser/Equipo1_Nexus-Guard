const { Sequelize } = require('sequelize');

// Configura aquí tus credenciales de MySQL
const sequelize = new Sequelize('sistema_acceso', 'root', '12345678', {
    host: 'localhost',
    dialect: 'mysql',
    logging: false, // Para que no llene la consola de consultas SQL
    define: {
        timestamps: false // Tu esquema no usa los timestamps automáticos de Sequelize
    }
});

const conectarDB = async () => {
    try {
        await sequelize.authenticate();
        console.log('✅ Conexión a MySQL establecida correctamente.');
    } catch (error) {
        console.error('❌ No se pudo conectar a la base de datos:', error);
    }
};

module.exports = { sequelize, conectarDB };