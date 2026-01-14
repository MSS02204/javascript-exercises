// Strings 

// Concatenación
let myName = "Brais"
let greeting = "Hola, " + myName + "!"
console.log(greeting)
console.log(typeof greeting)

// Longitud
console.log(greeting.length)

// Acceso a caracteres
console.log(greeting[0]) // H
console.log(greeting[1]) // o
console.log(greeting[12]) // undefined
console.log(greeting[11]) // !


// Métodos comunes
console.log(greeting.toUpperCase()) // HOLA, BRAIS!
console.log(greeting.toLowerCase()) // hola, brais!
console.log(greeting.indexOf("Brais")) // 6, el índice donde empieza "Brais" de todo el string greeting
console.log(greeting.indexOf("Hola")) // 0, el índice donde empieza "Hola" de todo el string greeting
console.log(greeting.indexOf("MoureDev")) // -1, no se encuentra "MoureDev" en el string greeting
console.log(greeting.indexOf("z")) // -1, no se encuentra la letra "z" en el string greeting
console.log(greeting.includes("Hola")) // true, "Hola" se encuentra en el string greeting
console.log(greeting.includes("Brais")) // true, "Brais" se encuentra en el string greeting
console.log(greeting.includes("MoureDev")) // false, "MoureDev" no se encuentra en el string greeting

console.log(greeting.slice(0,10)) // Hola, Bra  (del 0 al 9 porque el 10 no se incluye)
console.log(greeting.replace("Brais", "MoureDev")) // Hola, MoureDev!. Reemplazar texto


// Template literals (plantillas literales)
let message = `Hola, este 
es mi 
curso de 
JavaScript`

console.log(message) // Hola, este
                     // es mi
                     // curso de
                     // JavaScript


 
let email = "braismoure@mouredev.com"

// interpolacion de variables
console.log(`Hola, ${myName}! Tu email es ${email}.`) // Hola, Brais ! (interpreta la variable)
