const dataAngka = [8, 4, 7, 7, 4, 3, 2, 2, 10];
nilaiterbesar = Math.max.apply(Math, dataAngka);
console.log(`nilai terbesar = `, nilaiterbesar);
const hapusTerbesar = dataAngka.filter(function (letter) {
  return letter !== nilaiterbesar;
});
nilaiTerbesarKedua = Math.max.apply(Math, hapusTerbesar);
console.log(nilaiTerbesarKedua);
// nilai terbesar merupakan fungsi untuk mencari nilai terbesar
// -> setelah itu kita melakukan penghapusan nilai terbesar dengan menggunakan filter
// -> setelah mendapatkan array tanpa nilai terbesar
// -> kita mencari nilai terbesar lagi dengan menggunakan array yg terbaru
// -> sehingga didapatkan nilai terbesar kedua
