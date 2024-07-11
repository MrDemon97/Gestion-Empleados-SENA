//Esta linea importa el modulo express y lo asigna a la constante del mismo nombre
//require se para cargar modulos (codigo reutilizable)en js 
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');

// La constante app tendrá todo el funcionamiento del servidor
const app = express();

const mongoose = require('./database'); //Se requiere la conexión

/* Se cre API REST, le decimos a servidor que reciba y envie datos*/

//Configs

app.set('port',process.env.PORT || 3000);
/* Configura el puerto en el que la aplicación escuchará.
 Primero intenta usar el puerto especificado en la variable de entorno PORT.
  Si no está definida, utiliza el puerto 3000*/

app.use(morgan('dev'));
/* Morgan es un middleware que registra las peticiones que se hacen a la aplicación.*/

app.use(express.json());
/* Express nos permite leer los datos que nos llegan en formato JSON.*/

app.use(cors({origin: 'http://localhost:4200'}));
/* Cors es un middleware que permite que el servidor reciba peticiones 
desde cualquier origen. Esto es útil para permitir que aplicaciones frontend
 (como una que se ejecuta en Angular en el puerto 4200) se comuniquen con el servidor.*/

 // rutas de nuestro servidor

 app.use('/api/empleados',require('./routes/empleado.rutes'));
 // Define la ruta para el recurso empleados
 /*Cuando una solicitud se hace a /api/empleados, se manejará por el módulo 
 empleado.routes. Este módulo debe contener las rutas específicas y los 
 controladores para manejar las operaciones CRUD relacionadas con empleados.*/

 app.listen(app.get('port'), () => { // inicia servidor en el puerto configurado
    console.log('server on port', app.get('port'));
    //imprime mensaje en la consola
 })
