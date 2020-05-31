/* 
console.log(`welcome to TOdo`);
const paras=document.querySelectorAll('p');

paras.forEach(function(p){
   if(p.textContent.includes('the')){
p.remove(); 
}   
}) */

//you have 2 todos Left(p element)
//Add a p for each todo above (use text value )

/*  console.log(incompleteTodos.length);
const jobleft = todoJobsLeft(todos);
*/

/* 
displayTodos(todos); */
//Listen for new Todo Creation
/* document.querySelector('#add-job').addEventListener('click',function(e){
   console.log('Add a new todo');
})
 */
/* document.querySelector('#add-todos').addEventListener('input',function(e){
   console.log(e.target.value);
}) */


//1.Set up a div contain for todos
//2.set filter(searchText) and wire up a new filter input to change it 
//3.Create a renderTodoos function to render and render the latest filter data




/* 
const renderTodos= function(todos,filter){
      const filterTodo= todos.filter(function(todo){
        return todo.job.toLowerCase().includes(filter.searchText)
     })
const incompleteTodos=filterTodo.filter(function(todo){
   return !todo.completed;
})


     document.querySelector('#todos').innerHTML='';
     const newPara= document.createElement('h2');
   newPara.textContent=`You have ${incompleteTodos.length} todo job left`;
   document.querySelector('#todos').appendChild(newPara); 

   if(filter.hidecompleted==true){
      incompleteTodos.forEach(function(todo,index){
         const newTodo=document.createElement('p');
         newTodo.textContent=todo.job;
         document.querySelector('#todos').appendChild(newTodo);
      })
   }else{
  
   filterTodo.forEach(function(todo,index){
      const newTodo=document.createElement('p');
      newTodo.textContent=todo.job;
      document.querySelector('#todos').appendChild(newTodo);
   })
}

}
 */
