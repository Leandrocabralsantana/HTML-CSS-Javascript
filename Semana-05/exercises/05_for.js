/*5)For
A)Crear un array que contenga 5 palabras y recorrer dicho array utilizando un bucle for de JavaScript para mostrar una alerta utilizando cada una de las palabras.*/
console.log('Ejercicio-5-A');
var arrayNuevo = ['lunes', 'martes', 'miercoles', 'jueves', 'viernes']
for (var i=0; i<5; i++){
    alert(message = arrayNuevo[i])
}
/*B)Al array anterior convertir la primera letra de cada palabra en mayúscula y mostrar una alerta por cada palabra modificada.*/
/*/console.log('Ejercicio-5-B');
for (var i=0; i<5; i++){
    alert(message = arrayNuevo[i].substring(0,1).toUpperCase();+arrayNuevo[i].substring(1));
    )
}
/*C)Crear una variable llamada “sentence” que tenga un string vacío, luego al array del punto a) recorrerlo con un bucle for para ir guardando cada palabra dentro de la variable sentence. Al final mostrar una única alerta con la cadena completa.*/
console.log('Ejercicio-5-C');
var sentence = ' ';
for(var i=0;i<5;i++){
    sentence = sentence + arrayNuevo[i];
}
alert(sentence);

/*D)Crear una array vacío y con un bucle for de 10 repeticiones. Llenar el array con el número de la repetición, es decir que al final de la ejecución del bucle for debería haber 10 elementos dentro del array, desde el número 0 hasta al número 9. Mostrar por la consola del navegador el array final (utilizar console.log).*/
console.log('Ejercicio-5-D');
var vacioArray = [];
for(var i=0;i<10;i++){
    vacioArray[i] = i;
}
console.log(vacioArray)