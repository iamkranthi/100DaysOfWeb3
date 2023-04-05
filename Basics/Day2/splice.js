function removeOccurrences(array, num) {
    for (let i=array.length-1;i>=0;i--){
        if(array[i]===num){
            array.splice(i,1)
        }
    }
    return array
}

const temp=removeOccurrences([1,2,3,1,1,4],1)
console.log(temp)