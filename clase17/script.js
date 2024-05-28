
// MI CODIGO
/*function login() {
    
    let email = prompt("Ingrese su email:")
    let emailValidacion = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

    if (emailValidacion.test(email)) {
        alert("Correo electrónico registrado correctamente: " + email)
        
    } 
    else {
        alert("El email ingresado es incorrecto, inténtelo de nuevo.");
    }
}

login()


function login(){
    let user_email= prompt('Ingrese su email:');
    while (!(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g.test(user_email))){
        alert('ERROR: no se ingreso un email valido')
        user_email= prompt('Ingrese su email nuevamente:')
    }
    console.log(user_email + ' registrado correctamente');
}
login(); 

function password(){
    let user_pasword= prompt('crea una contraseña:')
    while(!(password.length >= 6 && password != ''))
        alert('ERROR: Contraseña invalida, reintente')

    password = prompt("Ingrese su contraseña")
    
    alert('Contraseña registrada:')


    }




// EL CODIGO CORRECTO


function validarEmail(email) {
    return /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g.test(email)
}
function validarPassword(password) {
    //console.log("cond1", password.length > 6)
    //console.log("cond2", password != password.toLowerCase())
    //console.log("cond3", Boolean(password))
    return (password.length > 6 && password != password.toLowerCase() && Boolean(password))
}


function obtenerEmail() {
    let email = prompt("Bienvenido, por favor ingrese su email: ", 'johndoe@gmail.com')
    while (!validarEmail(email)) {
        email = prompt("Error, por favor ingrese un email valido: ", 'johndoe@gmail.com')
    }
    alert('El email esta registrado: ' + email)
    return email
}
function obtenerPassword() {
    let password = prompt("Ingrese una contrasena de min 6 caracteres y 1 mayuscula: ")
    while (!validarPassword(password)) {
        password = prompt("Error, ingrese una contrasena de min 6 caracteres y 1 mayuscula: ")
    }
    return password
}
function login() {
    let email = obtenerEmail()
    let password = obtenerPassword()
    return { email: email, password: password}
}

console.log(login())





// CODIGO MEJORADO X100


function obetenerDato (data){
    let dato = prompt(data.mensaje)
    while(!data.validacion(dato)){
        dato = prom(data.error)
    }
    return dato
    }

    
    function login() {
        let email = obtenerEmail()
        let password = obtenerPassword()
        return { email: email, password: password}
    }
    */
    //---------------------------- MEJORADO X1000---------------------
function obtenerDato (data){
    let dato = prompt(data.mensaje)
    while(!data.validacion(dato)){
        dato = prompt(data.error)
    }
    return dato
}

const DATOS = {
    EMAIL: {
        mensaje: "Bienvenido, por favor ingrese su email:",
        error: "Error, ingrese su email nuevamente:",
       validacion: validarEmail
    },
    PASSWORD: {
        mensaje: "ingrese una contraseña de min 6 caracteres y 1 mayuscula",
        error: "Error, ingrese una contraseña de min 6 caracteres y 1 mayuscula",
        validacion: validarPassword
    }
}
    
