const express = require('express');
const cors    = require('cors');
const { conectarDB } = require('./db'); // Importamos la conexión
const app     = express();

// Middlewares
app.use(cors());
app.use(express.json());

// Intentar conectar a la base de datos al arrancar
conectarDB();

// Rutas
app.use('/api/auth',    require('./routes/auth'));
app.use('/api/accesos', require('./routes/accesos'));

// Ruta de prueba
app.get('/', (req, res) => {
    res.json({ mensaje: '✅ Servidor Nexus Guard con MySQL funcionando' });
});

// Iniciar servidor
const PORT = 3000;

// Manejo de 404
app.use((req, res) => {
    res.status(404).send('<h1>404 - No encontrado</h1><p>El recurso solicitado no existe.</p>');
});

app.listen(PORT, () => {
    console.log(`🚀 Servidor corriendo en http://localhost:${PORT}`);
});