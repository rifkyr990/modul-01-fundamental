/* 
    * function merupakan sekumpulan program yang disatukan untuk mengerjakan proses khusus.
    * Kategori : Built-in function an user defined function.
    * Opsi penulisan bisa menggunakan declarative func, function expression atau arrow function.
    * Function biasanya menghasilkan nilai output melalui keyword return didalamnya.
 */

// Contoh tanpa function

// INPUT : dua variable yang menampung data untuk dijumlahkan.
let angkaA :number = 2;
let angkaB :number = 3;
// PROCESS : memproses penjumlahan kedua variable
const hasilPenjumlahan = angkaA + angkaB;
// OUTPUT : menampilkan hasil penjumlahan.
console.log(hasilPenjumlahan);

// menggunakan function
// Buat kode diatas menjadi Declarative function:

function penjumlahan() {
    let angkaA :number = 2;
    let angkaB :number = 3;

    const hasilPenjumlahan = angkaA + angkaB;
    return hasilPenjumlahan;
}
console.log(penjumlahan());


// With parameter

;function penjumlahanWithParameter(angkaA :number, angkaB :number) {
    const hasil :number = angkaA + angkaB;
    return hasil;
}
console.log(penjumlahanWithParameter(2,4));
