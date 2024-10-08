/*
  Se coloca el controlador como un objeto y luego se exporta
  se requiere primero el modelo empleado
*/

const Empleado = require('../models/empleado'); 
const empleadoCtrl = {}; 

//DEFINICION DE METODOS

// Obtener todos los empleados
empleadoCtrl.getEmpleados = async (req, res) => {
  try {
    // Busca todos los empleado en la base de datos
    const empleados = await Empleado.find(); 

    //Devuelve la lista de empleados en formato Json
    res.json(empleados); 

  } catch (err) {
    console.error('Error del servidor al optener empleados'); 
    // Si ocurre un error responde con un mensaje y un codigo de estatus 500
    res.status(500).json({ error: 'Error del servidor al optener empleados' });
  }

}

//Crear empleados
empleadoCtrl.createEmpleados = async (req, res) => {
  try {

    //? Se extrae los datos del cuerpo de la solicitud
    const { name, position, office, salary } = req.body;

    // Verificar que todos los campos requeridos estén presentes verificando si son nulos o indefinidos
    if (!name || !position || !office || salary == null) {
      console.error('Todos los campos son requeridos');
      return res.status(400).json({ error: 'Todos los campos son requeridos' });
    }

   
     //? Verificar si ya existe un empleado con el mismo nombre y posicion
    const existingEmpleado = await Empleado.findOne({ name, position });
    if (existingEmpleado) {
      console.error('Empleado con los mismos datos ya existe');
      return res.status(400).json({ error: 'Empleado con los mismos datos ya existe' });
    }

    // Crea nueva instancia con datos proporcionados
    const empleado = new Empleado(req.body);

    // Guarda el nuevo empleado en la base de daos
    await empleado.save();
    console.log(empleado);
    res.json({ status: 'Empleado craeado con exito' });

  } catch (err) {
    console.error('Error del servidor al crear empleado');
    res.status(500).json({ error: 'Error del servidor al crear empleado' });

  }
};

// Conseguir un único empleado
empleadoCtrl.getUnicoEmpleado = async (req, res) => {
  try {
    const empleadoUnico = await Empleado.findById(req.params.id);
    if (!empleadoUnico) {
      console.error('Empleado no encontrado');
      return res.status(404).json({ error: 'Empleado no encontrado' });
    }
    // Si el empleado es encontrado devolvemos todos los datos del empleado
    res.json(empleadoUnico);
  } catch (err) {
    console.error('Error del servidor al obtener empleado');
    res.status(500).json({ error: 'Error del servidor al obtener empleado' });
  }
};

//Actualizar empleado
empleadoCtrl.editarEmpleado = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, position, office, salary } = req.body;

    // Verificar si ya existe un empleado con los mismos datos nombre y posición, excluyendo el empleado actual
    const existingEmpleado = await Empleado.findOne({ name, position }); // si no encuentra es nulo

    if (existingEmpleado && existingEmpleado._id.toString() !== id) {
      console.error('Empleado ya existe');
      return res.status(400).json({ error: 'Empleado con los mismos datos ya existe' });
    }

    const empleadoEdit = { name, position, office, salary };
    const updatedEmpleado = await Empleado.findByIdAndUpdate(id, empleadoEdit, { new: true }); //? NEW:tRUE devolver el documento act y no el orig

    // Si no se encuentra un empleado con el id proporcionado, devuelve un error 404
    if (!updatedEmpleado) {
      console.err('Empleado no encontrado');
      return res.status(404).json({ error: 'Empleado no encontrado' });
    }

    res.json({ status: 'Empleado actualizado con exito', empleado: updatedEmpleado });
  } catch (err) {
    console.log('Error del servidor actualizando empleado');
    res.status(500).json({ error: 'Error del servidor actualizando empleado' });
  }
};
;


//Eliminar empleado
empleadoCtrl.eliminarEmpleado = async (req, res) => {
  try {
    //Buscamos el empleado por su id y lo eliminamos 
    const empleadoEliminado = await Empleado.findByIdAndDelete(req.params.id);
    if (!empleadoEliminado) {
      return res.status(404).json({ error: 'Empleado no encontrado' });
    }
    res.json({ status: 'Empleado eliminado con éxito' });
  } catch (err) {
    console.log('Error del servidor al eliminar empleado');
    res.status(500).json({ error: 'Error del servidor al eliminar empleado' });
  }
};


// exportando modulo

module.exports = empleadoCtrl;
