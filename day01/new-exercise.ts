// /* 
// Write a code to find area of rectangle.
// ○ Example : length = 5, width = 3
// ○ Output : 15
// */

// let p: number = 5;
// let l: number = 3;

// const luas: number = p * l;
// console.log(`luas : ${luas}`);

// /* 
// Write a code to find perimeter of rectangle.
// ○ Example : length = 5, width = 3 
// ○ Output : 16 
// */

// const perimeterRectangle :number = (p*2) + (l*2);
// console.log(perimeterRectangle);

// /* Write a code to find diameter, circumference and area of a circle.
// ○ Example : radius = 5
// ○ Output : diameter = 10, circumference = 31.4159, area = 78.539 
// */

// let radius :number = 5;
// const PI :number = Math.PI;

// const diameter :number = radius * 2;
// console.log(diameter);

// const keliling :number = PI * diameter;
// console.log(keliling);

// const luasLingkaran :number = PI * Math.pow(radius, 2);
// console.log(luasLingkaran);

// /* 
// Write a code to find angles of triangle if two angles are given.
// ○ Example : a = 80, b = 65
// ○ Output : 35
// */

// let sudut1 :number = 80;
// let sudut2 :number = 65;

// const sudut3 :number = 180 - (sudut1 + sudut2);
// console.log(sudut3);

// /* 
// Write a code to convert days to years, months and days (Notes: 1 year : 365 days, 1 month : 30 days).
// ○ Example : 400 days → 1 year, 1 month, 5 days
// ○ Example: 366 days → 1 year, 0 month, 1 day 
// */

// let day :number = 366;
// let year :number = 365;
// let month :number = 30;

// const years :number = Math.floor(day/year);
// console.log(years);

// const months :number = Math.floor((day-year)/30);
// console.log(months);

// const days :number = Math.floor((day-year)%30);
// console.log(days);

// // Exercise 2

// /* 
// Write a code to convert temperature from Celsius to Fahrenheit.
// O Example: celsius = 25
// o Output: 77
// */

// let celcius :number = 25;
// const fahrenheit :number = (celcius * 9/5) + 32;
// console.log(fahrenheit);

// /* 
// Write a code to swap two numbers.
// o Example: a = 4, b = 7
// O Output: a = 7, b = 4
//  */

// let a :number = 4;
// let b :number = 7;

// let c;
// c = b;
// b = a;
// a = c;

// console.log(a, b);

// /* 
// Write a code to get first and last character from a string.
// O Example: word = "Programming"
// o Output: P and g
// */

// let word :string = "Programming";

// const first :string = word.charAt(0);
// const last :string = word.charAt((word.length) - 1);

// console.log(first, last);

// /* 
// Write a code to calculate the square and cube of a number.
// O Example: number = 4
// o Output: square = 16, cube = 64
// */

// let number :number = 4;

// const square :number = Math.pow(number, 2);
// const cube :number = Math.pow(number, 3);

// console.log(square);
// console.log(cube);

// /* 
// Write a code to convert minutes to hours and minutes.
// O Example: totalMinutes = 135
// o Output: 2 hours and 15 minutes
// */

// let totalMinutes :number = 135;

// const hours :number = Math.floor(totalMinutes / 60) ;
// console.log(hours);

// const minutes :number = Math.floor(totalMinutes % 60);
// console.log(minutes);