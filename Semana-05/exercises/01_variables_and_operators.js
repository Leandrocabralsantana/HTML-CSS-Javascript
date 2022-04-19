/*1- Variables y Operadores
A) Crear dos variables numéricas y utilizar el operador suma para guardar el valor de la suma de ambos números en una 3er variable. */
console.log('Ejercicio-1-A'); 
var numero1, numero2;
numero1 = 1;
numero2 = 2;
var totalNumero = numero1 + numero2;
console.log(totalNumero);

/*B) Crear dos variables de tipo String y concatenarlas guardando el resultado en una 3er variable.*/
console.log('Ejercicio-1-B')
var nombrePersona, apellidoPersona;
nombrePersona = "Leandro";
apellidoPersona = "Cabral";
var nombreCompleto = nombrePersona + ' ' + apellidoPersona;
console.log(nombreCompleto);

/*C) Crear dos variables de tipo String y sumar el largo de cada variable (cantidad de letras del string) guardando el resultado de la suma en una 3er variable (utilizar length).*/
console.log('Ejercicio-1-C')
var nombrePersona, apellidoPersona;
nombrePersona = "Leandro";
apellidoPersona = "Cabral";
var totalLenght = nombrePersona.length + apellidoPersona.length;
console.log(totalLenght)