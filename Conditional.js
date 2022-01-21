// NO. 1

function Jadi() {

var x = 15
var y = 15
if (x === y) {
    console.log("Sama");
    } else {
        console.log("Tidak Sama");
    }
}

Jadi()

// NO. 2

// var x = 3
// var y = 15
// if (y%x == 0) {
//     console.log("Habis");
// } else {
//     console.log("Sisa");
// }

function Hasil1(x) {

    if (x % 2 === 0) {
        console.log("Genap");
    } else {
        console.log("Ganjil");
    }
}

Hasil1(15)

// NO. 3

// var x = 15
// var y = 0
// if (x > y) {
//     console.log("Positive");
// } else {
//     console.log("Negativ");
// }

function Hasil2(x) {

    if (x > 0) {
        console.log("Positive");
    } else {
        console.log("Negative");
    }
}

Hasil2(15)

// NO.4

// var x = 2016
// if (x % 400 === 0) {
//     console.log("Tahun Kabisat");
// } else if (x % 100 === 0) {
//     console.log("Bukan Tahun Kabisat");
// } else if (x % 4 === 0) {
//     console.log("Tahun Kabisat");
// } else {
//     console.log("Bukan Tahun Kabisat");
// }

function tahunkabisat (x) {

    if (x % 400 === 0) {
        console.log("Tahun Kabisat");
    } else if (x % 100 === 0) {
        console.log("Bukan Tahun Kabisat");
    } else if (x % 4 === 0) {
        console.log("Tahun Kabisat");
    } else {
        console.log("Bukan Tahun Kabisat");
    }
}

tahunkabisat(1900)

// NO.5

// var umur = 17
// if (umur < 18) {
//     console.log("Maaf, Anda Tidak Berhak Memberikan Suara Anda!");
// } else if (umur >= 18) {
//     console.log("Selamat! Anda Memenuhi Syarat Untuk Memberikan Suara Anda!");
// }

function umur(x) {

    if (x < 21) {
        console.log("Maaf Anda Tidak Berhak Memberikan Suara Anda!");
    } else {
        console.log("Selamat! Anda Memenuhi Syarat Untuk Memberikan Suara Anda!");
    }
}

umur(21)

// NO.6

function Nilai(x, y) {

    if (x !== 0) {
        if (x >= 0) {
            console.log((y = 1));
        } else if (x <= 0) {
            console.log((y = -1));
        } else {
            console.log(y = 0);
        }
        console.log();
    }
    }

    Nilai(-5)

// NO.7

function emangDiaApaan(x) {

    if (x < 150) {
        console.log("Orang Itu Kurcaci");
    } else if ((x >= 150) && (x < 170)) {
        console.log("Orang Itu Tidak Terlalu Tinggi");
    } else if ((x <= 170) && (x <= 200)) {
        console.log("Orang Itu Tinggi");
    } else {
        console.log("Tinggi Nya Tidak Normal");
    }
}

emangDiaApaan(150)

// NO.8

function fakta(x, y, z) {

    if (x > y) {
        if (x > z) {
            console.log(`${x} Adalah Yang Paling Besar Diantara Ketiga Parameter Tersebut`);
        } else {
            console.log(`${y} Adalah Yang Paling Besar Diantara Ketiga Parameter Tersebut`);
        }
    } else if (y > z) {
        console.log(`${y} Adalah Yang Paling Besar Diantara Ketiga Parameter Tersebut`);
    } else {
        console.log(`${z} Adalah Yang Paling Besar Diantara Ketiga Parameter Tersebut`);
    }
}

fakta(12, 25, 52)

// NO.9

function Coordinate(x, y) {
    if (x > 0 && y > 0) {
        console.log(`Berada Di Kuadran Pertama, ${x} ${y}`);
    } else if (x < 0 && y > 0) {
        console.log(`Berada Di Kuadran Kedua, ${x} ${y}`);
    } else if (x < 0 && y < 0) {
        console.log(`Berada Di Kuadran Ketiga, ${x} ${y}`);
    } else if (x > 0 && y < 0) {
        console.log(`Berada Di Kuadran Keempat, ${x} ${y}}`);
    } else if (x === 0 && y === 0) {
        console.log(`Berada Di Kuadran KeLima, ${x} ${y}`);
    }
}

Coordinate(7, 9);

// NO.10

function syarat(matematika, fisika, kimia) {
    if (matematika >= 65 && fisika >= 55 && kimia >= 50) {
        if (matematika + fisika + kimia >= 190 || matematika + fisika >= 140) {
            console.log("Memenuhi Persyaratan");
        } else if (matematika + fisika + kimia < 190 || matematika + fisika < 140) {
            console.log("Tidak Memenuhi Syarat");
        } 
    } else {
        console.log("NGOTAK GBLG");
    }
}

