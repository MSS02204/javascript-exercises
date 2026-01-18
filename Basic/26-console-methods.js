// Console

// log 
console.log("¡Hola, JavaScript!")


// error
console.error("Este es un mensaje de error.")
console.error("Error al conectarse a la base de datos", new Error("Conexión fallida."))


// warn
console.warn("Este es un mensaje de advertencia.")


// info
console.info("Este es un mensaje de información adicional.")



// table
let data = [
    ["Brais", 37],
    ["Sata", 21]
]

console.table(data)
data = [
    {name : "Brais", age: 37},
    {name : "Sata", age: 21}
]

console.table(data)



//group
console.group("Usuarios")
console.log("Nombre: Brais")
console.log("Edad: 37")
console.groupEnd() //termina el grupo anterior

console.log("ahjsdsahd") // ya no está en el anterior grupo, sino en uno nuevo



// time
console.time("Tiempo de ejecución 2")
for (let i = 0; i < 10000; i++) {
    
}


console.time("Tiempo de ejecución 1")
for (let i = 0; i < 10000; i++) {
    
}

console.timeEnd("Tiempo de ejecución 2") //muestra el tiempo que ha pasado desde el time hasta el timeEnd del label "Tiempo de ejecución 1".
// console.timeEnd("Tiempo de ejecuciómmn") // Error: No existe ese label. Tienes que darle el mismo txt que en time para que sepa cuál es el time que quieres finalizar.


for (let i = 0; i < 10000; i++) {
    
}


console.timeEnd("Tiempo de ejecución 1") 



// assert  (muestra un mensaje de error si lo que evalue es falso) ESTO SE USA MUCHO EN TESTS
let age = 17
console.assert(age >= 18, "El usuario debe ser mayor de edad") // Imprime Assertion failed: El usuario debe ser mayor de edad



//count
//se aumenta el contador cada vez que se llama con el mismo label, si es diferente empieza uno nuevo
console.count("Click")
console.count("Click")
console.count("Click")
// console.count("Clicks") // Nuevo contador, ya que el label es diferente
console.countReset("Click")
console.count("Click")



// trace
function funcA() {
    funcB()
}

function funcB() {
    console.trace("Seguimiento de la ejecución")
    
}

funcA()



// clear
//console.clear() // Limpia la consola