// Fungsi untuk melakukan perhitungan
function hitung(operator) {
    var angka1 = document.getElementById("angka1").value;
    var angka2 = document.getElementById("angka2").value;

    if (angka1 === "" || angka2 === "") {
        alert("Kedua angka harus diisi!");
        return;
    }

    angka1 = Number(angka1);
    angka2 = Number(angka2);

    var hasil;

    switch (operator) {
        case "+":
            hasil = angka1 + angka2;
            break;

        case "-":
            hasil = angka1 - angka2;
            break;

        case "*":
            hasil = angka1 * angka2;
            break;

        case "/":
            if (angka2 === 0) {
                alert("Tidak dapat membagi dengan nol!");
                return;
            }
            hasil = angka1 / angka2;
            break;
    }

    document.getElementById("hasil").innerHTML = hasil;
}

// Fungsi untuk mereset kalkulator
function resetKalkulator() {
    document.getElementById("angka1").value = "";
    document.getElementById("angka2").value = "";
    document.getElementById("hasil").innerHTML = "-";
}