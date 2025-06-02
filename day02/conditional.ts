// CONDITIONAL STATEMENT

/* 
* - IF STATEMENT : untuk memeriksa satu kondisi
* - IF ELSE STATEMENT : untuk memeriksa dua kondisi
* - ElSE IF STATEMENT : untuk memeriksa data lebih dari 2 kondisi
* - SWITCH CASE : untuk memeriksa data dalam pencocokan nilai
*/

// * - IF STATEMENT : untuk memeriksa satu kondisi

let nama :string = "Rifky";
let usia :number = 24;
let nilai :number = 85;

if (usia >= 18) {
    console.log('dewasa');
}

// * - IF ELSE STATEMENT : untuk memeriksa dua kondisi

let isHungry :boolean = true;

if (isHungry) {
    console.log("beli makan");
    
} else {
    console.log("tidak makan");
}

// * - ElSE IF STATEMENT : untuk memeriksa data lebih dari 2 kondisi

// INPUT
let ujian :number = 85;

// PROCESS
let result :string;

if (ujian >= 85) {
    result = "Nilai anda : A";
} else if (ujian >= 75 && ujian <= 85) {
    result = "Nilai anda : B"
} else {
    result = "Anda belum lulus";
}

// Output
console.log(result);

// * - SWITCH CASE : untuk memeriksa data dalam pencocokan nilai

const job :string = "dokter";

switch (job) {
    case "chef":
        console.log("Anda seorang chef");
        break;
    case "driver":
        console.log("anda seorang driver");
        break;
    default:
        console.log("nganggur");
        break;
}