'use strict'

let notes=getSavedNotes();

const filter ={
    searchText:'',
    sortBy : 'byEdited'
}

renderNotes(notes,filter);


//DOM - Document Object Model

/* const p=document.querySelector('p');
p.remove(); */
/* 
const ps=document.querySelectorAll('p');
ps.forEach(function(psNode,index){
 */   // psNode.textContent="***************";
    // console.log(psNode.textContent);
/*     // psNode.remove();
})
 */
//Add a new element Via javascript
/* const newPara=document.createElement('p');
newPara.textContent="This is the new element from JS"
document.querySelector('body').appendChild(newPara);
 */

 document.querySelector('#create-note').addEventListener('click',function(e){
     const noteId=uuidv4();
     const timeStamp=moment().valueOf();
 notes.push({
     id:noteId,
     title:'',
     body :'',
     createdAt:timeStamp,
     updatedAt:timeStamp
 })
 saveNotes('notes',notes);
 location.assign("/edit.html#"+noteId)
})


/* 
document.querySelector("#remove-all").addEventListener('click',function(e){
    document.querySelectorAll('.note').forEach(function(note){
        note.remove();
    })
}) */

document.querySelector('#search-text').addEventListener('input',function(e){
  filter.searchText=e.target.value;
 renderNotes(notes,filter);
})

/* document.querySelector("#name-form").addEventListener('submit',function(e){
    e.preventDefault();
    console.log(e);
    console.log(e.target.elements.firstName.value);
    e.target.elements.firstName.value='';
}) */


document.querySelector("#filter-by").addEventListener('change',function(e){
   filter.sortBy=e.target.value;
   renderNotes(notes,filter);
})


window.addEventListener('storage',function(e){
    if(e.key=='notes'){
        notes=JSON.parse(e.newValue)
        renderNotes(notes,filter);

    }

})

