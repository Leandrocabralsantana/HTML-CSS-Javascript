/*3)Arrays
A)Dado el siguiente array: ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"] mostrar por consola los meses 5 y 11 (utilizar console.log).*/
console.log('Ejercicio-3-A');
var mesesArray =  ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
console.log(mesesArray[4] + mesesArray[10]);

/*B)Ordenar el array de meses alfabéticamente y mostrarlo por consola (utilizar sort).*/
console.log('Ejercicio-3-B');
console.log(mesesArray.sort())

/*C)Agregar un elemento al principio y al final del array (utilizar unshift y push).*/
console.log('Ejercicio-3-C');
mesesArray.unshift('MesCero') + mesesArray.push('Fin');
console.log(mesesArray);

/*D)Quitar un elemento del principio y del final del array (utilizar shift y pop).*/
console.log('Ejercicio-3-D');
mesesArray.shift();
mesesArray.pop();
console.log(mesesArray);

/*E)Invertir el orden del array (utilizar reverse).*/
console.log('Ejercicio-3-E');
console.log(mesesArray.reverse());

/*F)Unir todos los elementos del array en un único string donde cada mes este separado por un guión - (utilizar join).*/
console.log('Ejercicio-3-F');
console.log(mesesArray.join('-'));

/*G)Crear una copia del array de meses que contenga desde Mayo hasta Noviembre (utilizar slice).*/
console.log('Ejercicio-3-G');
var mesesArrayCorto = mesesArray.slice(4,10);
console.log(mesesArrayCorto);