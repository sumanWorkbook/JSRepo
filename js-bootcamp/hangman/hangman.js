//1.Convert "GetStatusMessage" to a custom getter from "statusMessge"
//2.Convert "getPuzzle" to a customgetter for "puzzle"
//3.Change usage in app.js

class HangmanGame{
    constructor(word, remainingGuesses){
        this.word = word.toLowerCase().split('')
        this.remainingGuesses = remainingGuesses
        this.guessedLetters = []
        this.status='playing'
    }

    get puzzle () {
        let puzzle = ''
    
        this.word.forEach((letter) => {
            if (this.guessedLetters.includes(letter) || letter === ' ') {
                puzzle += letter
            } else {
                puzzle += '*'
            }
        })
    
        return puzzle
    }

    updateStatus(){
        const finished=this.word.every((letter) =>
        this.guessedLetters.includes(letter)|| letter ===' ')
        if(this.remainingGuesses===0){
            this.status='failed'
        }
        else if(finished){
            this.status='finished'
        }
        else{
            this.status='playing'
        }
    }

    makeGuess(guess) {
        guess = guess.toLowerCase()
        if(this.remainingGuesses>0 &&( this.status == 'playing' || this.status !=='finished')){
        const isUnique = !this.guessedLetters.includes(guess)
        const isBadGuess = !this.word.includes(guess)
        if (isUnique) {
            this.guessedLetters.push(guess)
        }
    
        if (isUnique && isBadGuess) {
            this.remainingGuesses--
        }
    }
    }

    get result(){
        const status=this.status;
        const wordGuessed=this.word.join('');
        if(status==='finished'){
            return `Great work! you have guessed the word "${wordGuessed.toUpperCase()}"`;
        }
         if(status === 'failed'){
            return `Nice try! The word is ${wordGuessed}`
        }
        if(status==='playing'){
            return `Guesses left : ${this.remainingGuesses}`
        }
        }

}


/* 



const Hangman = function (word, remainingGuesses) {
    this.word = word.toLowerCase().split('')
    this.remainingGuesses = remainingGuesses
    this.guessedLetters = []
    this.status='playing'
}



Hangman.prototype.getPuzzle = function () {
    let puzzle = ''

    this.word.forEach((letter) => {
        if (this.guessedLetters.includes(letter) || letter === ' ') {
            puzzle += letter
        } else {
            puzzle += '*'
        }
    })

    return puzzle
}

Hangman.prototype.getStatus=function(game){
    if(this.remainingGuesses>0){
        let hangmanText='';
        this.word.forEach(letter =>{
            hangmanText+=letter;
        })
        if(hangmanText===game.getPuzzle()){
            this.status='finished';
        }
    }else{
        this.status ='failed';
    }
}

Hangman.prototype.makeGuess = function (guess) {
    guess = guess.toLowerCase()
    if(this.remainingGuesses>0 || this.status !== 'playing '){
    const isUnique = !this.guessedLetters.includes(guess)
    const isBadGuess = !this.word.includes(guess)
    if (isUnique) {
        this.guessedLetters.push(guess)
    }

    if (isUnique && isBadGuess) {
        this.remainingGuesses--
    }
}
}

Hangman.prototype.result=function(game){
const status=game.status;
const wordGuessed=game.word.join('');
console.log(wordGuessed);
if(status==='finished'){
    return `reat work! you have guessed the word ${wordGuessed}`;
}
 if(status === 'failed'){
    return `Nice try! The word is ${wordGuessed}`
}
if(status==='playing'){
    return `Guesses left : ${game.remainingGuesses}`
}
}


 */