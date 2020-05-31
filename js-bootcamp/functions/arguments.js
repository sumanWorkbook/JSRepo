let add=function(num1,num2){
    return num1+num2;
}

console.log(15+20);

let getScoreText=function(name='Anonymous',playerScore=0){
  // return name+ ":"+playerScore;
  return `Name :${name} - Score : ${playerScore}`;

}


console.log(getScoreText());

console.log(getScoreText(undefined,10101));

let getTip= function (total,tipPercent=.2){
    return total*tipPercent;
}

let tip=getTip(100,0.25);
console.log(tip);

console.log('Suman'+'mondal');

let name='Jen';

console.log(`Hey,my name is ${name}`);
