function maxSum(num) {
  if (num > 0) {
    num = (num * (num + 1)) / 2;
    return num;
  }
  return 0;
}
console.log(maxSum(9));
