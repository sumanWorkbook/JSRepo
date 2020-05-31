let num=103.941;
console.log(num.toFixed(2));

console.log(Math.round(num));

console.log(Math.floor(num));

console.log(Math.ceil(num));

let min=10;
let max=20;
//0-0.9999999999...
let randomNum=Math.floor(Math.random(1)*(max-min+1));
//0.0-10


console.log(randomNum);


//Challange area
//1-5 -- true if corrent ** false if not correct



let makeGuess =function (number){
    
let min=1;
let max=5;
let randomNum=Math.floor(Math.random(1)*(max-min+1));
console.log(`Number : ${number} || Random number ::: ${randomNum}`);
if(randomNum==number){
    return true;
}
else {
    return false;
}

}

console.log(makeGuess(1));

console.log(makeGuess(2));

console.log(makeGuess(2));

console.log(makeGuess(3));