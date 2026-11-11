const tarjeta = document.querySelector('#tarjeta');
const btnAzul = document.querySelector('#btn-azul');
const btnVerde = document.querySelector('#btn-verde');
const btnRojo = document.querySelector('#btn-rojo');
const btnReset = document.querySelector('#btn-reset');

const colorOriginal = window.getComputedStyle(tarjeta).backgroundColor;

btnAzul.addEventListener('click', () => {
    tarjeta.style.backgroundColor = '#007bff';
});

btnVerde.addEventListener('click', () => {
    tarjeta.style.backgroundColor = '#28a745';
});

btnRojo.addEventListener('click', () => {
    tarjeta.style.backgroundColor = '#dc3545';
});

btnReset.addEventListener('click', () => {
    tarjeta.removeAttribute('style');
});