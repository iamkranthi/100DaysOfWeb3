const arr1 = [1, 2, 3];
const arr2 = [3, 4, 5];
let arr = undefined;
let x =[]
function sumTogether(arr1, arr2) {
  for (let i=0;i<arr1.length;i++) {
   x.push( arr1[i] + arr2[i]);
  }
  return x
}
arr=sumTogether(arr1,arr2)
console.log(arr)
