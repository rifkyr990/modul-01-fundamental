// DATE
let now :Date = new Date();
console.log(now.toUTCString());
console.log(now.toISOString());
console.log(now.toLocaleDateString("id"));
console.log(now.toLocaleTimeString("id"));
console.log(now.toLocaleString("id"));
console.log(now.getFullYear());
console.log(now.getDate());
console.log(now.getHours());
console.log(now.getMinutes());
console.log(now.getMonth());
console.log(now.getTime());

let a = [1,2,3];
let b = a;
b.push(4);
console.log(b);
