let j = 0;

for (let i = 1; i <= 30; i++) {
    while (j != i) {
        document.write(i);
        j++;
    }
    document.write("<br>");
    j = 0;
}