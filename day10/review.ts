/*
* Kisi-kisi exam modul 01:
- Introduction to programming
- Data types (primitive, non-primitive) in JavaScript
- var, let, dan const
- Introduction to TypeScript
- Looping statement
- Interface and object declaration
- Function hoisting
- Encapsulation
- Data structure
- Big O notation
*/

// =====================================
// Variable & Tipe Data di TypeScript
// =====================================

// Primitive types: string, number, boolean, null, undefined, symbol
// Non-primitive: object, array, function, class

// Tipe variable
var nama: string = "rifky";
let usia: number = 25;
const isActive: boolean = true;

// Redeclare & Reassign
var a: number = 1;
var a: number = 2; // ✅ redeclare

let b: number = 3;
b = 4; // ✅ reassign

const c: number = 5;
// c = 6; ❌ Error: Assignment to constant variable

// =====================================
// Block-scope dan Interface
// =====================================

function introduction(): string {
    let usia: number = 40;
    return `Usia saya ${usia}`;
}

console.log(introduction());

interface DataDiri {
    nama: string;
    alamat: string;
    gender: "pria" | "wanita";
}

const output: DataDiri = {
    nama: "rifky",
    alamat: "yogyakarta",
    gender: "pria"
};

console.log(output);

// =====================================
// Looping Statements
// =====================================

// While loop
let index: number = 0;
while (index < 5) {
    console.log("While:", index);
    index++;
}

// Do...While loop
let i: number = 0;
do {
    console.log("Do While:", i);
    i++;
} while (i < 5);

// For...in loop
const person: { name: string; age: number } = { name: "Alice", age: 25 };
for (let key in person) {
    console.log(`${key}: ${person[key as keyof typeof person]}`);
}

// For...of loop
const fruits: string[] = ["apple", "banana", "cherry"];
for (let fruit of fruits) {
    console.log("Fruit:", fruit);
}

// =====================================
// Array dan Interface
// =====================================

interface Siswa {
    nis: string;
    nama: string;
    kelas: "IPA" | "IPS";
}

const dataSiswa: Siswa[] = [
    { nis: "2000016002", nama: "Rifky Ramadhan", kelas: "IPA" },
    { nis: "200016003", nama: "Fikri", kelas: "IPS" }
];

console.log(dataSiswa[0].nis);

// =====================================
// Object
// =====================================

const guru: { nama: string; mapel: string; jamMengajar: number } = {
    nama: "Pak Budi",
    mapel: "Matematika",
    jamMengajar: 24
};

console.log(guru.nama);       // "Pak Budi"
console.log(guru["mapel"]);   // "Matematika"

// =====================================
// Function
// =====================================

// Function Declaration (bisa hoisting)
function declarationFunction(nama: string): string {
    return `Halo nama saya ${nama}`;
}
console.log(declarationFunction("rifky"));

// Function Expression
const expressionFunction = function(nama: string): string {
    return `Halo nama saya ${nama}`;
};
console.log(expressionFunction("rifky"));

// Arrow Function
const arrowFunction = (nama: string): string => {
    return `Hello, ${nama}`;
};
console.log(arrowFunction("rifky"));

// =====================================
// Promise, Async/Await, and API Fetching
// =====================================

// Simulasi fetch pakai dummy API: JSONPlaceholder

// 1. Promise + Fetch
fetch("https://jsonplaceholder.typicode.com/posts/1")
    .then(response => response.json())
    .then((data: any) => {
        console.log("Promise + fetch:", data);
    })
    .catch((error: any) => {
        console.error("Error:", error);
    });

// 2. Async/Await
async function getPost(): Promise<void> {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts/1");
        const data: any = await response.json();
        console.log("Async/Await:", data);
    } catch (error) {
        console.error("Async/Await Error:", error);
    }
}
getPost();

// 3. Promise.all() untuk banyak request
async function getMultiplePosts(): Promise<void> {
    const postIds: number[] = [1, 2, 3];
    try {
        const requests = postIds.map(id =>
            fetch(`https://jsonplaceholder.typicode.com/posts/${id}`).then(res => res.json())
        );
        const results: any[] = await Promise.all(requests);
        console.log("Multiple posts:", results);
    } catch (error) {
        console.error("Error getMultiplePosts:", error);
    }
}
getMultiplePosts();

// =====================================
// ENCAPSULATION (Penyembunyian data)
// =====================================
/*
Encapsulation adalah konsep OOP untuk menyembunyikan data dan hanya memberikan akses melalui method tertentu (getter/setter).
Tujuan: Melindungi data agar tidak sembarangan diakses atau diubah dari luar.

TypeScript mendukung encapsulation dengan access modifiers:
- public (default): bisa diakses dari mana saja
- private: hanya bisa diakses di dalam class itu sendiri
- protected: bisa diakses di class itu dan turunannya
*/

class Mahasiswa {
    public nama: string;
    private nilai: number;

    constructor(nama: string, nilai: number) {
        this.nama = nama;
        this.nilai = nilai;
    }

    public getNilai(): number {
        return this.nilai;
    }

