/*

Soal no.1

Write a code to check whether the number is odd or even
○ Example: 25 → odd number, 2 → even number
*/

let angka1 :number = 2;

if (angka1 % 2) {
    console.log(`${angka1} adalah genap`);
} else {
    console.log(`${angka1} adalah ganjil`);
}

/*

Soal No. 2

Write a code to check whether the number is prime number or not
○ Example: 7 → 7 is a prime number
○ Example: 6 → 6 is not a prime number
*/

let angka2 :number = 6;
let prima :boolean = true;
let i :number = 2;

if (angka2 <= 1) {
    prima = false;
} else {
    while (i <= Math.sqrt(angka2)) {
        if (angka2 % i == 0) {
            prima = false;
            break;
        }
        i++;
    }
}

if (prima) {
    console.log(`${angka2} adalah prima`);
} else {
    console.log(`${angka2} bukan prima`);
    
}

/*

Soal No.3

Write a code to find the sum of the numbers 1 to N
○ Example: 5 → 1 + 2 + 3 + 4 + 5 = 15
○ Example: 3 → 1 + 2 + 3 = 6
*/
let angka3 :number = 5;
let total :number = 0;

for (let i = 0; i < angka3 + 1; i++) {
    console.log(i);
    total += i;
}

console.log(`${angka3} adalah ${total}`);

let angka4 :number = 4;
let factorial :number = 1;

for (let i = 1; i <= angka4; i++) {
    factorial*=i;
}
console.log(factorial);

/* 

Soal No.5

Write a code to print the first N fibonacci numbers
○ Example: 15 → 610
*/

let angka5 :number = 15;
let a :number = 0;
let b :number  = 1;
let c :number;
let hasil :string = "";

for (let i = 1; i <= angka5; i++) {
    hasil += a + " ";
    c = a + b;
    a = b;
    b = c;
}
console.log(`Angka fibonacci ke ${angka5} adalah ${a}`);
