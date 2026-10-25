function hitungNilaiAkhir(tugas, uts, uas) {
    return tugas * 0.30 + uts * 0.30 + uas * 0.40;
}

function tentukanPredikat(nilai) {
    if (nilai >= 85) return "A";
    if (nilai >= 75) return "B";
    if (nilai >= 60) return "C";
    if (nilai >= 50) return "D";
    return "E";
}

function tampilkanHasil(nilaiAkhir) {
    const predikat = tentukanPredikat(nilaiAkhir);
    const status = nilaiAkhir >= 60 ? "Lulus" : "Belum lulus";
        console.log("Nilai akhir:", nilaiAkhir.toFixed(2));
        console.log("Predikat:", predikat);
        console.log("Status:", status);

    document.getElementById("hasil").innerHTML =
        "<h3>Hasil Perhitungan</h3>" +
        "<p>Nilai akhir: " + nilaiAkhir.toFixed(2) + "</p>" +
        "<p>Predikat: " + predikat + "</p>" +
        "<p>Status: " + status + "</p>";
}

document.getElementById("formNilai").addEventListener("submit", function(event) {
    event.preventDefault();

    const inputTugas = document.getElementById("tugas").value;
    const inputUTS = document.getElementById("uts").value;
    const inputUAS = document.getElementById("uas").value;
    const hasil = document.getElementById("hasil");

    if (inputTugas.trim() === "" ||
        inputUTS.trim() === "" ||
        inputUAS.trim() === "") {
        hasil.textContent = "Semua nilai harus diisi.";
        return;
    }

    const tugas = Number(inputTugas);
    const uts = Number(inputUTS);
    const uas = Number(inputUAS);

    if (tugas < 0 || tugas > 100 ||
        uts < 0 || uts > 100 ||
        uas < 0 || uas > 100) {
        hasil.textContent = "Setiap nilai harus berada pada rentang 0–100.";
        return;
    }

    const nilaiAkhir = hitungNilaiAkhir(tugas, uts, uas);

    tampilkanHasil(nilaiAkhir);
});