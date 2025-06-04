// Array : tipe data yang dapat menampung berbagai macam tipe data lain.
/* 
* ciri ciri:- dibungkus dengan kurung siku, contoh : [1,2,3];
            - setiap  data dalam array memiliki alamat index, yang dimulai dari index ke 0. 
*/
let hobi: string[] = ["membaca", "menulis"];

// 1. Tambah
hobi.push("berenang"); // ["membaca", "menulis", "berenang"]
hobi.unshift("memasak"); // ["memasak", "membaca", "menulis", "berenang"]

// 2. Hapus
hobi.pop(); // ["memasak", "membaca", "menulis"] : menghapus data yang terakhir
hobi.splice(1, 1); // ["memasak", "menulis"] : menghapus sesuai index dan jumlah data yang pilih : splice(index, jml yang dihapus, data baru)

// 3. Update
hobi[0] = "berkebun"; // ["berkebun", "menulis"]

console.log(hobi);

// 4. Disimpan dalam bentuk array
const daftarSiswas: string[] = ["jaka", "jeki", "jeko"];

// 5. cara mengakses suatu data array : namaVariable[index_data_yang_dipilih]
console.log(daftarSiswas[1]);

/* 6. forEach() – Melakukan sesuatu untuk setiap elemen */

let angka11 = [1, 2, 3];
angka11.forEach(function (item, index) {
    console.log(`Index ${index}: ${item}`);
});

/* 7. map() – Mengubah setiap elemen dan menghasilkan array baru */

let angka21 = [1, 2, 3];
let kuadrat = angka21.map(function (item) {
    return item * item;
});
console.log(kuadrat); // [1, 4, 9]

/* 8. filter() – Menyaring elemen sesuai kondisi tertentu javascript Salin Edit */

let angka3 = [1, 2, 3, 4, 5];
let genap = angka3.filter(function (item) {
    return item % 2 === 0;
});
console.log(genap); // [2, 4]

/* 9. find() – Mencari satu elemen pertama yang cocok */

let orang = [{
        nama: "Rifky",
        umur: 22
    },
    {
        nama: "Fajar",
        umur: 25
    }
];

let hasil = orang.find(o => o.umur > 23);
console.log(hasil); // { nama: "Fajar", umur: 25 }

/* 10. reduce() – Menggabungkan seluruh elemen jadi satu nilai */

let angka4 = [1, 2, 3, 4];
let total = angka4.reduce((acc, curr) => acc + curr, 0);
console.log(total); // 10

/* 11.includes() – Mengecek apakah suatu nilai ada dalam array javascript Salin Edit */

let buah = ["apel", "jeruk"];
console.log(buah.includes("jeruk")); // true
console.log(buah.includes("mangga")); // false

/* 12. sort() – Mengurutkan elemen (hati-hati untuk angka) */

let angka = [10, 2, 5, 1];
angka.sort((a, b) => a - b);
console.log(angka); // [1, 2, 5, 10]

/* 13. reverse() – Membalik urutan array */

let huruf = ["a", "b", "c"];
huruf.reverse();
console.log(huruf); // ["c", "b", "a"]

/* 14. join() – Menggabungkan elemen jadi string */

let kata = ["saya", "suka", "ngoding"];
console.log(kata.join(" ")); // "saya suka ngoding"

/* 15. some() & every() – Pengecekan kondisi */

let nilai = [80, 90, 75];
console.log(nilai.some(n => n < 60)); // false
console.log(nilai.every(n => n >= 70)); // true

// array.length : mengetahui banyak data didalam array
console.log(nilai.length);

let daftarMhs :string[] = ["rifky", "ramadhan", "ramadhan"];
daftarMhs.splice(1, 2, "mhs baru");
console.log(daftarMhs);
