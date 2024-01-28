//! OBJETOS: 
/*links:
https://es.javascript.info/object
https://www.youtube.com/watch?v=5DaZXXbHI_U&ab_channel=deivchoi

Los tipos primitivos en JavaScript son undefined, null, boolean, number y string. El resto de elementos son objetos, tanto las funciones, arrays, expresiones regulares como los propios objetos. Un objeto es un contenedor de propiedades, la cual tiene un nombre y un valor. El nombre de una propiedad puede ser una cadena de caracteres, incluso una vacía. El valor puede ser cualquier valor que podamos utilizar en JavaScript, excepto undefined.

Terminología:
· Clase: define las características del objeto.
· Objeto: una instancia de una clase.
· Propiedad: un dato/característica del objeto, como el color.
· Método: una capacidad/función del objeto, como caminar.
· Constructor: es un método llamado en el momento de la creación de instancias.

El array sirve para tener muchos elementos que son del mismo tipo de dato. 
El objeto para tener muchos elementos que se relacionan entre si porque pertenecen a una identidad pero pueden ser de diferentes tipos de datos.
*/

// comparación entre array y objeto:
// ARRAY: en teoría un array es un objeto en donde la key que usa para guardar cada valor de los elementos es la posición. 
const superheroe = ['Superman', 'Clark', 'Kent', 'DC'];
console.log(superheroe);

//OBJETO:
const superhero = {
    alias: 'Superman',
    nombre: 'Clark',
    apellido: 'Kent',
    universo: 'DC'
};
console.log(superhero);


//! DECLARAR UN OBJETO: hay 2 formas
/*
1# let user = {};  // sintaxis de "objeto literal"
2# let user = new Object(); // sintaxis de "constructor de objetos"
*/


//? LITERAL: let user = {};
// Se declara una variable y dentro de llaves van las propiedades separadas por comas. Una propiedad tiene una clave (también conocida como “nombre” o “identificador”) antes de los dos puntos ":" y un valor a la derecha.

const literalObject = { // un objeto
    firstName: "Licha",  // en la clave firstName se almacena el valor "Licha".
    "city-residence": "Corrientes", // el nombre de la clave hay que poner entre comillas cuando hay un guión(-), porque lo toma como operador(resta) y tira error.
    job: "Developer" // en la clave job se almacena el valor "Developer".
};
console.log(literalObject);


//? FUNCIONAL: let user = new Object();  
/* En JS la función sirve como el constructor del objeto, por lo que no hay necesidad de definir explícitamente un método constructor.
Para crear un objeto usando una función constructora:
1# Definir el tipo de objeto escribiendo una función constructora. Por convención va en mayúscula la letra inicial.
2# Crear una instancia del objeto con el operador new.

Para definir un tipo de objeto, crea una función para el objeto que especifique su nombre, propiedades y métodos. Por ejemplo, supongamos que deseas crear un tipo de objeto para coches. Quieres llamar Car a este tipo de objeto, y deseas que tenga las siguientes propiedades: make, model y year. Para ello, podrías escribir la siguiente función:
*/
function Car(make, model, year) {
    this.marca = make;
    this.modelo = model;
    this.año = year;
    }

// this se usa para asignar valores a las propiedades del objeto en función de los valores pasados a la función.

// para crear un objeto llamado Car1:
var Car1 = new Car('Porsche', '911', 1964);
console.log(Car1);

// se puede crear cualquier número de objetos Car con las llamadas a new:

var Car2 = new Car('Tesla', 'Cybertruck', 2023);
console.log(Car2);

//! AGREGAR PROPIEDAD:
// Se usa tanto para asignar como reasignar una propiedad, pero no es una buena práctica reasignar (principio de programación funcional, que es la inmutabilidad, que dice que no deberiamos modificar directamente los objetos o los arrays sino ir creando copias de esos datos con los nuevos valores).
literalObject.favouriteColor = "Blue"; // sigue siendo el mismo objeto con propiedades modificadas.
console.log(literalObject);

normalObject.firstName = "Vera"; 
console.log(normalObject); 


//! VER UNA PROPIEDAD: hay 2 formas, a través de la notación con puntos o a través de la notación con corchetes.
// con puntos (preferida)
console.log(literalObject.job);
console.log(literalObject["city-residence"]); // cuando no se puede usar el punto por algun motivo (en este caso tmb toma como resta el -) hay que usar la otra sintaxis.

