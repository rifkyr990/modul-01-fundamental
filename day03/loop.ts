// LOOPING STATEMENT : penulisan code yang ditujukan untuk mengulang eksekusi program

/* 
    WHILE LOOP : perulangan program yang akan selalu berjalan selama kondisi terpenuhi
*/

let count :number = 1;

while (count <= 10) {
    console.log(`${count}`);
    count++;
}

let isBoolean :boolean = true;
while (isBoolean) {
    count++;
    if (count == 15) {
        console.log(count);
        isBoolean = false;
    }
}

while (true) {
    count ++;
    if (count == 20) {
        console.log(count);
        break;
    }
}
/*  
    DO WHILE : kode dijalankan sekali dan apabila kondisinya true maka akan dilanjut
*/

do {
    console.log(count);
    count++;
} while (count < 30);

// FOR LOOP : digunakan ketika batas looping sudah ditentukan sejak awal

/* 
    for (counter_declaration; counter_condition; counter) {
        // code
    }

    - counter_declaration : variable yang mendeklarasikan nilai awal.
    - counter_condition : kondisi yang menentukan batas looping.
    - counter : proses perhitungan increment atau decrement.
*/

let counterNumber :number = 10;

for (let i = 1; i < counterNumber + 1; i++) {
    console.log(i);
}

/* 
    FOR OF
*/

let daftarNama = ["rifky", "ramadhan"]

for (const mhs of daftarNama) {
    console.log(mhs.toString());
}

// latihan

const limit = 5;
let cetak :string = "";

// for (let i = 0; i < limit; i++) {
//     if (i % 2) {
//         cetak = `genap`;
//     } else {
//         cetak = `ganjil`;
//     }

//     console.log(`${i} | ${cetak}`);
// }

for (let i = 0; i < limit; i++) {
    if (i % 2) {
        cetak += `${i} | genap ,`;
    } else {
        cetak += ` ${i} | ganjil ,`;
    }
}
console.log(cetak);
