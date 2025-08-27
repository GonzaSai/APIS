let p1 = document.querySelector('#p1')
let bo1 = document.querySelector('#bo1')

bo1.onclick = function () {
    fetch('https://pokeapi.co/api/v2/pokemon?limit=20')
    .then(respuesta => respuesta.json())
    .then(datos => {
        console.log(datos.results);
        for (let i = 0; i < datos.results.length; i++) {
            p1.innerHTML =  p1.textContent + '' + datos.results[i].name;
        
        }
    })
    



}