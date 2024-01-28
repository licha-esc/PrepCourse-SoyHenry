//* OPERADORES DE INCREMENTO Y DECREMENTO:
// son útiles cuando necesitamos modificar el valor de nuestra variable numérica a razon de una unidad cada vez.
// dependiendo de la posición del operador es el comportamiento obtenido. si usamos a la izquierda primero incrementa o decrementa el valor y luego lo asigna a la variable y si se encuentra a la derecha realiza lo inverso.

var num = 10;

num++; // primero lee la variable (10) y luego la incrementa (11)
++num; // primero incrementa la variable(11) y luego la lee (11)
num--; // idem.
--num; // idem.


//* CONDICIONALES: IF, ELSE, ELSE IF y SWITCH:
//! IF:
// Esta estructura te permite tomar decisiones basadas en una condición

if ("llueve") {    
    alert("Cae agua");
}

// las llaves no son necesarias pero cuando las utilizamos, el código queda más claro, porque se puede apreciar en un rápido vistazo qué instrucciones están dependiendo del if.
// Los saltos de línea tampoco son necesarios y se han colocado también para que se vea mejor la estructura. Perfectamente podríamos colocar toda la instrucción IF en la misma línea de código, pero eso no ayudará a que las cosas estén claras.


//! ELSE:
// es una alternativa cuando la condición del "if" es falsa o no se cumple.

if (llueve) {
    alert("Cae agua");
} else {
    alert("Se despejó");
}


//! ELSE IF:
// se utiliza para evaluar múltiples condiciones en orden y ejecutar bloques de código correspondientes a la primera condición que se cumpla.

if (10 > 6) {
    // El código se ejecuta solo si la condición es verdadera
} else if (3 < 7) {
    // Se ejecuta solo si la primer condicion es falsa y esta es verdadera
} else {
    // Si no, hará lo que esté aquí adentro
}


//! IF anidado:
// Con un solo IF podemos evaluar y realizar una acción u otra según 2 posibilidades, pero si tenemos más posibilidades que evaluar podemos añadir IFs

let num1 = 23;
let num2 = 63;

if (num1 == num2) {
    console.log("los dos num son iguales");
} else {
    if (num1 > num2) {
        console.log("El primer num es mayor al primero");
    } else {
        console.log("El segundo num es mayor al segundo");
    }
}


//! SWITCH:
// Switch se utiliza para tomar decisiones en función de distintos estados de las variables. Esta expresión se utiliza cuando tenemos múltiples posibilidades a avaluar.

switch (expresión) {
    case valor1:
        // Sentencias a ejecutar si la expresión tiene como valor1
        break;
    case valor2:
        // Sentencias a ejecutar si la expresión tiene como valor2
        break;
    case valor3:
        // Sentencias a ejecutar si la expresión tiene como valor3
        break;
    default:
        // Sentencias a ejecutar si el valor no es ninguno de los anteriores
}

let semaforo = "verde";
switch (semaforo) {
    case "verde":
        console.log("Cruzo");
        break;
    case "amarillo":
        console.log("Precaucion");
        break;
    case "rojo":
        console.log("Freno");
        break;
    default:
        console.log("No se encontro opcion");
}


//! Operador Ternario:
/* nos sirve para escribir el código de una sentencia if de una forma más sencilla:
condición ? expr1 : expr2;

condición > es una expresión que se evalúa como true o false.
expr1 > si la condición es true retorna este valor.
expr2 > si la condición es false. */

var edad = 18;
var mensaje = (edad >= 18) ? "Eres mayor de edad" : "Eres menor de edad";
console.log(mensaje);c