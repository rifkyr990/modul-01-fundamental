// VARIABLE : penampung data

/* 
- Rumus penulisan variable => keywordVariable namaVariable = data
- Keyword variable : var,let,const
- namaVariable : - harus diawali dengan huruf,"_" atau $
                - tidak boleh dipisah spasi,apabila lebih dari satu kata
- data : tipe data terdiri dari : string, number, boolean, undefined, array, object.
*/

// Mendekralasikan variable
var namaMurid;

// Menginisialisasi variable
var usiaMurid = 12;

// Karakter tiap variable

// Keyword var : redeclare, reassign

// Redeclare
var alamat = "jl pemuda";
var alamat = "surabaya"; // membuat ulang variable yang sudah ada

// Reassign
alamat = "Rungkut";
console.log(alamat);

// Keyword let : non redeclare, reassign

let program = "web development";
// let program = "Digital Marketing" Non- redeclare
program = "data science";

// Keyword const : non redeclare, non reassign
const phi = 3.14;
const UrlDomain = "https://google.com"