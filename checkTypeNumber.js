function checkTypeNumber(givenNumber) {
  // condition , parameter
  if (givenNumber + givenNumber == givenNumber * 2 && givenNumber != 0) {
    // modulus (sisa pembagian)
    if (givenNumber % 2 == 1) {
      return `"GANJIL"`;
    } else if (givenNumber % 2 == 0) {
      return `"GENAP"`;
    }
  } else {
    return `"EROR : invalid data type"`;
  }
}

console.log(checkTypeNumber(10));
console.log(checkTypeNumber(3));
console.log(checkTypeNumber("3"));
console.log(checkTypeNumber({}));
console.log(checkTypeNumber([]));
console.log(checkTypeNumber());
