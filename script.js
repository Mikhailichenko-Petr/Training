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
    // console.log(arg1*arg2)
}
func(5)
func(10,3)

const func2=(arg1,arg2=Date())=>({
    ...arg1,
    arg2,
})
// console.log(func2(obj));

///// TRY / CATCH


const functionError=()=>{
    throw new Error('some error')
}
try{
    functionError()
}catch(error){
    // console.error(error);
    // console.log(error.message);
}

// console.log('не дошло');


///////  pop,shift,unshift,push
const array=[1,2,'three',true,null]
array.unshift('start')
array.push('end')
// console.log(array.shift())
// console.log(array)

////// forEath    выполняет действие для каждого элемента, не меняя массив
array.forEach((el)=>{
    if(typeof el === 'number'){
        // console.log( el+10);
    }
})


////// Map   выполняет действие для каждого элемента, возвращает новый массив не меняя старый
const newArray=array.map((el)=>{
    if(typeof el == 'string'){
        return el+' Map'
    }else{
        return el
    }
})
// console.log(newArray);

//// деструктуризация 
const peopleArray=['Petr',22,'frontend','Moscow']
const people={
    name:"Petr",
    age:"23",
    work:"frontend",
    city:"Moscow"
}
const argumentsDestructuring=({name,age})=>{
    console.log(`I'm ${name} I'm ${age} years old`,'---> Function');
}

const{name,age,work,city}=people
const[nameArray,ageArray,workArray,cityArray]=peopleArray
console.log(`Всем привет! Я ${name}, мне ${age} года, я ${work} разработчик, проживаю в городе ${city}.`,'---> Object');
console.log(`I'm ${nameArray} I'm ${ageArray} years old I work ${workArray} I live in ${cityArray}`,'---> Array');
argumentsDestructuring(people)

////  swith 
const namePerson={
    data:'data',
    name:"Petr"
}
switch(namePerson.name){
    case "Petr":
        console.log(`name ${namePerson.name}`);
        break
    case "Oleg":
        console.log(`name ${namePerson.name}`);
        break
    default:
        console.log('default');
}

///// тернарный оператор 

const a=19
const b='10'
    typeof a==='number'?console.log(a+10):console.log('false')
    typeof b==='number'?console.log(a+10):console.log('false')
console.log(a<=20?a+5:null);
const ternar=typeof a!='number'?'a не = number':'а = number'
console.log(ternar);

////  For

const ar=['one','two','three']
for(i=0;i<ar.length;i++){
    console.log(ar[i]);
}
ar.forEach((el,ind)=>{
    console.log(el,ind);
})
//// while 
let whiles=1
while(whiles<5){
    whiles++
    console.log(whiles,'while')
}
//// do While
let doWhile=0
do{
    doWhile++
    console.log(doWhile,'doWhile');
}while(doWhile<5){
    console.log(`doWhile=${doWhile}`);
}
//// For in
for(key in ar){
    console.log(ar[key],'ForIn array');
}
for(key in obj){
    console.log(obj[key],'ForIn object');
}
/// For of 
for(const sumbol of people.name){
    console.log(sumbol,'==>forOf');
}

//////////////////

function dontGiveMeFive(start, end){
  for (let i = start; i <= end; i++) {
    console.log(i);

  }
}
dontGiveMeFive(1,9)

//////

class Car{
    constructor(color,price,name){
        this.color=color,
        this.price=price,
        this.name=name,
        this.like=0
    }
    Qrt(){
        this.like +=1
    }
}
const newCar=new Car('red','2.300.00','bmw')
console.log(newCar);