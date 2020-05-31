//Global Scope(convert F to C)

let conversion=function(temp){
    let result=  5*(temp-32)/9;
    return result;
   }
   
   console.log("Temp in Celcius "+ conversion(32));