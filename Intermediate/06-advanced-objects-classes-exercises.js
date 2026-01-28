// 1. Agrega una función al prototipo de un objeto
let student = {
    name: "Melisa",
    university: "UPC",
    year() {
        console.log(`Estoy en el tercer año de la universidad en ${this.university}`)
    }
}
console.log(student)
student.year()
student.country = function() {
    console.log(`La universidad ${this.university} está en Perú`)
}
console.log(student)
student.country()
console.log("\n")


// 2. Crea un objeto que herede de otro
let marketingStudent = Object.create(student)
marketingStudent.age = 21
marketingStudent.name = "Ana"
marketingStudent.university = "ESAN"

console.log(marketingStudent.age) // Imprime 21
console.log(marketingStudent.name) // Imprime Ana
console.log(marketingStudent.university) // Imprime ESAN
console.log(student) // Imprime { name: 'Melisa', university: 'UPC', year: [Function: year], country: [Function (anonymous)] }
console.log(marketingStudent) // Imprime  { age: 21, name: 'Ana', university: 'ESAN' }
console.log("\n")


// 3. Define un método de instancia en un objeto
function Plane(brand, seats) {
    this.brand = brand
    this.seats = seats
}

Plane.prototype.info = function() {
    console.log(`Este vehículo es de la marca ${this.brand} y tiene ${this.seats} asientos`)
}

let myNewPlane = new Plane("Boeing", 180)
myNewPlane.info() // Imprime Este vehículo es de la marca Boeing y tiene 180 asientos
console.log("\n")

 
// 4. Haz uso de get y set en un objeto
let rectangle = {
    width: 10, 
    height: 5,
    get area() {
        return this.width * this.height
    },
    set area(value) {
        let side = Math.sqrt(value)
        this.width = side
        this.height = side
    }
}

console.log(rectangle)
console.log(rectangle.width) // Imprime 10
console.log(rectangle.height) // Imprime 5
console.log(rectangle.area) // Imprime 50

rectangle.area = 64 // Establece el área a 64
console.log(rectangle.area) // Imprime 64
console.log(rectangle.width) // Imprime 8
console.log(rectangle.height) // Imprime 8
console.log("\n")


// 5. Utiliza la operación assign en un objeto
let obj1 = { brand: "Toyota", model: "Corolla" }
let obj2 = {year: 2020, color: "red" }

let unionObj = Object.assign(obj1, obj2)
console.log(unionObj) // Imprime { brand: 'Toyota', model: 'Corolla', year: 2020, color: 'red' }

// Otra forma
const persona = { nombre: "Juan", edad: 25}
const direccion = { ciudad: "Lima", pais: "Perú"}

Object.assign(persona, direccion)
console.log(persona) // Imprime { nombre: 'Juan', edad: 25, ciudad: 'Lima', pais: 'Perú' }
console.log("\n")


// 6. Crea una clase abstracta
class Exam {
    constructor(subject) {
        if(new.target === Exam) {
            throw new Error("No se puede instanciar una clase abstracta")
        } 
        this.subject = subject
    }
    time() {
        throw new Error("Este método debe ser implementado por la subclase")
    }
}

// Otro ejemplo
class Animal {
    constructor() {
        if (new.target === Animal) {
            throw new Error("No se puede instanciar la clase abstracta Animal")
        }
    }

    hacerSonido() {
        throw new Error("Método 'hacerSonido()' debe ser implementado")
    }
}

class Perro extends Animal {
    hacerSonido() {
        console.log("Guau Guau")
    }
}
const miPerro = new Perro()
miPerro.hacerSonido() // Imprime Guau Guau
// const animal = new Animal() // Error: No se puede instanciar la clase abstracta Animal
console.log("\n")

// Esto provoca error
// let newExam = new Exam("Math") // Imprime Error
// console.log(newExam)

// 7. Utiliza polimorfismo en dos clases diferentes
class MathExam extends Exam {
    time() {
        console.log("El examen de matemáticas dura 2 horas")
    }
}

class HistoryExam extends Exam {
    time() {
        console.log("El examen de historia dura 1 hora y media")
    }
}

let newMathExam = new MathExam("Math")
console.log(newMathExam)
newMathExam.time() // Imprime El examen de matemáticas dura 2 horas

let newHistoryExam = new HistoryExam("History")
newHistoryExam.time() // Imprime El examen de historia dura 1 hora y media
console.log("\n")


// 8. Implementa un Mixin
const PlusPointsMixin = {
    points () {
        console.log(`Obtiene puntos extras para la evaluación final por aprobar el examen de ${this.subject}`)
    }
}

class EnglishExam extends Exam {}
class LanguageExam extends Exam {}

Object.assign(EnglishExam.prototype, PlusPointsMixin)
Object.assign(LanguageExam.prototype, PlusPointsMixin)

const newEnglishExam = new EnglishExam("English")
console.log(newEnglishExam)
newEnglishExam.points() // Imprime Obtiene puntos extras para la evaluación final por aprobar el examen de English


const newLanguageExam = new LanguageExam("Language")
console.log(newLanguageExam)
newLanguageExam.points() // Imprime Obtiene puntos extras para la evaluación final por aprobar el examen de Language
console.log("\n")


// Otra forma
const volador = {
    volar() {
        console.log(`${this.nombre} está volando`)
    }
}

const nadador = {
    nadar() {
        console.log(`${this.nombre} está nadando`)
    }
}

class Pato {
    constructor(nombre) {
        this.nombre = nombre
    }
}

Object.assign(Pato.prototype, volador, nadador)

const pato = new Pato("Donald")
pato.volar() // Imprime Donald está volando
pato.nadar() // Imprime Donald está nadando
console.log("\n")


// 9. Crea un Singleton
class Database {
    constructor(title) {
        if(Database.instance) {
            return Database.instance
        }
        this.title = title
        Database.instance = this
    }
}

const db1 = new Database("SparkHub")
const db2 = new Database("Codebase") // No se crea una nueva instancia, se retorna la existente "SparkHub"
console.log(db1 === db2) // Imprime true
console.log(db1) // Imprime Database { title: 'SparkHub' }
console.log(db1.title) // Imprime SparkHub
console.log(db2) // Imprime Database { title: 'SparkHub' }
console.log(db2.title) // Imprime SparkHub
console.log("\n")


// 10. Desarrolla un Proxy
const proxyHandler = {
    get(target, property) {
        console.log(`Accediendo a la propiedad ${property}`)
        return target[property]
    },
    set(target, property, value) {
        if(property === "price" && 0 > value) {
            throw new Error("El precio no puede ser negativo, el libro vale más de 0")
        }
        target[property] = value
    }
}

class Book {
    constructor(price) {
        this.price = price
    }
}

const myBook = new Proxy(new Book(50), proxyHandler)
console.log(myBook)   // Imprime Proxy { price: 50 }
console.log(myBook.price) // Imprime Accediendo a la propiedad price \n 50
myBook.price = 30 // Establece el precio a 30
console.log(myBook.price) // Imprime Accediendo a la propiedad price \n 30
// Da error
// myBook.price = -10 // Imprime El precio no puede ser negativo, el libro vale más de 0

