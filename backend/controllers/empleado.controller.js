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
empleadoCtrl.createEmpleados = async(req, res) => {
    const empleado = new Empleado(req.body);
    await empleado.save();
    res.json({
        'status': 'Empleado GUARDADO'
        });
}

//Conseguir un unico empleado
empleadoCtrl.getUnicoEmpleado = async (req, res) => {
    const empleadoUnico = await Empleado.findById(req.params.id);
    res.json(empleadoUnico);
}

//Actualizar empleado 
empleadoCtrl.editarEmpleado = async (req, res) => {
    const{id} = req.params;
    const empleadoEdit = {
        name: req.body.name,
        position: req.body.position,
        office: req.body.office,
        salary: req.body.salary
    };
    await Empleado.findByIdAndUpdate(id, {$set: empleadoEdit}, {new: true});
    res.json({'status': 'Empleado ACTUALIZADO'});
}

//Eliminar empleado
empleadoCtrl.eliminarEmpleado = async (req, res) => {
    await Empleado.findByIdAndDelete(req.params.id);
    res.json({'status': 'Empleado ELIMINADO'});
    }

// exportando modulo

module.exports = empleadoCtrl;
