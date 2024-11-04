window.onload = function() { 
    const params = new URLSearchParams(window.location.search);
    const redirectPage = params.get('redirect');

    if (redirectPage) {
        let countdown = 3; // Iniciar el conteo en 3 segundos
        const countdownElement = document.getElementById('countdown');

        const interval = setInterval(function() {
            countdown--;
            countdownElement.textContent = countdown;
            if (countdown <= 0) {
                clearInterval(interval);
                window.location.href = redirectPage;
            }
        }, 1000); // Actualiza cada segundo
    }
};
