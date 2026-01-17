// Clases (tambien es un objeto, complejo. No es un dato primitivo)
// Nos sirve para crear objetos y nos sirve para crear plantillas de objetos
// es una forma mas clara y legible de crear objetos y manejar la herencia

// let person = {
//     name: "Brais",
//     age: 35,
//     alias: "MoureDev",
// }

class Person //upperCamelCase
{
    //dentro debe tener un constructor (método, funcion especial que nos permite cual es la estructura de propiedades inicial de Person)
    constructor(name, age, alias) {
        this.name = name //el primer name lo puedes llamar de otra forma, pero por buenas practicas se suele llamar igual
        this.age = age
        this.alias = alias
    }
}

// Sintaxis
let person = new Person("Brais", 37, "MoureDev") //no olvidar el new
let person2 = new Person("Ana", 30, "AnaDev")
console.log(person) // Imprime Person { name: 'Brais', age: 37, alias: 'MoureDev' }
console.log(person2) // Imprime Person { name: 'Ana', age: 30, alias: 'AnaDev' }

console.log(typeof person) // Imprime "object", ya que todo lo que no es un tipo de dato primitivo, es un objeto. Entonces la clase es un objeto complejo



// Valores por defecto
class DefaultPerson {
    constructor(name = "Sin nombre", age = 0, alias = "Sin alias") {
        this.name = name
        this.age = age
        this.alias = alias
    }
}

//let person3 = new DefaultPerson(alias = "MoureDev") //pones alias pero en realidad ese valor es para name, aqui es por orden
let person3 = new DefaultPerson("Brais", 37)
console.log(person3) // Imprime DefaultPerson { name: 'Nombre por defecto', age: undefined, alias: undefined }



// Acceso a propiedades
console.log(person3.alias) // Imprime "Sin alias"
console.log(person3["alias"]) // Imprime "Sin alias"

person3.alias = "MoureDev"
console.log(person3.alias) // Imprime "MoureDev"

// Funciones en clases
class PersonWithMethod {
    constructor(name, age, alias) {
        this.name = name
        this.age = age
        this.alias = alias
    }

    walk() {
        console.log("La persona camina.")
    }
}

let person4 = new PersonWithMethod("Brais", 37, "MoureDev")
console.log(person4) // Imprime PersonWithMethod { name: 'Brais', age: 37, alias: 'MoureDev' }
person4.walk()

// si accede a ella(las propiedades), significa que la puede modificar
// PROPIEDADES PRIVADAS
class PrivatePerson {
    #bank //propiedad privada, no se puede acceder desde fuera de la clase
    constructor(name, age, alias, bank) {
        this.name = name 
        this.age = age
        this.alias = alias
        this.#bank = bank
    }

    pay() {
        this.#bank
    }
}

let person5 = new PrivatePerson("Brais", 37, "MoureDev", "IBAN123456789")
//(NO SE PUEDE ACCEDER  A BANK PARA IMPRIMIRLA O PARA MODIFICARLA)
//console.log(person5.bank) // Imprime undefined, no se puede acceder a la propiedad privada 
//person5.bank = "new IBAN987654321" // bank no es #bank, es una propiedad nueva que se crea en el objeto person5, no es el bank que tenemos anteriormente
console.log(person5) 


// Getters y Setters
class GetPerson {
    #name
    #age
    #alias
    #bank
    constructor(name, age, alias, bank) {
        this.#name = name
        this.#age = age
        this.#alias = alias
        this.#bank = bank
    }

    get name() {
        return this.#name
    }

    set bank(bank) {
        this.#bank = bank
    }

    // get bank() {
    //     return this.#bank
    // }
}

let person6 = new GetPerson("Brais", 37, "MoureDev", "IBAN123456789")
console.log(person6) // Imprime GetPerson {}, ya que todo es privado (las propiedades)
console.log(person6.name) // Imprime "Brais", accedemos a la propiedad privada a través del getter
//hace que el get de name sea para lectura pero no de escritura. 

person6.bank = "new IBAN123456789" // Usamos el setter para modificar la propiedad privada bank
//console.log(person6.bank) // Imprime "new IBAN123456789", accedemos a la propiedad privada a través del getter