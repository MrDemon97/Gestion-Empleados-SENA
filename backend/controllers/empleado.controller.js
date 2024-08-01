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
      // Extrae el id del empleado desde los parámetros de la solicitud
      const { id } = req.params;
  
      // Crea un objeto con los datos del empleado que se desean actualizar
      const empleadoEdit = {
        name: req.body.name,
        position: req.body.position,
        office: req.body.office,
        salary: req.body.salary
      };
  
      // Busca el empleado por el id y actualiza el documento con los nuevos datos
      // El parámetro { new: true } asegura que la respuesta sea el documento actualizado
      const updatedEmpleado = await Empleado.findByIdAndUpdate(id, empleadoEdit, { new: true });
  
      // Si no se encuentra un empleado con el id proporcionado, devuelve un error 404
      if (!updatedEmpleado) {
        return res.status(404).json({ error: 'Empleado no encontrado' });
      }
  
      // Devuelve una respuesta JSON con el estado de la operación y el empleado actualizado
      res.json({ status: 'Empleado actualizado', empleado: updatedEmpleado });
    } catch (err) {
      // Maneja cualquier error que ocurra durante la operación y devuelve un error 400
      res.status(400).json({ error: err.message });
    }
  };
  

//Eliminar empleado
empleadoCtrl.eliminarEmpleado = async (req, res) => {
    await Empleado.findByIdAndDelete(req.params.id);
    res.json({'status': 'Empleado ELIMINADO'});
    }

// exportando modulo

module.exports = empleadoCtrl;
