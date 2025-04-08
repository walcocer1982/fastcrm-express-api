const mongoose = require('mongoose');

const plantillaSchema = new mongoose.Schema({
  nombre: {
    type: String,
    required: true,
    trim: true
  },
  contenido: {
    type: String,
    required: true
  },
  tipo: {
    type: String,
    required: true,
    enum: ['email', 'documento', 'mensaje']
  },
  variables: [{
    type: String,
    trim: true
  }],
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Plantilla', plantillaSchema); 