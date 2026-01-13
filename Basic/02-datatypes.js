// Tipos de datos primitivos en JavaScript

// Cadena de texto (String)
//name es una propiedad reservada en javascript, por lo que es mejor usar otro nombre como myName
let myName = "Brais Moure"
let alias = 'MoureDev'
let email = `braismoure@mouredev.com`

// Números (number)
let age = 37 // Entero
let height = 1.77 // Decimal

// Booleanos (boolean)
let isTeacher = true
let isStudent = false

// Undefined (significa que la variable la hemos declarado pero no le hemos asignado ningún valor)
let undefinedValue
console.log(undefinedValue) // undefined

// Null
let nullValue = null // null representa la ausencia intencional de cualquier valor

// Symbol (se usa para crear identificadores únicos)
let mySymbol = Symbol("mysymbol")
console.log(mySymbol) // Symbol(mysymbol)

// BigInt (para representar enteros muy grandes)
let myBigInt = BigInt(900719925789345897438573489747419910234793284723398475)
console.log(myBigInt) // 900719925789345897438573489747419910234793284723398475
let myBigInt2 = 900719925789345897438573489747419910234793284723398475n
console.log(myBigInt2) // 900719925789345897438573489747419910234793284723398475

// Mostramos los tipos de datos en la consola
console.log(typeof myName) // string
console.log(typeof alias) // string
console.log(typeof email) // string

console.log(typeof age) // number
console.log(typeof height) // number

console.log(typeof isTeacher) // boolean
console.log(typeof isStudent) // boolean

console.log(typeof undefinedValue) // undefined

console.log(typeof nullValue) // object (esto es un comportamiento histórico de JavaScript), objeto de tipo null

console.log(typeof mySymbol) // symbol

console.log(typeof myBigInt) // bigint