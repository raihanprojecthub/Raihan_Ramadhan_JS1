// if else
var nilai = 75;

if (nilai >= 90) {
  console.log("Anda mendapatkan nilai A");
} else if (nilai >= 80) {
  console.log("Anda mendapatkan nilai B");
} else if (nilai >= 70) {
  console.log("Anda mendapatkan nilai C");
} else {
  console.log("Anda mendapatkan nilai D");
}

// Nested if
var nilaiUjian = 85;
var absensi = 80;

if (nilaiUjian >= 70) {
  if (absensi >= 75) {
    console.log("Anda lulus ujian dan absensi");
  } else {
    console.log("Anda lulus ujian, tetapi absensi rendah");
  }
} else {
  console.log("Anda tidak lulus ujian");
}
