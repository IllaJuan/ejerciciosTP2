let texto = prompt("Ingrese un texto:");
let vocales = ["a","e","i","o","u"];
let cantidadVocales = 0;

texto = texto.toLowerCase();

for (let i = 0; i < texto.length; i++) {
    for (let j = 0; j < vocales.length; j++) {
        if (texto[i] == vocales[j]) {
            cantidadVocales++;
        }
    }
}

document.write(`En el texto ingresado hay ${cantidadVocales} vocales.`);