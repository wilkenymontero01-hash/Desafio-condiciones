const imagen = document.getElementById('imagen-borde');

imagen.addEventListener('click', () => {
    // Verificamos si ya tiene la clase del borde
    if (imagen.classList.contains('con-borde')) {
        imagen.classList.remove('con-borde');
    } else {
        imagen.classList.add('con-borde');
    }
});