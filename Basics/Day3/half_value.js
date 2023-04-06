function halfValue(numbers) {
    let array=[]
    for(const element of numbers){
       array.push(Math.round(element/2))
    }
   return array
}
let array = [2, 4, 6, 8]
let ans=halfValue(array)
console.log(ans)