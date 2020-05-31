let myAccount={
    name:'Suman Mondal',
    expenses : 0,
    income :0
}


let addExpense =function (account,amount){
    account.expenses=account.expenses+amount;
}

let addIncome=function(account,amount){
    account.income=account.income+amount;
}

let getAccountSummary= function (account){
    let balance=account.income - account.expenses;
    return {
        accountSummary:`Account for ${account.name} has Rs.${balance}.Rs.${account.income} in income . Rs.${account.expenses} in expenses`, 
    }
}

let resetAccount=function(account){
    account.income=0;
    account.expenses=0;
}

//addIncome -- Account to manipulate

//resetAccount expenses to 0, income to 0

//getAccountSummary=CUrrent account balance , total  expeneses and income
// Account for Andrew has $900.$1000 in income . $100 in expenses


//addIncome
//AddExpense
//AddExpense
//getAccountSummary
//resetAccount
//getAccoutnSummary

addIncome(myAccount,1000);
addExpense(myAccount,100);
addExpense(myAccount,200);
console.log(getAccountSummary(myAccount).accountSummary);
resetAccount(myAccount);
console.log(getAccountSummary(myAccount).accountSummary);