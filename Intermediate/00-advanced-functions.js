// Funciones avanzadas

// Ciudadanos de primera clase 
// (son entidades que se pueden tratar como cualquier otro valor del lenguaje)
// un valor se puede almacenar en una variable, constante, objeto.
// Un valor podemos pasarlo como parametro a función o retornar en una función
const greet = function (name) {
    console.log(`Hola, ${name}`)
}

greet("Brais")
console.log("\n")

// pasar una función como parámetro
function processGreeting(greetFunction, name) {
    greetFunction(name)
}
processGreeting(greet, "MoureDev")

// funcion puede retornar otra función
function returnGreeting() {
    return greet
}

// llamar a la función retornada
const greet2 = returnGreeting()
greet2("Brais Moure")




// Arrow functions avanzadas
// (no crean su propio contexto, ya que lo heredan del ámbito superior)
// - Retorno implícito
console.log("\n")
const multiply = (a, b) => a * b
console.log(multiply(2, 5))


// - this léxico
const handler = {
    name : "Brais",
    greeting: function() {
        console.log(`Hola, ${this.name}`)
    },
    arrowGreeting: () => {
        console.log(`Hola, ${this.name}`)
    }
}

handler.greeting() // Hola, Brais
handler.arrowGreeting(); // Hola, undefined, porque this no apunta al objeto handler, sino al contexto superior (global en este caso)
//Se debe poner el ; para delimitar la expresión anterior de la siguiente línea


// IIFE (Immediately Invoked Function Expression: Expresión de Función Invocada Inmediatamente)
// Se les invocan en el momento en que se definen
// - IIFE Clásico
(function () {
    console.log("IIFE clásico")
})();
// no se suele meter parametros en IIFE clásicas, ya que se va invocar directamente
// Debemos indicar que es independiente, entonces vamos a ver de que encuentra todo el contexto de lo escrito anteriormente.
(function () {
    console.log("IIFE con arrow function")
})();

// LA FUNCION DE LAS IIFE ES UNA BUENA FORMA DE EJECUTAR UN CODIGO
// CONCRETO Y NO CONTAMIINAR EL ÁMBITO GLOBAL




// Parámetros Rest(...). Cuando no sabemos que parametros puede recibir una funcion,
// podemos usar los parámetros rest, es una sintaxis que va a agrupar todos los argumentos adicionales en un array
function sum(...numbers) { //numbers se recibe como un array
    // console.log(numbers) el anterior ejemplo
    let result = 0
    for(let number of numbers) {
        result += number
    }
    return result
}
// sum(1,2,3,4,5) // [1,2,3,4,5] primer ejemplo
// sum(10, 15) // [10, 15] primer ejemplo
console.log(sum(1,2,3,4,5)) // 15
console.log(sum(10, 15)) // 25

// El parametro rest genera un array automaticamente con los parametros
