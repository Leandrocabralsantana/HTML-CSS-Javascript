/*4)If Else
A)Crear un número aleatorio entre 0 y 1 utilizando la función Math.random(), si el valor es mayor o igual que 0,5 mostrar una alerta con el mensaje “Greater than 0,5” y sino un alerta con el mensaje “Lower than 0,5”.*/

console.log('Ejercicio-4-A');
var randomNumero = Math.random();
    if (randomNumero >=0,5) {
        alert('Greater than 0,5')
}else {
    alert('Lower than 0,5')
}
/*B)Crear una variable “Age” que contenga un número entero entre 0 y 100 y muestre los siguientes mensajes de alerta:
“Bebe” si la edad es menor a 2 años;
“Niño” si la edad es entre 2 y 12 años;
“Adolescente” entre 13 y 19 años;
“Joven” entre 20 y 30 años;
“Adulto” entre 31 y 60 años;
“Adulto mayor” entre 61 y 75 años;
“Anciano” si es mayor a 75 años.*/
console.log('Ejercicio-4-B');
var agePersonas = (Math.random() * 100);
    if (agePersonas<=2) {
    alert('Bebe');
}   else if (agePersonas>=13&agePersonas<=19){
    alert('Adolescente');
}   else if (agePersonas>=20&agePersonas<=30){
    alert('Joven');
}   else if (agePersonas>=31&agePersonas<=60){
    alert('Adulto')
}   else if (agePersonas>=61&agePersonas<=75){
    alert('Adulto mayor');
}   else if (agePersonas>75){
    alert('Anciano');
}