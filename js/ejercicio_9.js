let num = parseInt(prompt("Ingrese un número:"));

if (num > 0 && num <= 500) {
    for (let i = 1; i <= num; i++) {
        if ((i % 4) == 0 || (i % 9) == 0) {
            if ((i % 4) == 0) {
                if ((i % 9) == 0) {
                    document.write(i + " (Múltiplo de 4 y 9)<br>");
                } else {
                    document.write(i + " (Múltiplo de 4)<br>");
                }
            } else {
                document.write(i + " (Múltiplo de 9)<br>");
            }
        } else if ((i % 5) == 0) {
            document.write(i + "---------------------<br>");
        } else {
            document.write(i + "<br>");
        }
    }
} else {
    alert("Debe ingresar un número que esté entre el 1 y el 500.");
}