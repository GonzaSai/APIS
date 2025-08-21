let titulo = document.querySelector('#titulo')
let titulo1 = document.querySelector('#titulo1')
let titulo2 = document.querySelector('#titulo2')
let titulo3 = document.querySelector('#titulo3')
let titulo4 = document.querySelector('#titulo4')
let titulo5 = document.querySelector('#titulo5')
let imagen = document.querySelector('#imagen')
let imagen1 = document.querySelector('#imagen1')
let imagen2 = document.querySelector('#imagen2')
let imagen3 = document.querySelector('#imagen3')
let imagen4 = document.querySelector('#imagen4')
let imagen5 = document.querySelector('#imagen5')
let boton = document.querySelector('#boton')

boton.onclick = function () {
    fetch('https://pokeapi.co/api/v2/pokemon-form/157/')
    .then(respuesta => respuesta.json())
    .then(datos => {
        console.log(datos);
        titulo.textContent = datos.name
        imagen.src = datos.sprites.front_default;
    })
    fetch('https://pokeapi.co/api/v2/pokemon-form/235/')
    .then(respuesta => respuesta.json())
    .then(datos => {
        console.log(datos);
        titulo1.textContent = datos.name
        imagen1.src = datos.sprites.front_default;
    })
    fetch('https://pokeapi.co/api/v2/pokemon-form/55/')
    .then(respuesta => respuesta.json())
    .then(datos => {
        console.log(datos);
        titulo2.textContent = datos.name
        imagen2.src = datos.sprites.front_default;
    })
    fetch('https://pokeapi.co/api/v2/pokemon-form/341/')
    .then(respuesta => respuesta.json())
    .then(datos => {
        console.log(datos);
        titulo3.textContent = datos.name
        imagen3.src = datos.sprites.front_default;
    })
    fetch('https://pokeapi.co/api/v2/pokemon-form/480/')
    .then(respuesta => respuesta.json())
    .then(datos => {
        console.log(datos);
        titulo4.textContent = datos.name
        imagen4.src = datos.sprites.front_default;
    })
    fetch('https://pokeapi.co/api/v2/pokemon-form/414/')
    .then(respuesta => respuesta.json())
    .then(datos => {
        console.log(datos);
        titulo5.textContent = datos.name
        imagen5.src = datos.sprites.front_default;
    })
}