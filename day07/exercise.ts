const student = [{
        name: "Rifky Ramadhan",
        email: "rifky@gmail.com",
        age: 22,
        score: 80
    },
    {
        name: "Ratih Pujilestari",
        email: "ratih@gmail.com",
        age: 21,
        score: 75
    },
    {
        name: "Wanda Rahma",
        email: "wanda@gmail.com",
        age: 23,
        score: 70
    }
];

function studentStats(student) {
    let score = student.map(s => s.score);
    let age = student.map(s => s.age);

    const getScoreValue = {
        highest: Math.max(...score),
        lowest: Math.min(...score),
        average: score.reduce((a, b) => a + b, 0) / score.length
    }

    const getAgeValue = {
        highest: Math.max(...age),
        lowest: Math.min(...age),
        average: age.reduce((a, b) => a + b, 0) / age.length
    }

    return {
        score: getScoreValue,
        age: getAgeValue
    }
}

console.log(studentStats(student));


// Soal no.2
interface iProduct {
    name: string;
    price: number;
}

class Product implements iProduct {
    name: string;
    price: number;

    constructor(name: string, price: number) {
        this.name = name;
        this.price = price;
    }
}


interface cartItem {
    name: string;
    price: number;
    quantity: number;
    total: number;
}
class Transaksi {
    cart: cartItem[];
    total: number;

    constructor() {
        this.cart = [];
        this.total = 0;
    }

    addCart(product, qty) {
        if (qty <= 0) {
            console.log("Jumlah harus lebih dari 0");
            return;
        } else {
            this.cart.push({
                name: product.name,
                price: product.price,
                quantity: qty,
                total: product.price * qty
            });

            this.total += product.price * qty;
        }
    }

    showTotal() {
        return this.total;
    }

    checkout() {
        let result = "";
        this.cart.forEach(item => {
            result+= `Nama: ${item.name}, Harga: ${item.price}, Jumlah: ${item.quantity}, Total: ${item.total}`;
        });
        
        return this.cart;
    }
}

const transaksi = new Transaksi();
const laptop = new Product("macbook", 30000);
const phone = new Product("iPhone", 20000);

transaksi.addCart(phone, 3);
transaksi.addCart(laptop, 2);

console.log(transaksi.showTotal());
console.log(transaksi.checkout());