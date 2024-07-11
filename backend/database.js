const mongoose = require('mongoose');
const URI = 'mongodb://localhost:27017/empleados_db';

mongoose.connect(URI)
.then(db => console.log('DB is connected'))
.catch(err => console.error('Error en conecxion',err));

mongoose.connection.on('connected', () => {
console.log('Mongoose connected to ' + URI);
});

mongoose.connection.on('error', (err) => {
console.log('Mongoose connection error: ' + err);
});

mongoose.connection.on('disconnected', () => {
console.log('Mongoose disconnected');
});

module.exports = mongoose;