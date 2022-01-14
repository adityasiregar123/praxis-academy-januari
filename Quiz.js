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

function Angkringan (name, age, money) {
    let juice = 50000
    let anggur = 100000
    let drink = "Juice"
    let drinks = "Anggur"
    if (name === "") {
        console.log("Anda Tidak Boleh Masuk");
        } else if (name === name) {
            console.log(`Silahkan Masuk ${name}`);
    if (age <= 17){
        console.log(`${name} Hanya Boleh Memesan ${drink} Karna Umur Kamu ${age} Tahun`);
     } else {
        console.log(`${name} Boleh Memesan ${drinks} Karna Umur Kamu ${age} Tahun`)
    }
}
if (money <= juice && money <= anggur) {
    console.log("Uang Anda Tidak Cukup, Silahkan Pulang!");
} else if (age <= 17) {
    console.log(`Kamu Membeli Juice Seharga ${juice}, Sisa Uang Mu Adalah ${money - juice}`);
} else {
    console.log(`Kamu Membeli Anggur Seharga ${anggur}, Sisa Uang Mu Adalah ${money - anggur}`);
}
}
Angkringan("Aditya", 16, 110000)
Angkringan("Jokowi", 18, 150000)