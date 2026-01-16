// Loops o bucles (sirve para repetir un bloque de código varias veces mientras una condición sea verdadera.
// Son estructuras de control de flujo que permiten ejecutar un bloque de código múltiples veces hasta que
//  se cumpla una condición determinada.)
// Los bucles son esenciales para realizar tareas repetitivas, para automatizar procesos y para manejar
// grandes cantidades de datos y de una manera más eficiente.

// Estructura básica de un bucle for
for (let i = 0; i < 5; i++) {
    console.log("Hola")
}
console.log("\n")

for (let i = 0; i < 5; i++) {
    console.log(`Hola ${i}`)
}

console.log("\n")
for (let i = 1; i <= 5; i++) {
    console.log(`Hola ${i}`)
}


// estructuras que pueden almacenar varios valores
const numbers = [1,2,3,4,5,6,7,8]

for(let i = 0; i <5; i++){
    console.log(`Elemento: ${numbers[i]}`)
}
console.log("\n")

for(let i = 0; i <7; i++){
    console.log(`Elemento: ${numbers[i]}`) // imprime 1,2,3,4,5 y luego undefined dos veces
}
console.log("\n")

for(let i = 0; i < numbers.length; i++){
    console.log(`Elemento: ${numbers[i]}`) // imprime 1,2,3,4,5 y luego undefined dos veces
}
console.log("\n")

 for(let i = 0; i <numbers.length; i++){
    // console.log(numbers) // imprime el array completo 5 veces
    console.log(numbers[i]) // imprime 1, \n 2, \n 3, \n 4, \n 5
 }



// while 
//  let i = 6. En este caso no entra el bucle, ya que i es mayor que 5
let i = 0
 while (i < 5){
    console.log(`Hola ${i}`)
    i++
 }



// bucle infinito
// while (true){
//
// }

console.log("\n")



// do while
i = 0
do {
    console.log(`Hola ${i}`)
    i++
} while(i < 5)
console.log("\n")

i = 6
//se ejecuta una vez y luego verifica la condición para ver si se vuelve a ejecutar o no
do {
    console.log(`Hola ${i}`) // esto se ejecuta al menos una vez, aunque la condición sea falsa. Ocurre la repetición cuando la condición es verdadera
    i++
} while(i < 5)


// for of (sirve para recorrer valores de algo que sea iterable, como una estructura de datos o algun tipo de dato )
myArray = [1,2,3,4]
mySet = new Set(["Brais", "Moure", "mouredev", 37, true, "braismoure@mouredev.com"])
myMap = new Map([
    ["name", "Brais"],
    ["email", "braismoure@mouredev.com"],
    ["age", 37]
])

myString = "¡Hola, JavaScript!"

for (let value of myArray) {
    console.log(value)
}
console.log("\n")

for (let value of mySet) {
    console.log(value)
}
console.log("\n")

for (let value of myMap) {
    console.log(value)
}
console.log("\n")

for (let value of myString) {
    console.log(value)
}


// Buenas practicas
// fijarse que no haya bucles infinitos

// break y continue
for(let i = 0; i < 10; i++) {
    if(i == 5) {
        continue // salta a la siguiente iteración, no imprime el Hola 5
    } else if (i == 7) {
        break // sale del bucle completamente, no imprime nada más
    }

    console.log(`Hola ${i}`)
}