/* 
Specifications :
○ Create a program to calculate total salary based on employee type
○ There are two types of employee : full-time & part-time
○ Salary for full-time employee :
■ IDR 100.000 / hour
■ IDR 75.000 / hour, if the number of working hours per day is more than 6 hours
○ Salary for part-time employee :
■ IDR 50.000 / hour
■ IDR 30.000 / hour, if the number of working hours per day is more than 6 hours

● Requirements :
○ Create an Employee as a parent class
○ Create a FulltimeEmployee and ParttimeEmployee as a child of Employee class
■ Create a method in that class to add working hour per day
■ Create a method in that class to calculate total salary
○ Use inheritance concept
*/

interface dailyWorker {
    name: string,
    clockIn: string,
    clockOut: string,
    totalHours: number,
    totalSalary: number
}

class Employee {
    name: string;
    salary: dailyWorker[] = [];

    constructor(name: string) {
        this.name = name;
    }

    protected hitungJamKerja(clockIn: string, clockOut: string): number {
        
        const [hoursIn, minIn] = clockIn.split(":").map(Number);
        const [hoursOut, minOut] = clockOut.split(":").map(Number);

        const waktuMasuk = new Date();
        waktuMasuk.setHours(hoursIn, minIn, 0);

        const waktuKeluar = new Date();
        waktuKeluar.setHours(hoursOut, minOut, 0);

        const selisihWaktu = waktuKeluar.getTime() - waktuMasuk.getTime();
        return selisihWaktu / (1000 * 60 * 60);
    }

    totalSalary(): number {
        let total = 0;
        for (const entry of this.salary) {
            total += entry.totalSalary;
        }
        return total;
    }
}

class FulltimeEmployee extends Employee {
    addWorkingHours(clockIn: string, clockOut: string) {
        const totalHours :number = this.hitungJamKerja(clockIn, clockOut);
        let totalSalary :number;

        if (totalHours > 6) {
            const sum = (totalHours-6) * 75000;
            totalSalary = sum + (6 * 100000);
        } else {
            totalSalary = totalHours * 100000;
        }

        this.salary.push({
            name: this.name,
            clockIn,
            clockOut,
            totalHours,
            totalSalary
        });
    }
}

class ParttimeEmployee extends Employee {
    addWorkingHours(clockIn: string, clockOut: string) {
        const totalHours = this.hitungJamKerja(clockIn, clockOut);
        let totalSalary;

        if (totalHours > 6) {
            const sum = (totalHours-6) * 30000;
            totalSalary = sum + (6 * 50000);
        } else {
            totalSalary = totalHours * 50000;
        }

        this.salary.push({
            name: this.name,
            clockIn,
            clockOut,
            totalHours,
            totalSalary
        });
    }
}

const fullTimer = new FulltimeEmployee("rifky");
fullTimer.addWorkingHours("09:00","16:00");
// fullTimer.addWorkingHours("16:00", "20:00");

console.log(`${fullTimer.name} - Total Gaji: Rp${fullTimer.totalSalary()}`);

const partTimer = new ParttimeEmployee("Bobi");
partTimer.addWorkingHours("05:00", "09:00");
partTimer.addWorkingHours("13:00", "17:00");
console.log(`${partTimer.name} - Total Gaji: Rp${partTimer.totalSalary()}`);
