let filas = parseInt(prompt("Ingrese el número de filas:"));
let columnas = parseInt(prompt("Ingrese el número de columnas:"));
let contador = filas * columnas;

for (let i = 0; i < filas; i++) {
    for (let j = 0; j < columnas; j++) {
        document.write((contador) + "  ");
        contador--;
    }
    document.write("<br>");   
}
