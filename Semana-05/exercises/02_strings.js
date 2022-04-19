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