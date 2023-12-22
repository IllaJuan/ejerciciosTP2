let j = 0;

for (let i = 30; i >= 0; i--) {
    while (j != i) {
        document.write(i);
        j++;
    }
    document.write("<br>");
    j = 0;
}