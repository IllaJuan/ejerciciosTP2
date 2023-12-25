let nombre = [];
let edad = [];
let edadMaxima;
let indiceNombre;

for (let i = 0; i < 3; i++) {
    nombre[i] = prompt("Ingrese su nombre:");
    edad[i] = parseInt(prompt("Ingrese su edad:"));    
}

edadMaxima = Math.max(...edad);
indiceNombre = edad.indexOf(edadMaxima);

document.write(`El mayor es ${nombre[indiceNombre]} y tiene ${edadMaxima}`);