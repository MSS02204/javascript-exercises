// 1. Escribe un comentario en una línea
//hola, soy nueva developer.

// 2. Escribe un comentario en varias líneas

/* 
 Soy nueva developer.
 Estoy aprendiendo JavaScript.
 Me gusta programar.
*/

// 3. Declara variables con valores asociados a todos los datos de tipo primitivos
let myFirstName = "Melisa"
let myAge = 23
let isProgrammer = true
let myUndefinedValue // undefined
let myNullValue = null
let mySymbolValue = Symbol("uniqueIdentifier")
let myBigIntValue = BigInt(1234567890123456789012345678901234567890)


// 4. Imprime por consola el valor de todas las variables 
console.log(myFirstName)
console.log(myAge)
console.log(isProgrammer)
console.log(myUndefinedValue)
console.log(myNullValue)
console.log(mySymbolValue)
console.log(myBigIntValue)


// 5. Imprime por consola el tipo de todas las variables
console.log(typeof myFirstName)
console.log(typeof myAge)
console.log(typeof isProgrammer)
console.log(typeof myUndefinedValue)
console.log(typeof myNullValue)
console.log(typeof mySymbolValue)
console.log(typeof myBigIntValue)

// 6. A continuación, modifica los valores de las variables por otros del mismo tipo 

myFirstName = "Melissa"
myAge = 13
isProgrammer = false
myUndefinedValue // undefined
myNullValue = null
mySymbolValue = Symbol("onlyId")
myBigIntValue = BigInt(4102832783283728372378279783787312833232)

// 7. A continuación, modifica los valores de las variables por otros de distinto tipo
myFirstName = 23
myAge = "Melissa"
isProgrammer = null
myUndefinedValue = "hola"
myNullValue = true
mySymbolValue = BigInt(1234567890)
myBigIntValue = Symbol("onlyIdentifier")


// 8. Declara constantes con valores asociados a todos los tipos de datos primitivos
const num = 10
const str = "Hola mundo"
const isSafe = false
const undef = undefined
const state = null
const uniqueId = Symbol("id")
const bigNumber = 9007199254741991n

// 9. A continuación, modifica los valores de las constantes
// num = 50
// str = "Adiós mundo"
// isSafe = true
// undef = "ahora tiene valor"
// state = "activo"
// uniqueId = Symbol("nuevoId")
// bigNumber = 12345678901234567890n

// 10. Comenta las líneas que produzcan algún tipo de error al ejecutarse
// console.log(num)
//console.log(str)
// console.log(isSafe)
// console.log(undef)
// console.log(state)
// console.log(uniqueId)
// console.log(bigNumber)