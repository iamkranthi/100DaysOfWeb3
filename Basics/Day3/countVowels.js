function countVowels(str) {
  let count = 0;
  let str1 = str.toUpperCase();
  for (let i = 0; i < str.length; i++) {
    if (
      str1[i] === "A" ||
      str1[i] === "E" ||
      str1[i] === "I" ||
      str1[i] === "O" ||
      str1[i] === "U"
    ) {
      count++;
    }
  }
  return count;
}
