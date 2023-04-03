function splitAtX(string) {
    const div=string.indexOf('x')
   let str1=string.slice(0,div)
   let str2=string.slice(div+1)
       if(str1.length>str2.length){
           return str1
       }
       return str2
   
   }
   
console.log(splitAtX("10xDeveloper"));
