// STRING : data yang berisi karakter huruf,angka atau symbol yang ditandai dengan tanda baca / "quotes"
let namaToko :string = "toko jaya abadi";
console.log(namaToko);

// Template literal
let alamatToko :string = `jl. genteng kali, Surabaya`;

// penggabungan data
// Cara 1 : menggunakan penjumlahan
let cetak1 = namaToko + " " + alamatToko + " " + "telp : 092981"
console.log(cetak1);

// Cara 2 : Template literal

let cetak :string = `nama toko : ${namaToko} alamatnya : ${alamatToko}`;
console.log(cetak);

// Fungsi bawaan tipe data string

// 1. string.length : menghitung panjang data string

let message :string = "hello";
console.log(message.length);

// 2. string.toLowerCase() merubah ke huruf kecil
console.log(message.toLowerCase());

// 3. string.toUpperCase() merubah ke huruf besar
console.log(message.toUpperCase());

// 4. includes("kata/huruf yang dicari") memastikan suatu karakter atau kata ada didalam data string
console.log(message.includes("e"));