    public setNilai(nilaiBaru: number): void {
        if (nilaiBaru >= 0 && nilaiBaru <= 100) {
            this.nilai = nilaiBaru;
        } else {
            console.log("Nilai tidak valid!");
        }
    }
}

const mhs = new Mahasiswa("Rifky", 85);
console.log(mhs.nama);           // ✅ Bisa diakses
console.log(mhs.getNilai());     // ✅ Akses melalui method

// mhs.nilai = 50; ❌ Error: 'nilai' is private

mhs.setNilai(90);                // ✅ Update nilai
console.log(mhs.getNilai());

// =====================================
// DATA STRUCTURE (Struktur Data)
// =====================================
/*
Struktur data penting untuk mengatur dan mengelola data secara efisien.
Beberapa struktur dasar:
- Array
- Stack (tumpukan): LIFO
- Queue (antrian): FIFO
*/

// Stack
class Stack<T> {
    private items: T[] = [];

    push(item: T): void {
        this.items.push(item);
    }

    pop(): T | undefined {
        return this.items.pop();
    }

    peek(): T | undefined {
        return this.items[this.items.length - 1];
    }
}

const stack = new Stack<number>();
stack.push(1);
stack.push(2);
console.log("Stack Pop:", stack.pop()); // 2

// Queue
class Queue<T> {
    private items: T[] = [];

    enqueue(item: T): void {
        this.items.push(item);
    }

    dequeue(): T | undefined {
        return this.items.shift();
    }

    peek(): T | undefined {
        return this.items[0];
    }
}

const queue = new Queue<string>();
queue.enqueue("A");
queue.enqueue("B");
console.log("Queue Dequeue:", queue.dequeue()); // A

// =====================================
// BIG O NOTATION
// =====================================
/*
Big O digunakan untuk mengukur efisiensi algoritma berdasarkan:
- Waktu eksekusi (Time Complexity)
- Ruang memori (Space Complexity)

Beberapa notasi umum:
- O(1): waktu konstan (akses langsung, misalnya arr[0])
- O(n): waktu linier (looping satu array)
- O(n^2): waktu kuadrat (nested loop)
- O(log n): logaritmik (binary search)

Contoh:
*/

// O(1)
const getFirstElement = (arr: number[]): number => {
    return arr[0];
};

// O(n)
const printAll = (arr: number[]): void => {
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i]);
    }
};

// O(n^2)
const printPairs = (arr: number[]): void => {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            console.log(arr[i], arr[j]);
        }
    }
};

/* 
| Method    | Mengembalikan | Tujuan                         |
| --------- | ------------- | ------------------------------ |
| `forEach` | `undefined`   | Menjalankan aksi per elemen    |
| `map`     | Array baru    | Transformasi tiap elemen       |
| `filter`  | Array baru    | Menyaring elemen               |
| `find`    | Satu elemen   | Menemukan elemen pertama cocok |
| `reduce`  | Nilai tunggal | Akumulasi semua elemen         |
| `some`    | Boolean       | Apakah ada yang cocok?         |
| `every`   | Boolean       | Apakah semua cocok?            |

*/

let array = [1,2,3,4,5,6,7];

// array.forEach = Digunakan untuk melakukan sesuatu pada setiap elemen array, tanpa mengembalikan array baru.

const forEachArray = array.forEach((item, index) => {
    console.log(`${index} : ${item}`)
});


// array.map = Digunakan untuk mengubah setiap elemen dalam array dan mengembalikan array baru.

const mapArray = array.map((item) => item * 2);
console.log(mapArray);

// array.filter = Mengembalikan array baru yang berisi elemen yang lulus kondisi tertentu (true di callback).
const filterArray = array.filter((item) => item < 6);

console.log(filterArray);

// array find = Mengembalikan elemen pertama yang cocok dengan kondisi, bukan array.

const daftarNama = ["rifky", "ratih", "wanda"];

const cari = daftarNama.find((item) =>item === "ratih");
console.log(cari);

// reduce () = Mengakumulasi semua elemen menjadi satu nilai (misalnya jumlah total, gabungan string, dsb).

const total = array.reduce((acc, current) => acc + current,0);
const gabung = daftarNama.reduce((acc, curr, index) => acc + (index === 0 ? "" : ", ") + curr);
console.log(total) // array ;
console.log(gabung) // string;

// array some () = Mengembalikan true jika setidaknya satu elemen memenuhi kondisi.

const nilai = [60, 70, 45, 80];
const adaYangLulus = nilai.some((item) => item >= 75);
console.log(adaYangLulus); // true


interface iStudent {
    name: string,
    age: number,
}

class Student implements iStudent{
    name: string;
    age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    sayHaiLecture(name :string) {
        console.log(`hai saya ${this.name} dan guru saya ${name}`);
    }
}

class Lecture extends Student {
    address: string;

    constructor(name: string, age: number, address: string) {
        super(name, age);
        this.address = address;
    }

    sayHaiStudent(name: any): void {
        console.log(`hai saya ${name} dan murid saya ${this.name}`);
    }
}

const siswa = new Student("rifky", 12);
const gurus = new Lecture("pak rifky", 21, "bandung");

siswa.sayHaiLecture('pak rifky');
gurus.sayHaiStudent('y');

console.log(siswa);
console.log(gurus);

