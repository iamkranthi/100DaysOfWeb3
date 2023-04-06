function playerHandScore(hand) {
  let sum = 0;
  for (const element of hand) {
    if (element === "K") {
      sum += 4;
    } else if (element === "J") {
      sum += 2;
    } else {
      sum += 3;
    }
  }
  console.log(sum);
  return sum;
}

console.log( playerHandScore("K") ); // 4
console.log( playerHandScore("KJ") ); // 6
console.log( playerHandScore("KQQ") ); // 10 