syarat(1, 1, 1)

// NO.11 OTAK GA NYAMPE

function akar(a, b, c) {
    let d;
    let x1;
    let x2;
    d = (b * b - 4) * (a * c)
    console.log(d);
    if (d === 0) {
        console.log("Kedua Akar Sama");
        x1 = -b / (2.0 * a);
        x2 = x1;
        console.log(`Akar Pertama Adalah = ${x1}`);
        console.log(`Akar Kedua Adalah = ${x2}`);
    } else if (d < 0) {
        console.log("Diantara Akar Yang Asli Dan Selisih");
        x1 = (-b + Math.sqrt(d)) / (2 * a);
        x2 = (-b + Math.sqrt(d)) / (2 * a);
    } else {
        console.log("Root Bersifat Imajiner Dan Tidak Ada Solusi ");
    }
}

akar(1, 5, 7)

// NO.12

function rapor(fisika, kimia, komputer) {

    let nomor = 784;
    let nama = "James";
    let total = fisika + kimia + komputer;
    let rata2 = total / 3;
    console.log(`Nomor Peserta : ${nomor}`);
    console.log(`Nama Siswa : ${nama}`);
    console.log(`Nilai Mapel Fisika : ${fisika}`);
    console.log(`Nilai Mapel Kimia : ${kimia}`);
    console.log(`Nilai mapel Komputer : ${komputer}`);
    console.log(`Nilai Total : ${total}`);
    console.log(`Rata - Rata : ${rata2}`);
    if (rata2 >= 60) {
        console.log("Pertama");
    } else if (rata2 < 60 && rata2 >= 48) {
        console.log("Kedua");
    } else if (rata2 < 48 && rata2 >= 36) {
        console.log("Pass");
    } else {
        console.log("WKWK GAK LULUS");
    }
}

rapor(70, 80, 90)

// NO.13

function suhu(x) {

    if (x < 0) {
        console.log("Kedinginan Sampai Meninggal");
    } else if (x <= 10) {
        console.log("Dingin Banget");
    } else if (x <= 20) {
        console.log("Dingin");
    } else if (x <= 30) {
        console.log("Normal");
    } else if (x <= 40) {
        console.log("Panas");
    } else {
        console.log("Panas Bat Anyink");
    }
}

suhu(42)

// NO.14

function SegitigaApa(x, y, z) {

    if (x == y && y == z) {
        console.log("Ini Adalah Segitiga Sama Sisi");
    } else if (x == y || x == z || y == z) {
        console.log("Ini Adalah Segitiga Sama Kaki");
    } else {
        console.log("Ini Adalah Segitiga Siku Siku");
    }
}

SegitigaApa(50, 50, 60)

// NO.15

function status(x, y, z) {

    if (x == y && y == z) {
        console.log("Segitiga Valid");
    } else {
        console.log("Segitiga Tidak Valid");
    }
}

status(40, 55, 65)

// NO.16

function tipeData(String, Number) {
    if (String === "Huruf") {
        console.log("Karakter String");
    } else if ( Number === "5") {
        console.log("Karakter Integer/Number");
    } else {
        console.log("Karakter Khusus");
    }
}

tipeData("@")

// NO.17

function statusAbjad(x) {

    if (x == "A" || x == "I" || x == "U" || x == "E" || x == "O") {
        console.log("Abjad Vokal");
    } else {
        console.log("Abjad Konsonan");
    }
}

statusAbjad("K")

// NO.18

function kondisi(x, y, z) {
    if (x > y) {
        z = x - y;
        console.log(`Menanggung Defisit Sebesar ${z}`);
    } else if (y > x) {
        z = y - x;
        console.log(`Sisa Keuntungan ${z}`);
    } else {
        console.log("Tidak Memiliki Profit Atau Defisit");
    }
}

kondisi(500, 700)

// NO.19

function cust(nomor, nama, exp) {

    let cost;
    let costs;
    let total;

    if (exp < 200) {
        cost = 1.2;
    } else if (exp >= 200 && exp < 400) {
        cost = 1.5;
    } else if (exp >= 400 && exp < 600) {
        cost = 1.8;
    } else {
        cost = 2.0;
    }

    if (exp > 300) {
        costs = exp * cost * 0.15;
        total = exp * cost + costs;
    } else {
        total = 100;
    }
    console.log(`ID Pelanggan : ${nomor}`);
    console.log(`Nama Pelanggan : ${nama}`);
    console.log(`Yang Di Bebankan : ${exp}`);
    console.log(`Jumlah Cost Adalah : @${cost} Per Unit`);
    console.log(`${exp * cost} Dengan Tambahan ${costs}`);
    console.log(`Total Yang Di Bebankan Adalah : ${total}`);
};

