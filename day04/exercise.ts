// 1. Deklasarikan variable daftarSiswa;
const daftarSiswa :string[] = [
    "edo",
    "edi",
    "eda"
];

// 2. buat inisialisasi untuk menampung output
let output :string = "";

// 3. gunakan for loop untuk mengakses data, dan pastikan perulangan sesuai dengan jumlah data
for (let i = 0; i < daftarSiswa.length; i++) {
    // 4. masukan hasil perulangan ke dalam variable output
    output += `${i+1} :${daftarSiswa[i]} `;
}
// 5. tampilkan output menggunakan console.log atau lainnya.
console.log(output);