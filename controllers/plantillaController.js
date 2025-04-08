const Plantilla = require('../models/Plantilla');

// Obtener todas las plantillas
exports.getPlantillas = async (req, res) => {
  try {
    const plantillas = await Plantilla.find();
    res.json(plantillas);
  } catch (error) {
    res.status(500).json({ mensaje: 'Error al obtener las plantillas', error });
  }
};

// Obtener una plantilla por ID
exports.getPlantilla = async (req, res) => {
  try {
    const plantilla = await Plantilla.findById(req.params.id);
    if (!plantilla) {
      return res.status(404).json({ mensaje: 'Plantilla no encontrada' });
    }
    res.json(plantilla);
  } catch (error) {
    res.status(500).json({ mensaje: 'Error al obtener la plantilla', error });
  }
};

// Crear nueva plantilla
exports.crearPlantilla = async (req, res) => {
  try {
    const plantilla = new Plantilla(req.body);
    await plantilla.save();
    res.status(201).json(plantilla);
  } catch (error) {
    res.status(400).json({ mensaje: 'Error al crear la plantilla', error });
  }
};

// Actualizar plantilla
exports.actualizarPlantilla = async (req, res) => {
  try {
    const plantilla = await Plantilla.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );
    if (!plantilla) {
      return res.status(404).json({ mensaje: 'Plantilla no encontrada' });
    }
    res.json(plantilla);
  } catch (error) {
    res.status(400).json({ mensaje: 'Error al actualizar la plantilla', error });
  }
};

// Eliminar plantilla
exports.eliminarPlantilla = async (req, res) => {
  try {
    const plantilla = await Plantilla.findByIdAndDelete(req.params.id);
    if (!plantilla) {
      return res.status(404).json({ mensaje: 'Plantilla no encontrada' });
    }
    res.json({ mensaje: 'Plantilla eliminada correctamente' });
  } catch (error) {
    res.status(500).json({ mensaje: 'Error al eliminar la plantilla', error });
  }
}; 