/* 

Soal No.1

1. Write a function from a given array of mixed data types and return the sum of all the number
    a. Example : mixedArray = ["3", 1, "string", null, false, undefined, 2] → 3
*/

const mixedArray = ["3", 1, "string", null, false, undefined, 2];

function sumNumber(array) {
    let result :number = 0;
    for (const element of array) {
        if (typeof element == 'number' && typeof element !== 'string') {
            result += element;
            console.log(element);
        } else {
            console.log(`array is string`);
        }
    }
    return result;
}

console.log(sumNumber(mixedArray));

/* 

Soal No.2

Write a function that will combine 2 given array into one array
b. Example : arr1 = [1, 2, 3], arr2 = [4, 5, 6] → [1, 2, 3, 4, 5, 6]
*/

function joinArray(arrayA, arrayB) {
    let temp :number[] = [];
    const result = temp.concat(arrayA,arrayB);

    return [...new Set(result)];
}

console.log(joinArray([1,2,3], [4,5,6]));

/* 

Soal No.3

Write a function to find duplicate values in an array
b. Example : arr = [1, 2, 2, 2, 3, 3, 4, 5, 5] → [2, 3, 5]
*/

function removeDuplicate(array) {
    let unique :number[] = [];
    array.forEach(element =>{
        if (!unique.includes(element)) {
            unique.push(element);
        }
    });

    return unique;
}
console.log(removeDuplicate([1, 2, 2, 2, 3, 3, 4, 5, 5]));

/*

Soal No.4

Write a function to find the difference in 2 given array
b. Example : arr1 = [1, 2, 3, 4, 5], arr2 = [3, 4, 5, 6, 7] → [1, 2, 6, 7]

*/

function mixArray(arrayA, arrayB) {
    const mixArray = arrayA.concat(arrayB);
    const output = mixArray.filter((item, index) =>{
        return mixArray.indexOf(item) === index;
    });

    return output;
}

console.log(mixArray([1, 2, 3, 4, 5], [3, 4, 5, 6, 7]));
