// 1. Crea una función que utilice error correctamente
let n1 = -23

function checkPositiveNumber(num) {
    if (num < 0) {
        console.error("Error: El número no es positivo, es: ", num)
    }
}
checkPositiveNumber(n1)


// 2. Crea una función que utilice warn correctamente
function checkStringLengthMinorTo10(str) {
    if (str.length > 10) {
        console.warn("La cadena es demasiado larga de lo permitido: ", str)
    }
}
let txt = "¡Hello pals!"
checkStringLengthMinorTo10(txt)
checkStringLengthMinorTo10("Hola ciudadanos del mundo")
checkStringLengthMinorTo10("Hola")
console.log("\n")

// 3. Crea una función que utilice info correctamente
function showUserInfo(name, email) {
    return console.info(`El nombre del usuario es ${name} y el email es ${email}. \n`)
    
}

let userName = "MSS"
let userEmail = "mss@gmail.com"
console.log("Mostrando información del usuario: ")
showUserInfo(userName, userEmail)

// otra forma de lo anterior
function showInfo(name, email) {
    return `El nombre del usuario es ${name} y el email es ${email}.`
    
}

let user = "MSS"
let email = "mss@gmail.com"
console.log("Mostrando información del usuario: \n", showInfo(user, email))


// 4. Utiliza table
let data1 = [
    {Name: "Anna", Genre:"female", Age: 28},
    {Name: "Marcus", Genre: "male", Age: 35},
    {Name: "Michael", Genre: "male", Age: 20}
]

console.table(data1)

// 5. Utiliza group 
console.group("Información de amigos")
console.log("Nombre: Mathias")
console.log("Distrito: Lima")
console.log("Edad: 20")
console.log("Nombre: Joaquin")
console.log("Distrito: San Miguel")
console.log("Edad: 23")
console.groupEnd()
console.group("Información de conocidos")
console.log("Nombre: Ernesto")
console.log("Distrito: Miraflores")
console.log("Edad: 21")
console.log("Nombre: Carlos")
console.log("Distrito: Barranco")
console.log("Edad: 23")
console.groupEnd()

// 6. Utiliza time
console.time("Bucle 1")
for (let i = 0; i < 1000000; i++) {
}
console.timeEnd("Bucle 1")

// 7. Valida con assert si un número es positivo
let numero1 = -5
console.assert(numero1 > 0, "El número no es positivo") // Muestra el mensaje de error porque la condición es falsa

// 8. Utiliza count
console.count("Contador")
console.count("Contador")
console.count("Contador")

// 9. Utiliza trace
function functionOne() {
    functionTwo()
}

function functionTwo() {
    functionThree()
}

function functionThree() {
    console.trace("Trace de la llamada de funciones")
}

functionOne()

// trace es útil para depurar y ver el flujo de llamadas de funciones en el código.

// 10. Utiliza clear
// console.clear()