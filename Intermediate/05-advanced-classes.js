// Clases avanzadas
// Esta es la forma moderna en JS de usar una clase, ya no usando un objeto, ni basandonos en el prototipo ,ni en una función
// sino en una clase
// cuando se trabaja con datos de red, json, etc, usamos objetos, pero  
// cuando tratamos entidades ya nos hemos pasado en las clases
class Person {
    constructor(name, age) {
        this.name = name
        this.age = age
    }

    greet() {
        console.log(`Hola, soy ${this.name}`)
    }
}

const person = new Person("Brais", 37)
person.greet() // Imprime Hola, soy Brais

console.log(person) // Imprime Person { name: 'Brais', age: 37 }
person.sayAge = function () {
    console.log(`Tengo ${this.age} años`)
}
person.sayAge() // Imprime Tengo 37 años
console.log("\n")



// Clases abstractas
class Animal { // es la clase abstracta
    constructor(name) {
        if(new.target === Animal) {
            throw new Error("No se puede instanciar una clase abstracta")
        }
        this.name = name
    }
    makeSound() {
        throw new Error("Este método tiene que ser implementado por la subclase")
    }
}

// const animal = new Animal("Mou")
// console.log(animal) // Imprime Error



// Polimorfismo (capacidad de las clases derivadas, de una misma base, es decir de una clase abstracta)
// podemos implementar métodos con un mismo nombre pero con comportamientos diferentes
class Cat extends Animal { // clase derivada
    makeSound() {
        console.log("Miau!")
    }

}

class Dog extends Animal { // clase derivada
    makeSound() {
        console.log("Guau!")
    }
}

const cat = new Cat("MoureCat")
console.log(cat) // Imprime Cat { name: 'MoureCat' }
cat.makeSound()
const dog = new Dog("MoureDog")
console.log(dog) // Imprime Dog { name: 'MoureDog' }
dog.makeSound()
console.log("\n")



// Mixins (clases que aportan funcionalidades a otras clases sin usar herencia)
// para compartir funcionalidad entre diferentes clases sin tener que usar herencia
// el mixin no deja de ser otra forma de usar herencia entre clases
const FlyMixin = { // UpperCamel Case. Se crea para no usar duplicación de código de una 
    // funcionalidad que puede ser compartida entre diferentes clases
    fly() {
        console.log(`${this.name} está volando`)
    }
}

class Bird extends Animal {}

class Dragon extends Animal {}

// los objetos como tal ya tienen un prototipo asignado
Object.assign(Bird.prototype, FlyMixin) // asignamos el mixin a la clase Bird
Object.assign(Dragon.prototype, FlyMixin) // asignamos el mixin a la clase Dragon


const bird = new Bird("MoureBird")
console.log(bird.name) // Imprime MoureBird
bird.fly() // Imprime Está volando

const dragon = new Dragon("MoureDragon")
console.log(dragon.name) // Imprime MoureDragon
dragon.fly()
console.log("\n")



// Patrón Singleton (patrón de diseño que restringe la instanciación de una clase a un solo objeto)
// los patrones de diseño no dejan de ser ciertas convenciones que nosotros podemos seguir para resolver problemas comunes
// singleton es uno de los patrones que aplica perfectamente a las clases y es simple
// lo que quiere es asegurarse de que una clase solo puede instanciarse una sola vez, solo existe una única instancia de clase.
// puede tener sentido en una sesion de usuario, yo siempre que acceda a mi clase sesion, quiero que me devuelva el usuario que se ha logeado en mi aplicación
class Session {
    constructor(name) { // en variables que pueden variar, entonces en el constructor no se le passa, se le deja vacio, constructor()
        if(Session.instance) {
            return Session.instance
        }
        this.name = name
        Session.instance = this // guardamos la instancia creada
    }
}
// asi nos aseguramos de que solo existe una instancia de la clase Session

const session1 = new Session("Brais Moure")
const session2 = new Session()
// console.log(session1) // Imprime Session { name: 'Brais Moure' }
console.log(session1.name) // Imprime Brais Moure
console.log(session2.name) // Imprime undefined
console.log(session1 === session2) // Imprime true, ambas variables apuntan a la misma instancia de Session

const session3 = new Session("MoureDev")
console.log(session3.name) // Imprime Brais Moure
console.log(session2 === session3) // Imprime true, ambas variables apuntan a la misma instancia de Session
console.log("\n")



// Symbol (crear propiedades únicas e inmutables para evitar colisiones de nombres)
// tipo de dato primitivo se introdujo en ES6
// representa un identificador único e inmutable
// habitalmente se usa para evitar colisiones con nombres de propiedades de objetos
const ID = Symbol("id") // creamos un símbolo con la descripción "id"
// inmutable es decir que no se puede cambiar su valor una vez creado

class User {
    constructor(name) {
        this.name = name
        this[ID] = Math.random()
    }

    getId() { // para poder acceder a ID, pero no podamos modificarlo
        return this[ID]
    }
}

const user = new User("Brais")
console.log(user.name) // Imprime Brais
console.log(user.ID) // Imprime undefined, no podemos acceder a la propiedad ID de esta forma
// console.log(user[ID]) // Imprime un número aleatorio, accedemos a la propiedad ID usando el símbolo
// // ID sirve como una simulacion de propiedad privada, no se puede acceder desde fuera de la clase. Tendremos acceso a ella si es que sabemos como se llama y también modificarla
// user[ID] = 12345
// console.log(user[ID]) // Imprime 12345, hemos podido cambiar el valor de la propiedad ID
console.log(user.getId()) // Imprime el valor original de ID, no hemos podido modificarlo desde fuera de la clase
console.log("\n")



// instanceof (verificar la pertenencia a una clase)
// comprobaciones de instancia
class Car {}

const car = new Car()

// asi no es la manera de comprobar si un objeto es una instancia de una clase
// console.log(car === Car) // Imprime false, car no es igual a la clase Car
console.log(car instanceof Car) // Imprime true, car es una instancia de la clase Car
console.log("\n")



// Create (crear objetos con un prototipo específico)
const anotherCar = Object.create(Car.prototype) // crea un nuevo objeto con el prototipo de la clase Car
console.log(anotherCar instanceof Car) // Imprime true, anotherCar es una instancia de la clase Car
console.log(anotherCar)
console.log("\n")



// Proxy (nos permite crear un objeto que envuelve a otro objeto y nos permite interceptar y redefinir operaciones fundamentales)
// sirve para interceptar y personalizar el comportamiento de estas clases
// se puede interceptar el comportamiento para aplicar seguridad, para aplicar validaciones
const proxy = {
    get(target, property){ 
        // console.log(target) // target es esa instancia
        // console.log(property) // nombre de la propiedad a la que queremos acceder
        // console.log("get")
        console.log(`Se accede a la propiedad ${property}`)
        return target[property]
    },
    set(target, property, value) {
        // console.log(target)
        // console.log(property)
        // console.log(value) // valor que queremos asignar
        // console.log("set")
        if (property === "balance" && value < 0) {
            throw new Error("El saldo no puede ser negativo")
        }
        target[property] = value
    }
}

class BankAccount {
    constructor(balance) {
        this.balance = balance
    }
}

const account = new Proxy(new BankAccount(100), proxy)
console.log(account.balance) // Imprime get y undefined, intercepta la operación get 

account.balance = 50 // Imprime set, intercepta la operación set
console.log(account.balance)

account.balance = -10 // Imprime set y lanza un error(saldo no puede ser negativo), intercepta la operación set

