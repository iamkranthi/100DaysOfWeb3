//*for loop
function summation(n) {
    let sum = 0;

    for (let i=0;i<=n;i++) {
        sum+=i
    }

    return sum;
}

//*scream
function scream(n) {
    let str=''
   for(let i=1;i<=n/2;i++){
      str +='aA'
   }
   return str
}

//*Modulus scream
function scream2(n) {
    let scream = "";
    for(let i = 0; i < n; i++) {
        if(i % 2 === 0) {
            scream += "a";
        }
        else {
            scream += "A";
        }
    }
    return scream;
}

function topDouble(value, top) {
    while(value < top) {
        value *= 2;
    }
    return value / 2;
}



console.log(topDouble(2,100))
