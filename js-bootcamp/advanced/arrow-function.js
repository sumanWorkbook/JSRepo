const square =(num)=>num*num;

const squareLong=(num) => {
    return num*num;
}

console.log(square(5));

const people=[{
    name:'Andrew',
    age:27
},{
    name:'Suman',
    age:25
},{
    name:'Moumita',
    age:25
}]
const underThrity=people.filter(function(person,index){
    return person.age>25;
})
console.log(underThrity);
const peopleOver25=people.filter(p=> p.age>25);
console.log(peopleOver25 );


