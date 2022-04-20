/* 
2)Strings
A)Crear una variable de tipo string con al menos 10 caracteres y convertir todo el texto en mayúscula (utilizar toUpperCase).*/
console.log('Ejercicio-2-A');
var palabraLarga;
palabraLarga = "Paralelepipedo";
console.log(palabraLarga.toUpperCase() );

/*B)Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con los primeros 5 caracteres guardando el resultado en una nueva variable (utilizar substring).*/
console.log('Ejercicio-2-B');
var palabraLarga;
palabraLarga = "Paralelepipedo";
var palabraSubLarga = palabraLarga.substring(0, 5)
console.log(palabraSubLarga)

/*C)Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con los últimos 3 caracteres guardando el resultado en una nueva variable (utilizar substring).*/
console.log('Ejercicio-2-C');
var palabraLarga;
palabraLarga = "Paralelepipedo";
var palabraSubLarga = palabraLarga.substring(palabraLarga.length-3);
console.log(palabraSubLarga);

/*D)Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con la primera letra en mayúscula y las demás en minúscula. Guardar el resultado en una nueva variable (utilizar substring, toUpperCase, toLowerCase y el operador +).*/
console.log('Ejercicio-2-D');
var palabraLarga;
palabraLarga = "Paralelepipedo";
var palabraSubLarga = palabraLarga.substring(0,1).toUpperCase() + palabraLarga.substring(1, 14).toLowerCase();
console.log(palabraSubLarga);

/*E)Crear una variable de tipo string con al menos 10 caracteres y algún espacio en blanco. Encontrar la posición del primer espacio en blanco y guardarla en una variable (utilizar indexOf).*/
console.log('Ejercicio-2-E');
var palabraEspaciada;
palabraEspaciada = "Paralelepipedo Uno";
var palabraSubLarga = palabraEspaciada.indexOf(' ', 0)
console.log(palabraSubLarga);

/*F)Crear una variable de tipo string con al menos 2 palabras largas (10 caracteres y algún espacio entre medio). Utilizar los métodos de los ejercicios anteriores para generar un nuevo string que tenga la primera letra de ambas palabras en mayúscula y las demás letras en minúscula (utilizar indexOf, substring, toUpperCase, toLowerCase y el operador +).*/
console.log('Ejercicio-2-F');
var palabraLarga;
palabraLarga = "Paralelepipedo Internet";
var palabraEspaciada = palabraLarga.indexOf('
console.log(palabraEspaciada)
var palabraSubLarga = palabraLarga.substring(0,1).toUpperCase() + palabraLarga.substring(1, 24).toLowerCase();
console.log(palabraSubLarga);
