//* ARRAYS:
/* Son una lista ordenada de elementos, donde cada elemento tiene una posición única.
Nos permiten agrupar conjuntos de valores relacionados en una misma variable.
Elementos son los datos que hayamos guardado e índice es la posición de cada uno de esos elementos. */

const frutas = ['Manzana', 'Pera', 'Frutilla', 'Kiwi', 'Sandia'];
const datos = ["Jose", 23, true, "Calle Falsa 123"];
/* Estos valores ocupan una posición dentro del array. A esa posición se la conoce como índice y siempre comienza en 0.
Al tener 5 elementos, estos comienzan desde el índice 0 (Manzana) hasta el índice 4 (Sandía).
En este ejemplo conocemos la extensión del array, pero muchas veces consultaremos este dato ya sea porque no lo sabemos o porque fue modificado a través de la ejecución del programa. */
//! CONSULTAR LONGITUD DEL ARRAY:
console.log(frutas.length);
// También podemos consultar los elementos de un array en relación a la posición que ocupan dentro de él.
// Para ellos usaremos la siguiente sintaxis:
console.log(frutas[2]);
// A partir de la especificación EcmaScript 2022, podemos acceder a un array con el método .at() :
console.log(frutas.at(2));


//* MÉTODOS DE ARRAYS:
// Son funciones nativas que poseen los arrays y que nos permiten trabajar con ellos de forma sencilla, poniendo a disposición herramientas de adición, eliminación, filtrado y ordenado de elementos entre otras cosas.
//! AÑADIR ELEMENTOS:
frutas[5] = 'Melón'; // Agrega un elemento a la posición que indiquemos entre los []. Si agregamos una posición que ya existe, reemplaza al elemento existente. 
console.log(frutas);

frutas.push('Ananá'); // Agrega un elemento al final del array.
console.log(frutas);

frutas.unshift('Ciruela'); // Agrega un elemento al inicio del array.
console.log(frutas);

//! ELIMINAR ELEMENTOS:
frutas.pop(); // elimina el último elemento y lo retorna.
console.log(frutas);

frutas.shift(); // elimina el primer elemento y lo retorna.
console.log(frutas);

//! CONCATENAR ELEMENTOS:
// Nos permiten combinar arrays o crear cadenas de texto a partir de los valores de un mismo arreglo:
//? .concat()
// Combina 2 o más arrays pasados por parámetro.
const precioRemeras = [100, 320, 257];
const precioMedias = [50, 35, 23];
const precios2 = precioRemeras.concat(precioMedias);
console.log(precios2);

//? .join()
// Crea una cadena de texto a partir de todos los elementos de un array. Recibe por parámetro un separador de elementos de forma opcional.
let paises = ['Perú', 'Argentina', 'Ecuador', 'Uruguay'];
console.log(paises.join(' - '));

//! RECORRER ELEMENTOS:
//? .forEach()
// Este método permite recorrer cada elemento del array y ejecutar una función de callback proporcionada como argumento.
// Ejemplo 1
let num = [1, 2, 3, 4, 5];
num.forEach((numerito, index, array) => {
    // Multiplicar cada número por 2 y reemplazar el valor en el array.
    array[index] = numerito * 2;
}
);
console.log(num);

// Ejemplo 2
let verduras = ['lechuga', 'morrón', 'ajo', 'papa', 'zanahoria'];
verduras.forEach((verd) => console.log(verd));
console.log(verduras);

// Ejemplo 3
let suma = 0;
num.forEach((num) => suma += num);
console.log(suma);

//! FILTRAR ELEMENTOS:
//? .filter()
// filtra los elementos que cumplen cierta condición. Se usa cuando tenemos un array y necesitamos filtrar datos.
// Se pasa una función de callback con la condición que deben cumplir los elementos para ser filtrados.
let precio = [100, 349, 3, 63, 524, 217, 14];
let mayores = precio.filter((costo) => costo >= 100);
console.log(mayores);

//! BUSCAR ELEMENTOS:
//? find()
// Busca en un arreglo según una condición y devuelve el PRIMER valor que logre cumplirla.
const numeros = [200, 40, 1000, 500, 700];
const filtrados = numeros.find(item => item >= 350);
console.log(filtrados);


