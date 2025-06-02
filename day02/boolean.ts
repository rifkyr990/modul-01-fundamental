// BOOLEAN
let isActive :boolean = true;
let isDelete :boolean = false;

/* 
menghasilkan data boolean
1. berdasarkan tipe data lain
*/

// TRUTHLY
console.log(Boolean("abc"));
console.log(Boolean(12));
console.log(Boolean(-12));

console.log(Boolean(0));
console.log(Boolean(""));
console.log(Boolean(null));

// 2. Comparison operator : >, <, >=, <=, ==, ===

let numberA :number = 12;
let numberB :number = 14;

console.log(numberA == numberB);
console.log(numberA < numberB);
console.log(numberA > numberB);
console.log(numberA <= numberB);
console.log(numberA >= numberB);
console.log(numberA != numberB);

// 3. Logical operator
// AND : akan menghasilkan nilai true jika antar nilai juga bernilai true

console.log(Boolean("ABC") && Boolean(2));
console.log(numberA < 12 && numberB === 14);
console.log(numberA > 11 && numberB >=14);

// OR : menghasikan TRUE apabila salah satunya bernilai TRUE
console.log(Boolean("ABC") || Boolean(2));
console.log(numberA < 12 || numberB != 14);

// NOT : membalikan nilai
console.log(!Boolean(numberA));