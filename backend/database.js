const mongoose = require('mongoose');
const URI = 'mongodb://localhost:27017/empleados_db';

mongoose.connect(URI)
.then(db => console.log('DB is connected'))
.catch(err => console.error('Error en conecxion',err));

module.exports = mongoose;