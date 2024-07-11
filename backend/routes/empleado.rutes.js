const express = require('express');
const router = express.Router();
const empleadoCtrl = require('../controllers/empleado.controller');

/* router.get('/',(req,res)=>{
    res.json({
        status:'API REST funcionado'
    });
}) */
router.get('/',empleadoCtrl.getEmpleados); //Obtener empleados

router.post('/',empleadoCtrl.createEmpleados); //Guardar

router.get('/:id',empleadoCtrl.getUnicoEmpleado); 
// Obtener un unico empleado

router.put('/:id',empleadoCtrl.editarEmpleado);
// Editar un empleado uno a la vez

router.delete('/:id',empleadoCtrl.eliminarEmpleado);
// Eliminar un empleado uno a la vez

module.exports = router;