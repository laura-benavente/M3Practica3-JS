function evaluarNota() {
    let nota = parseFloat(prompt("Introduce una nota entre 0 y 10 con dos decimales:"));

    if (isNaN(nota) || nota < 0 || nota > 10) {
        alert("Por favor, introduce una nota válida entre 0 y 10.");
        return;
    }

    let rango;

    if (nota < 3) {
        rango = "Muy deficiente";
    } else if (nota < 5) {
        rango = "Insuficiente";
    } else if (nota < 6) {
        rango = "Suficiente";
    } else if (nota < 7) {
        rango = "Bien";
    } else if (nota < 9) {
        rango = "Notable";
    } else {
        rango = "Sobresaliente";
    }

    alert(`La nota introducida es ${nota.toFixed(2)} y corresponde a: ${rango}`);
}

evaluarNota();
