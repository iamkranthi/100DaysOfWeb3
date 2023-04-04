//*Array printing
const array = [1, 2, 3];
console.log(array);

//*Has one
function hasOne(array) {
  for (const element of array) {
    
    if (element === 1) {
      return true;
    }
  }
  return false;
}
const a=[1,2,3,4]
console.log(hasOne(a));
