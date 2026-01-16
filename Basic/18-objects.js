// Objects (dato que no es primitivo. Todo lo que no es primitivo es un objeto en JavaScript).
// Un object es una colección de propiedades.
// Un object guarda relación parecida a los maps, porque es clave-valor.
//los objetos pueden contener funciones, propiedades y otros objetos
// la instancia es única, no se pueden crear varias instancias iguales como en los mapas


// Sintaxis
let person = {
    name: "Brais",
    age: 37,
    alias: "MoureDev"
}

// Acceso a propiedades

// Notación de punto
console.log(person.name) // "Brais"
// Notación de corchetes
console.log(person["name"]) // "Brais"



// Modificación 
person.name = "Brais Moure"
console.log(person.name) // "Brais Moure"


console.log(typeof person.age) // Imprime "number"
person.age = "37"
console.log(person.age) // "37"

console.log(typeof person.age) // Imprime "string"

console.log(person) // Imprime { name: 'Brais Moure', age: '37', alias: 'MoureDev' }



// Eliminación de propiedades
delete person.age
console.log(person) // Imprime { name: 'Brais Moure', alias: 'MoureDev' }



// Nueva propiedad
person.email = "braismoure@mouredev.com"
person["age"] = 37

console.log(person) // Imprime { name: 'Brais Moure', alias: 'MoureDev', email: 'braismoure@mouredev.com' }



// Métodos (funciones dentro de un objeto)
let person2 = {
    name: "Brais",
    age: 37,
    alias: "MoureDev",
    walk: function() {
        console.log("La persona camina")
    }
}

person2.walk() // Imprime "La persona camina"



// Anidación de objects
let person3 = {
    name: "Brais",
    age: 37,
    alias: "MoureDev",
    walk: function() {
        console.log("La persona camina")
    },
    job: {
        name: "Programador",
        exp: 15,
        work: function() {
            console.log(`La persona de ${this.exp} años de experiencia trabaja`)
        }
    }
}

console.log(person3) // Imprime { name: 'Brais', age: 37, alias: 'MoureDev', walk: [Function: walk], job: { name: 'Programador', exp: 15, work: [Function: work] } }
console.log(person3.name) // Imprime "Brais"
console.log(person3.job) // Imprime { name: 'Programador', exp: 15, work: [Function: work] }
console.log(person3.job.name) // Imprime "Programador"
person3.job.work() // Imprime "La persona trabaja"



// Igualdad de objects
let person4 = {
  name: "Brais Moure",
  alias: "MoureDev",
  email: "braismoure@mouredev.com",
  age: 37
}
console.log(person)
console.log(person4)

console.log(person == person4) // Imprime false, ya que se compara la direccion de memoria, no el valor que tiene dentro
console.log(person === person4) // Imprime false,  ya que se compara la direccion de memoria, no el valor que tiene dentro

// Aunque los objetos tengan las mismas propiedades y valores, son diferentes en memoria, por lo que no son iguales.
// la representacion de propiedades por valor o por referencia
// los objetos se comparan por referencia, no por valor
// los objetos se guardan en memoria, no con un valor asociado sino que con una referencia, es decir, con una dirección de memoria

console.log(person.name === person4.name) // Imprime true, ya que se comparan los valores de las propiedades

//un objeto es una referencia, tenemos la direccion de memoria  y el valor esta asociado a los tipos de datos primitivos en este caso



// Iteración de objects
// for (let value of person4) {
//     console.log(value) // TypeError: person4 is not iterable
// }

for (let value in person4) {
    console.log(value) // Imprime las claves: name, alias, email, age
}

for (let key in person4) {
    console.log(key + ": " + person4[key]) // Imprime las claves y valores
}

// la instancia del objeto es unica



// Funciones como objects
function Person(name, age) {  // DEBERIA SER UNA CLASE, no es una buena practica
    //esta funcion funciona como un constructor de objetos
    // y se crea un objeto que puede ser util cuando quiero crear multiples instancias del mismo tipo
    this.name = name
    this.age = age
}

let person5 = new Person("Brais", 37)
console.log(person5) // Imprime Person { name: 'Brais', age: 37 }
console.log(person5.name) // Imprime "Brais"

console.log(typeof person5) // Imprime "object"
console.log(typeof person4) // Imprime "object"