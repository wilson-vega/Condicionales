let nombre = prompt("Hola, ¿cual es tu nombre?")
let año = prompt(nombre + " ¿En que año naciste?");
let operacion = 2022 - año;

if (operacion < 18) {
    alert(nombre + " tu edad es " + operacion + " Aproximadamente, eres una persona joven manten una buena salud y disfruta al maximo");
}

else if(operacion < 30) {
    alert(nombre + " tienes " + operacion + " aproximadamente eres joven pero no te confies, mantente en forma y come saludable");
}

else if (operacion < 55) {
    alert("Señor(a) " + nombre + " tu edad es " + operacion + " aproximadamente, debes llevar una vida saludable, comer bien y hacer ejercicio ")
}

else{
    alert("Valla joven ¡" + nombre + "! tienes " + operacion + " aproximadamente eres una persona joven y llena de vida");
}


