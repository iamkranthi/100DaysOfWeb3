function reverse(string) {
  let str2 = [];
  for (let i = string.length - 1; i >= 0; i--) {
    str2 += string[i];
  }
  console.log(str2);
  return str2;
}
