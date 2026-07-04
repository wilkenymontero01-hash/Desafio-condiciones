const imagen = document.getElementById('imagen-borde');

imagen.addEventListener('click', () => {
    
    if (imagen.classList.contains('con-borde')) {
        imagen.classList.remove('con-borde');
    } else {
        imagen.classList.add('con-borde');
    }
});