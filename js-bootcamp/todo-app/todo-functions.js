'use strict'

const getSavedData=function(){
const todosData=localStorage.getItem('todos');
try {
return todosData ? JSON.parse(todosData):[];
}
catch (e){
    return [];
}
}



// Render todos based on Filter 
const renderTodos= (todos,filter)=>{
    const filterTodo= getFilteredTodo(todos,filter);
    console.log(filterTodo);
    const incompleteTodos=getIncompleteTodos(filterTodo);
    console.log(incompleteTodos);
    document.querySelector('#todos').innerHTML='';
    const summary=generateSummaryDOM(incompleteTodos);
    document.querySelector('#todos').appendChild(summary);  
    filterTodo.forEach(function(todo,index){
    const newTodo=generateTodoDOM(todo);
    document.querySelector('#todos').appendChild(newTodo);
 })
 }
 
 //Filer out todo based on filters 
const getFilteredTodo=(todos,filter)=>{
  return todos.filter((todo) =>{
    const searchTextMatch=todo.job.toLowerCase().includes(filter.searchText.toLowerCase());
    const hideCompletedMatch=!filter.hidecompleted ||!todo.completed;
   return searchTextMatch && hideCompletedMatch;
})

}

//Filter todo based on completed jobs
const getIncompleteTodos= function(filterTodo){
    return  filterTodo.filter((todo) => !todo.completed)
     
} 

// Create a new Todo 
const addjob=(jobName)=>{
    if(jobName.length>0)
     todos.push({
        id:uuidv4(),
        job:jobName,
        completed:status.completed
     })
     saveTodos('todos',todos) 
 
  }

const  removeTodo=(todoId)=>{
    const todoIndex=todos.findIndex((todo) =>todo.id===todoId)
    if(todoIndex>-1){
        todos.splice(todoIndex,1);
    }
    

}

//toggle the completed value for given todo
const toggleTodo =(id) =>{
    const todo=todos.find((todo)=>todo.id===id)
    if(todo){
        todo.completed=!todo.completed
    }
}
 
// Generate the new  a new Todo elements 
const generateTodoDOM=(todo)=>{
    const divEl=document.createElement('div');
    const checkEL=document.createElement('input');
    const newTodoEL=document.createElement('span');
    const buttonEL=document.createElement('button');

    //set up todo checkbox
    checkEL.setAttribute('type','checkbox');
    checkEL.checked=todo.completed;
    divEl.appendChild(checkEL);
  
    checkEL.addEventListener('change',function(e){
        toggleTodo(todo.id);
        saveTodos('todos',todos);
        renderTodos(todos,filter)
    })

    newTodoEL.textContent=todo.job;
    divEl.appendChild(newTodoEL);

    buttonEL.textContent='x'
    divEl.appendChild(buttonEL);

    buttonEL.addEventListener('click',function(e){
        removeTodo(todo.id);
        saveTodos('todos',todos)
        renderTodos(todos,filter);
    })

     return divEl;
}


// Generate the new  a new Todo summary
const generateSummaryDOM=(incompleteTodos) =>{
        const newPara= document.createElement('h2');
         newPara.textContent=`You have ${incompleteTodos.length} todo job left`;
    return newPara;
}

//Save objects in storage
const saveTodos=(key,value)=>{
    localStorage.setItem(key,JSON.stringify(value));
}