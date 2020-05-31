//const todos=['Order cat Food','Clean Kitchen','Buy Food','Exercise'];

const todos=[{
    job:'Order cat Food',
    completed : true
},
{
    job :'Clean Kitchen',
    completed :false
},{
    job :'Buy Food',
    completed : true
},{
    job : 'Exercise',
    completed : false
}];
/* console.log(todos);
//Delete the 3 item
todos.splice(2,1);
console.log(todos);
//Add a new item onto the end
todos.push('Buy coffee'); 
console.log(todos);
//Remove the first item from the list 
todos.shift();
console.log(todos);

console.log(`You have ${todos.length} todos!`);
 todos.forEach(function(item,index){
     const serialNumber=index+1;
    console.log (`${serialNumber}. ${item}`);
 }); 
console.log('------------------------------------------------------------')
 for (let i =0; i<todos.length;i++){
     console.log(`${i+1}. ${todos[i]}`);
 }

 */

 // Array of string to array  of objects
 //-> text ,completed
//function remove a todo

/* const deleteTodo=function(todos,job){
    const index=  todos.findIndex(function(todo,index){
           return todo.job.toLowerCase() === job.toLowerCase()
      })
      console.log( todos);
      console.log('------------------------------------------------------------')
      if(index> -1){
      todos.splice(index-1,1);
      console.log(todos);
    }
    }

deleteTodo(todos,'buy food'); */


const completedJobs=function (todos){
    return todos.filter(function(todo,index){
         const status = todo.completed === true ;
         return status;
    })
}
console.log('-------------------------Filter Todos-----------------------------------')   
console.log(completedJobs(todos));


const uncompletedJobs = function (array){
        array.sort(function(a,b){
            if(!a.completed && b.completed){
                return -1 ;
            }
            else if (!b.completed && a.completed) {
                return 1;
            }else{
                return 0;
            }
        })
}

console.log(todos);
console.log('-------------------------Sorted Jobs-----------------------------------')   
uncompletedJobs(todos);
console.log(todos);

