const mongoose = require('mongoose');
const {Schema} = mongoose;

const EmpleadoSchema = new Schema({
    name:{type: String, require: true},
    position:{type: String, requiere: true},
    office:{type: String, require: true},
    salary:{type: Number, require: true},
});

module.exports = mongoose.model('Empleado', EmpleadoSchema);

/*¿Qué hace este código?
Define la Estructura de los Documentos: El esquema EmpleadoSchema define cómo deben estructurarse los documentos en la colección empleados. Específicamente, cada documento debe tener los campos name, position, office y salary, todos obligatorios (required).

Crea un Modelo: El modelo Empleado creado con mongoose.model es una representación de la colección empleados. Este modelo proporciona métodos y funcionalidades para interactuar con la colección, como crear, leer, actualizar y eliminar documentos.*/