/**
* Se coloca el controlador como un objeto y luego se exporta como
* se requiere primero el modelo empleado
*/

const Empleado = require('../models/empleado');
const empleadoCtrl = {};

//DEFINICION DE METODOS
// Obtener todos los empleados
empleadoCtrl.getEmpleados = async (req, res) => {
    const empleados = await Empleado.find();
    res.json(empleados);
}

//Crear empleados
empleadoCtrl.createEmpleados = async (req, res) => {
    try {
      const { name, position, office, salary } = req.body;
      
      // Verificar si ya existe un empleado con los mismos datos
      const existingEmpleado = await Empleado.findOne({ name, position, office, salary });
      if (existingEmpleado) {
        return res.status(400).json({ 'error': 'Empleado con los mismos datos ya existe' });
      }
      
      const empleado = new Empleado(req.body);
      await empleado.save();
      res.json({ 'status': 'Empleado GUARDADO' });
    } catch (err) {
      res.status(400).json({ 'error': err.message });
    }
  };

//Conseguir un unico empleado
empleadoCtrl.getUnicoEmpleado = async (req, res) => {
    const empleadoUnico = await Empleado.findById(req.params.id);
    res.json(empleadoUnico);
}

//Actualizar empleado
empleadoCtrl.editarEmpleado = async (req, res) => {
  try {
      const { id } = req.params;
      const { name, position, office, salary } = req.body;

      // Verificar si ya existe un empleado con los mismos datos, excluyendo el empleado actual
      const existingEmpleado = await Empleado.findOne({ name, position, office, salary });
      if (existingEmpleado && existingEmpleado._id.toString() !== id) {
          return res.status(400).json({ error: 'Empleado con los mismos datos ya existe' });
      }

      const empleadoEdit = { name, position, office, salary };
      const updatedEmpleado = await Empleado.findByIdAndUpdate(id, empleadoEdit, { new: true });

      // Si no se encuentra un empleado con el id proporcionado, devuelve un error 404
      if (!updatedEmpleado) {
          return res.status(404).json({ error: 'Empleado no encontrado' });
      }

      res.json({ status: 'Empleado actualizado', empleado: updatedEmpleado });
  } catch (err) {
      res.status(400).json({ error: err.message });
  }
};
;
  

//Eliminar empleado
empleadoCtrl.eliminarEmpleado = async (req, res) => {
    await Empleado.findByIdAndDelete(req.params.id);
    res.json({'status': 'Empleado ELIMINADO'});
    }

// exportando modulo

module.exports = empleadoCtrl;
