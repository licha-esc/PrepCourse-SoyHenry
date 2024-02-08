//! Callback:
// Proceso en el que una función se pasa como argumento a otra función y la ejecuta en su interior.
// · Nos aseguran que una función no se va a ejecutar antes de que se complete una tarea, sino que se ejecutará justo después de que la tarea se haya completado.

/* var devuelvoUsuario = function () {
    return 'Lisandro';
};

var devuelvoSaludo = function () {
    return 'Hola';
};

var saludar = function (cb1, cb2) {
    return cb1() + " " + cb2();
};

var resultado = saludar(devuelvoSaludo, devuelvoUsuario);
console.log(resultado); */

var devuelvoFrase = function(comida) {
    return 'Hoy quiero comer: ' + comida;
};

var hablar = function (comida, cb) {
    return cb(comida);
};

var fraseFinal = hablar('Pizza', devuelvoFrase);
console.log(fraseFinal);