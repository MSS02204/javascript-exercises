// estructura de datos permite almacenar multiples valores en una sola variable
//estructura de datos: arrays, 
// array (son utiles para manejar listados de elementos (numeros, textos, objetos, etc))

// crear un array
let myArray = [] // array vacio , puede ser asi tambien let myArray = []; o let myArray = new Array();
let myArray2 = new Array(); // otra forma de crear un array vacio

console.log(myArray)
console.log(myArray2)

// MoureDev recomienda usar la primera forma para crear arrays, ya que es mucho mas simple, se escribe mas rapido y no da 
// lugar a errores.


// INICIALIZACIÓN
myArray = [3] // array con un elemento (dato numerico 1). Imprime [3]
myArray2 = new Array(3) //se reserva tres huecos (espacios), RESERVA DE CASILLAS. Imprime [ <3 empty items> ]

console.log(myArray)
console.log(myArray2)



myArray = [1,2,3,4]  // imprime [1,2,3,4]
myArray2 = new Array(1,2,3,4); // imprime [1,2,3,4]

console.log(myArray)
console.log(myArray2)



myArray = ["Brais", "Moure", "mouredev", 37, true]  // imprime ["Brais", "Moure", "mouredev", 37, true]
myArray2 = new Array("Brais", "Moure", "mouredev", 37, true) // imprime ["Brais", "Moure", "mouredev", 37, true]

console.log(myArray)
console.log(myArray2)

//JAVASCRIPT ES UN LENGUAJE DE TIPADO DINAMICO, ES DECIR UNA VARIABLE PUEDE CAMBIAR SU TIPO DE DATO Y ALMACENAR DISTINTOS TIPOS DE DATOS

myArray2 = new Array(3) // reserva 3 casillas
myArray2[2] = "Brais" // asigna un valor a la posicion 0
// myArray2[0] = "Moure"; // asigna un valor a la posicion 1
myArray2[1] = "mouredev" // asigna un valor a la posicion 2

console.log(myArray2); // imprime [ <1 empty item>, 'mouredev', 'Brais' ]

// el listado del array es ordenado, es decir, cada elemento tiene una posicion o indice que empieza en 0
// si comentas uno del array o dejas una posicion sin asignar valor, esa posicion queda como "empty item"
// [ <1 empty item>, 'mouredev', 'Brais' ] eso es un ejemplo de como quedaria


myArray2 = new Array(3) // reserva 3 casillas
myArray2[2] = "Brais" // asigna un valor a la posicion 0
// myArray2[0] = "Moure"; // asigna un valor a la posicion 1
myArray2[1] = "mouredev" // asigna un valor a la posicion 2
myArray2[4] = "mouredev"; // asigna un valor a la posicion 4

console.log(myArray2); // imprime [ <1 empty item>, 'mouredev', 'Brais' , <1 empty item>, 'mouredev' ]
// esto es posible, pero no es recomendable dejar espacios vacios en los arrays
// por mas que reserves 3 casillas, puedes asignar valores en posiciones mas altas, pero no es recomendable


myArray = []
myArray[2] = "Brais"
// myArray[0] = "Moure"
myArray[1] = "mouredev"

console.log(myArray) // imprime [ <1 empty item>, 'mouredev', 'Brais' ]


// METODOS COMUNES
myArray = []

// push y pop
myArray.push("Brais")
myArray.push("Moure")
myArray.push("mouredev")
myArray.push(37)

console.log(myArray) // imprime [ 'Brais', 'Moure', 'mouredev', 37 ]

console.log(myArray.pop()) // elimina el ultimo elemento del array. Imprime 37
myArray.pop() // elimina el ultimo elemento del array

console.log(myArray) // imprime [ 'Brais', 'Moure' ]

// shift y unshift
console.log(myArray.shift()) // elimina el primer elemento del array
console.log(myArray) // imprime [ 'Moure' ]

myArray.unshift("Brais", "mouredev") // agrega un elemento al inicio del array
console.log(myArray) // imprime [ 'Brais', 'mouredev', 'Moure' ]



// length (es una propiedad, no una funcion)
console.log(myArray.length) // imprime 3 (cantidad de elementos en el array)


// clear
myArray = [] // forma de limpiar un array
// myArray.length = 0 // otra forma de limpiar un array (alternativa que es mejor no usarlo)
console.log(myArray) // imprime []


// slice
myArray = ["Brais", "Moure", "mouredev", 37, true]

let myNewArray = myArray.slice(1,3)  // crea un nuevo array desde la posicion 1 hasta la posicion 2 (sin incluir la posicion 3)
 
console.log(myArray)
console.log(myNewArray) // imprime [ 'Moure' ]

// splice

myArray.splice(1,3) // elimina 3 elementos desde la posicion 1 y los elimina del array original
console.log(myArray) // imprime [ 'Brais', true ]


myArray = ["Brais", "Moure", "mouredev", 37, true]

myArray.splice(1,2, "Nueva entrada") // elimina 2 elementos desde la posicion 1 y agrega "Nueva entrada" en esa posicion
console.log(myArray) // imprime [ 'Brais', 'Nueva entrada', 37, true ]
