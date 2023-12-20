let edad = parseInt(prompt("Ingrese su edad:"));

if (edad >= 18 && edad <= 130) {
    alert("Ya puedes conducir!");
} else if (edad > 0 && edad < 18) {
    alert("Eres menor de edad. No puedes conducir!");
} else {
    alert("Edad no valida.");
}
