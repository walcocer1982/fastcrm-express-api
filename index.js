require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const swaggerUi = require('swagger-ui-express');
const YAML = require('yamljs');
const plantillaRoutes = require('./routes/plantillaRoutes');

const app = express();

// Cargar archivo YAML de Swagger
const swaggerDocument = YAML.load('./swagger.yaml');

// Middleware
app.use(cors());
app.use(express.json());

// Documentación Swagger
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// Ruta de prueba en la raíz
app.get('/', (req, res) => {
  res.json({ mensaje: 'Bienvenido a la API de FastCRM' });
});

// Rutas de la API
app.use('/api/plantillas', plantillaRoutes);

// Conexión a MongoDB
mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log('Conectado a MongoDB Atlas'))
  .catch(err => console.error('Error de conexión:', err));

// Puerto
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en puerto ${PORT}`);
  console.log(`Documentación disponible en http://localhost:${PORT}/api-docs`);
}); 