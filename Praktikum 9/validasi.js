function validasiEmail(email) {
    var pola = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!pola.test(email)) {
        alert("Format email tidak valid!");
        return false;
    }

    return true;
}