//* ENTRADA Y SALIDA DE DATOS: 

//? prompt(): 
// es una forma de obtener datos del usuario. despliega un mensaje emergente con una casilla para ingresar un valor. El valor ingresado siempre será tomado como un string.
// let nombre = prompt("Ingrese su nombre: ");


//? alert(): 
// despliega un mensaje emergente con el texto que reciba por parámetro. El texto de adentro cuando es un dato va sin comillas, y cuando es un texto va entre comillas.
// alert(nombre);


//? console.log():
// envía lo que recibe por parámetro a la consola del navegador.
// console.log("Hola");


//* VARIABLES: 
//* es un espacio de memoria al que nosotros le ponemos una etiqueta/nombre. Es un contenedor (al cual le ponemos un nombre/rótulo) en donde vamos a guardar un sólo dato. Si un contenedor tiene un nombre = "Juan" y yo quiero guardar "María" deberia sacar "Juan" y poner nombre = "Maria".

// Depende de como se declaren las variables va a depender de como van a funcionar.
// Para declarar una variable debemos utilizar las palabras reservadas "var" o "let" seguidas por el nombre que deseamos asignarle.
// El nombre debe contener solo letras, dígitos o los símbolos $ y _.
// El primer carácter no debe ser un número.
// No debe ser una palabra reservada del lenguaje.

//* Diferencias entre var y let:

//? var: 
// son variables globales, pueden ser accedidas y reasignadas desde cualquier lugar de nuestro programa.

// var nombre = "Juan";

// if(true) {
//     var nombre = "María";
// }

// console.log(nombre);

//? let: 
// son variables locales, solo pueden ser accedidas dentro del bloque (lo que queda entre dos corchetes) donde se declaran . por ejemplo, en una función, bloques if, while, for y loops similares.

// let nombre = "Juan";

// if(true) {
//     let nombre = "María";
// }

// console.log(nombre);

//? const: 
// solo pueden ser accedidas dentro del bloque donde están declaradas, pero no permite que su valor sea reasignado, la variable es inmutable.



//* METODOS DE STRING: Son funciones que nos ayudan a trabajar con nuestras cadenas de texto.

// string.toUpperCase() : retorna el mismo texto (string) con las letras en mayúsculas.

// string.toLowerCase() : retorna el mismo texto (string) con las letras en minísculas.

// string.length : retorna la cantidad de letras del texto (string)

// string.repeat(n) : retorna el texto repetido n veces.

// string.replace(str1, str2) : retorna un texto reemplazando el texto str1 con str2.


//* PARSERS: 

//? parseInt() y parseFloat():
// son funciones creadas para analizar un string y devolver un número si es posible. Los espacios iniciales y finales se ignoran.

// JavaScript analiza la cadena para extraer las cifras que encuentre al principio, estas cifras al principio del string son las que se transforman a un tipo numérico.

// cuando se encuentra el primer carácter no numérico se ignora el resto de la cadena. Ejemplo:

// let num = "10a";
// parseInt(num); //devolverá el number 10.

// si el primer cáracter encontrado no es convertible a número, el resultado será NaN.


//? Number():
// ignora los espacios al principio y al final, pero, cuando un string contiene caracteres no convertibles a numeros el resultado siempre es NaN, no trata de 'extraer' la parte numérica. 

// con Number() podemos convertir booleanos en números. False siempre se convierte en 0 y true en 1.

// let num = true;
// Number(num); //devolverá 1.
