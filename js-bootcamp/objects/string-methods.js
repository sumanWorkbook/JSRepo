let name ='      Suman Mondal    ';
//Lenght propertly
console.log(name.length);

//Convert to Upper Case
console.log(name.toUpperCase());

//Convert to lower case

console.log(name.toLowerCase());

//Includes 
let password='abc123password098';
console.log(password.includes('password'));


//trim
console.log(name.trim());

let passwordVerification= function(password){
    if((null!= password  || undefined!=password) && password.length>8 && !password.toUpperCase().includes("PASSWORD")){
        return true;
    }
    else{
        return false;
    }

}
console.log("is valid password ?? "+passwordVerification("password123"))

console.log("is valid password ?? "+passwordVerification("paandjsdnjan"))

console.log("is valid password ?? "+passwordVerification("pa123"))
