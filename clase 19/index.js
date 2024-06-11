//Document es una variable global de JS que representa como objeto a nuestro html
console.dir(document)

//metodo que nos permite tener un elemento por su id, si lo encuentra lo retorna sino retorna null
/*const titulo = document.getElementById('titulo') //es un HTMLElement
const subtitulo = document.getElementById('subtitulo')
console.dir(titulo)
console.dir(subtitulo)

titulo.innerText = 'pepe'


const caja = document.getElementById('producto')

const producto = {
    precio: 1000,
    nombre: 'tv samasung',
    descripcion: ' lorem ipsum'
}

caja.innerHTML =`
<h1>${producto.nombre} </h1>
<p>${producto.descripcion}</p>
<span>precio: $${producto.precio}</span>
<div>
    <button>comprar</button>
</div>
`

const usuario = document.getElementById('usuario')
 
const user = {
    username: 'Pablo Escobar',
    password: '******6',
    address: 'av siempre viva',
    email:'pepe@gmail.com'

}
usuario.innerHTML =`
    <h2>${user.username}</h1>
    <span>${user.password}</span>
    <input value=${user.address}>
    <input value=${user.email}>
`
*/
 
const historial = [
    {
        id: '001',
        nombre: 'tv samsung',
        fecha: '17/02/2020'
    } ,
    {
        id: '002',
        nombre: 'tv samsung',
        fecha: '31/01/2022'
    } ,
    {
        id: '003',
        nombre: 'tv samsung',
        fecha: '20/11/2026'
    },
     {
        id: '004',
        nombre: 'tv samsung',
        fecha: '02/04/2022'
    }
]