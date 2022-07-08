const obj={
    one: 1,
    two: 2,
    three: 3,
    grade:{
        arg1: "one argument",
        arg2: "two argument"
    }
}

let link=obj

link.one=false
// console.log(obj===link,'равны')
// console.log(obj,link,"меняя ссылку меняется обьект");


let json = JSON.stringify(obj)
let parse = JSON.parse(json)
// console.log(json,'json');
// console.log(parse,'parse');





function myFunc(arg){
    const c = JSON.parse(JSON.stringify(arg))
    c.newValue = 'New Value'
    c.grade.arg1 = null
    c.grade.arg2 = null
    // return console.log(c)
}
myFunc(obj)
// console.log(obj);

let arg={}
// console.log(!!arg);

const func=(arg1,arg2=2)=>{
    // arg2 является по умолчанию 2
    console.log(arg1*arg2)
}
func(5)
func(10,3)