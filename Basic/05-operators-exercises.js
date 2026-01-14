// 1. Crea una variable para cada operación aritmética

let suma = 5 + 3
let resta = 10 - 4
let multiplicacion = 6 * 7
let division = 25 / 5
let modulo = 10 % 3 
let exponente = 2 ** 5

console.log(suma)
console.log(resta)
console.log(multiplicacion)
console.log(division)
console.log(modulo)
console.log(exponente)

suma++
resta--

console.log("Suma:", suma)
console.log("Resta:", resta)


// 2. Crea una variable para cada tipo de operación de asignación, que haga uso
// de las variables utilizadas para las operaciones aritméticas
suma+=2
console.log(suma)
resta-=4
console.log(resta)
multiplicacion*=2
console.log(multiplicacion)
division/=2
console.log(division)
modulo%=6
console.log(modulo)
exponente**=4
console.log(exponente)


// 3. Imprime 5 comparaciones verdaderas con diferentes operadores de comparación
console.log("Hola" == "Hola")
console.log( 20 > 15)
console.log(2 <= 2)
console.log(2 != (2+1))
console.log(3 === 3)


// 4. Imprime 5 comparaciones falsas con diferentes operadores de comparación
console.log("Hola" == "hola")
console.log( 10 > 15)
console.log(5 <= 2)
console.log(2 != (1+1))
console.log(3 === 1)

// 5. Utiliza el operador lógico and
let result = 12 > 8 && 10 > 2
console.log(result)

// 6. Utiliza el operador lógico or
let result2 = 5 < 3 || 7 > 12
console.log(result2)

// 7. Combina ambos operadores lógicos
let result3 = (12 < 20 && 3 > 5 || 8 < 12 && 7 == 7)
console.log(result3)    

// 8. Añade alguna negación
let neg1 = !(2 + 2 > 3)
console.log(neg1)

// 9. Utiliza el operador ternario
let edad = 15
console.log(edad > 18 ? "Ya es un adulto" : "No es un adulto")

let ternario = (5 > 3) ? "Es verdadero" : "Es falso";  // Si (5 > 3) es verdadero, el resultado será "Es verdadero"
console.log(ternario);    // "Es verdadero"

// 20. Combina operadores aritmeticos, de comparación y lógicos
let n1 = 29
let n2 = 10

console.log((n1 + n2 > 20) && (n1/n2 > 2))

let combinacionCompleta = (10 + 5) > 12 && (20 / 4) === 5 || (7 % 3) === 1;  // (10 + 5) > 12 es verdadero, (20 / 4) === 5 es verdadero, (7 % 3) === 1 es verdadero
console.log(combinacionCompleta);  // Verdadero