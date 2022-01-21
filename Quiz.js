// type data string and integer
// let name = "aditya";
// let age = 17;
// let money = 55000;
// let drink = "juice"
// let drinks = "anggur"
// let juice = 50000
// let anggur = 30000

// if (name === null) {
//     console.log("anda tidak boleh masuk");
// } else if (name === "aditya") {
//     console.log("Selamat datang! Silahkan masuk");
// }
// if (age < 17 || money > juice) {
//     console.log("Hanya boleh memesan juice");
// } else if (age > 17 || money > anggur){
//     console.log("anya boleh memesan anggur");
// }
// if (money < juice && money > anggur) {
//     console.log("Uang anda tidak mencukupi, Anda harus pulang!");
// }
// if (money > juice && money > anggur) {
//     console.log("Anda bisa pesan minum");
// }
// if (money >= juice || money > anggur) {
//     console.log("Jika anda membeli juice seharga" + juice + "maka, sisa uang anda adalah" + money - juice);
// }
// if (money < juice || money > anggur) {
//     console.log("Jika anda membeli anggur seharga" + anggur + "maka, sisa uang anda adalah" + money - anggur);
// }

// "No"."1" - "30" = "Sa

// function pengkondisian() {
//     let jmlAngkot = 10;
//     let angkotJalan = 6;
//     for (let nomorAngkot = 1; nomorAngkot <= jmlAngkot; nomorAngkot++) {
//       if (nomorAngkot <= angkotJalan) {
//         console.log("Angkot no " + nomorAngkot + " beroperasi dengan baik");
//       } else {
//         console.log("Angkot no " + nomorAngkot + " sedang tidak beroperasi");
//       }
//     }
//   }
  
//   pengkondisian();

// let perkenalan = {nama: "Aditya", ciriciri: "Ganteng", tinggi: "170",hobi: "Bulu Tangkis", citacita: "Tiba Tiba Dapat Uang 1 Triliun" }
// console.log(`Perkenalkan Nama Saya ${perkenalan.nama} Saya Orangnya ${perkenalan.ciriciri} Tinggi Badan Saya ${perkenalan.tinggi} Cita Cita Saya ${perkenalan.citacita}`);
// console.log(perkenalan.hobi);


// let persiapan = {bahan1: "250 Gr Tepung Terigu Protein Tinggi", bahan2: "5,5 Gr Yeast", bahan3: "10 Gr Susu Bubuk", bahan4: "1  Butir Telur", bahan5: "90 Ml Susu UHT", bahan6: "30 Ml Air Dingin", bahan7: "25 Gr Air Gula", bahan8: "20 Gr Butter", bahan9: "2,5 Gr Garam" }
// console.log(`Bahan - Bahan Roti Tawar Adalah 
// 1. ${persiapan.bahan1} 
// 2. ${persiapan.bahan2} 
// 3. ${persiapan.bahan3} 
// 4. ${persiapan.bahan4} 
// 5. ${persiapan.bahan5} 
// 6. ${persiapan.bahan6} 
// 7. ${persiapan.bahan7} 
// 8. ${persiapan.bahan8} 
// 9. ${persiapan.bahan9}`);


// function Angkringan (name, age, money) {
//     let juice = 50000
//     let anggur = 100000
//     let drink = "Juice"
//     let drinks = "Anggur"
//     if (name === "") {
//         console.log("Anda Tidak Boleh Masuk");
//         } else if (name === name) {
//             console.log(`Silahkan Masuk ${name}`);
//     if (age <= 17){
//         console.log(`${name} Hanya Boleh Memesan ${drink} Karna Umur Kamu ${age} Tahun`);
//      } else {
//         console.log(`${name} Boleh Memesan ${drinks} Karna Umur Kamu ${age} Tahun`)
//     }
// }
// if (money <= juice && money <= anggur) {
//     console.log("Uang Anda Tidak Cukup, Silahkan Pulang!");
// } else if (age <= 17) {
//     console.log(`Kamu Membeli Juice Seharga ${juice}, Sisa Uang Mu Adalah ${money - juice}`);
// } else {
//     console.log(`Kamu Membeli Anggur Seharga ${anggur}, Sisa Uang Mu Adalah ${money - anggur}`);
// }
// }
// Angkringan("adit", 16, 110000)
// Angkringan("Jokowi", 18, 150000)



