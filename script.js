// if else
let nilai = 75;
let ifElse = '';

if (nilai >= 90) {
  ifElse = "Anda mendapatkan nilai A";
} else if (nilai >= 80) {
  ifElse = "Anda mendapatkan nilai B";
} else if (nilai >= 70) {
  ifElse = "Anda mendapatkan nilai C";
} else {
  ifElse = "Anda mendapatkan nilai D";
}

// Menampilkan output ke dalam elemen HTML
document.getElementById("if-else").innerHTML = ifElse;

// Nested if
let nilaiUjian = 85;
let absensi = 80;
let nestedIf = '';

if (nilaiUjian >= 70) {
  if (absensi >= 75) {
    nestedIf = "Anda lulus ujian dan absensi";
  } else {
    nestedIf = "Anda lulus ujian, tetapi absensi rendah";
  }
} else {
  nestedIf = "Anda tidak lulus ujian";
}

// Menampilkan output ke dalam elemen HTML
document.getElementById("nested-if").innerHTML = nestedIf;

// switch case
let hari = "Jumat";
let switchCase = '';

switch (hari) {
  case "Senin":
    switchCase = "Hari ini adalah Senin";
    break;
  case "Selasa":
    switchCase = "Hari ini adalah Selasa";
    break;
  case "Rabu":
    switchCase = "Hari ini adalah Rabu";
    break;
  case "Kamis":
    switchCase = "Hari ini adalah Kamis";
    break;
  case "Jumat":
    switchCase = "Hari ini adalah Jumat";
    break;
  default:
    switchCase = "Hari ini adalah hari lain";
}

// Menampilkan output ke dalam elemen HTML
document.getElementById("switch-case").innerHTML = switchCase;

// for loop
let forStatement = '';

for (let i = 1; i <= 5; i++) {
  forStatement += "Iterasi ke-" + i + "<br>";
}

// Menampilkan output ke dalam elemen HTML
document.getElementById("for-statement").innerHTML = forStatement;

// while loop
let angka = 1;
let whileLoop = '';

while (angka <= 7) {
  whileLoop += "Angka: " + angka + "<br>";
  angka++;
}

// Menampilkan output ke dalam elemen HTML
document.getElementById("while-loop").innerHTML = whileLoop;

// do-while loop
let i = 1;
let doWhile = '';
do {
  doWhile += "Iterasi ke-" + i + "<br>";
  i++;
} while (i <= 7);

// Menampilkan output ke dalam elemen HTML
document.getElementById("do-while").innerHTML = doWhile;

// Function dengan parameter dan return
let functionParameter = '';

function tambah(a, b) {
  return a + b;
}

let hasil = tambah(5, 3);
functionParameter = "Hasil penjumlahan: " + hasil;

// Menampilkan output ke dalam elemen HTML
document.getElementById("function-parameter").innerHTML = functionParameter;

// Function tanpa parameter
let funcTanpaParameter = '';

function sapa() {
  funcTanpaParameter = "Halo, nama saya Raihan Ramadhan!";
}

sapa();

// Menampilkan output ke dalam elemen HTML
document.getElementById("func-tanpa-parameter").innerHTML = funcTanpaParameter;