// Función para redirigir después de un tiempo
function redirectAfterDelay(redirectPage, delay) {
    setTimeout(function() {
        if (redirectPage) {
            window.location.href = redirectPage;
            localStorage.removeItem('redirectPage');
        }
    }, delay);
}

// Al cargar la página, verificar si hay una redirección pendiente
window.onload = function() {
    const redirectPage = localStorage.getItem('redirectPage');
    if (redirectPage) {
        redirectAfterDelay(redirectPage, 6000);
    }
};
