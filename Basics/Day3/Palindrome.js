function isPalindrome(string) {
    const reversedString = string.split('').reverse().join('');
      return reversedString === string;
    }
    let con =isPalindrome('Neha')
    console.log(con)