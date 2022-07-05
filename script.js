const array={
    one: 1,
    two: 2,
    three: 3
}

let link=array

link.one=false
console.log(array===link,'равны')
console.log(array,link,"меняя ссылку меняется обьект");