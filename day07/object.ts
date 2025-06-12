const dataDiri = [
    {
        nama: "rifky",
        alamat: "kuningan",
        umur: 22
    },
    {
        nama: "rifky",
    alamat: "kuningan",
    umur: 22
    }
];

for (const e of dataDiri) {
    console.log(`${e.nama} : ${e.alamat}`);
}



const idCard :any = new Object();
idCard.name = "Rifky Ramadhan";
idCard.age = 24;
idCard.gender = "Male"

console.log(`Nama saya : ${idCard.name}, Umur : ${idCard.age}` );

// Object with function
function objectFunction(name,age) {
    return {
        name: name,
        age: age
    }
}

console.log(objectFunction("rifky", 32));

// interface

interface animal {
    species: string,
    nickname: string,
    age: number
}
const { species, nickname, age }: animal = {
    species: 'mamalia',
    nickname: 'rusa',
    age: 10,
}

console.log(`species : ${species}`);
console.log(`nickname : ${nickname}`);
console.log(`age : ${age}`);