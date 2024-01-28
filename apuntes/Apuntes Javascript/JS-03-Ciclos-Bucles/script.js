//! FOR:
// se utiliza para repetir una o más instrucciones un determinado nº de veces. De entre todos los bucles, el FOR se suele utilizar cuando sabemos seguro el número de veces que queremos que se ejecute. 

for (incialización; condición; actualización) {
    //código a ejecutar en cada iteración
}

/* El bucle FOR tiene tres partes incluidas entre los () que nos sirven para definir cómo deseamos que se realicen las repeticiones:
1) inicialización, que se ejecuta solamente al comenzar la primera iteración del bucle. En esta parte se suele colocar la variable que utilizaremos para llevar la cuenta de las veces que se ejecuta el bucle.
2) condición, que se evaluará cada vez que comience una iteración del bucle. Contiene una expresión para decidir cuándo se ha de detener el bucle, o mejor dicho, la condición que se debe cumplir para que continúe la ejecución del bucle.
3) actualización, que sirve para indicar los cambios que queramos ejecutar en las variables cada vez que termina la iteración del bucle, antes de comprobar si se debe seguir ejecutando.

> Después del for se colocan las sentencias que queremos que se ejecuten en cada iteración, acotadas entre llaves. Un ejemplo de utilización de este bucle lo podemos ver a continuación, donde se imprimirán los números del 0 al 10. */

for (let i=0; i<=10; i++) {
    console.log(i);
}

// En este caso se inicializa la variable i a 0. Como condición para realizar una iteración, se tiene que cumplir que la variable i sea menor o igual que 10. Como actualización se incrementará en 1 la variable i.


//! WHILE:
// Estos bucles se utilizan cuando queremos repetir la ejecución de unas sentencias un número indefinido de veces, siempre que se cumpla una condición. Sólo se indica la condición que se tiene que cumplir para que se realice una iteración.

while (condicion){
    // sentencias a ejecutar
}

// EJEMPLO:

var color = "";

while (color != "rojo"){
    color = prompt("Ingresa un color o escribe rojo para salir");
}


//! BREAK:
// Significa detener la ejecución de un bucle y salirse de él.

for (let i=0; i<10; i++){
    console.log(i);

    escribe = prompt("dime si continuo preguntando...", "si");

    if (escribe == "no"){
        break;
    }
}

// Este ejemplo escribe los números del 0 al 9 y en cada iteración del bucle pregunta al usuario si desea continuar. Si el usuario dice cualquier cosa continua, excepto cuando dice "no", situación en la cual se sale del bucle y deja la cuenta por donde se había quedado.


//! CONTINUE:
// Sirve para volver al principio del bucle en cualquier momento, sin ejecutar las líneas que haya por debajo de la palabra continue.

var i = 0;

while (i < 7){
    let incrementar = prompt("La cuenta está en " + i + ", dime si incremento", "si");

    if (incrementar == "no"){
        continue;
    }
}