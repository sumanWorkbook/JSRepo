const account ={
    name : 'Suman Mondal',
    expenses:[],
    income:[],
    addExpense : function(type,amount){
        this.expenses.push({
            description : type,
            amount : amount
        })
    },
    addIncome : function(type,amount){
        this.income.push({
            description : type,
            amount : amount
        })
    },
    getAccountSummary: function(){
         let totalexpense=0;    
         let totalIncome=0;
           this.expenses.forEach(function (expense,index){
             totalexpense=totalexpense+expense.amount;
            })
            this.income.forEach(function(income,index){
                totalIncome=totalIncome+income.amount;
            })
            const balance=totalIncome-totalexpense;
        return `${this.name} has  a balance of Rs. ${balance}. Rs. ${totalIncome} in income, Rs. ${totalexpense} in expenses`   
    }
}
 //Expenses - > description , amount 
 //addExpense -> desciption ,amount
 //getAccountSummary -> total up all expenses -> sumanmondal has Rs 1250 in expenses



 //1.add income array to account
 //2.addIcome method -> description,amount 
 //3 . tweak getAccount Summary 
 // Suman mondal as a balance of Rs.10.Rs 100 in income .$ 90 in expenses 




account.addExpense('Rent',950);
account.addExpense('Coffee',2);
account.addIncome('Job',1050)


account.addExpense('Food',50)
console.log(account.getAccountSummary());



