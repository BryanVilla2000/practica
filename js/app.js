const formulario = document.querySelector("#formulario");
const inputNombre = document.querySelector('#nombre');
const mensajeBienvenida = document.querySelector('#mensaje_Bienvenida');

formulario.addEventListener('submit', function(evento) {
    evento.preventDefault(); 
    const nombre = inputNombre.value.trim();
    
    if (nombre !== "") {
        mensajeBienvenida.textContent = "Bienvenido " + nombre;
    }
});