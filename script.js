// script.js

// Esta función se ejecuta al cargar la página index.html
window.onload = function() {
    const redirectPage = localStorage.getItem('redirectPage');
    if (redirectPage) {
        setTimeout(() => {
            window.location.href = redirectPage;
            localStorage.removeItem('redirectPage'); // Limpiar el valor después de usarlo
        }, 6000);
    }
};

// Redirige desde las páginas de política y eliminación de datos
if (document.title.includes("Política de Privacidad")) {
    localStorage.setItem('redirectPage', 'politica_privacidad.html');
    window.location.href = "index.html";
} else if (document.title.includes("Instrucciones para la Eliminación de Datos")) {
    localStorage.setItem('redirectPage', 'instrucciones_eliminacion_datos.html');
    window.location.href = "index.html";
}
