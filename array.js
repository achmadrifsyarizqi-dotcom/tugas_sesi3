const siswa = [
    { nama: "Andi", nilai: 85 },
    { nama: "Budi", nilai: 65 },
    { nama: "Citra", nilai: 92 },
    { nama: "Dewi", nilai: 78 },
    { nama: "Eko", nilai: 58 },
    { nama: "Fani", nilai: 95 }
];

const totalNilai = siswa.reduce((acc, curr) => acc + curr.nilai, 0);
const rataRata = totalNilai / siswa.length;

const siswaLulus = siswa.filter(s => s.nilai > 70);

const siswaTerbaik = siswa.reduce((prev, curr) => (curr.nilai > prev.nilai) ? curr : prev);

console.log("=== HASIL ANALISIS NILAI SISWA ===");
console.log(`Nilai Rata-rata Kelas : ${rataRata.toFixed(2)}`);

console.log("\n=== DAFTAR SISWA LULUS (Nilai > 70) ===");
siswaLulus.forEach(s => {
    console.log(`- ${s.nama} : ${s.nilai}`);
});

console.log("\n=== NILAI TERBESAR ===");
console.log(`Diraih oleh **${siswaTerbaik.nama}** dengan nilai **${siswaTerbaik.nilai}**`);