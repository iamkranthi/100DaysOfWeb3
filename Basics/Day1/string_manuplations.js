function startsWithX(string) {
    return string[0]==='x';
}

//*character casing
function startsWithx(string) {
    const test=string.toUpperCase()
    return test[0]==='X'
    }
console.log(startsWithx('xello'))
//*string length
function endsWithX(string) {
    const test=string.toUpperCase()
    return test[string.length-1]==='X'
     
 }
 console.log(endsWithX('lemonX'))