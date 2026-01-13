// var (forma original de declarar variables, y quiere decir que puede variar su valor. 
// Actualmente no es la manera en la que se recomienda declarar variables. 
// Y se puede acceder a la variable antes de ser declarada, lo cual puede causar errores difíciles de detectar.)

// Kebab case -> var hello-world
// Upper camel case -> var HelloWorld
// Snake case -> var hello_world
// Lower camel case -> var helloWorld

console.log(helloWorld)


var helloWorld = "¡Hello, JavaScript!"
console.log(helloWorld)

helloWorld = "¡Hola de nuevo, JavaScript!"
console.log(helloWorld)

//las formas principales de declarar variables (asignar valores a memoria) son con let y const 
// (esto fue introducido en ES6 2015, ecmascript 6)

//la diferencia entre let y var es que let tiene un alcance de bloque (block scope), 
//mientras que var tiene un alcance de función (function scope). 
//Esto significa que las variables declaradas con let solo son accesibles dentro del bloque donde se declaran, 
//mientras que las variables declaradas con var son accesibles en toda la función donde se declaran.

//console.log(helloWorld2) // ReferenceError: Cannot access 'helloWorld2' before initialization (provoca error)
// let
let helloWorld2 = "¡Hola, JavaScript 2!"
console.log(helloWorld2)

helloWorld2 = "¡Hola de nuevo, JavaScript 2!"
console.log(helloWorld2)


// const (su valor no puede cambiar una vez asignado.)

//console.log(helloWorld3) // ReferenceError: Cannot access 'helloWorld3' before initialization (provoca error)

const helloWorld3 = "¡Hola, JavaScript 3!"
console.log(helloWorld3)

//helloWorld3 = "¡Hola de nuevo, JavaScript 3!" // TypeError: Assignment to constant variable. (provoca error)
//console.log(helloWorld3)

//la diferencia entre let y const es que las variables declaradas con const no pueden ser reasignadas, 
//mientras que las variables declaradas con let pueden ser reasignadas. 
//Es una buena práctica usar const por defecto, y solo usar let cuando se sabe que el valor de la variable 
//necesitará cambiar en algún momento.
//con arrays const si permite modificar su contenido, pero no reasignar la variable a un nuevo array.
