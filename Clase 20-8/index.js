let titulo = document.querySelector('#titulo')
let imagen = document.querySelector('#imagen')
let boton = document.querySelector('#boton')
let boton2 = document.querySelector('#boton2')
let boton3 = document.querySelector('#boton3')

boton.onclick = function () {
    fetch('https://pokeapi.co/api/v2/pokemon-form/157/')
    .then(respuesta => respuesta.json())
    .then(datos => {
        console.log(datos);
        titulo.textContent = datos.name + ' #' + datos.order;
        imagen.src = datos.sprites.back_default;
    })


}

boton2.onclick = function (){
    fetch('https://pokeapi.co/api/v2/pokemon-form/151/?authuser=0')
    .then(respuesta => respuesta.json())
    .then(datos => {
        console.log(datos)
        titulo.textContent = datos.name.id
    })
}

