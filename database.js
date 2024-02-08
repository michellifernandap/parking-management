const mysql = require('mysql');

const pool = mysql.createPool({
  connectionLimit : 10, // Máximo número de conexiones.
  host     : 'localhost',
  user     : 'root',
  password : 'Hon3997070..',
  database : 'ParkingDB'
});

module.exports = pool;
