/* 

Soal No.1

Write a function to get the lowest, highest and average value in the array (with and without sort function).
a. Example : arr = [12, 5, 23, 18, 4, 45, 32] → {lowest : 4, highest: 45, average: 19.8xxx}
*/

// sort

const array = [1, 2, 3];

function arraySort(array: number[]) {
    let sort = [...array].sort((a,b) => a-b);
    const getMinimum = sort[0];
    const getMaximum = sort[sort.length -1];
    const total = array.reduce((sum, val) => sum + val)/array.length;

    return {
        getMinimum,
        getMaximum,
        total
    }
}
console.log(arraySort(array));

// tanpa sort

function arrayWithoutSort(array: number[]) {
    let getMinimum :number = array[0];
    let getMaximum :number = array[0];
    let sum :number = 0;

    for (const element of array) {
        if (element < getMinimum) {
            getMinimum = element;
        } if (element > getMaximum) {
            getMaximum = element;
        }
        sum += element;
    }

    const total = sum/array.length;
    
    return {
        getMinimum,
        getMaximum,
        total
    }
}

console.log(arrayWithoutSort(array));

/*

Soal No.2

Write a function that takes an array of words and returns a string by concatenating the words in the array,
separated by commas and - the last word - by an 'and'.
a. Example : arr = ["apple", "banana", "cherry", "date"] → “apple,banana,cherry, and date”
*/

function concatenating(array: string[]) {
    const first = array.slice(0, -1).join(',');
    const last = array[array.length - 1];

    return `${first} and ${last}`
}

console.log(concatenating(["tomat", "anggur", "jeruk"]));

/* 
Write a function from a given array of numbers and return the second smallest number
a. Example : numbers = [5, 3, 1, 7, 2, 6] → 2
*/

function secondMin(array: number[]) {
    const filter = Array.from(new Set(array));
    if(array.length < 2) {
        return null;
    } else {
        filter.sort((a,b) => a-b);
    }
    return filter[1];
}
console.log(secondMin(array));

/* 
Write a function to calculate each element in the same position from two arrays of integer. Assume both arrays are
of the same length.
a. Example : [1, 2, 3] + [3, 2, 1] → [4, 4, 4]
*/

function calculate(arrayA :number[], arrayB :number[]) {
    let result :number[] = [];
    for (let i = 0; i < arrayA.length; i++) {
        result.push(arrayA[i]+arrayB[i]);
    }

    return result;
}
console.log(calculate([1,2],[2,3]));

/* 
Write a function that adds an element to the end of an array. However, the element should only be added if it is
not already in the array.
a. Example : arr = [1, 2, 3, 4], newElement = 4 → [1, 2, 3, 4]
b. Example : arr = [1, 2, 3, 4], newElement = 7 → [1, 2, 3, 4, 7]
*/

function addArray(a :number[], b :number) {
    if (a.includes(b)) {
        return a;
    } else {
        return [...a, b];
    }
}
console.log(addArray([1,3,4], 4));
