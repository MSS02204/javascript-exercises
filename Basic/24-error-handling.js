// Excepción

// Produce una excepción
// let myObject
// console.log(myObject.email) // TypeError: Cannot read properties of undefined (reading 'email')


// Captura de errores

// try-catch
try {
    // código que intenta ejecutar
    // console.log(myObject) // undefined
    console.log(myObject.email)
    console.log("Finaliza la ejecución sin errores")
} catch {
    // Bloque de error
    console.log("Se ha producido un error")
}



// Captura del error
try {
    console.log(myObject.email)
} catch (error) {
    console.log("Se ha producido un error:", error.message) // Imprime el mensaje del error Se ha producido un error: myObject is not defined)
}



// finally
try {
    console.log(myObject.email)
} catch (error) {
       console.log("Se ha producido un error:", error.message) 
} finally {
    console.log("Este código se ejecuta siempre")
}



// No está soportado (te bota error ya que no hay ninguno que lo atrape, ningun catch)
// try {
//     console.log(myObject.email)
// } finally {
//     console.log("Este código se ejecuta siempre")
// }



// Lanzar errores
// throw
// throw new Error("Se ha producido un error") // Lanza un error con el mensaje especificado

console.log("\n")

function sum(a, b) {
    // if (typeof a === "number") {
    //     console.log("Es un número")
    // }
    if (!(Number.isInteger(a))) { //NaN(Not a Number, COMO TIPO DE DATO) es un valor que no es un número
        console.log("No es un número")
    }
    if (!(a instanceof Number) && !(b instanceof Number)) {
        console.log("No se pueden sumar estas propiedades")
    }
    return a + b
}

console.log(sum(5,10)) // 15
console.log(typeof 5) // number
console.log("\n")

// Errores del sistema (Error, TypeError, ReferenceError, RangeError, SyntaxError, etc.)
function sumIntegers(a,b) {
    if (typeof a !== "number" || typeof b !== "number") {
        throw new TypeError("Esta operación sólo suma números")
    }
    if (!Number.isInteger(a) || !Number.isInteger(b)) {
        throw new Error("Esta operación sólo suma números enteros")
    }
    if ( a == 0 || b == 0) {
        throw new SumZeroIntegerError("Se está intentando sumar cero", a, b)
    }
    return a + b
}

try {
console.log(sumIntegers(5,10))
// console.log(sumIntegers(5.5,10))
console.log(sumIntegers("5",10))
// console.log(sumIntegers(5,"10"))
// console.log(sumIntegers("5","10"))
} catch(error) { // el catch se va a ejecutar en donde ocurra el primer error(en el caso que hayan mas)
    console.log("Se ha producido un error:", error.message) // Imprime el mensaje del error "Se ha producido un error: Esta operación sólo suma números enteros")
}
console.log("\n")



// Capturar varios tipos de errores
try {
    // console.log(sumIntegers(5.5,10))
    console.log(sumIntegers("5",10))
} catch (error) {
    if (error instanceof TypeError) {
        console.log("Se ha producido un error de tipo:", error.message)
    } else if (error instanceof Error) {
        console.log("Se ha producido un error:", error.message)
    }
}
console.log("\n")

// Crear excepciones personalizadas

class SumZeroIntegerError extends Error {
    constructor(message,a,b) {
        super(message)
        this.a = a
        this.b = b
    }

    printNumbers() {
        console.log(this.a, " + ", this.b)
    }
}

try {
    console.log(sumIntegers(0,10))
} catch (error) {
    console.log("Se ha producido un error personalizado:", error.message)
    error.printNumbers()
}
