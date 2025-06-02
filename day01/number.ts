// NUMBER : data angka

let jarak :number = 1200; // nilai INT/INTEGER
let berat :number = 90.25; // nilai FLOAT

//  Arithmetic : +, - , *, /, %
// Algoritma kode perhitungan penjumlahan

// 1. menyiapkan data yang harus dijumlahkan
let angka1 = 12;
let angka2 = 22;
// 2. memproses data penjumlahan dari data yang diberikan
const result :number = angka1 + angka2;
// 3. menampilkan hasil
console.log(result);

// Fungsi Math Object
const piMath :number = Math.PI;
console.log(piMath);

// pembulatan nilai
console.log(Math.round(25.3));
console.log(Math.round(25.5));
console.log(Math.floor(25.5));
console.log(Math.pow(2,3));
console.log(Math.sqrt(5));
console.log(Math.cbrt(8));

// MIN dan MAX
console.log(Math.min(1, 2, 3, 4, 10));
console.log(Math.max(1, 2, 3, 4, 10));

// Random
console.log(Math.random());

// Parsing data
let price :number = 12300;
console.log(price.toLocaleString("id", {
    style: "currency",
    currency: "IDR",
})
);