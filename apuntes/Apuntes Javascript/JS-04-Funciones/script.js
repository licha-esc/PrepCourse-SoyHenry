//* FUNCIONES:
// Son bloques de código que permiten encapsular comportamientos para ser reutilizados.

// DECLARACIÓN DE UNA FUNCIÓN: 

//! Función declarada:
function sumar() {
    // código a ser ejecutado
}
/* consta de :
1# palabra reservada function.
2# nombre de la funcion con un par de parentesis.
3# bloque de llaves donde se ingresará el código que realizará la función. */

//! Función expresada:
const sumar = function() {
    // código a ser ejecutado
}

/* En este caso la función es anónima (sin nombre) y se guarda dentro de una variable o constante tradicional.

La diferencia fundamental entre las funciones declaradas y las funciones expresadas es que estas últimas sólo están disponibles a partir de la inicialización de la variable. Si ejecutamos la variable antes de declararla, nos dará un error. */


//! INVOCAR A UNA FUNCIÓN:
// Una vez hayamos declarado nuestra nueva función, para poder utilizarla debemos invocarla. Para ello escribiremos el nombre de la función seguida de un par de paréntesis.

function saludar() {
    console.log("Hola mundo!");
} //

saludar(); // Hola mundo!
// En los casos que las funciones retornen un valor podemos guardar el resultado en una variable para ser utilizado posteriormente.


//! RETURN:
/* Retorna un dato que tendrá que ser utilizado en otra parte de nuestro código, como por ejemplo el resultado de la suma de 2 valores.
Ese valor se puede guardar en una variable para ser utilizado más adelante o implementarlo directamente desde la invocación de la función */

function sumar() {
    let resultado = 20 + 10;
    return resultado; 
}

let suma = sumar(); // Guarda el valor 30 en la variable suma.

console.log(sumar()); // Imprime en consola el valor devuelto por la función.

/* todo lo que se escriba luego de la sentencia return en el ámbito de nuestra función será ignorado, ya que esta es considerada como la línea de salida del bloque de la función. */


//! PARÁMETROS Y ARGUMENTOS: 
/* Un parámetro es una variable dentro de los paréntesis en la declaración de función (es un término reservado para el momento de la declaración).

Un argumento es el valor que es pasado a la función cuando ésta es llamada (es el término para el momento en que se llama).

Al momento de crear nuestra función, debemos tener claro cuántos parámetros vamos a esperar o necesitar y colocarlos dentro de los paréntesis separados por cada uno por una coma. 

Estos nos van a permitir crear funciones “multiuso” es decir, que no operen bajo datos estáticos, sino que el resultado que devuelva la función dependa de los datos que recibe como input. 

En el próximo ejemplo podemos ver una función usada más de una vez que retorna diferentes resultados dependiendo los argumentos pasados como parámetro: */

const sumar = (a, b) => {
    let resultado = a + b;
    return resultado;
}

console.log(sumar(12, 5)); // devuelve 17
console.log(sumar(20, 33)); // devuelve 53

/* En este ejemplo, a y b son los parámetros mientras que 12, 5 y 20, 33 son los argumentos pasados como parámetros de la función en cada invocación.
Gracias a ellos podemos reutilizar la lógica guardada dentro de la función sumar para obtener distintos resultados dependiendo de los valores que recibe. */


//! FUNCIÓN DE FLECHA - ARROW FUNCTION:
/* Es una alternativa compacta a la expresión de función tradicional, pero es limitada y no se puede utilizar en todas las situaciones.

Características:
1º es una función anónima, para declararla necesito almacenarla en una variable para poder llamarla después.
2º ya no necesita la palabra reservada function.
3º después de los paréntesis colocamos una “flecha”. En caso de que haya un sólo parámetro podemos sacar los paréntesis. Cuando la función no tiene parámetros los paréntesis serán obligatorios.
4º a continuación de la flecha el uso de llaves es OPCIONAL (solo si hay más de una línea se usa). En caso de NO usarlas la flecha será un RETURN incluido para lo que esté inmediatamente después en la misma línea.
*/

let buscar = () => "No encontramos lo que buscabas"; // En este caso (como es una sola línea de código) no es necesaria la palabra return, ya que se encuentra incluida en la flecha. Sin embargo en los casos donde haya que declarar nuestra función en más de una línea, si necesitaremos las llaves y la palabra return para devolver nuestros valores.
console.log(buscar());

// Ejemplo donde hay más de una línea de código:
const sumar = () => {
    let resultado = 30 + 10;
    return resultado;
}
console.log(sumar());

// Ejemplo donde hay una sola línea y 2 parámetros.
let sumar2 = (a,b) => a + b;
console.log(sumar2(5,7)); // 12

// Otro ejemplo, función clásica:
function saludar(nombre) {
    return "Hola " + nombre;    
}
console.log(saludar("Ana")); // Hola Ana

// Función anónima: funciones sin nombre, deben almacenarse en una variable para poder ser llamadas luego.
let saludo = function(nombre) {
    return "Hola " + nombre;
}
console.log(saludo("Ana")); // Hola Ana

// Función flecha: variable () => {}   
let saludo2 = nombre => "Hola " + nombre; 
console.log(saludo2("Ana")); // Hola Ana


//! CALLBACK:
/* Es una forma de asegurarnos de que un determinado código no se ejecute hasta que otro código haya terminado de ejecutarse.

Es una función que se pasa a otra función como un argumento, que luego se invoca dentro de la función externa para completar algún tipo de rutina o acción. Es decir, pasamos una función B por parámetro a una función A, de modo que la función A puede ejecutar esa función B de forma genérica desde su código, y nosotros podemos definirlas desde fuera de dicha función.

En funciones sincrónicas estas funciones se ejecutan inmediatamente al ejecutar la función principal.

En funciones asincrónicas el callback es la forma que tenemos para ejecutar una función una vez terminado un proceso dependiente anterior.

Los callbacks sientan las bases para el manejo del asincronismo que aprenderemos más adelante. */


const sumar = (a, b, accion) => {
    let resultado = a + b;

    return accion(resultado);
};

sumar(12, 5, console.log); // 17
sumar(20, 33, alert); // Se visualiza en el html una alerta con la suma = 53.


/* En el ejemplo anterior, tenemos un tercer parámetro llamado acción que recibirá como argumento otra función, en este caso utilizamos console.log y alert que ya conocemos pero ésta podría ser también cualquier otra función creada por nosotros para tal fin.

Esa acción que enviamos, es ejecutada o invocada en el return de la función principal.

Cabe destacar que los callbacks a menudo se utilizan para ejecutar una acción luego que otra acción haya finalizado, es decir, nos permiten comenzar una tarea, continuar con la ejecución de nuestro programa hasta que la tarea haya finalizado y luego recuperar el resultado en otra función que retorne el valor o realice otra acción.

Este es el principio de asincronismo conocido en javascript, ya que al ser un lenguaje de un solo hilo de ejecución, solo podemos procesar una tarea a la vez y eso bloquea los tiempos de espera o procesamiento del resto del programa.

Gracias al asincronismo y como trabaja es que vamos a encontrar alternativas para “dejar corriendo” ciertas tareas mientras nuestro programa continúa y recuperar lo resultados de esas tareas cuando hayan finalizado, sin embargo este concepto lo trabajaremos más adelante. */