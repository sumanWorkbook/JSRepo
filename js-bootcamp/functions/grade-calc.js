// two arguments (student score , total possible score )
//15/20 ->75  You got a C (75%)!
// A 90 -100 : B 80-89 : C 70-79 : D: 60-69 : F 0-59

let gradePercent=function (studentScore,totalPossibleScore) {
    if(typeof studentScore !== 'number' || typeof totalPossibleScore !== 'number')
 {
   throw Error ('Please provide Numbers only')
 }
 return studentScore/totalPossibleScore*100;
}

let grade=function(grade){
    if(grade>=90 && grade<=100){
        return 'A';
    }
    if(grade>=80 && grade<=89){
        return 'B';
    }
    if(grade>=70 && grade<=79){
        return 'C';
    }
    if(grade>=60 && grade<=69){
        return 'D';
    }
    if(grade>=50 && grade<=59){
        return 'E';
    }
    if(grade>=0 && grade<=59){
        return 'F';
    }
}
try{
let percent=gradePercent(1/'test')*100;
let studentGrade=grade(percent);
console.log(`You got a ${studentGrade} (${percent}%)!!!`);
}
catch(e){
console.log('Please provide possible numbers'+"\n"+ e.message)
}