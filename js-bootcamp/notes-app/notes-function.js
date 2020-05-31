'use strict'
const isPublic=true;
let data;
const processData=() =>{
    data='123456789';   
}

processData();
console.log(data);
// Read existing notes from local Storage

const getSavedNotes= () =>{
const notesJSON=localStorage.getItem('notes');
try{
    if(notesJSON!== null){
        return JSON.parse(notesJSON);
      }else{
          return [];
      }
}catch(e){
    return [];
}

if(notesJSON!== null){
  return JSON.parse(notesJSON);
}else{
    return [];
}
}

console.log(getSavedNotes());
//remove a note fromthe list 

const removeNote=(id) =>{
    console.log("Remove Note")
    const noteIndex=notes.findIndex((note) =>note.id===id)
    console.log(noteIndex);
    if(noteIndex>-1){
        notes.splice(noteIndex,1);
    }
}

//Generate the DOM structure for a note

const generateNoteDOM=(note)=> {
    const noteEl=document.createElement('div');
    const hrefLink=document.createElement('a');
    const button=document.createElement('button');

    //SetUp the remove note button 
    button.textContent="x";
    noteEl.appendChild(button);
    button.addEventListener('click',function(e){
       removeNote(note.id);
       saveNotes('notes',notes);
       renderNotes(notes,filter);
    })

    //SetUp the note title text
    if(note.title.length >0){
        hrefLink.textContent=note.title;
    }else{
        hrefLink.textContent='Unnamed Note';
    }
    const hrefAttr="/edit.html#"+note.id;
    hrefLink.setAttribute('href',hrefAttr)
    noteEl.appendChild(hrefLink);
    
 return noteEl;
}

//Sort the notes by one of the three ways
const sortNotes= (notes,sortBy)=>{
        if(sortBy ==='byEdited'){
            return notes.sort((a,b)=>{
                if(a.updatedAt<b.updatedAt){
                    return 1;
                }
                else if(a.updatedAt>b.updatedAt){
                    return -1;
                }
                else{
                    return 0;
                }
            })
        }
        else if(sortBy ==='byCreated'){
            console.log("By created called")
            return notes.sort((a,b) =>{
                if(a.createdAt<b.createdAt){
                   // console.log(`${a.title} :: ${b.title}`)
                    return 1;
                }
                else if(a.createdAt>b.createdAt){
               //     console.log(`${a.title} :: ${b.title}`)
                    return -1;
                }
                else{
                    return 0;
                }
            })
        }
        else if(sortBy ==='alphabetical'){
            return notes.sort((a,b) =>{
                if(a.title.toLowerCase()<b.title.toLowerCase()){
                    return -1;
                }
                else if(a.title.toLowerCase()>b.title.toLowerCase()){
                    return 1;
                }
                else{
                    return 0;
                }
            })
        }
        else{
            return notes;
        }

}


//Render the Application notes
const renderNotes=(notes,filter) =>{
    notes=sortNotes(notes,filter.sortBy)
    const filteredNotes=notes.filter((note)=> note.title.toLowerCase().includes(filter.searchText.toLowerCase()));   
   document.querySelector('#notes').innerHTML=``;
   filteredNotes.forEach((note,index)=>{
       const noteEl=generateNoteDOM(note);
         document.querySelector('#notes').appendChild(noteEl);
   })
}


//Save the notes to localStorage
const saveNotes=(key,value) =>{
localStorage.setItem(key,JSON.stringify(value));
}

let generateLastEdited=(timeStamp)=>`last edited ${moment(timeStamp).fromNow().toString()}`