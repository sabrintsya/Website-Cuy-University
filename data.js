// console.log("Sabrina natasya bilbina");
// variable menampung sebuah data
// dijavascript untuk menampung sebuah data bisa menggunakan dua const let
// const = constanta, data yang tidak bisa diubah nilainya
// interger = nomor gaada koma nya,kalau ada koma nya float
// "" = string
// `` backtick
// console log untuk menampilkan data atau varibale



// console.log(nama); 
// console.log(usia);

// manggil variable string ${}
// console.log('nama saya adalah ',nama, 'usia saya adalah',usia);
// function = memberikan sebuah fungsi, didalam function,berfungsi sesuai arahan nya,membngkus sesuatu,dipakai berulang ulang
// statament atau condition =kondisi if else
// jika usia nya == 18 dikasih validasi kondisi,lakukan apa
// ==  value compare.tidak memikirkan data
// === value compare dengan tipe data nya
//  > lebih
// < kurang
// && dandan = dan


const nama = "Sabrina natasya bilbina";
let usia = 30;

const biodata = document.getElementById('biodata');

function generateUsia () {
    let generasi;

    if (usia > 10 && usia < 18) {
        generasi = "generasi remaja";
    } 
    else if (usia > 18 && usia < 30) {
        generasi = "generasi dewasa";
    }
    else if (usia >= 30){
       generasi = "generasi lansia";
    }
    else if (usia > 2 && usia < 10){
        generasi = "generasi anak-anak";
    }
    else {
        generasi ="generasi bayi";
    }

    return console.log('generasi saya adalah', generasi);
    
}

console.log(nama);
console.log(usia);
generateUsia();

