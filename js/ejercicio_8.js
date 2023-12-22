let piramide = parseInt(prompt("Ingrese el número para la pirámide:"));
let j = 0;

if (piramide > 0 && piramide <= 50) {
    for (let i = 1; i <= piramide; i++) {
        while (j != i) {
            document.write(j+1);
            j++;
        }
        document.write("<br>");
        j = 0;
    }
} else {
    alert("El número debe estar entre 0 y 50.")
}