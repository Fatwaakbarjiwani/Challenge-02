function getAngkaTerbesarKedua(personName) {
  // ketika kondisi berupa parameter maka akan menghapus nilaiterbesar
  if (personName == dataAngka) {
    nilaiterbesar = Math.max.apply(Math, personName); 
    const hapusTerbesar = personName.filter(function (letter) {
      return letter !== nilaiterbesar;
    });
    nilaiTerbesarKedua = Math.max.apply(Math, hapusTerbesar);
    return nilaiTerbesarKedua; 
  } else if (personName != null) {
    return `EROR : parameter yang dimasukkan bukan merupakan array`;
  } else{
    return `EROR : parameter input tidak boleh kosong`;
  }
}
const dataAngka = [9, 4, 7, 7, 4, 3, 2, 2, 8];
console.log(getAngkaTerbesarKedua(dataAngka));
console.log(getAngkaTerbesarKedua(0));
console.log(getAngkaTerbesarKedua());
