function mergeArray(arrayA,arrayB) {
    let array = [...arrayA];

    for (let i = 0; i < arrayB.length; i++) {
        const duplikat = array.some(item => {
            return item.name === arrayB[i].name && item.email === arrayB[i].email
        });

        if (!duplikat) {
            array.push(arrayB[i]);
        }
    }

    return array;
}
const arrayA = [
    { name: "Student 4", email: "student4@mail.com" },
    { name: "Student 1", email: "student1@mail.com" },
    { name: "Student 2", email: "student2@mail.com" },
    { name: "Student 3", email: "student3@mail.com" },
];

const arrayB = [
    { name: "Student 4", email: "student4@mail.com" },
    { name: "Student 1", email: "student1@mail.com" },
    { name: "Student 3", email: "student3@mail.com" },
    { name: "Student 4", email: "student4@mail.com" },
];

console.log(mergeArray(arrayA, arrayB));

// Soal no.2
const obj = [{ name: "David", age: 20 }];

for (const item of obj) {
    for (const key in item) {
        console.log(item[key],key);
    }
}


function switchValue(object) {
    const object2 = object.map(item => {
        return Object.fromEntries(
            Object.entries(item).map(([key, val]) => [val, key])
        );
    });

    return object2;
}

console.log(switchValue(obj));