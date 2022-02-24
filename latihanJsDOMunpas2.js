function pilihanComputer() {
    var comp = Math.random() //fungsi membangkitkan angka random dari 0 sampai 1
    //menangkap pilihan computer
    if(comp < 0.34) return 'gajah';
    //diatas sama dengan
    if(comp >= 0.34 && comp < 0.67) {
        return "semut";
    }
    //sisanya tinggal return saja
    return 'orang';
}

//function untuk rulesnya
function getHasil(comp, player) {
    if (player == comp) return "SERI";
    //menggabungkan if dan operator ternary (kondisional), di dalam fungsi (mengembalikkan hasil operator kondisional)
    if(player == "gajah") return (comp == "orang") ? "MENANG!" : "KALAH!";
    if(player == "semut") return (comp == "gajah") ? "MENANG!" : "KALAH!";
    if(player == "orang") return (comp == "semut") ? "MENANG!" : "KALAH!";
}

const iniInfo = document.getElementsByClassName('info')[0];
const gambarComputer = document.querySelector('.img-computer');

//Supaya Lebih Interaktif Bikin Pilihan Komputer Gonta - Ganti Dulu
//Coba Tonton Konsep Timing JS (UNPAS) Set Interval dan Set Time Out
function putarComputer() {
    const gambarAcak = ['gajah', 'semut', 'orang'];
    let i = 0;
    //menangkap waktu sekarang saat fungsi "putarComputer()" dijalankan
    const waktuMulai = new Date().getTime();
    //"setInterval()" yaitu melakukan sesuatu function secara berulang - ulang selama waktu tertentu
    //dibawah dijalankan setiap 0,1 detik, maka nilai "i" akan bertambah 1 setiap 0,1 detik
    setInterval(function() {
        //cek jika selisih waktu sudah 1 detik (function sudah berjalan selama 1 detik), maka berhentikan
        //"new Date().getTime()" adalah waktu yang sekarang
        if(new Date().getTime() - waktuMulai > 1000) {
            //"clearInterval" untuk keluar dari interval
            clearInterval;
            //'return' untuk keluar dari function, percuma kalau keluar dari interval tapi function "putarComputer()" tetap jalan, makan akan menjalankan lagi setInterval
            return;
        }
        //ubah atribut sekaligus menambah nilai i
        gambarComputer.setAttribute('src', gambarAcak[i++] + '.png');
        //gambar kalau sudah habis, maka dibikin balik lagi (set index i jadi 0 lagi)
        if(i == gambarAcak.length) i = 0;
    }, 100)
}

let scoreP = 0
let scoreC = 0

//Logika Event-nya Cara 3 (Ada Fungsi Waktunya)
const pilihanPlayer = document.querySelectorAll('li img');
//"untuk setiap img yang ada di node list pilihan, maka jalankan function"
pilihanPlayer.forEach(function(pil) {
    //console.log(pil);
    //event untuk pilihan yang diklik, masing - masing jika dikli
    pil.addEventListener('click', function() {
        //console.log(pil);
        const pComputer = pilihanComputer();
        const pPlayer = pil.className;
        console.log(pComputer);
        console.log(pPlayer);
        
        //jalankan fungsi putar acak gambar
        putarComputer();

        //dapatkan hasil dan tampilkan hasilnya setelah 1 detik (1000 ms), akan nunggu dulu
        setTimeout(function() {
            //ubah gambar komputer sesuai rendom
            gambarComputer.setAttribute('src', pComputer + '.png');
            
            const hasil = getHasil(pComputer, pPlayer);
            iniInfo.innerHTML = hasil;
            //taruh hasil di papan score
            const papanScore = document.getElementById('score');
            if(hasil == 'MENANG!') {
                scoreP = scoreP + 1; 
            };
            if(hasil == 'KALAH!') {
                scoreC = scoreC + 1;
            };
            papanScore.innerHTML = 'Score Kamu = ' + scoreP + ' dan Score Musuh= ' + scoreC;
        }, 1000);
    });
});