// function balikNama (str) {
// return str.split("").reverse().join("")
// }
// console.log(balikNama("landak"))  /*kadnal*/

// function Tutorial(namaRoti) {
//     let bahanRotiTawar = "500 Gr Tepung Terigu, 2 Sdt Garam, 7 Gr Ragi Instan, 3 Sdm Minyak Zaitun, 300 Ml Air"
//     let bahanRotiManis = "450 Gr Tepung Terigu, 1 Sdt Garam, 2 Sdt Fermipan, 4 Sdm Gula Pasir, 2 Sdm Susu Bubuk, 50 Gr Mentega, 2 Kuning telur, 300 Ml Air"
//     let stepRotiTawar = "Bla bla bla"
//     let stepRotimanis = "Blaaa Blaaa Blaaa"
//     if (namaRoti === "Roti Tawar") {
//     console.log("Ini Bahan Dan Cara Bikin Roti Tawar")
//     } else if (namaRoti !== namaRoti) 
//         console.log("Selain Roti Tidak Bisa");
// }

// Tutorial("")



// let hari = 6
// switch (hari) {
//     case 1:
//         console.log("Senin");
//         break;
//     case 2:
//         console.log("Selasa");
//         break;
//     case 3:
//         console.log("Rabu");
//         break;
//     case 4:
//         console.log("Kamis");
//         break;
//     case 5:
//         console.log("Jum'at");
//         break;
//     case 6:
//         console.log("Sabtu");
//         break;
//     case 7:
//         console.log("Minggu");
//         break;
//         default:
//         break;
// }


// NO. 1

// function Jadi() {

// var x = 15
// var y = 15
// if (x === y) {
//     console.log("Sama");
//     } else {
//         console.log("Tidak Sama");
//     }
// }

// Jadi()

// NO. 2

// var x = 3
// var y = 15
// if (y%x == 0) {
//     console.log("Habis");
// } else {
//     console.log("Sisa");
// }

// function Hasil1(x) {

//     if (x % 2 === 0) {
//         console.log("Genap");
//     } else {
//         console.log("Ganjil");
//     }
// }

// Hasil1(15)

// NO. 3

// var x = 15
// var y = 0
// if (x > y) {
//     console.log("Positive");
// } else {
//     console.log("Negativ");
// }

// function Hasil2(x) {

//     if (x > 0) {
//         console.log("Positive");
//     } else {
//         console.log("Negative");
//     }
// }

// Hasil2(15)

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

// function tahunkabisat (x) {

//     if (x % 400 === 0) {
//         console.log("Tahun Kabisat");
//     } else if (x % 100 === 0) {
//         console.log("Bukan Tahun Kabisat");
//     } else if (x % 4 === 0) {
//         console.log("Tahun Kabisat");
//     } else {
//         console.log("Bukan Tahun Kabisat");
//     }
// }

// tahunkabisat(1900)

// NO.5

// var umur = 17
// if (umur < 18) {
//     console.log("Maaf, Anda Tidak Berhak Memberikan Suara Anda!");
// } else if (umur >= 18) {
//     console.log("Selamat! Anda Memenuhi Syarat Untuk Memberikan Suara Anda!");
// }

// function umur(x) {

//     if (x < 21) {
//         console.log("Maaf Anda Tidak Berhak Memberikan Suara Anda!");
//     } else {
//         console.log("Selamat! Anda Memenuhi Syarat Untuk Memberikan Suara Anda!");
//     }
// }

// umur(21)

// NO.6

// function Nilai(x, y) {

