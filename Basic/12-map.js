// las estructuras sirven para almacenar en ellas un conjunto de datos

// Map (colección de elementos y cada elemento ya no es unico como el array ). Es paralelo al diccionario en Python.
// cada elemento esta formado por un par clave-valor (key-value pair). Claves de cualquier tipo y valores de cualquier tipo
// se puede almacenar cualquier tipo de dato.

// Declaración
let myMap = new Map()

console.log(myMap) // imprime Map(0) {}


// Inicialización
myMap = new Map([
    ["name", "Brais"], 
    ["email", "braismoure@mouredev.com"], 
    ["age", 37]
])

console.log(myMap) // imprime Map(3) { 'name' => 'Brais', 'email' => 'braismoure@mouredev.com', 'age' => 37 }

// Métodos y propiedades

// set (sirve para agregar o actualizar un par clave-valor)
myMap.set("alias", "mouredev")
myMap.set("name", "Brais Moure") // si la clave ya existe, se actualiza el valor
console.log(myMap) // imprime Map(4) { 'name' => 'Brais Moure', 'email' => 'braismoure@mouredev.com', 'age' => 37, 'alias' => 'mouredev' }
// puede haber repetido en el valor, pero no en la clave


// get (sirve para recuperar el valor de una clave)
console.log(myMap.get("name")) // devuelve 'Brais Moure'
console.log(myMap.get("surname")) // devuelve undefined si la clave no existe

// has (sirve para verificar si una clave existe)
console.log(myMap.has("surname")) // devuelve false
console.log(myMap.has("age")) // devuelve true


// delete (sirve para eliminar un par clave-valor)
myMap.delete("email")
console.log(myMap) // imprime Map(3) { 'name' => 'Brais Moure', 'age' => 37, 'alias' => 'mouredev' }

// keys (sirve para obtener todas las claves del map)
console.log(myMap.keys()) // imprime MapIterator { 'name', 'age', 'alias' }

// values (sirve para obtener todos los valores del map)
console.log(myMap.values()) // imprime MapIterator { 'Brais Moure', 37, 'mouredev' }

// entries (sirve para obtener todos los pares clave-valor del map)
console.log(myMap.entries()) // imprime MapIterator { [ 'name', 'Brais Moure' ], [ 'age', 37 ], [ 'alias', 'mouredev' ] }

// size (sirve para obtener el tamaño del map)
console.log(myMap.size) // imprime 3

// clear (sirve para eliminar todos los elementos del map)
myMap.clear()
console.log(myMap) // imprime Map(0) {}




