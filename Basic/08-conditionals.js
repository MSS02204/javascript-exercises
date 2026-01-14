// if, else if, else 

// if (si)

let age = 37

if(age == 37) {
    console.log("La edad es 37")
}

// else (si no)

if (age ==37){
    console.log("La edad es 37")
} else {
    console.log("La edad no es 37")
}


// else if (si no, si)

if (age ==37){
    console.log("La edad es 37")
} else if (age < 18) {
    console.log("Es menor de edad")
} else {    
    console.log("La edad no es 37 ni es menor de edad")
}


// Operador ternario

const messagge = age == 37 ? " La edad es 37" : "La edad no es 37"
console.log(messagge)


// Switch  (util cuando hay muchas condiciones sobre la misma variable)
let day = 3
//let day = 7 -> numero de dia incorrecto o undefined si no hay un default.
let dayName

switch(day) {
    case 0: 
        dayName = "Lunes"
        break //romper con la ejecución del bloque
    case 1:
        dayName = "Martes"
        break
    case 2: 
        dayName = "Miércoles"
        break
    case 3: 
        dayName = "Jueves"
        break
    case 4:
        dayName = "Viernes"
        break
    case 5:
        dayName = "Sábado"
        break
    case 6:
        dayName = "Domingo"
        break
    default:
        dayName = "Número de día incorrecto"
        // este break ahi es opcional ya que no es necesario debido a que no hay mas condicionales abajo que el default
}

console.log(dayName)