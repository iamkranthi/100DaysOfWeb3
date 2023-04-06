function countElements(elements) {
  let elementCount = {};
  for (const element of elements) {
    if (!elementCount[element]) {
      elementCount[element] = 1;
    } else {
      elementCount[element] += 1;
    }
  }

  return elementCount;
}

const elements = ["e", "k", "e", "z", "i", "z"];
console.log(countElements(elements)); 
