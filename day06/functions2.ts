/* Callback function :  - sebuah fungsi yang dijalankan dalam fungsi lain dan dimasukan melalui parameter.
                        - sebuah fungsi yang langsung dibuat didalam parameter fungsi lain.
*/

/* 
* Aturan penulisan :
* function printCalculation(callbackFn) {
*   callbackFn();
* }
* 
* -callbackFn : parameter yang harus diisi dengan fungsi.
*/

function printCalculation(callbackFn) {
    const result = callbackFn();

    return `Hasilnya ${result}`;
}

console.log(printCalculation(()=>{
    let angkaA :number = 12;
    let angkaB :number = 23;

    return angkaA + angkaB;
}));

// Array function : forEach, map, filter

/* 
1. forEach()
    Fungsi: Digunakan untuk mengeksekusi sebuah fungsi pada setiap elemen dalam array. Tidak mengembalikan array baru (return-nya undefined).
*/

const angkaForeach = [1,2,3,4,5];
angkaForeach.forEach((item, index) => {
    console.log(`index : ${index} \n item :${item}`);
});

/* 
2. map()
    Fungsi: Digunakan untuk membuat array baru dengan hasil dari memanggil fungsi tertentu pada setiap elemen array.
*/

const angkaMap = [1, 2, 3, 4, 5];

const dikaliDua = angkaMap.map((item)=> {
    return item * 2;
});

console.log(dikaliDua); // [2, 4, 6, 8, 10];

/* 
3. filter()
    Fungsi: Digunakan untuk membuat array baru yang hanya berisi elemen-elemen yang lolos kondisi tertentu (dengan fungsi callback yang mengembalikan true).
*/

const angkaFilter = [1,2,3,4,5];
const angkaGenap = angkaFilter.filter((item) =>{
    return item % 2 == 0;
})
console.log(angkaGenap);

const contohArray = [1,2,3,4];


// duplicateForeach

function duplicateForeach(array, callbackFn) {
    for (let i = 0; i < array.length; i++) {
        callbackFn(i, array[i]);
    }
}

duplicateForeach(['rifky', 'ramadhan'], (i, val)=>{
    console.log(`${i} : ${val}`);
}) 

// contoh lain map
const uang = [1000,2000,3000];

const convertToRP = uang.map((value, index) =>{
    return value.toLocaleString("id",  {
        style: "currency",
        currency: "IDR"
    });
}) 
console.log(convertToRP);



/* 
* Duplikat map
*/

function duplicateMap(array, callbackFn) {
    const output :number[] = [];
    for (const element of array) {
        output.push(callbackFn(element));
    }

    return output;
}

const konversi = duplicateMap([10000,2000,3000], (value)=>{
    return value.toLocaleString("id",  {
        style: "currency",
        currency: "IDR"
    });
})

console.log(konversi);
