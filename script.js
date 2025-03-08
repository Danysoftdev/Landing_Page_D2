function startCountdown() {
    let days = 30;
    let hours = 0;
    let minutes = 0;
    let seconds = 0;
    
    // Actualizar el DOM con los valores iniciales
    document.getElementById("days").textContent = days < 10 ? "0" + days : days;
    document.getElementById("hours").textContent = hours < 10 ? "0" + hours : hours;
    document.getElementById("minutes").textContent = minutes < 10 ? "0" + minutes : minutes;
    document.getElementById("seconds").textContent = seconds < 10 ? "0" + seconds : seconds;
    
    const interval = setInterval(() => {
        // Reducir el tiempo
        if (seconds > 0) {
            seconds--;
        } else {
            seconds = 59;
            if (minutes > 0) {
                minutes--;
            } else {
                minutes = 59;
                if (hours > 0) {
                    hours--;
                } else {
                    hours = 23;
                    if (days > 0) {
                        days--;
                    }
                }
            }
        }
        
        // Actualizar los elementos del DOM
        document.getElementById("days").textContent = days < 10 ? "0" + days : days;
        document.getElementById("hours").textContent = hours < 10 ? "0" + hours : hours;
        document.getElementById("minutes").textContent = minutes < 10 ? "0" + minutes : minutes;
        document.getElementById("seconds").textContent = seconds < 10 ? "0" + seconds : seconds;
        
        // Verificar si el tiempo ha terminado
        if (days === 0 && hours === 0 && minutes === 0 && seconds === 0) {
            clearInterval(interval);
            alert("¡The D2 mall is open now!");
        }
    }, 1000);
}

// Iniciar la cuenta regresiva cuando se carga la página
window.onload = startCountdown;