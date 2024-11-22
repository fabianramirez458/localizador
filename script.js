// Mostrar la fecha y hora
function updateDateTime() {
    const now = new Date();
    const dateElement = document.getElementById('date');
    const timeElement = document.getElementById('time');

    dateElement.textContent = `Fecha: ${now.toLocaleDateString()}`;
    timeElement.textContent = `Hora: ${now.toLocaleTimeString()}`;
}

// Obtener la ubicación del usuario
function fetchLocation() {
    const locationElement = document.getElementById('location');

    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
            (position) => {
                const { latitude, longitude } = position.coords;
                locationElement.textContent = `Ubicación: Lat ${latitude.toFixed(2)}, Lng ${longitude.toFixed(2)}`;
            },
            () => {
                locationElement.textContent = 'Ubicación: No disponible (permiso denegado)';
            }
        );
    } else {
        locationElement.textContent = 'Ubicación: No soportada en este navegador';
    }
}

// Actualizar hora y fecha cada segundo
setInterval(updateDateTime, 1000);

// Cargar ubicación y mostrar hora y fecha al iniciar
document.addEventListener('DOMContentLoaded', () => {
    updateDateTime();
    fetchLocation();
});
