//HTTP :-Hyper text Transfer protocol 
//Request - what do we want to do 
//Response- what was actually done 




const puzzleEL = document.querySelector('#puzzle');
const guessesEL = document.querySelector('#guesses');
const statusEL = document.querySelector('#status');
const resultEL = document.querySelector('#result');

const game1 = new HangmanGame('Car Parks', 2)
game1.updateStatus();
puzzleEL.textContent = game1.puzzle;
guessesEL.textContent = game1.remainingGuesses;
statusEL.textContent = game1.status;
resultEL.textContent = game1.result;



window.addEventListener('keypress', function (e) {
    const guess = String.fromCharCode(e.charCode)
    if (game1.remainingGuesses > 0) {

        game1.makeGuess(guess)

        game1.updateStatus();
        puzzleEL.textContent = game1.puzzle;
        guessesEL.textContent = game1.remainingGuesses;
        statusEL.textContent = game1.status;

        resultEL.textContent = game1.result;

    } else {
        guessesEL.textContent = 'Unable to achieve the result'
    }
})

//ASync



// const myPromiseData = getPuzzle('2');
// myPromiseData.then(data => {
//     console.log(data)
// }, err => console.log(err));
// console.log('Do something else')
//Making an HTTP request 

/* const request= new XMLHttpRequest()
request.addEventListener('readystatechange',e =>{
    if(e.target.readyState === 4 &&  e.target.status=== 200){
        const data=JSON.parse(e.target.responseText)
        console.log(data);
        
    }else if(e.target.readyState === 4){
        console.log('An error has taken place');
    }
})
request.open('GET',"http://puzzle.mead.io/puzzle");
request.send();

 */

//Making a new request for all countries
//Parse the responseText to get back the array of objects
//Find your country object by it's country code (alpha2Code property)
//Print the full country name (name Property)
/* 
const countryCode="IN"
const request=new XMLHttpRequest();
request.addEventListener('readystatechange',e=>{
    if(e.target.readyState===4 && e.target.status===200){
        const data=JSON.parse(e.target.responseText);
        const countryData=data.filter(country => country.alpha2Code===countryCode)[0]
     //   const dataType=typeof countryData;
     const countryDetails=data.find((country) => country.alpha2Code===countryCode)
    console.log(countryData.name);
    console.log(countryDetails.name);
    }else if (e.readyState.target===4){
        console.log('Unable to fetch details')
    }

})
request.open('GET',"http://restcountries.eu/rest/v2/all");
request.send();
 */


const countryCode = 'IN';
/* countryNameAsyn(countryCode, (CountryName, error) => {
    if (error) {
        console.log(`Error : ${error}`)
    }
    else {
        console.log(CountryName);
    }
}) */

/* const countryPromiseData = countryNameAsyn(countryCode);
countryPromiseData.then(data => {
    console.log(data)
}, err => {
    console.log(err);
})


 */
getPuzzleUseFetchAysnc('2').then((data) => {
    console.log(data)
}).catch((err) => {
    console.log(`Error :${err}`)
})

/* 
countryNameAsynFetch(countryCode).then(data =>
    console.log(data.name)).catch(err => {
        console.log(err);
    }) */

//1.Get location funtion which takes no argument 
//2.Setup ge  tLocation make a request to the url and parse the data
//3.Use getLocation to print the city,region and country information 

getLocationFromIP().then(data => {
    console.log("City ::" + data.city);

    console.log("Region ::" + data.region);

    console.log("Country ::" + data.country);
}).catch(err => console.log(err));


getLocationFromIP().then(data => {
    return data.country
}).then(data => {
    countryNameAsynFetch(data).then(data =>
        console.log(data.name))
}).catch(err => {
    console.log(err);
})