let texto = prompt("Ingrese un texto:");
let nuevoTexto="";

for (let i = texto.length - 1; i >= 0; i--) {
    nuevoTexto = nuevoTexto.concat(texto[i]);
}

document.write(nuevoTexto);