const notes=[{
    title: 'my next Trip',
    body:'I would like to go to Spain'
},{
    title :'Habits to work on',
    body : 'Exercise.Eating habit better'
},{
    title:'Office Modification',
    body:'Get a new seat'
}];
/* notes.push('My New Note');
console.log(notes);
console.log(notes.pop());
console.log(notes.shift());
notes.unshift('My new Notes Begin'); */

//notes.splice(1,0,'This is the new second Item');

/* notes[2]='This is now new node 3';


notes.forEach(function(item,index ){
console.log(`${index} :: ${item}`);
});


console.log(notes);
 */

//Counting ...1

for(let i=0;i<notes.length;i++){
    console.log(`${i}. ${notes[i].body} : ${notes[i].title}`);

}
/* 
const index= notes.findIndex(function(note,index){
    console.log(note);  
    return note.title ==='Habits to work on' 
})
console.log(index);
 */
/* 
If you finding the item direclty use FInd method 
If you going to work with the index then use findIndex method
______________________________

FIND INDEX() method 
const findNote=function(notes,noteTitle){
    console.log(`title :: ${noteTitle}`)
    const index=notes.findIndex(function(note,index){
        return note.title.toLowerCase() ===noteTitle.toLowerCase();
})
return notes[index];
} */


//FIND() method
const findNote=function(notes,noteTitle){
    console.log(`title :: ${noteTitle}`)
    const note=notes.find(function(note,index){
        return note.title.toLowerCase() ===noteTitle.toLowerCase();
})
return note;
}

const filteredNotes =notes.filter(function(note,index){
    const isTitleMatch=note.title.toLowerCase().includes('office');
    const isBodyMatch=note.body.toLowerCase().includes('office');
    return isTitleMatch || isBodyMatch;
})
console.log('------------------------------------------------------------')
console.log(filteredNotes);
console.log('------------------------------------------------------------')
const note =findNote(notes,'Office modification')
console.log(note);




const findNotes =function(notes,query){  
 return notes.filter(function(note,index){
    const isTitleMatch=note.title.toLowerCase().includes(query.toLowerCase());
    const isBodyMatch=note.body.toLowerCase().includes(query.toLowerCase());
    return isTitleMatch || isBodyMatch;
})
}

console.log(findNotes(notes,'work'));

const sortNotes=function(notes){
    notes.sort(function(a,b){
        if(a.title.toLowerCase() < b.title.toLowerCase()){
            return -1;
        }
        else if (b.title.toLowerCase() < b.title.toLowerCase){
            return 1;
        }
        else{
            return 0;
        }
    })
}

sortNotes(notes);
console.log(notes);

