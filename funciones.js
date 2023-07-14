/* FUNCIONES:
Son bloques de código que permiten encapsular comportamientos para ser reutilizados.

DECLARACIÓN DE UNA FUNCIÓN:

 Función declarada:
    consta de :
1# palabra reservada function.
2# nombre de la funcion con un par de parentesis.
3# bloque de llaves donde se ingresará el código que realizará la función. */

function sumar() {
    // código a ser ejecutado
}


//! Función expresada: la función es anónima (sin nombre) y se guarda dentro de una variable.
let sumar = function() {
    // código a ser ejecutado
}



/* INVOCAR A UNA FUNCIÓN:
Una vez hayamos declarado nuestra nueva función, para poder utilizarla debemos invocarla. Para ello escribiremos el nombre de la función seguida de un par de paréntesis. */

function saludar() {
    console.log("Hola mundo!");
} //

saludar();


/* FUNCIÓN DE FLECHA - ARROW FUNCTION:
 Es una alternativa compacta a la expresión de función tradicional, pero es limitada y no se puede utilizar en todas las situaciones.
  
 Características:
1º es una función anónima, para declararla necesito almacenarla en una variable para poder llamarla después.
2º ya no necesita la palabra reservada function.
3º después de los paréntesis colocamos una “flecha”. En caso de que haya un sólo parámetro podemos sacar los paréntesis. Cuando la función no tiene parámetros los paréntesis serán obligatorios.
4º a continuación de la flecha el uso de llaves es OPCIONAL (solo si hay más de una línea se usa). En caso de NO usarlas la flecha será un RETURN incluido para lo que esté inmediatamente después en la misma línea. */

let buscar = () => "No encontramos lo que buscabas"; // En este caso no es necesaria la palabra return, ya que se encuentra incluida en la flecha. En casos donde haya más de una línea si necesitaremos las {} y la palabra return para devolver nuestros valores.

console.log(buscar());