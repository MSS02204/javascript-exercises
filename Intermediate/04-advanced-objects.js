// Objetos avanzados

// Prototipos y Herencia 

// Prototipos (a dia de hoy no es tan habitual, pero antes estuvo muy presente en JS)
// un mecanismo con el cual los objetos pueden heredar prpoiedades y funciones de otros objetos
// cualquier objeto que se crea en JS tiene un prototipo asociado
// propiedad Prototype que nos permite acceder a esas propiedades y metodos entre los diferentes objetos
let person = {
    name: "Brais",
    age: 37,
    greet() {
        console.log(`Hola, soy ${this.name}`)
    }
}

console.log(person.__proto__) // accedemos al prototipo del objeto person
console.log(Object.getPrototypeOf(person)) // otra forma de acceder al prototipo;


person.sayAge = function() { // función anónima 
    console.log(`Tengo ${this.age} años`)
} 
console.log(person) // Imprime {name: 'Brais', age: 37, greet: [Function: greet], sayAge: [Function (anonymous)]}
person.sayAge()
console.log("\n")



// Herencia (basada en prototipos, asi es en JS)
// let programmer = Object.create(person.__proto__) // Error: el prototipo es algo que tienes interno, no es algo
// al que tu puedas acabar accediento a ello
console.log("----------")
let programmer = Object.create(person) // Creamos un nuevo objeto que hereda del objeto person
programmer.language = "JavaScript"
programmer.name = "MoureDev" // Sobrescribimos la propiedad name del objeto programmer
console.log(person.name) // Imprime Brais (person tiene la propiedad name)
console.log(person.language) // Imprime undefined (person no tiene la propiedad language)

console.log(programmer) // Imprime { language: 'JavaScript' } (programmer tiene la propiedad language)

// person.name = "MoureDev" // Modificamos la propiedad name de person
// console.log(programmer) // Imprime {}
console.log(programmer.name) // Imprime Brais (hereda la propiedad name de person)
console.log(programmer.age) // Imprime 37 (hereda la propiedad age de person)
console.log(programmer.language) // Imprime JavaScript (programmer tiene la propiedad language)
programmer.greet() // Hola, soy Brais (hereda el método greet de person)
programmer.sayAge() // Tengo 37 años



// Métodos estáticos y de instancia
function Person(name, age) {
    this.name = name
    this.age = age
}

Person.prototype.greet = function() {
    console.log(`Hola, soy ${this.name}`)
}
                 // ESTE LADO DERECHO ES LA INSTANCIA
let new_person = new Person("Brais", 37)
// console.log(new_person.prototype) // undefined, no podemos acceder al prototipo   de esta forma
// console.log(new_person.__proto__) // accedemos al prototipo del objeto new_person
new_person.greet()




// Métodos avanzados
// Assign (para clonar objetos)
// nos sirve para copiar las propiedades de uno o de mas objetos (que son como la fuente) en un objeto destino
let person_core = { name: "Brais" }
let person_details = {age: 37, alias: "MoureDev"}

// el primer parametro es el objeto que quieres usar de base, y el segundo es el objeto del que quieres copiar las propiedades
// los objetos como tal ya tienen un prototipo asignado, por eso no se pone .prototype
let fullPerson = Object.assign(person_core, person_details) // copiamos las propiedades de person_details en person_core
console.log(fullPerson) // Imprime { name: 'Brais', age: 37, alias: 'MoureDev' }
// se crea un objeto de la combinación de ambos objetos seleccionados



// keys, values, entries
console.log(Object.keys(fullPerson)) // Imprime [ 'name', 'age', 'alias' ] (devuelve un array con las claves del objeto)
console.log(Object.values(fullPerson)) // Imprime [ 'Brais', 37, 'MoureDev' ] (devuelve un array con los valores del objeto)
console.log(Object.entries(fullPerson)) // Imprime [ [ 'name', 'Brais' ], [ 'age', 37 ], [ 'alias', 'MoureDev' ] ] (devuelve un array con arrays de pares clave-valor)