// //Logika Event-nya Cara 2
// const pilihanPlayer = document.querySelectorAll('li img');
// //"untuk setiap img yang ada di node list pilihan, maka jalankan function"
// pilihanPlayer.forEach(function(pil) {
//     //console.log(pil);
//     //event untuk pilihan yang diklik, masing - masing jika dikli
//     pil.addEventListener('click', function() {
//         //console.log(pil);
//         const pComputer = pilihanComputer();
//         const pPlayer = pil.className;
//         console.log(pComputer);
//         console.log(pPlayer);
//         //ubah gambar komputer sesuai rendom
//         gambarComputer.setAttribute('src', pComputer + '.png');
//         //dapatkan hasil dan tampilkan hasilnya
//         const hasil = getHasil(pComputer, pPlayer);
//         console.log(hasil);
//         iniInfo.innerHTML = hasil;
//     });
// });



// //Logika Event-nya Cara 1
// const pGajah = document.querySelector('.gajah');
// pGajah.addEventListener('click', function() {
//     const pComputer = pilihanComputer();
//     const pPlayer = pGajah.className;
//     console.log(pComputer);
//     console.log(pPlayer);
//     //ubah gambar komputer sesuai rendom
//     gambarComputer.setAttribute('src', pComputer + '.png');
//     //dapatkan hasil dan tampilkan hasilnya
//     const hasil = getHasil(pComputer, pPlayer);
//     console.log(hasil);
//     iniInfo.innerHTML = hasil;
// });

// const pOrang = document.querySelector('.orang');
// pOrang.addEventListener('click', function() {
//     const pComputer = pilihanComputer();
//     const pPlayer = pOrang.className;
//     console.log(pComputer);
//     console.log(pPlayer);
//     //ubah gambar komputer sesuai rendom
//     gambarComputer.setAttribute('src', pComputer + '.png');
//     //dapatkan hasil dan tampilkan hasilnya
//     const hasil = getHasil(pComputer, pPlayer);
//     console.log(hasil);
//     iniInfo.innerHTML = hasil;
// });

// const pSemut = document.querySelector('.semut');
// pSemut.addEventListener('click', function() {
//     const pComputer = pilihanComputer();
//     const pPlayer = pSemut.className;
//     console.log(pComputer);
//     console.log(pPlayer);
//     //ubah gambar komputer sesuai rendom
//     gambarComputer.setAttribute('src', pComputer + '.png');
//     //dapatkan hasil dan tampilkan hasilnya
//     const hasil = getHasil(pComputer, pPlayer);
//     console.log(hasil);
//     iniInfo.innerHTML = hasil;
// });



// //Contoh LOGIKA Membuat Game Suwit Jawa Versi 1.0
// var tanya = true;
// while(tanya) {
//     //menangkap pilihan user
//     var player = prompt("pilih: gajah, semut, orang");
//     //membangkitkan fungsi random
//     var comp = Math.random() //fungsi membangkitkan angka random dari 0 sampai 1
//     //menangkap pilihan computer
//     if(comp < 0.34) {
//         comp = "gajah";
//     } else if(comp >= 0.34 && comp < 0.67) {
//         comp = "semut";
//     } else {
//         comp = "orang";
//     }
//     //menentukan rules
//     var hasil = "";
//     if (player == comp) {
//         hasil = "SERI";
//     } else if(player == "gajah") {
//         if (comp == "orang") {
//             hasil = "MENANG";
//         } else {
//             hasil = "KALAH";
//         }
//     } else if(player == "semut") {
//         if (comp == "gajah") {
//             hasil = "MENANG";
//         } else {
//             hasil = "KALAH";
//         }
//     } else if(player == "orang") {
//         //bisa disingkat dengan cara operator ternary
//         /*
//         if (comp == "semut") {
//             hasil = "MENANG";
//         } else {
//             hasil = "KALAH";
//         */
//         //menjadi sebagai berikut, varibel akan diisi sesuai dengan hasil true (kiri) atau (false)
//         hasil = (comp == "semut") ? "MENANG" : "KALAH";
//     } else {
//         hasil = "Anda memasukkan pilihan suit yang SALAH";
//     }
//     //Tampilan hasil pertandingan 
//     alert("Kamu memilih " + player + " dan Komputer memilih " + comp + ".");
//     alert("Hasil pertandingan ialah " + hasil);
//     tanya = confirm("Main lagi?");
// }
// alert("TERIMA KASIH SUDAH BERMAIN, MENYENANGKAN BERMAIN DENGAN ANDA");