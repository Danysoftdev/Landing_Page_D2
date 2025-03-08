function startCountdown() {
    let days = 30;
    let hours = 0;
    let minutes = 0;
    let seconds = 0;

    const interval = setInterval(() => {
        console.clear(); // Borra la consola para actualizar el tiempo
        console.log(`${days} días / ${hours} horas / ${minutes} minutos / ${seconds} segundos`);

        if (days === 0 && hours === 0 && minutes === 0 && seconds === 0) {
            clearInterval(interval);
            console.log("¡Tiempo finalizado!");
            return;
        }

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
                        days = 29
                    }
                }
            }
        }
    }, 1000);
}

startCountdown();