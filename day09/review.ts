/* 
* Kisi kisi exam modul 01:
- introduction programming
- Data type (primitive, Non-primitive) javascript
- Var, let, dan const
- Introducion TS (Typescript)
- looping statement
- Interface and object declaration
- function hoisting
- encapsulation
- data structure
- Big 0 notation.
*/

// Variable : penampung data

/* 
* Rumus penulisan variable => keywordVariable namaVariable = value;
* jenis keyword variable = var, let, const
* namaVariable : - Tidak boleh diawali dengan angka
*                - bisa diawali dengan simbol "_" atau "$"
*                - jika terdiri dari lebih dari satu suku kata harus digabung dengan metode camelCase.
* 
* karakter type variable : - Var : redeclare, reassign
*                          - let : non redeclare, reassign
*                          - const : non redeclare, non reassign.
* 
* contoh : - redeclare ( Proses mendeklarasikan kembali variabel yang sudah pernah dideklarasikan sebelumnya. ) :
*            var nama = "rifky";
*            var nama = "ramadhan"; ✅ Redeclare berhasil (hanya dengan var)
* 
*          - reassign   ( Proses memberi nilai baru ke variabel yang sudah dideklarasikan sebelumnya. ) :
*            var a = 1;
*            a = 2;       // ✅ Reassign berhasil
* 
*            let b = 3;
*            b = 4;       // ✅ Reassign berhasil
* 
*            const c = 5;
*            c = 6;       // ❌ Error: Assignment to constant variable
* 
*/

// Contoh block-scope variable

/* 
function introduction() {
    let usia: number = 40;
    return `usia saya ${usia}`
}
console.log(introduction());

interface dataDiri {
    nama: string,
    alamat: string,
    gender: "pria" | "wanita"
}

const output: dataDiri = {
    nama: "rifky",
    alamat: "yogyakarta",
    gender: "pria"
};

console.log(output);
*/

// Looping statement
/* 
    | Tujuan                                        | Gunakan...   |
    | --------------------------------------------- | ------------ |
    | Tahu jumlah iterasi pasti                     | `for` loop   |
    | Tidak tahu jumlah iterasi, tergantung kondisi | `while` loop |
    | Minimal 1 kali eksekusi                       | `do...while` |
    | Iterasi properti object                       | `for...in`   |
    | Iterasi nilai array/string                    | `for...of`   |
*/

/* 
    * While loop : Digunakan ketika perulangan bergantung pada kondisi, bukan jumlah tetap.
    * Kapan digunakan?
        - Saat tidak tahu pasti berapa kali akan mengulang.
    Contoh: menunggu input user yang valid.

    contoh penulisan :
*/
        let index = 0;
        while (index < 5) {
            console.log(index); 
            index++;
        }
/*
    * do...while loop : Mirip while, tapi dijamin dijalankan setidaknya sekali, karena pengecekan kondisi dilakukan setelah perulangan.
    * Kapan digunakan?
        - Ketika kamu ingin menjalankan blok minimal satu kali, lalu mengecek kondisi.

    contoh penulisan :
*/
        let i = 0;
        do {
            console.log(i);
            i++;
        } while (i<5)

/*
    * for...in loop : Digunakan untuk mengiterasi key/index dari object atau array.
    * Kapan digunakan?
        - Saat ingin mengakses properti dari sebuah object.
    
    Contoh penulisan :
*/
        const person = { name: "Alice", age: 25 };
        for (let key in person) {
            console.log(key + ": " + person[key]);
        }
/*
    * for...of loop : Digunakan untuk mengiterasi nilai dari iterable seperti array, string, Map, Set, dll.
    * Kapan digunakan?
        - Ketika ingin membaca isi dari array atau iterable lain secara langsung.

    Contoh penulisan :
*/
        const fruits = ["apple", "banana", "cherry"];
        for (let fruit of fruits) {
            console.log(fruit);
        }
// Array adalah kumpulan nilai (elemen) yang disimpan dalam satu variabel dan diakses menggunakan indeks numerik (mulai dari 0).
/* 
    Ciri-ciri Array:
    * Diakses dengan indeks (buah[0] → "apel")
    * Bisa menyimpan tipe data apa pun, termasuk objek atau array lain
    * Panjang array bisa dicek dengan .length
    
    Kapan Menggunakan Array?
    * Saat data berurutan dan punya urutan logis
    * Saat ingin melakukan operasi seperti sort, filter, map, dsb.
    * Saat perlu mengelola daftar (list), misalnya:
        * Daftar produk
        * Nama siswa
        * Hasil pencarian
*/

        interface iSiswa {
            nis :string,
            nama :string,
            kelas : "IPA" | "IPS"
        }

        const datasiswa :iSiswa[] = [
            {
                nis: "2000016002",
                nama: "Rifky Ramadhan",
                kelas: "IPA"
            },
            {
                nis: "200016003",
                nama: "fikri",
                kelas: "IPS"
            }
        ];

        console.log(datasiswa[0].nis);

// OBJECT
/* 
    Object adalah struktur data yang menyimpan pasangan key-value. Key-nya berupa string (atau symbol), dan valuenya bisa tipe data apa pun.

    Ciri-ciri Object:
    * Akses menggunakan . atau []
    * siswa.nama → "Rina"
    * siswa["kelas"] → "XII IPA"
    * Tidak berurutan
    * Cocok untuk data yang punya atribut atau properti tetap.
    
    Kapan Menggunakan Object?
    * Saat data berbentuk entitas atau benda nyata
    * Saat data memiliki banyak atribut berbeda
    * Cocok untuk representasi:
        * Data pengguna
        * Profil barang
        * Hasil API yang kompleks (seperti JSON)
*/

        const guru = {
            nama: "Pak Budi",
            mapel: "Matematika",
            jamMengajar: 24
        };

        console.log(guru.nama);         // "Pak Budi"
        console.log(guru["mapel"]);     // "Matematika"

/* 
    FUNCTION
    merupakan blok kode yang dirancang untuk melakukan tugas tertentu yang bisa dipanggil berkali kali.

    mengapa pakai function?
        * menghindari penulisan kode berulang.
        * membuat program lebih terstruktur.
        * memudahkan debugging.
*/

/* 
    Jenis jenis function :

    1. Function Declaration.
        Ciri:
        * Dideklarasikan dengan keyword function
        * Bisa di-hoisting (dipanggil sebelum dideklarasikan)
*/
    console.log(declarationFunction("rifky"));

    function declarationFunction(nama) {
        return `Halo nama saya ${nama}`
    }
/* 
    2. Function Expression.
        Ciri:
        * Disimpan dalam variabel
        * Tidak di-hoisting
*/
    const expressionFunction = function (nama) {
        return `Haloo nama saya ${nama}`
    }
    console.log(expressionFunction("rifky"));
/* 
    3. Arrow Function (ES6)
        Ciri:
        * Lebih ringkas
        * Tidak memiliki this sendiri (non-binding)
        * Tidak bisa digunakan sebagai constructor
*/
    const arrowFunction = (nama) => {
        return `Hello, ${nama}`;
    };
    console.log(arrowFunction("rifky"));
