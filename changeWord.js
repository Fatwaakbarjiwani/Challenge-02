function changeWord(changedText, selectedText, text) {
  const kalimatbaru = text.replace(changedText,selectedText);
  console.log("before :",text);
  return `after : ${kalimatbaru}`;
}
const kalimat1 = "Andini sangat mencintai kamu selamanya";
const kalimat2 = "Gunung bromo tidak akan bisa menggambarkan besarnya cintaku padamu";

console.log(changeWord("mencintai", "membenci",kalimat1));
console.log(changeWord("bromo", "semeru", kalimat2));

// var str = "Selamat datang di Jakarta.";
// var strBaru = str.replace("Jakarta", "Bandung");
// console.log(strBaru);
