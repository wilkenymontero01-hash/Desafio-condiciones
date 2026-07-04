const input1 = document.getElementById('input1');
const input2 = document.getElementById('input2');
const input3 = document.getElementById('input3');
const btnVerificar = document.getElementById('btn-verificar');
const resultado = document.getElementById('resultado-stickers');

btnVerificar.addEventListener('click', () => {
    const cant1 = Number(input1.value) || 0;
    const cant2 = Number(input2.value) || 0;
    const cant3 = Number(input3.value) || 0;

    const total = cant1 + cant2 + cant3;

    if (total <= 10) {
        resultado.textContent = `Llevas ${total} stickers`;
        resultado.style.color = "#27ae60"; // Color verde si es correcto
    } else {
        resultado.textContent = "Llevas demasiados stickers";
        resultado.style.color = "#c0392b"; // Color rojo si se pasa
    }
});