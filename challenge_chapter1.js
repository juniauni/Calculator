var readline = require('readline');

var kalkulator = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

console.log("Kalkulator");
console.log("======Pilih Perhitungan======");
console.log("1.Tambah");
console.log("2.Kurang");
console.log("3.Kali");
console.log("4.Bagi");
console.log("5.Akar Kuadrat");
console.log("6.Luas Persegi");
console.log("7.Volume Kubus");
console.log("8.Volume Tabung");

kalkulator.question("Pilihan anda : " ,function (pilihan) {
    console.log("Anda Memilih Menu  " + pilihan );
    if (pilihan == "1" || pilihan == "2" || pilihan == "3" || pilihan == "4") {
        kalkulator.question("Masukkan bilangan pertama : " ,function(inputSatu) {
            kalkulator.question("Masukkan bilangan kedua : " ,function(inputKedua) {
                console.log("-----------------------------------------");
                console.log("-----------------------------------------");
                if (pilihan == "1") {
                    console.log("Hasilnya :" +(parseInt(inputSatu) + parseInt(inputKedua)));
                } else if(pilihan == "2"){
                    console.log("Hasilnya :" +(parseInt(inputSatu) - parseInt(inputKedua)));
                } else if (pilihan == "3") {
                    console.log("Hasilnya :" +(parseInt(inputSatu) * parseInt(inputKedua)));
                } else {
                    console.log("Hasilnya :" +(parseInt(inputSatu) / parseInt(inputKedua)));
                }
                kalkulator.close();
            });     
        });
    } else if (pilihan == "5") {
        kalkulator.question("Masukkan bilangan : " ,function(inputBilangan) {
            console.log("-----------------------------------------");
            console.log("-----------------------------------------");
            console.log("Hasilnya :" +(parseInt(Math.sqrt(inputBilangan))));
            kalkulator.close();
        });
    } else if (pilihan == "6" || pilihan == "7") {
        kalkulator.question("Masukkan rusuk : " ,function(inputRusuk) {
            console.log("-----------------------------------------");
            console.log("-----------------------------------------");
            if (pilihan == "6") {
                console.log("Hasilnya :" +(parseInt(inputRusuk) * parseInt(inputRusuk)));
            } else {
                console.log("Hasilnya :" +(parseInt(inputRusuk) * parseInt(inputRusuk) * parseInt(inputRusuk)));
            } 
            kalkulator.close();
        });
    } else if (pilihan == "8") {
        kalkulator.question("Masukkan panjang : " ,function(inputPanjang) {
            kalkulator.question("Masukkan lebar : " ,function(inputLebar) {
                kalkulator.question("Masukkan tinggi : " ,function(inputTinggi) {
                    console.log("-----------------------------------------");
                    console.log("-----------------------------------------");
                    console.log("Hasilnya :" +(parseInt(inputPanjang) * parseInt(inputLebar) * parseInt(inputTinggi)));
                    kalkulator.close();
                });
            });
        });
    } else {
        console.log("Perhitungan yang Anda pilih tidak ada.");
    }
});