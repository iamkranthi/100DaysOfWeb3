
const obj = {
    name: 'Bob',
    getName:function(){
        return this.name
    }
}

const name = obj.getName();

console.log(name); // Bob