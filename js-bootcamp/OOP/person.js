
class PersonClass{
    constructor(firstName,lastName,age,likes=[]){
        this.firstName=firstName;
        this.lastName=lastName
        this.age=age   
        this.likes=likes 
    }

    getBio(){
        let bio=`${this.firstName} ${this.lastName} is ${this.age}.`
        this.likes.forEach(like => {
            bio=bio+` ${this.firstName} likes ${like}.`
        });
        return bio;
    }
    
   set fullname(fullname){
        const name=fullname.split(' ');
        this.firstName=name[0];
        this.lastName=name[1];

    }

    get fullName(){
        return `${this.firstName} ${this.lastName}`
    }

}


class Employee extends PersonClass{
    constructor(firstName,lastName,age,position,likes){
        super(firstName,lastName,age,likes);
        this.position=position;
    }

    getBio(){
        //Andrew is a teacher 
        return `${this.fullName} is a ${this.position}.`
    }
    getYearLeft(){
        return 65-this.age;
    }

}




const myPerson=new Employee('Andrew','mead',27,'Teacher',['Teaching','Tennis']);
console.log(myPerson);
console.log(myPerson.getBio());
console.log(myPerson.getYearLeft());
//console.log(myPerson);


const person2=new PersonClass('Moumita','',25,[])
console.log(person2.getBio()); 


// define a const functions with upper case P 
/* 
const Person = function(firstName,lastName,age,likes){
   this.firstName=firstName;
   this.lastName=lastName
   this.age=age   
   this.likes=likes 
}

//Prototypal Inheritance
Person.prototype.getBio= function(){
    let bio=`${this.firstName} ${this.lastName} is ${this.age}.`
    this.likes.forEach(like => {
        bio=bio+` ${this.firstName} likes ${like}.`
    });
    return bio;
}



Person.prototype.setName=function(fullname){
    const name=fullname.split(' ');
    this.firstName=name[0];
    this.lastName=name[1]; 
}

const me = new Person('Suman','Mondal',25,['Coding','Watching Tv series']);
me.getBio=function(){
    return 'This is fake!'
} */
/* me.setName('Ayush Geol Radha');
console.log(me.getBio());

Person.prototype.getBio=function(){
    return 'Testing Testing';
}

const person2=new Person('Moumita','',25,[])
console.log(person2.getBio()); */



class Student extends PersonClass{
    constructor(firstName,lastName,grades){
    super(firstName,lastName)
    this.grades=grades;
    }

    updateGrade(grade){
        this.grades+=grade;
    }

    getBio(){
        if(this.grades>=70){
        return `${this.firstName} is passing the class`
    }
    else{
        return `${this.firstName} is failing the class`
    }
    }

}

const stu=new Employee('suman','mindal',27,'Teacher',[]);
stu.fullname='Hero Suman'
console.log(stu);
console.log(stu.getBio())
console.log('-------------------------------------------------------------');
