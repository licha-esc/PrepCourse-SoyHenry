/* Permiten realizar acciones que son de carácter repetitivo.

FOR: se suele utilizar cuando sabemos seguro el número de veces que queremos que se ejecute. 

for (1; 2; 3) {
    código a ejecutar en cada iteración
}

1- inicialización: Acá se inicializa una variable que actuará como contador.
2- condición: Es la condición que debe cumplirse para que el bucle siga ejecutándose en cada iteración.
3- actualización: Acá decimos a nuestro bucle que debe suceder con la variable de control desp de cada iteración.

El bucle for se ejecutará siempre que la condición sea verdadera. Cuando la condición se vuelva falsa, el bucle se detendrá.
*/

// Ejemplo 1: Imprimir los números del 1 al 5.
/* for (let i = 1; i <= 5; i++) {
  console.log(i);
} */

// Ejemplo 2: Iterar sobre un arreglo de frutas.
/* const frutas = ['manzana', 'naranja', 'plátano', 'pera'];

for (let i = 0; i < frutas.length; i++) {
  console.log(frutas[i]);
} */

// Ejemplo 3
 var suma = 0;
/*
for (var i=0; i<5; i++){
    suma = suma + i; // Se suma el valor actual de 'i' a la variable 'suma'.
    console.log('Variable de iteración:', i); // Se imprime el valor actual de 'i' en cada iteración.
    console.log('Var suma: ', suma);
} */
// console.log(suma);


/* WHILE: nos permite repetir una acción siempre y cuando la condición sea verdadera. Ej,  una función que siga agregando +1 hasta llegar a un número determinado.

while (condition) {
     Código a ejecutar mientras la condición sea verdadera
}
*/

while (suma < 3) {
    suma = suma + 1;
    console.log(suma);
}