//* MODIFICAR O CREAR ARRAYS A PARTIR DE OTROS:
// Hay situaciones en las que tenemos un array y queremos crear nuevos subarrays a partir del original, o simplemente deseamos modificarlo para hacer ciertos cambios, pero de una forma más general y no tener que hacerlo elemento a elemento.

//! SEPARAR O CORTAR:
//? split() 
// Creamos un array a partir de una cadena de texto.
// El parámetro es la condición que separa a los elementos en la cadena.

let nombres = 'Juan, José, Mara, Ana';

nombres = nombres.split(',');

console.log(nombres); // [ 'Juan', ' José', ' Mara', ' Ana' ]


//? slice() 
// Devuelve una porción del array desde un rango definido.
// Por parámetro pasamos la posición inicial y final de los elementos a cortar.

const animales = ['Pato', 'Perro', 'Gato', 'Loro', 'Puma', 'Leon'];

console.log(animales.slice(2, 4)); // ['Gato', 'Loro']


//! ORDENAR:
//? sort()
// Permite ordenar alfabeticamente los elementos de un array.

const animales2 = ["pato", "perro", "gato", "loro", "puma"];

console.log(animales2.sort()); // [ 'gato', 'loro', 'pato', 'perro', 'puma' ]

/* En caso que deseemos ordenar números, el método sort resulta errático ya que valores como 10 y 100, los tomaría consecutivos ya que el 1 siempre viene antes del 2 alfabéticamente.
Para evitar esto, podemos aplicar el siguiente hack:

Para ordenar en orden ASC: */
let precios = [95, 5, 25, 10, 250];

precios.sort((a, b) => a - b);

console.log(precios);


// Para ordenar en orden DESC:
let precios3 = [95, 5, 25, 10, 2500];

precios3.sort((a, b) => b - a);

console.log(precios3);



//* ARRAY FUNCTIONS:
// Son métodos de array que reciben una función de callback por parámetro para obtener cierto resultado. 

//! ITERADORES:
//? forEach() 
// Este método no retorna ningún valor, solamente se limita a ejecutar el callback que le pasemos por cada elemento del array. 

const arr = [1, 2, 3, 4, 5, 6];

// forma larga:
// arr.forEach(item => {
//     console.log(item);
// }); // 1 2 3 4 5 6 

// resumida:
arr.forEach(item => console.log(item));

//---//
let precios4 = [95, 5, 25, 8, 33];

precios4.forEach(precio => console.log(precio));


//! VALIDADORES: 
//? every() 
// Verifica que TODOS los elementos cumplan alguna condición.

//Forma más larga:
let precios5 = [12, 4, 29, 98, 50]

let result = precios5.every(function (item) {
    if (item > 0) {
        return true;
    } else {
        return false;
    }
});

console.log(result); // true xq todos los elementos son > 0.

// Forma más corta:
let resultado = precios5.every(item => item > 6);

console.log(resultado); // false xq no todos los elementos son > 6.



//? some() 
// Verifica que ALGUNOS elementos cumplan alguna condición.

let resultados = precios5.some(item => item > 6);

console.log(resultados); // true xq algunos elementos son > 6. Con que uno solo cumpla esa condición es true.


//! ACUMULADORES:
//? reduce()
// Recorre cada elemento del array y va acumulando en una variable el valor anterior sumando el valor actual de esa iteración.

const nums = [1, 2, 3, 4, 5, 6];

const sum = nums.reduce((total, valor) => total + valor);
console.log(sum); // 21


//! TRANSFORMADORES:
//? map()
/* Permite transformar los elementos de un array creando un nuevo array con nuevos elementos (pero misma longitud) a partir de una condición. 

El método de map() toma un array con una cantidad de elementos determinada y crea uno nuevo (de igual longitud que el inicial) pero los elementos de este nuevo array van a ser el resultado de la función de callback pasada por parámetro. */

const names = ["Carla", "Pablo", "Lucia", "José", "Camila"];
const nameSizes = names.map(name => name.length); // En este caso la función callback es el length, que retorna la cantidad de letras de un texto (string).

console.log(nameSizes); // [5, 5, 5, 4, 6]



