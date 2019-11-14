/* Cafe Visitation
Instruksi
Seseorang pengunjung bar direpresentasikan oleh JavaScript dengan memiliki variable name, age, dan money. Ia masuk ke bar untuk memesan minuman, namun bar memiliki kondisi sebagai berikut:

Step 1. Jika name dari si pengunjung kosong, tampilkan di console "Anda tidak boleh masuk!" dan program selesai. Jika name tidak kosong, lanjut ke step ke 2.

Step 2. Jika age dari si pengunjung dibawah 17 tahun, maka ia hanya boleh memesan juice. Jika age 17 tahun keatas, ia hanya boleh memesan anggur.

Step 3. Juice memiliki harga 50000, sedangkan anggur memiliki harga 300000. Sesuai dengan pilihan minuman di step 2, maka pengunjung ini harus membayar sesuai harga minuman.

Jika money / uang yang ia miliki tidak mencukupi, maka tampilkan di console "Uang tidak cukup. Anda harus pulang.". Jika uang cukup, tampilkan "Anda bisa pesan minum. Sisa uang anda: ...", dan ganti ... dengan sisa uang yang telah dikurangi oleh harga minuman. */

var name = "Jeremy";
var age = 18087;
let money = 300000;
var drink;

if(name == "") {
    console.log("You are not allowed in.");
}else{
    if(age < 17) {
        var drink = "juice";
        console.log("You ordered juice.")
    }else if(age >= 17 && age < 100) {
        var drink = "wine";
        console.log("You ordered wine.");
    }
    if(age >= 100) {
        var drink = "nothing";
        console.log("Lu hantu ato apa bang? Umur segitu masih coba minum.");
    }
}    

if(drink == "juice"){
        if(money >= 50000){
            console.log("You paid Rp50,000. You have Rp", money - 50000, "left.");
        money-50000;
        }if(money < 50000 && money > 0){
            console.log("Insufficient funds. You have Rp", money);
        }else{
            console.log("You have no money at all.");
        }
}

else if(drink == "wine"){
    if(money >= 300000) {
        console.log("You paid Rp300,000. You have Rp", money - 300000, "left.");
        money-300000;
    }if(money < 300000 && money > 0){
        console.log("Insufficient funds. You have Rp", money);
    }else{
        console.log("You have no money at all.");
    }
}