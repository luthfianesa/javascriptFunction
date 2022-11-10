let angka1 = 5;
let angka2 = 5;
let panjang = 7;
let lebar = 4;
let nama = "Irvine";
let angkaPangkat = 2;
let tahunSekarang = 2022;
let tahunLahir = 1998;

// Fungsi Pertambahan
function pertambahan(angka1, angka2) {
  return angka1 + angka2;
}

// Fungsi Pengurangan
function Pengurangan(angka1, angka2) {
  return angka1 - angka2;
}

// Fungsi Perkalian
function perkalian(angka1, angka2) {
  return angka1 * angka2;
}

// Fungsi Pembagian
function pembagian(angka1, angka2) {
  return angka1 / angka2;
}

// Fungsi Menghitung Luas Persegi Panjang
function luasPersegiPanjang(panjang, lebar) {
  return panjang * lebar;
}

// Fungsi Menghitung Panjang Karakter String
function panjangKarakterString(nama) {
  return nama.length;
}

// Fungsi Perpangkatan
function perpangkatan(angka1, angkaPangkat) {
  return angka1 ** angkaPangkat;
}

// Fungsi Menghitung Usia
function menghitungUsia(tahunSekarang, tahunLahir) {
  return tahunSekarang - tahunLahir;
}

// Fungsi Mencari Angka Genap
function mencariAngkaGenap(angka1) {
  if (angka1 % 2 === 0) {
    return "Ini Angka Genap";
  } else {
    return "Ini Angka Ganjil";
  }
}

// Fungsi Mencari Angka Ganjil
function mencariAngkaGanjil(angka1) {
  if (angka1 % 2 === 1) {
    return "Ini Angka Ganjil";
  } else {
    return "Ini Angka Genap";
  }
}

//

// Memanggil Fungsi Pertambahan
console.log(pertambahan(angka1, angka2));

// Memanggil Fungsi Pengurangan
console.log(Pengurangan(angka1, angka2));

// Memanggil Fungsi Perkalian
console.log(perkalian(angka1, angka2));

// Memanggil Fungsi Pembagian
console.log(pembagian(angka1, angka2));

// Memanggil Fungsi Menghitung Luas Persegi Panjang
console.log(luasPersegiPanjang(panjang, lebar));

// Memanggil Fungsi Menghitung Panjang Karakter String
console.log(panjangKarakterString(nama));

// Memanggil Fungsi Perpangkatan
console.log(perpangkatan(angka1, angkaPangkat));

// Memanggil Fungsi Menghitung Umur
console.log(menghitungUsia(tahunSekarang, tahunLahir));

// MemanggilFungsi Mencari Angka Genap
console.log(mencariAngkaGenap(angka1));

// Memanggil Fungsi Mencari Angka Ganjil
console.log(mencariAngkaGanjil(angka1));

// Fungsi Memanggil 2 Orang
function greetingTwoPerson(person1, person2) {
  console.log(`Halo ${person1}`);
  console.log(`Halo ${person2}`);
}

greetingTwoPerson("Shinta", "Jojo");

console.log("\n");

// Fungsi Memanggil 2 Orang dengan Return
function greeting2Orang(orang1, orang2) {
  let result = `Halo ${orang1}\nHalo ${orang2}`;

  return result;
}

console.log(greeting2Orang("Kaylie", "Pataky"));

// Membuat fungsi di dalam variabel

const greeting = greeting2Orang("Tatiana", "Jessica");
console.log(greeting);

console.log('\n');


// Counting Discounted Price in January, February and March

function discountedPrice(discountPercentage, month) {
  let tshirtPrice = 25000
  let discountPrice = tshirtPrice * discountPercentage / 100
  let discountedPrice = tshirtPrice - discountPrice
  return `Discounted Price In ${month} Rp.-${discountedPrice}`
}

// Price in January
const countingDiscountedJanuary = discountedPrice(10,'January')
// Price in February
const countingDiscountedFebruary = discountedPrice(40,'February')
// Price in March
const countingDiscountedMarch = discountedPrice(70,'March')


console.log(countingDiscountedJanuary);
console.log(countingDiscountedFebruary);
console.log(countingDiscountedMarch);

console.log('\n');

// Counting Age
function countingAge(yearBorn) {
  let thisYear = new Date().getFullYear()
  let age = thisYear - yearBorn
  return `Your age is ${age}` 
}

const countingMyAge = countingAge(1998)
console.log(countingMyAge);

console.log('\n');

// // Function Declarative
// function iniFungsiDeklaratif(parameternya) {
  
// }

// // Function Expression
// const iniFungsiEkspresi = function () {

// }

// // Arrow Function
// const iniArrowFunction = () => {

// }

const hitungPangkat = (angka1, angka2) => {
  return `Hasil dari ${angka1} pangkat ${angka2} adalah ${angka1 ** angka2}`
}

console.log(hitungPangkat(5,2));
