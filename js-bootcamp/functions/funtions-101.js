let greetUser=function(){
    console.log('Welcome User');
}

greetUser();


let square=function(number){
return number*number;
}

console.log(square(2));

//Convert FahrenheitToCelsius

let conversion=function(temp){
 let result=  5*(temp-32)/9;
 return result;
}

console.log("Temp in Celcius "+ conversion(32));