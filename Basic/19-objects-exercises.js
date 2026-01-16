// 1. Crea un objeto con 3 propiedades
let dog = {
    breed : "Golden Retriever",
    name: "Tana",
    age: 5 
}

// 2. Accede y muestra su valor. 
console.log(dog)
console.log(dog.name)
console.log(dog["breed"])

// 3. Agrega una nueva propiedad
dog.siblings = 2
console.log(dog)
console.log(dog.siblings)

// 4. Elimina una de las 3 primeras propiedades.
delete dog.age
console.log(dog)

// 5. Agrega una función e invócala.
dog = {
    breed: "Golden Retriever",
    name: "Tana",
    siblings: 2,
    play: function() {
        console.log(`${this.name} esta jugando con su peluche.`)
    }
}

dog.play()
console.log("\n")

// 6. Itera las propiedades del objeto.
for (let value in dog) {
    console.log(value + ": "+ dog[value])
}

// 7. Crea un objeto anidado.
let music = {
    name: "Happy",
    genre: "Pop",
    artist: {
        name: "Pharrell Williams",
        age: 50,
        country: "USA",
        news: function() {
            console.log(`${this.name} esta grabando una nueva canción.`)
        }
    }
}
console.log(music)

// 8. Accede y muestra el valor de las propiedades anidadadas.
console.log(music.artist)
console.log(music.artist.name)
console.log(music.artist.country)
music.artist.news()

// 9. Comprueba si los dos objetos creados son iguales.
console.log(dog == music) // false
console.log(dog === music) // false

let cat = {
    breed: "Siamese",
    name: "Tana",
    age: 3
}

console.log(dog.name == cat.name) // true
console.log(dog.name === cat.name) // true

// 10. Comprueba si dos propiedades diferentes son iguales
console.log(dog.breed == cat.name) // false

