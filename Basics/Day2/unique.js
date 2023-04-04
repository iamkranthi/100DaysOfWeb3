//Write a function that will take an array of numbers and return a new array that only contains unique numbers.
function unique(array) {
    const uniqueNumbers=[]
   for(const index of array){
   if (!uniqueNumbers.includes(index)) {
      uniqueNumbers.push(index)
   } 
}
return uniqueNumbers

}
const array=[1,2,3,4,5,6,7,8,9,10,5,4,3,2,1]
console.log(unique(array))