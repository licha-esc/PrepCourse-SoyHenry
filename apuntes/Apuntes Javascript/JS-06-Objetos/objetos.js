var deportes = {
    conBalon: ['fútbol', 'voley', 'basket'],
    sinBalon: ['boxeo', 'natación', 'sky'],
};

var persona = {
    nombre: 'Lucas',
    edad: 26,
    estudios: { esProgramador: true },
};

//* Acceder:
var persona = { nombre: 'Lucas', edad: 26, estudios: { esProgramador: true } };
console.log(persona.edad);

//* Asignar valores a un objeto: si la propiedad ya existe solo se reasigna un valor.
persona.nombre = "Martín";
persona.edad = 27;
console.log(persona.nombre);
console.log(persona.edad);

//* Crear propiedades: la sintaxís es la misma pero si la propiedad no existe se crea y se asigna un valor.
var autos = {};
autos.marcas = ['Ford', 'Audi', 'Nissan'];
console.log(autos);

//* Borrar propiedades: 
delete autos.marcas;
console.log(autos);

//* Guardar funciones dentro de un objeto:
var misFunciones = {
    saludar: function () {
        console.log('Hola');
    },
};
console.log(misFunciones.saludar());

var atuendos = {
    manos: ['Guantes', 'Anillos'],
    pies: ['Zapatos', 'Soquetes'],
};
console.log(atuendos.manos);


/* Dot-Notation: notación por punto. Se llama así porque estamos usando un . para acceder a las propiedades.
Bracket-Notation: notación por corchetes. */

