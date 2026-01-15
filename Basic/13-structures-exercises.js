// 1. Crea un array que almacene cinco animales
let array1 = ["gato", "león", "tigre", "elefante", "pavo"]

// 2. Añade dos más. Uno al principio y otro al final
array1.push("oso polar")
array1.unshift("gepardo")
console.log(array1) // imprime [ 'gepardo', 'gato', 'león', 'tigre', 'elefante', 'pavo', 'oso polar' ]

// 3. Elimina el que se encuentra en tercera posición
array1.splice(2,1) // elimina 1 elemento desde la posicion 2
console.log(array1) // imprime [ 'gepardo', 'gato', 'tigre', 'elefante', 'pavo', 'oso polar' ]

// 4. Crea un set que almacene cinco libros
let set1 = new Set([
    "Cien años de soledad",
    "Don Quijote de la Mancha",
    "Los Miserables",
    "The Great Gatsby",
    "Sherlock Holmes"
])
console.log(set1) // imprime Set(5) { 'Cien años de soledad', 'Don Quijote de la Mancha', 'Los Miserables', 'The Great Gatsby', 'Sherlock Holmes' }

// 5. Añade dos más. Uno de ellos repetido
set1.add("La Divina Comedia", "Los miserables") // solo añade uno, el repetido no
console.log(set1) // no añade el repetido. Imprime Set(6) { 'Cien años de soledad', 'Don Quijote de la Mancha', 'Los Miserables', 'The Great Gatsby', 'Sherlock Holmes', 'La Divina Comedia' }

// 6. Elimina uno concreto a tu elección
console.log(set1.delete("The Great Gatsby")) // imprime true
console.log(set1) // imprime Set(5) { 'Cien años de soledad', 'Don Quijote de la Mancha', 'Los Miserables', 'Sherlock Holmes', 'La Divina Comedia' }

// 7. Crea un mapa que asocie el número del mes a su nombre
let map1 = new Map([
    [1, "Enero"], [2, "Febrero"],[3, "Marzo"],
    [4, "Abril"],[5, "Mayo"],[6, "Junio"],
    [7, "Julio"],[8, "Agosto"],[9, "Septiembre"],
    [10, "Octubre"], [11, "Noviembre"],[12, "Diciembre"]
])

// 8. Comprueba si el mes número 5 existe en el map e imprime su valor
console.log(map1.has(5)) // imprime true
if(map1.has(5)){
    console.log(map1.get(5)) // imprime Mayo
}

// 9. Añade al mapa una clave con un array como que almacene los meses de verano
console.log(map1.set("Meses de verano", ["Junio", "Julio", "Agosto"]))

// 10. Crea un array, transfórmalo a un Set y almacénalo en un Map. 
let array2 = [2,6,14]
let set2 = new Set(array2)
console.log(set2) // imprime Set(3) { 2, 6, 14 }
let mapConSet = new Map()
mapConSet.set("Números pares", set2)
console.log("Resultado: ", mapConSet.set("Números pares", set2)) // imprime Map(1) { 'Números pares' => Set(3) { 2, 6, 14 } }