const select1 = document.getElementById('select1');
const select2 = document.getElementById('select2');
const select3 = document.getElementById('select3');
const btnIngresar = document.getElementById('btn-ingresar');
const mensaje = document.getElementById('mensaje-password');

btnIngresar.addEventListener('click', () => {
    const password = select1.value + select2.value + select3.value;

    if (password === '911') {
        mensaje.textContent = "password 1 correcto";
        mensaje.style.color = "#27ae60";
    } else if (password === '714') {
        mensaje.textContent = "password 2 es correcto";
        mensaje.style.color = "#27ae60";
    } else {
        mensaje.textContent = "password incorrecto";
        mensaje.style.color = "#c0392b";
    }
});