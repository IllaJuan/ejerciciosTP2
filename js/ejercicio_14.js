let texto = prompt("Ingrese un texto:");
let nuevoTexto = [];

for (let i = 0; i < texto.length; i++) {
    nuevoTexto[i] = texto[i];
}

document.write(nuevoTexto.join("-"));