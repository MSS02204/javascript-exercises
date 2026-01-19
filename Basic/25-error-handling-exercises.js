// 1. Captura una excepción utilizando try-catch
let n3 = false
let n2 = false

try {
    console.log("Suma de números", n1+n2)
}
catch (error) {
    console.log("Se ha producido un error: ", error.message)
}
console.log("\n")
// 2. Captura una excepción utilizando try-catch y finally
try {
    console.log("Multiplicación de números", n1*n2)
} catch (error) {
    console.log("Se ha producido un error: ", error.message)
} finally {
    console.log("Se ha multiplicado dos números\n")
}

// 3. Lanza una excepción genérica
let a ="#"
let b = 2
function divide(a, b) {
    if (typeof a !== "number" || typeof b !== "number") {
        // throw new Error("Los parámetros deben ser números")
    }
    return a / b
}
divide(a,b)

// 4. Crea una excepción personalizada
function sumDecimal(a, b) {
    if(Number.isInteger(a) || Number.isInteger(b)) {
        throw new SumDecimalError("Ambos números deben ser decimales", a, b)
    }
    return a + b
}

class SumDecimalError extends Error {
    constructor(message, num1, num2) {
        super(message)
        this.num1 = num1
        this.num2 = num2
    }
    printResult() {
        console.log(this.num1 + " + " + this.num2 +
             " = " + (this.num1 + this.num2)
        )
    }
}

try {
    console.log("Suma de decimales", sumDecimal(3, 2.4))
} catch (error) {
    console.log("Se ha producido un error personalizado aqui: ", error.message)
    error.printResult()
}
console.log("\n")


// 5. Lanza una excepción personlizada
try {
    throw new SumDecimalError("Este es un error personalizado lanzado", 1.5, 2.4)
} catch (error) {
    console.log("Error personalizado capturado: ", error.message)
    error.printResult()
}


// 6. Lanza varias excepciones según una lógica definida
function validateAge(age) {
    if (typeof age !== "number") {
        throw new TypeError("La edad debe ser un número")
    }
    if (age < 0) {
        throw new RangeError("La edad no puede ser negativa")
    }
    if (age < 18) {
        throw new Error("El usuario debe ser mayor de edad")
    }
    return true
}
try {
    // validateAge(-5) // imprime "Se ha producido un erro al validad la edad:  La edad no puede ser negativa"
    // validateAge(17) // imprime "Se ha producido un erro al validad la edad:  El usuario debe ser mayor de edad"
    validateAge("veinte") // imprime "Se ha producido un erro al validad la edad:  La edad debe ser un número"
} catch (error) {
    console.log("Se ha producido un error al validad la edad: ", error.message)
}
console.log("\n")


// 7. Captura varias excepciones en un mismo try-catch
try {
    // let age = 19
    // let age = -2
    let age = "hola"
    validateAge(age)
    console.log("Edad válida: ", age)
} catch (error) {
    if (error instanceof TypeError) {
        console.log("Error de tipo:", error.message)
    } else if (error instanceof RangeError) {
        console.log("Error de rango:", error.message)
    } else if( error instanceof Error) {
        console.log("Error genérico:", error.message)
    } 
}
console.log("\n")

// 8. Crea un bucle que intente transformar a float cada valor y capture y muestre los errores
let values1 = [ "10.5", "20.3", "treinta", "40.7", "cincuenta", "", null, undefined ]
for (let value of values1) {
    try {
        if (value === null || value === undefined || value === "") {
            throw new Error("Valor nulo, vacío o indefinido")
        }
        let number = parseFloat(value) // Convierte el string a un número de punto flotante
        
        if (isNaN(number)) {
            throw new Error("Valor no numérico: " + value)
        }
    } catch (error) {
        console.log("Error al convertir el valor: ", error.message)
    }
}
console.log("\n")


// 9. Crea una función que verifique si un objeto tiene una propiedad específica y lance una excepción personalizada
class PropertyNotFoundError extends Error {
    constructor(message, property) {
        super(message)
        this.property = property
    }
    printProperty() {
        console.log("Propiedad no encontrada: " + this.property) 
    }
}

function checkProperty(obj, prop) {
    if (!obj.hasOwnProperty(prop)) {
        throw new PropertyNotFoundError("La propiedad no existe en el objeto", prop)
    }
    return true
}

try {
    let obj = { name : "Melisa", genre : "Femenino"}
    checkProperty(obj, "age")
} catch (error) {
    console.log("Se ha producido un error de propiedad: ", error.message)
    error.printProperty()
}

console.log("\n")

// 10. Crea una función que realice reintentos en caso de error hasta un máximo de 10
function unreliableFunction() { //unreliable = poco fiable
    if (Math.random() < 0.7) { // 70% de probabilidad de error
        throw new Error("Error aleatorio ocurrido")
    }
    return "Éxito"
}

function retryFunction(func, maxRetries) {
    let attempts = 0
    while( attempts < maxRetries) {
        try {
            let result = func() // intenta ejecutar la función pasada como argumento
            return result
        } catch (error) {
            attempts++
            console.log("Intento " + attempts + " fallido: " + error.message)
        }
    }
    throw new Error("Número máximo de reintentos alcanzado")
}

try {
    let result = retryFunction(unreliableFunction, 10) // máximo 10 reintentos
    console.log("Función ejecutada con éxito: ", result)
} catch (error) {
    console.log("Error final después de reintentos: ", error.message)
}
