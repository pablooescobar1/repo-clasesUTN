

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




