document.getElementById('firstFloor').addEventListener('click', function() {
    // Llamada a la API para obtener las plazas de la primera planta
    fetch('/getSpots?floor=1')
        .then(response => response.json())
        .then(data => {
            // Procesar y mostrar los datos
            console.log(data);
        })
        .catch(error => {
            console.error('Error:', error);
        });
});

// Similar para el segundo botón...
