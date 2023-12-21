let num = prompt("Ingrese un número:");
let numFinal = 0;

while (num != null && num != "") {
    if (isNaN(num)) {
        alert("Lo ingresado NO es un número!");
    } else {
        numFinal += parseInt(num);
    }
    num = prompt("Ingrese un numero:");
}

if (numFinal != "") {
    document.write(`La suma de todos los números es <b>${numFinal}</b>`);
} else {
    document.write("No ha ingresado un número.");
}