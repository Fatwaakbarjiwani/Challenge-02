const dataPenjualanNovel = [
  {
    idProduct: "BOOK002421",
    namaProduk: "Pulang - Pergi",
    penulis: "Tere Liye",
    hargaBeli: 60000,
    hargaJual: 86000,
    totalTerjual: 150,
    sisaStok: 17,
  },
  {
    idProduct: "BOOK002351",
    namaProduk: "Selamat Tinggal",
    penulis: "Tere Liye",
    hargaBeli: 75000,
    hargaJual: 103000,
    totalTerjual: 171,
    sisaStok: 20,
  },
  {
    idProduct: "BOOK002941",
    namaProduk: "Garis Waktu",
    penulis: "Fiersa Besari",
    hargaBeli: 67000,
    hargaJual: 99000,
    totalTerjual: 213,
    sisaStok: 5,
  },
  {
    idProduct: "BOOK002941",
    namaProduk: "Laskar Pelangi",
    penulis: "Andrea Hirata",
    hargaBeli: 55000,
    hargaJual: 68000,
    totalTerjual: 20,
    sisaStok: 56,
  },
];

function getInfoPenjualan(dataPenjualan) {
  let i = 0;
  let a = 0;
  let b = 0;
  //   format rupiah
  // looping (ketika)
  while (i < dataPenjualan.length) {
    nilai = dataPenjualan[i].hargaJual;
    // ======================== mencari total keuntungan ========================
    keuntungan =
      dataPenjualan[i].hargaJual * dataPenjualan[i].totalTerjual -
      dataPenjualan[i].hargaBeli *
        (dataPenjualan[i].totalTerjual + dataPenjualan[i].sisaStok);
    // format rupiah
    rupiahKeuntungan = keuntungan
      .toString()
      .replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    //
    // console.log(`Keuntungan properti ${i} = Rp. ${rupiahKeuntungan}`);
    // ======================== mencari total modal =============================
    modal =
      dataPenjualan[i].hargaBeli *
      (dataPenjualan[i].totalTerjual + dataPenjualan[i].sisaStok);

    rupiahModal = modal.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

    // console.log(`Modal properti ${i} = Rp. ${rupiahModal}`);

    i++;
    // +++++++ total keuntungan ++++++
    a += keuntungan;
    totalKeuntungan = a.toString().replace(/\B(?=(\d{3})+(?!\d))/g, "."); // format rupiah
    // +++++++ total modal +++++++
    b += modal;
    totalModal = b.toString().replace(/\B(?=(\d{3})+(?!\d))/g, "."); // format rupiah
  }
  console.log(`TOTAL KEUNTUNGAN = Rp. ${totalKeuntungan}`);
  console.log(`TOTAL MODAL = Rp. ${totalModal}`);
  //   ================= mencaari persentase =================
  persentaseKeuntungan = (a / b) * 100;
  console.log(`PERSENTASE KEUNTUNGAN = ${persentaseKeuntungan.toFixed(2)} %`);
  //
  //   =================== mencari buku terlaris ===============
  for (var d = 0; d < dataPenjualan.length; d++) {
    //  mencari total terjual paling banyak dalam array
    if (d == 0) {
      var nilai_mak = dataPenjualan[d].totalTerjual;
    } else {
      if (dataPenjualan[d].totalTerjual > nilai_mak) {
        nilai_mak = dataPenjualan[d].totalTerjual;
      }
    }
    // mecari nama produk dan penulis dengan menggunakan total produk terbanyak
    if (dataPenjualan[d].totalTerjual == nilai_mak) {
      produkBukuTerlaris = dataPenjualan[d].namaProduk;
      penulisTerlaris = dataPenjualan[d].penulis;
    }
    // if (dataPenjualan[d].totalTerjual == nilai_mak) {
    //   penulisTerlaris = dataPenjualan[d].penulis;
    // }
  }
  // console.log("total terjual paling banyak =", nilai_mak);
  console.log(`PRODUK BUKU TERLARIS = ${produkBukuTerlaris}`);

  return `PENULIS TERLARIS = ${penulisTerlaris}`;
  //
}
console.log(getInfoPenjualan(dataPenjualanNovel));
