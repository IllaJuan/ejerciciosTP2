let texto = prompt("Ingrese un texto:");
let vocales = ["a","e","i","o","u"];
let posicion = texto.length;

texto = texto.toLowerCase();

for (let i = 0; i < vocales.length; i++) {
    if(texto.includes(vocales[i]) && texto.search(vocales[i]) < posicion) {
        posicion = texto.search(vocales[i]);
    }
}

if (posicion != texto.length) {
    document.write(`La vocal '${texto[posicion]}' está en la posición ${posicion}.`);
} else {
    document.write("No hay vocales en el texto ingresado.");
}