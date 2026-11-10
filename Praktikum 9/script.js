// Fungsi untuk menampilkan waktu saat ini
function tampilkanWaktu() {
    var sekarang = new Date();
    var waktu = sekarang.toLocaleTimeString();
    document.getElementById("waktu").innerHTML = "Waktu saat ini: " + waktu;
}

// Fungsi untuk mengubah judul halaman
function ubahJudul() {
    var judulBaru = prompt("Masukkan judul baru:");

    if (judulBaru) {
        document.title = judulBaru;
    }
}

// Menampilkan pesan saat halaman dimuat
window.onload = function() {
    alert("Halaman telah dimuat. JavaScript eksternal berhasil dijalankan!");
};