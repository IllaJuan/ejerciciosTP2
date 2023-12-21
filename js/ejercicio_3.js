let texto = prompt("Ingrese un texto:");
let textoFinal = "";

while (texto != null && texto != "") {
    texto = texto.concat("-");
    textoFinal = textoFinal.concat(texto);
    texto = prompt("Ingrese un texto:");
}

if (textoFinal != "") {
    textoFinal = textoFinal.replace(/-([^-]*)$/, '');
    document.write(textoFinal);
} else {
    document.write("No ha ingresado texto.");
}