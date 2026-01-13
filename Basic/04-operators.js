// Operadores

// Operadores Aritméticos

let a = 5
let b = 10

console.log(a + b) //Suma
console.log(a - b) //Resta
console.log(a * b) //Multiplicación
console.log(a / b) //División

console.log(a % b) //Módulo
console.log(a ** b) //Exponente

a++ //Incremento
console.log(a)

b-- //Decremento
console.log(b)

// Operadores de Asignación
let myVariable = 2
console.log(myVariable)
myVariable += 2 // myVariable = myVariable + 2
console.log(myVariable) //4

myVariable -= 2 // myVariable = myVariable - 2
console.log(myVariable) //2
myVariable *= 2 // myVariable = myVariable * 2
console.log(myVariable) //4
myVariable /= 2 // myVariable = myVariable / 2
console.log(myVariable) //2
myVariable %= 2 // myVariable = myVariable % 2
console.log(myVariable) //0
myVariable **= 2 // myVariable = myVariable ** 2
console.log(myVariable) //0

// Operadores de Comparación
 console.log(a > b) //Mayor que
 console.log(a < b) //Menor que
 console.log(a >= b) //Mayor o igual que
 console.log(a <= b) //Menor o igual que
 console.log(a == b) //Igualdad
 console.log(a)
 console.log(a == 6) //Igualdad por valor
 console.log(a == "6") //Igualdad por valor con diferente tipo de dato
 console.log(a == a) 
 console.log(a === a) //Igualdad estricta, igualdad por identidad (por tipo y valor)
 console.log(a === 6) //Igualdad estricta, igualdad por identidad (por tipo y valor)
 console.log(a === "6") //false ya que el valor es el mismo, el tipo de dato es diferente. a es number y "6" es string
 console.log(a != 6) //Desigualdad por valor 
 console.log(a !== "6") //Desigualdad estricta por valor y tipo de dato

console.log(0 == false) //true, igualdad por valor
console.log(1 === false) //false, desigualdad por tipo de dato
console.log(2 === false) //false, desigualdad por tipo de dato
console.log(0 == "")
console.log(0 == " ")
console.log(0 == '')
console.log(0 == "Hola")
console.log(0 === "") //false, desigualdad por tipo de dato
console.log(undefined == null) //true, igualdad por valor
console.log(undefined === null) //false, desigualdad por tipo de dato
//console.log("hola" == "Hola") //false, las cadenas de texto son diferentes
//console.log("hola" === "hola") //true, las cadenas de texto son iguales

// Truthy values (valores verdaderos)

// Todos los numeros positivos y negativos menos el cero
// Todas las cadenas de texto menos las vacías
// El boolean true



// Falsy values (valores falsos)

// El número 0
// 0n
// null
// undefined
// NaN
// El boolean false
// Cadenas de texto vacías: '', "", ``


// Operadores Lógicos

// and (&&)
console.log( 5 > 10 && 15 > 20) //false
console.log( 5 < 10 && 15 < 20) //true
console.log( 5 < 10 && 15 > 20) //false, una de las dos condiciones es falsa (si tenemos algun falso, todo sera falso)
console.log( 5 > 10 && 15 > 20 && 30 > 40) //false


// or (||)
console.log( 5 > 10 || 15 > 20) //false
console.log( 5 < 10 || 15 < 20) //true
console.log( 5 < 10 || 15 > 20) //true, una de las dos condiciones es verdadera (si tenemos algun verdadero, todo sera verdadero)
console.log( 5 > 10 || 15 > 20 || 30 > 40) //false

console.log(5 > 10 && 15 > 20 || 30 > 40) //false
console.log(5 > 10 && 15 > 20 || 30 < 40) //true

// not (!)
//console.log(5 > 10 && 15 > 20) es false
//console.log(5 > 10 || 15 > 20) es false

console.log(!(true)) //false
console.log(!(false)) //true
console.log(!(5 > 10 && 15 > 20)) //true
console.log(!(5 > 10 || 15 > 20)) //true


// Operadores ternarios
const isRaining = false

isRaining ? console.log("Está lloviendo") : console.log("No está lloviendo")