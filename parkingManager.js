const db = require('./database');

const ParkingManager = {
  // Obtener el estado de todas las plazas
  getAllSpots: function(callback) {
    db.query('SELECT * FROM ParkingSpots', function (error, results, fields) {
      if (error) throw error;
      return callback(results);
    });
  },

  // Ocupar una plaza
  occupySpot: function(level, spotNumber, licensePlate, callback) {
    const currentTime = new Date();
    db.query('UPDATE ParkingSpots SET status = "O", license_plate = ?, arrival_time = ? WHERE level = ? AND spot_number = ? AND status = "L"', [licensePlate, currentTime, level, spotNumber], function (error, results, fields) {
      if (error) throw error;
      return callback(results);
    });
  },

  // Liberar una plaza
  freeSpot: function(level, spotNumber, callback) {
    db.query('UPDATE ParkingSpots SET status = "L", license_plate = NULL, arrival_time = NULL WHERE level = ? AND spot_number = ?', [level, spotNumber], function (error, results, fields) {
      if (error) throw error;
      return callback(results);
    });
  },

  // Calcular la tarifa de una plaza ocupada
  calculateFee: function(spotId, callback) {
    db.query('SELECT arrival_time FROM ParkingSpots WHERE id = ?', [spotId], function (error, results, fields) {
      if (error) throw error;
      const arrivalTime = results[0].arrival_time;
      const currentTime = new Date();
      const durationInHours = Math.ceil((currentTime - arrivalTime) / (1000 * 60 * 60));
      const fee = durationInHours * 3; // 3€ por hora
      return callback(fee);
    });
  }
};

module.exports = ParkingManager;

