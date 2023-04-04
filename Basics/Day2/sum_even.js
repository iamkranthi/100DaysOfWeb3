function sumEven(array) {
    return evenADD(array)  
}


function allEven(array){
    let evens=[]
    for(const element of array){
        if(element%2===0){
            evens.push(element)
        }
    }
    return evens
}


function evenADD(array){
    let sum=0
    array = allEven(array);
    for(const element of array){
        sum+=element



    }
    return sum

}
const array=[1,2,3,4,5,6,7,8,9,10]
const even_array=allEven(array)
const even_add=evenADD(even_array)
console.log(`Array with even numbers is ${even_array}`)
console.log(`Even elements are added ${even_add}`)