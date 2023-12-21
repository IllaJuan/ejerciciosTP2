let dni = prompt("Ingrese su número de DNI:");
let letras = ["T","R","W","A","G","M","Y","F","P","D","X","B","N","J","Z","S","Q","V","H","L","C","K","E"];
let resultado = 0;

while (dni != null && dni != "") {
    if (isNaN(dni)) {
        alert("Lo ingresado NO es un número.");
    } else {
        dni = parseInt(dni);
        if (dni > 0 && dni < 99999999) {
            resultado = dni % 23;
            alert(`El resultado es ${letras[resultado]}`);
        } else {
            alert("El número debe estar entre el 0 y el 99999999.");
        }
    }
    dni = prompt("Ingrese su número de DNI:");
}