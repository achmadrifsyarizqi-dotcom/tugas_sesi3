const readline = require('readline');

// Fungsi untuk menghapus spasi menggunakan perulangan
function hapusSpasiManual(kalimat) {
    let hasil = "";
    
    // Perulangan untuk memeriksa setiap karakter dalam kalimat
    for (let i = 0; i < kalimat.length; i++) {
        let karakter = kalimat[i];
        
        // Jika karakter bukan spasi, tambahkan ke variabel hasil
        if (karakter !== " ") {
            hasil += karakter;
        }
    }
    
    return hasil;
}

// Menyiapkan input interaktif melalui terminal
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

console.log("=== PROGRAM HAPUS SPASI DENGAN PERULANGAN ===");

rl.question("Masukkan kalimat: ", (inputKalimat) => {
    const hasilTanpaSpasi = hapusSpasiManual(inputKalimat);
    
    console.log("\n--- HASIL ---");
    console.log(`Kalimat Asli : "${inputKalimat}"`);
    console.log(`Tanpa Spasi  : "${hasilTanpaSpasi}"`);
    
    rl.close();
});