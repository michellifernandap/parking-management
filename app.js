const express = require('express');
const parkingManager = require('./parkingManager');
const path = require('path');
const app = express();
const port = 3000;

app.use(express.json()); // Para parsear application/json
app.use(express.static(path.join(__dirname, 'public'))); // Asegúrate de que esto esté correcto


app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html')); // Actualiza esta línea también si es necesario
});

app.get('/getSpots', (req, res) => {
  const floor = req.query.floor; // Este parámetro debería ser '1' o '2'
  parkingManager.getSpotsByFloor(floor, (data) => {
    res.json(data);
  });
});

app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});

// Simulación de entrada y salida de coches
// ... (aquí iría tu código de simulación)
