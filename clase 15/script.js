

/* OBJETOS 
let EDADUSUARIO = 21
let nombreusuario = 'pepe'
let dinerousuario = 2122


let producto = {
precio: 100,
nombre: 'pizza' ,
descripcion: 'es un producto a base de harina 000 con levadura y su fecha de vencimiento es el 20/05/2025',
marca: 'utn',
}

console.log(producto.precio)
*/

let persona ={
    nombre: 'alejo',
    edad: 19,
    mejorAmigo:{
        nombre: 'uligod',
        edad: 20,
    }
}
persona.mejorAmigo.nombre = 'pedrito'
persona.nroCelular = '1123456767'

console.log(persona)


         //indice/index:0, 1, 2
const notasTrimestre = [9, 10, 6]

notasTrimestre[1] = 4

/* 
const notas = (
    0; 9,
    1; 10
    2; 6
    length: 3
)
 */

const nombres = [
    'pepe', // 0
    'juan', // 1
    'maria',// 2
    'pedro',// 3
    'valentina', // 4
    'alex', // 5
]
nombres.splice(nombres.indexOf('maria'), 0, 'carlos', 'jose')
// quiero que alex se pase a llamar alexis 
nombres[5] = 'alexis'  //cambiar el nombre


nombres.splice(nombres.indexOf('juan'),1)
nombres.splice(nombres.indexOf('maria'),1)

function eliminarNombre(listaDeNombre, nombreAEliminar){
    listaDeNombre(listaDeNombres.indexOf(nombreAEliminar),1 )
}

//--------prof

/* OBJETOS */

let edadUsuario = 90
let nombreUsuario = 'pepe'
let dineroUsuario = 7000


let celular = {
    nombre: 'Moto g70',
    precio: 500
}
/* Modelo key value */
let usuario = {
    edad: 90,
    nombre: 'pepe',
    dinero: 7000,
    celular: {
        nombre: 'Moto g70',
        precio: 500
    }
}


console.log(usuario.celular.precio)

/* 
Crear un objeto llamado producto que tenga 
precio, nombre, descripcion y marca

vamos a crear un objeto llamado persona, que tenga nombre, edad y mejorAmigo
mejorAmigo debe ser otro objeto que solo tenga nombre y edad
 */

let persona = {
    nombre: 'Alejandro',
    edad: 20,
    mejorAmigo: {
        nombre: 'Firulais',
        edad: 2,
    }
}

const auto = {nombre: 'Honda civic Ex', precio: 6000}


auto.precio = 7000
auto.anio = 2001

/* auto = {nombre: 'Honda civic Ex', precio: 6000} */

console.log(auto)

/* 
holamellamomati

camelCase = holaMeLlamoMati 
snake_case  = hola_me_llamo_mati

Español las funciones las hago con snake_case y las variables en camelCase
Ingles las funciones con camelCase y las variables con snake_case


solicitarYGuardar() // solicitar_y_guardar()
requestAndSave() 
*/
/* 
function requestAndSave(){

}
 */

/* 

cambiar el nombre del mejorAmigo a 'pepe'
y crear la propiedad nroCelular a persona
*/

const persona2 = {
    nombre: 'pepe',
    'nombre completo': 'pepe suarez',
    mejorAmigo: {
        nombre: 'juan'
    }
}

//Crear la propiedad dni
persona2.dni = '12321312321'

persona2.nroCelular = 549112243421
persona2.mejorAmigo.nombre = 'pepe'


/* console.log(persona2.nombre completo) *///esto da error
console.log(persona2['nombre completo']) //caso correcto