// con corchetes
console.log(literalObject["job"]); // sintaxis similar a arrays.

//! BORRAR PROPIEDAD:
const persona = {
    nombre: "Ana",
    edad: 24,
    comidaFavorita: "Hamburguesas",
}

delete persona.comidaFavorita; // usamos esta sintaxis
console.log(persona);


//! RECORRER UN OBJETO:
// No es posible de hacer con métodos de arrays tradicionales como el foreach o el map. Contamos con la estructura For in, que nos permite recorrer o iterar un objeto por cada propiedad en ese objeto (FOR each property IN the object).

var obj = {
    a: 1,
    b: 2,
    c: 3
};

for (const prop in obj) {
    console.log(`obj.${prop} = ${obj[prop]}`);
} 
// obj.a = 1
// obj.b = 2
// obj.c = 3


//! MÉTODOS:
// Son funciones que se declaran dentro de un objeto. Son exactamente iguales que cualquier otra función.

const user = {
    name: "Manz",
    talk: function() { return "Hola"; }
    };

    console.log(user.name);        // Es una variable (propiedad), devuelve "Manz"
    console.log(user.talk());     // Es una función (método), se ejecuta y devuelve "Hola"



// const user = {
//     edad: 33,
//     admin: true,
//     nombre: 'Juan',
//     saludar() {
//         console.log('Hola');
//     }
// }

// user.saludar(); // Hola  <- Función dentro del objeto.


/* Éste método (función) cuando está dentro de un objeto tiene acceso a todas las propiedades de este.
>Ejemplo, para saludar al user: */

// const user = {
//     edad: 33,
//     admin: true,
//     nombre:  'Juan',
//     saludar() {
//         console.log(`Hola ${user.nombre}`);
//     }
// }
// user.saludar();


//? Stick

// const user = {
//     edad: 33,
//     admin: true,
//     nombre:  'Juan',
//     saludar() {
//         console.log(`Hola ${this.nombre}`);
//     }
// }
// user.saludar();


//? OBJETOS Y ARRAYS:
/*
Es muy común utilizarlos en conjunto.
en este caso tenemos un ARRAY con una colección de tareas donde cada tarea es un OBJETO con sus respectivas propiedades.
*/

let tasks = [ 
    {
        id: 1,
        day: 'Lunes',
        task: "Leer un libro",
        state: "Pendiente"
    },
    {
        id: 2,
        day: 'Miércoles',
        task: "Sacar al perro",
        state: "Pendiente"
    },
    {
        id: 3,
        day: 'Viernes',
        task: "Jugar videojuegos",
        state: "Pendiente"
    },
];

console.log(tasks);


//! CLASES:
// Definen propiedades y comportamientos de subclases u objetos hijos. Se usa la palabra reservada class y luego el nombre de la calse. Dentro del bloque de llaves, tenemos un método constructor que viene a reemplazar los paréntesis de parámetros de una función tradicional, con este método es que definimos las propiedades del objeto. Luego de forma independiente, declaramos sus métodos como sayHi();y sayGoodBye();

class Personaje {
    constructor(name, lastname, age, movie) {
        this.nombre = name;
        this.apellido = lastname;
        this.edad = age;
        this.pelicula = movie;
    }

    sayHi() {
        console.log("Hola soy " + this.nombre);
    }

    sayGoodBye() {
        console.log("Hasta luego!");
    }
}

const personaje = new Personaje('Peter', 'Parker', 19, 'Spiderman');
console.log(personaje);

// acá también podemos acceder a las propiedades del objeto mediante el uso de punto y de los métodos que hayamos creado para eso.

console.log(personaje.nombre); // Peter

personaje.sayHi(); // Hola soy Peter
personaje.sayGoodBye(); // Hasta luego!

/*
Conclusión:
Si bien existen diversas maneras de declarar un objeto, todas son bastante similares o poseen comportamientos muy parecidos. Cual usar va a depender del contexto donde se necesite ese objeto o de su implementación. Por ejemplo, si necesitamos crear muchos objetos con la misma estructura en tiempo de ejecución, a partir de la entrada de datos del usuario quizás un objeto de clase o funcional sea lo mejor ya que nos permite crear muchas copias con solo instanciar el objeto a través de la palabra new. Sin embargo, si nuestro caso es mucho más sencillo y solo necesitamos crear objetos casuales, que vayan a vivir poco tiempo y sin mucha complejidad entonces un objeto literal alcanzaría.
*/