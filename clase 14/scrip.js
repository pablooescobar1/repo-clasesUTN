/*
quiero un programa que dado el nombre me muestre una a alerta con el nombre 3 veces

dry
let nombre = 'pepe'
 
for se usa cuando queremos repetir algo x cantidad de veces
alert(nombre)
alert(nombre)
alert(nombre)

primer interadir valor inicial, segundo interador el limite que se suma y tercer interador es la suma del primer interador
for (let iterador = 1; iterador <= 3; iterador +1){
    console.log('me ejecuto')
}



for (let iterador = 1; iterador<=10; iterador = iterador + 1 ){
    alert (iterador)
 }
 */ 

   /* 

Solicitar al usuario un numero 3 veces, mostrar al final de las solicitudes un alerta que muestre la sumatoria de los 3 numeros

dime un numero> 3

dime un numero> 4

dime un numero> 3

>>alert> 10


let sumatoria = 0
for ( let iterador = 1; iterador <= 3; iterador = iterador + 1){
    let numero = prompt('ingrese su numero')
    /* validacion del numero, ej: letras, 0 y numeros decimales */
    /*while(numero || isNaN(numero)){
        numero = prompt('error, dato no valido, vuelva a ingresar el numero')
        }
    numero = Number(numero)
    sumatoria = sumatoria + numero

alert('resultado: ' + sumatoria)
*/



//FUNCIONES

/* declaro el funcion */
/* funcion sumar2Mas2(){
    console.log('el resultado de la suma es ' + (2+2)
}
*/
/*
 invocacion a llamada funcion
/* sumar 2Mas2()
sumas2Mas2()
sumar2Mas2()

function sumar(a, b){
    a = a + 1
    console.log('el resultao de la suma es ' +(a + b))
}

sumas(9, 8)
sumar(1, 1)
*/

/* 

calcularIva(precio) => el valor del iva

calcularIva(100) => 21



calcularMinutos(horas) => cantidad de minutos

calcularMinutos(1) => 60

obtenerNumero()


Va a solicitar al usuario un numero y va a validar que el dato ingresado sea un numero

Sino debera volver a solicitarlo

Cuando termine de validar se retornara el numero
*/

/* 
funcion obtenerNumero(){
    let num = prompt('ingrese un numero')
    while(!num || isNaN(num)){
        num = prompt('Error: vuelve a ingresar el numero')
    }
    num = Number(num)
    return num
}
    */
   /*
   String:
   (property) string.length = longitud del string (toma espacios)
   Ej:'pepe' .length = 4
   (method) string.toLowerCase() = pasa a minuscula
   (method) string.toUowerCase() = pasa a mayuscula
   (method) string.trim() = elimina espacios
   (method) string.includes(string_buscando) = verificar si el string buscando esta dentro del string (retorna un boolean)
   (method) string.replaceALL(string_a_replazar, valor nuevo)
   (method) string.repeat(string_a_repetir)
    */
   let contra = 'pepe123'
   contra = contra.toLocaleUpperCase()
   console.log


   ---------prof

   /* 
    Quiero un programa que dado un nombre me muestre una alerta con el nombre 300 veces (300 alertas en total)
*/


//Dry
let nombre = 'pepe'


/* 
alert(nombre)
alert(nombre)
alert(nombre)
*/

//FOR se usa cuando queremos repetir algo x cantidad de veces

/* 


SINTAXIS:
for(let iterador = valor_inicial; limite (mientas mi iterador sea menor o igual a 3); actualizacion )
*/

/* 
for(let iterador = 1; iterador <= 3; iterador = iterador + 1){
    console.log('me ejecuto' + i)
} 
*/



/* 
mostrar por alerta el conteo del 1 al 10 (se deben ejecutar 10 alertas)

for(let iterador = 1; iterador<=10; iterador = iterador +1){
    alert (iterador)
} */


/* 
Solicitar al usuario un numero 3 veces, mostrar al final de las solicitudes un alerta que muestre la sumatoria de los 3 numeros

dime un numero> 3
dime un numero> 4
dime un numero> 3
>>alert> 10

*/
let sumatoria = 0
let cantidad_de_repeticion = prompt('Ingresa cuantos numeros vas a sumar')
while(!cantidad_de_repeticion || isNaN(cantidad_de_repeticion)){
    cantidad_de_repeticion = prompt('ERROR: vuelve a ingresar el numero')
}
for(let iterador = 1; iterador <= cantidad_de_repeticion; iterador = iterador + 1){
    let numero = prompt('ingrese un numero')
    while(!numero || isNaN(numero)){
        numero = prompt('ERROR: vuelve a ingresar el numero')
    }
    numero = Number(numero)
    sumatoria = sumatoria + numero

}

alert('Resultado: ' + sumatoria)


/*  
Solicitar al usuario la cantidad de personas en la clase (numero)
Dependiendo de la cantidad de alumnos de la clase van a solicitar a cada uno el nombre
(
    Si la cantidad de personas de clase es 5, van solicitar 5 nombre
)
Luego de solicitar los nombres mostrarlos en este formato:

'
Lista de alumnos: 
-juan
-pepe
-maria
-carla
-julieta
'
*/


/* alert('lista: \n-pepe\n-juan') */
