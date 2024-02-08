const express = require('express');
const parkingManager = require('./parkingManager');
const app = express();
const port = 3000;

app.use(express.json()); // Para parsear application/json
app.use(express.static('.'));

app.get('/', (req, res) => {
  res.send('Bienvenido al sistema de gestión de aparcamiento');
});
 
app.get('/getSpots', (req, res) => {
  const floor = req.query.floor; // Obtener el parámetro 'floor' de la petición
  parkingManager.getSpotsByFloor(floor, (data) => {
      res.json(data); // Devolver los datos como JSON
  });
});

app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});

const mysql = require('mysql');

// Configuración de la conexión a la base de datos
const dbConnection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'Hon3997070..',
  database : 'ParkingDB'
});

// Conectar a la base de datos
dbConnection.connect((err) => {
  if (err) throw err;
  console.log('Conectado exitosamente a la base de datos.');
});

