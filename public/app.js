// Simulación de entrada de coches
setInterval(() => {
    parkingManager.getFreeSpots((freeSpots) => {
        if (freeSpots.length > 0) {
            const randomIndex = Math.floor(Math.random() * freeSpots.length);
            const selectedSpot = freeSpots[randomIndex];
            const fakeLicensePlate = `XYZ${Math.floor(Math.random() * 999)}`;
            parkingManager.occupySpot(selectedSpot.level, selectedSpot.spot_number, fakeLicensePlate, (result) => {
                console.log(`Coche con matrícula ${fakeLicensePlate} ha ocupado la plaza ${selectedSpot.spot_number} de la planta ${selectedSpot.level}`);
            });
        } else {
            console.log("No hay plazas libres en este momento.");
        }
    });
}, 10000); // Intervalo de 10 segundos

// Simulación de salida de coches
setInterval(() => {
    parkingManager.getOccupiedSpots((occupiedSpots) => {
        if (occupiedSpots.length > 0) {
            const randomIndex = Math.floor(Math.random() * occupiedSpots.length);
            const selectedSpot = occupiedSpots[randomIndex];
            parkingManager.freeSpot(selectedSpot.level, selectedSpot.spot_number, (result) => {
                console.log(`La plaza ${selectedSpot.spot_number} de la planta ${selectedSpot.level} ha sido liberada.`);
            });
        } else {
            console.log("No hay plazas ocupadas en este momento.");
        }
    });
}, 15000); // Intervalo de 15 segundos
