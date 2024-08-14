const express = require('express'); // Crea un nuevo enrutador de express (organizar y manejar rutas)
const router = express.Router(); // Crear enrutador de express
const empleadoCtrl = require('../controllers/empleado.controller'); // Iportar controlador empleados

/* router.get('/',(req,res)=>{
    res.json({
        status:'API REST funcionado'
    });
}) */
router.get('/',empleadoCtrl.getEmpleados); //Obtener empleados

router.post('/',empleadoCtrl.createEmpleados); //Guardar empleado

router.get('/:id',empleadoCtrl.getUnicoEmpleado); //Optener un empleado por su id

router.put('/:id',empleadoCtrl.editarEmpleado); // Actualizar un empleado por su id

router.delete('/:id',empleadoCtrl.eliminarEmpleado); // Borrar un empleado por su id


module.exports = router; // Se exporta para su uso en otras partes de la app