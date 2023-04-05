const string = "Hello";
for (const element of string) {
  console.log(element);
}
//*test looping
function isAllX(string) {
  for (const element of string) {
    if (element.toLowerCase() !== "x") {
      return false;
    }
  }
  return true;
}
console.log(isAllX("xAbX"));

//*indexing
function findFirstX(string) {
  return string.indexOf("x");
}
console.log(findFirstX('xtremex'))
console.log(findFirstX('jkas'))