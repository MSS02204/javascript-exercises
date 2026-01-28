// PROGRAMACIÓN ASÍNCRONA EN JAVASCRIPT
// cuando nos ponemos a ejecutar codigo en js, se va a ejecutar por defecto en un solo hilo
// tiene un único proceso que va interpretando línea a línea (en una secuencia, una tras otra) y ejecutando línea a línea
// en ningún momento se van a ejecutar dos cosas (líneas) al mismo tiempo
// con asincronia se puede hacer multihilo, es decir, ejecutar varias cosas al mismo tiempo

// cuando vas a descargar un pdf por ejemplo, el navegador no se va a quedar "congelado" esperando a que se descargue el pdf
// sino que vas a poder seguir navegando por la web, viendo vídeos, etc. 
// Eso es porque la descarga del pdf se está haciendo de forma asíncrona                     

// JS se ejecuta en dos entornos, por un lado en el explorador web, ahí JS va a utilizar las webs APIs del propio navegador
// para dotarse de esa capacidad asincrona.  JS como lenguaje simple y llano no tiene capacidad asincrona
// pero combinado con las APIs del navegador puede ser capaz de ejecutarse de manera asincrona 

// Si ejecuto JS fuera del navegador web (en el backend, en el servidor, como una aplicación fuera de un navegador) con node.js
// node.js también tiene sus propias APIs que permiten la ejecución asíncrona 

// cualquier cosa que se deba hacer en segundo plano y que lleve tiempo, que no sea instantáneo, se debe hacer de forma asíncrona




// CÓDIGO SÍNCRONO
console.log("Inicio")

for(let i = 0; i < 100000000; i++) {
}

console.log("Fin")
console.log("\n")



// EVENT LOOP (Bucle de eventos)
// JS está continuamente ejecutando un bucle infinito para intentar saber
// como tiene que ejecutar nuestro código  
// como JS solo puede ejecutar todo en un unico hilo a nivel fundamental, nosotros tenemos esta pila de ejecucion
// donde va a empezar a revisar si de verdad necesita acabar manejando tareas asincronas

// Componentes del Event Loop (Trabaja con 3 componentes principales): 
// 1. Call Stack (Pila de ejecución): 
// Es donde se acaban ejecuntando las funciones en orden
// 2. Web APIs (APIs del navegador) o Node.js: setTimeout()...., fetch() Son los que los manejan Node.js y las Web APIs
// Aparte de manejar esa pila de ejecucion con las funciones, también es capaz de manejar las WEB APIs o node.js 
// en caso de que aparezcan tareas asincronas
// 3. Task Queue (Cola de tareas) y MicrotaskQueue:
// Aqui es donde se almacenan las funciones que tienen que ejecutarse cuando el Call Stack esté vacio

// Dependiendo del tipo de tarea que ejecutemos va a pertenecer a uno u otro de los 3


// Flujo del Event Loop: (va a seguir un orden, ese loop de eventos debe hacer comprobaciones y esas 
// comprobaciones las va acabar ejecutando en el mismo orden)
// 1. Call Stack
// 2. Operaciones asíncronas -> las delega las operaciones en las Web APIs o Node.js
// 3. Operación termina -> La coloca en Task Queue o Microtask Queue
// 4. El event Loop va a revisar si el Call Stack está vacío y si está vacío -> Mueve tareas del Microtask Queue o Task Queue al Call Stack para poder ejecutarlas
// 5. El proceso se repite 



// CÓDIGO ASÍNCRONO
// CALLBACKS (fue el primer mecanismo para manejar de cierto modo las funciones asíncronas en JS)
// es una función que se pasa como argumento a otra función y se ejecuta cuando la operación ha finalizado
// de manera nativa tenemos esto:
// handler (manejador) es la función que va acabar ejecutando
console.log("Inicio") // esto está en el Call Stack

// setTimeout es una función que pertenece a las Web APIs del navegador
setTimeout(() => { // es un callback que podemos utilizar dentro de JS para ejecutar de manera asíncrona el contenido de una función
    console.log("Esto se ejecuta después de 2 segundos") // esto está en la Web API (fuera del Call Stack) y luego pasa a la Task Queue o Microtask Queue
}, 2000)  // el segundo parámetro es el tiempo en milisegundos que debe esperar antes de ejecutar la función

console.log("Fin") // esto está en el Call Stack
console.log("\n")



// Problema: CALLBACK HELL
function step1(callback) {
    setTimeout(() => {
        console.log("Paso 1 completado")
        callback() // para notificar a la funcion callback que el paso 1 ha terminado
    }, 1000) // simula una operación asíncrona con un retraso de 1 segundo
}

step1(() => {
    console.log("Todos los pasos completados")
})



