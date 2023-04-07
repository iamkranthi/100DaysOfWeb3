function fizzBuzz(numbers) {
    let str = "";
    for (const element of numbers) {
      if (element % 5 === 0 && element % 3 === 0) {
        str += "fizzbuzz";
      } else if (element % 3 === 0) {
        str += "fizz";
      } else if (element % 5 === 0) {
        str += "buzz";
      }
    }
    console.log(str);
    return str;
  }
  

const numbers = [1, 3, 5, 9, 11, 12, 20];

fizzBuzz(numbers); // returns "fizzbuzzfizzfizzbuzz"