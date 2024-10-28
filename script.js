document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('.contact-form');

    form.addEventListener('submit', function (e) {
        e.preventDefault(); // Evitar el envío del formulario

        const nombre = document.getElementById('nombre').value.trim();
        const email = document.getElementById('email').value.trim();
        const mensaje = document.getElementById('mensaje').value.trim();

        if (nombre === '' || email === '' || mensaje === '') {
            alert('Por favor, completa todos los campos.');
            return;
        }

        if (!validateEmail(email)) {
            alert('Por favor, ingresa un email válido.');
            return;
        }

        // Aquí puedes agregar la lógica para enviar el formulario, como hacer una solicitud AJAX
        alert('Mensaje enviado. ¡Gracias por contactarnos!');

        // Restablecer el formulario
        form.reset();
    });

    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(String(email).toLowerCase());
    }
});