cust(1001, "James", 800)

// NO.20

function Nilai(x) {

    switch (x) {
        case "E": 
            console.log("Excellent");
            break;
        case "V": 
            console.log("Very Good");
            break;
        case "G": 
            console.log("Good");
            break;
        case "A": 
            console.log("Average");
            break;
        case "F": 
            console.log("Fails");
            break;
        default:
            console.log("Invalid Grade Found");
            break;
    }
}

Nilai("A")

//NO.21

function Day(x) {

    switch (x) {
        case 1 :
            console.log("Monday");
            break;
        case 2 :
            console.log("Tuesday");
            break;
        case 3 :
            console.log("Wednesday");
            break;
        case 4 :
            console.log("Thursday");
            break;
        case 5 :
            console.log("Friday");
            break;
        case 6 :
            console.log("Saturday");
            break;
        case 7 :
            console.log("Sunday");
            break;
        default:
            console.log("NAMA HARI TIDAK TERSEDIA");
            break;
    }
}

Day(4)

//NO.22

function exmplNumber(x) {
    switch (x) {
        case 0 :
            console.log("Zero");
            break;
        case 1 :
            console.log("One");
            break;
        case 2 :
            console.log("Two");
            break;
        case 3 :
            console.log("Three");
            break;
        case 4 :
            console.log("Four");
            break;
        case 5 :
            console.log("Five");
            break;
        case 6 :
            console.log("Six");
            break;
        case 7 :
            console.log("Seven");
            break;
        case 8 :
            console.log("Eight");
            break;
        case 9 :
            console.log("Nine");
            break;
        default :
            console.log("Please Try Again");
            break;
    }
}

exmplNumber(4)

//NO.23

function Month(x) {
    switch (x) {
        case 1 :
            console.log("january");
            break;
        case 2 :
            console.log("February");
            break;
        case 3 :
            console.log("March");
            break;
        case 4 :
            console.log("April");
            break;
        case 5 :
            console.log("May");
            break;
        case 6 :
            console.log("June");
            break;
        case 7 :
            console.log("July");
            break;
        case 8 :
            console.log("August");
            break;
        case 9 :
            console.log("September");
            break;
        case 10 :
            console.log("October");
            break;
        case 11 :
            console.log("November");
            break;
        case 12 :
            console.log("December");
            break;
        default : 
            console.log("Invalid, Please Try Again");
            break;
    }
}

Month(4)

//NO.24

function fact(x) {
    switch (x) {
        case 1 :
        case 3 :
        case 5 :
        case 7 :
        case 8 :
        case 10 :
        case 12 :
            console.log("Terdapat 31 Hari Dalam Bulan Tersebut");
            break;
        case 2 :
            console.log("Bulan Kedua Adalah Bulan Februari, Bulan Februari Memiliki 28 Hari");
            console.log("Pada Tahun Kabisat, Bulan Februari Memiliki 29 Hari");
        case 4 :
        case 6 :
        case 9 :
        case 11 :
            console.log("Terdapat 30 hari Dalam Bulan Tersebut");
            break;
        default :
            console.log("Invalid, Please Try Again");
            break;
    }
}

fact(7)

//NO.25

function Luas(x, r, l, w, a, t) {
    let area;
    switch (x) {
        case 1 :
            area = 3.14 * r * r;
            console.log(`Luas Area : ${area}`);
            break;
        case 2 :
            area = l * w;
            console.log(`Luas Area : ${area}`);
            break;
        case 3 :
            area = 0.5 * a * t;
            console.log(`Luas Area : ${area}`);
            break;
        default :
            console.log("Invalid, Please Try Again");
            break;
    }
}

Luas(1, 5)

//NO.26

function Arithmatic(a, b, c) {
    switch (c) {
        case 1 :
            console.log(`Total Soal Pertambahan Adalah : ${a + b}`);
            break;
        case 2 :
            console.log(`Total Soal Pengurangan Adalah : ${a - b}`);
            break;
        case 3 :
            console.log(`Total Soal Perkalian Adalah : ${a * b}`);
            break;
        case 4 :
            console.log(`Total Soal Pembagian Adalah : ${a / b}`);
        default :
            console.log("Invalid, Please Try Again");
            break;
    }
}

Arithmatic(10, 2, 3)