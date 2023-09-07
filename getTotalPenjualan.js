const dataPenjualanPakAldi = [
  {
    namaProduct: `Sepatu Futsal Nike Vapor Academy 8`,
    hargaSatuan: 760000,
    kategori: "Sepatu Sport",
    totalTerjual: 90,
  },
  {
    namaProduct: `Speatu Warrior Tristan Black Brown High-Original`,
    hargaSatuan: 960000,
    kategori: "sepatu sneaker",
    totalTerjual: 37,
  },
  {
    namaProduct: `Sepatu Warior Tristan Maroon High - Original`,
    kategori: "Sepatu Sneaker",
    hargaSatuan: 360000,
    totalTerjual: 90,
  },
  {
    namaProduct: `Sepatu Warior Rainbow Tosca Carduroy - [BNIB] Original`,
    kategori: "Sepatu Sneaker",
    hargaSatuan: 360000,
    totalTerjual: 90,
  },
];
function hitungTotalPenjualan(dataPenjualan) {
  console.log("Total Sepatu Yang Terjual :");
  let i = 0;
  let sum = 0;
  // looping (ketika)
  while (i < dataPenjualan.length) {
    totalitem = dataPenjualan[i].totalTerjual;
    i++;
    sum += totalitem;
  }
  return sum;
}
console.log(hitungTotalPenjualan(dataPenjualanPakAldi));
