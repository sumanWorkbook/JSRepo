//1.Add a DOM element between the title and body inputs
//2.set text value : Lat Edited 4 hours ago
//3.Update value on title/body/storage change
'use strict'
const noteId=location.hash.substring(1);

let notes=getSavedNotes();
/* let found=false;
for(let i=0;i<=notes.length;i++){
  
    if(notes[i].id===noteId){
        found=true;
        break;
    }
}
if(found){
    console.log(noteId);
} */

let note=notes.find((note)=>note.id===noteId);
if(!note){
    location.assign('/index.html')
}

document.querySelector('#note-title').value=note.title;
document.querySelector('#note-body').value=note.body;
document.querySelector("#updated-time").innerHTML=generateLastEdited(note.updatedAt);



document.querySelector('#note-title').addEventListener('input',function(e){
 note.title=e.target.value;
 note.updatedAt=moment().valueOf();
 document.querySelector("#updated-time").textContent=generateLastEdited(note.updatedAt);
    saveNotes('notes',notes)
})

document.querySelector('#note-body').addEventListener('input',function(e){
   note.body=e.target.value;
   note.updatedAt=moment().valueOf();
   document.querySelector("#updated-time").textContent=generateLastEdited(note.updatedAt);
    saveNotes('notes',notes)
})



document.querySelector('#remove-note').addEventListener('click',function(e){
    removeNote(noteId);
    saveNotes('notes',notes);
    location.assign("/index.html");
})


window.addEventListener('storage',function(e){
   if(e.key=='notes'){
       notes=JSON.parse(e.newValue)
   }
   let note=notes.find((note)=> note.id===noteId)
    if(!note){
        location.assign('/index.html')
    }

    document.querySelector('#note-title').value=note.title;
    document.querySelector('#note-body').value=note.body;
   

    
})

