function shortestString(str1, str2) {
  return str1.length > str2.length ? str2 : str1;
}
const temp = shortestString("lion", "elephant");
console.log(temp);