//     if (x !== 0) {
//         if (x >= 0) {
//             console.log((y = 1));
//         } else if (x <= 0) {
//             console.log((y = -1));
//         } else {
//             console.log(y = 0);
//         }
//         console.log();
//     }
//     }

//     Nilai(-5)

// NO.7

// function emangDiaApaan(x) {

//     if (x < 150) {
//         console.log("Orang Itu Kurcaci");
//     } else if ((x >= 150) && (x < 170)) {
//         console.log("Orang Itu Tidak Terlalu Tinggi");
//     } else if ((x <= 170) && (x <= 200)) {
//         console.log("Orang Itu Tinggi");
//     } else {
//         console.log("Tinggi Nya Tidak Normal");
//     }
// }

// emangDiaApaan(150)

// NO.8

// function fakta(x, y, z) {

//     if (x > y) {
//         if (x > z) {
//             console.log(`${x} Adalah Yang Paling Besar Diantara Ketiga Parameter Tersebut`);
//         } else {
//             console.log(`${y} Adalah Yang Paling Besar Diantara Ketiga Parameter Tersebut`);
//         }
//     } else if (y > z) {
//         console.log(`${y} Adalah Yang Paling Besar Diantara Ketiga Parameter Tersebut`);
//     } else {
//         console.log(`${z} Adalah Yang Paling Besar Diantara Ketiga Parameter Tersebut`);
//     }
// }

// fakta(12, 25, 52)

// NO.9

// function Coordinate(x, y) {
//     if (x > 0 && y > 0) {
//         console.log(`Berada Di Kuadran Pertama, ${x} ${y}`);
//     } else if (x < 0 && y > 0) {
//         console.log(`Berada Di Kuadran Kedua, ${x} ${y}`);
//     } else if (x < 0 && y < 0) {
//         console.log(`Berada Di Kuadran Ketiga, ${x} ${y}`);
//     } else if (x > 0 && y < 0) {
//         console.log(`Berada Di Kuadran Keempat, ${x} ${y}}`);
//     } else if (x === 0 && y === 0) {
//         console.log(`Berada Di Kuadran KeLima, ${x} ${y}`);
//     }
// }

// Coordinate(7, 9);

// NO.10

// function syarat(matematika, fisika, kimia) {
//     if (matematika >= 65 && fisika >= 55 && kimia >= 50) {
//         if (matematika + fisika + kimia >= 190 || matematika + fisika >= 140) {
//             console.log("Memenuhi Persyaratan");
//         } else if (matematika + fisika + kimia < 190 || matematika + fisika < 140) {
//             console.log("Tidak Memenuhi Syarat");
//         } 
//     } else {
//         console.log("NGOTAK GBLG");
//     }
// }

// syarat(1, 1, 1)

// NO.11 OTAK GA NYAMPE

// function akar(a, b, c) {
//     let d;
//     let x1;
//     let x2;
//     d = (b * b - 4) * (a * c)
//     console.log(d);
//     if (d === 0) {
//         console.log("");
//     }
// }

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

function 

// function korekYangAkuBeli(korek) {

//     if (korek <= 7000) {
//         console.log("Murah");
//     } else if (korek > 7000 && korek <= 10000) {
//         console.log("Sedang");
//     } else {
//         console.log("Mahal");
//     }
// }

// korekYangAkuBeli(9000)


// var hargakorek1 = 700000
// var hargakorek2 = 10000
// if (hargakorek1 <= hargakorek2) {
//     console.log("Murah");
// } else {
//     console.log("Mahal");
// }

// function umur(x) {
//     if (x < 16) {
//         console.log("Bocil Ganggu");
//     } else {
//         console.log("Dah Gede Aja");
//     }
// }

// umur(21)

// function hargaMobil(mobil) {
//     if (mobil <= 7000) {
//         console.log("Murah");
//     } else {
//         console.log("Mahal");
//     }
// }

// hargaMobil(7100)

// var hargaMobil = 8000
// if (hargaMobil <= 7000) {
//     console.log("Murah");
// } else if (hargaMobil > 7000) {
//     console.log("Sedang");
// }