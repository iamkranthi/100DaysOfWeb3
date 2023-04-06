function countC(str) {
  let count = 0;

  for (const element of str) {
    if (element.toLowerCase() === "c") {
      count++;
    }
  }

  return count;
}

const test = countC("character");
console.log(test); // Output: 2
