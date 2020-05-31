'use strict'
let todos=getSavedData();
const filter={
   searchText:``,
   hidecompleted:false
}
renderTodos(todos,filter);
document.querySelector("#job-status").addEventListener('change',function(e){
   console.log(e.target.checked);
   filter.hidecompleted=e.target.checked;
   renderTodos(todos,filter);
})

document.querySelector('#search-todos').addEventListener('input',function(e){
   filter.searchText=e.target.value;
   renderTodos(todos,filter);
})

let status={
   completed:false
}
document.querySelector("#add-job-status").addEventListener('input',function(e){

   status.completed=e.target.checked;
   console.log(status.completed);
})

document.querySelector("#add-todo-form").addEventListener('submit',function(e){
   e.preventDefault();
   const newJobEntry=e.target.elements.jobName.value;
   if(newJobEntry.length>0){
   addjob(newJobEntry);
   }
   e.target.elements.jobName.value='';
   renderTodos(todos,filter);
});


