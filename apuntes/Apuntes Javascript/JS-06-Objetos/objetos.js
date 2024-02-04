var deportes = {
    conBalon: ['fútbol', 'voley', 'basket'],
    sinBalon: ['boxeo', 'natación', 'sky'],
};

var persona = {
    nombre: 'Lucas',
    edad: 26,
    estudios: { esProgramador: true },
};

//! Acceder:
var persona = { nombre: 'Lucas', edad: 26, estudios: { esProgramador: true } };
console.log(persona.edad);

//! Asignar valores a un objeto: si la propiedad ya existe solo se reasigna un valor.
persona.nombre = "Martín";
persona.edad = 27;
console.log(persona.nombre);
console.log(persona.edad);

//! Crear propiedades: la sintaxís es la misma pero si la propiedad no existe se crea y se asigna un valor.
var autos = {};
autos.marcas = ['Ford', 'Audi', 'Nissan'];
console.log(autos);

//! Borrar propiedades: 
delete autos.marcas;
console.log(autos);

//! Guardar funciones dentro de un objeto:
var misFunciones = {
    saludar: function () {
        console.log('Hola');
    },
};
console.log(misFunciones.saludar());


//! Dot-Notation: notación por punto. Se llama así porque estamos usando un punto para acceder a las propiedades.
var atuendos = {
    manos: ['Guantes', 'Anillos'],
    pies: ['Zapatos', 'Soquetes'],
};
console.log(atuendos.manos);

//* Bracket-Notation: notación por corchetes.
atuendos['piernas'] = ['Bermudas', 'Pantalones'];
console.log(atuendos);


var comidas = {};
var diferenciaDeNotaciones = function (propUno, propDos) {
    comidas.propUno = ["Frutas", "Vegetales"]; // Dot notation. (si cambiamos a bracket notation pasará lo mismo que el ejemplo de abajo).
    comidas[propDos] = ['Hamburguesa', 'Papas fritas']; // Bracket notation: Al poner sin comillas indicamos que el nombre de la propiedad será la variable y no la palabra literal propDos.
}
diferenciaDeNotaciones('saludable', 'noSaludable');
console.log(comidas);

// Muchas veces necesitamos guardar una variable externa como propiedad de un objeto, en esos casos hay que utilizar bracket notation sin comillas para que funcione correctamente.

//! Objetos avanzados:
//* Métodos:
//? hasOwnProperty() (trad. tiene su propiedad):
/* Se utiliza para determinar si el objeto tiene una propiedad con un nombre específico. Devuelve un booleano que indica si el objeto posee directamente la propiedad o si la propiedad es heredada a través de la cadena de prototipos. */
var libro = { autor: 'Borges', genero: 'Policial', año: 1998 };
var tienePropiedad = libro.hasOwnProperty('nombre');
console.log(tienePropiedad);

var tienePropiedad = libro.hasOwnProperty('autor');
console.log(tienePropiedad);

//? Object.keys(): 
// devuelve un arreglo con el nombre de todas las propiedades de un objeto
var todasLasPropiedades = Object.keys(libro);
console.log(todasLasPropiedades);

//? for in:
// estructura de bucle en JS que se utiliza para recorrer las propiedades de un objeto.
// nos permite iterar sobre un objeto utilizando dos variables pivot. Una representa el objeto que recorremos, y la otra la propiedad en la que se está realizando la iteración. Utilizando ambos valores podremos acceder al valor de cada propiedad del objeto.
var mundo = { continentes: 7, paises: 195, oceanos: 5 };
for (var prop in mundo) {
    console.log("Esta es la propiedad: " + prop);
    console.log("Este es el valor: " + mundo[prop]);
};

//? this:
// es una referencia al objeto en el cual se está ejecutando el código en ese momento. El valor de this depende del contexto en el que se utiliza. 
// Cuando una función se utiliza como método de un objeto, this apunta al objeto que contiene el método.
var mascota = {
    animal: 'Perro',
    raza: 'Callejero Alemán',
    amistoso: true,
    dueño: 'Lisandro Escalada',
    info: function () {
        console.log('Mi perro es un ' + this.raza);
        console.log('El dueño es ' + this.dueño);
    },
};
console.log(mascota.info());