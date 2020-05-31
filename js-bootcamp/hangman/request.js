const getPuzzle = (wordCount) =>
    new Promise((resolve, reject) => {
        const request = new XMLHttpRequest();
        request.addEventListener('readystatechange', (e) => {
            if (e.target.readyState === 4 && e.target.status === 200) {
                const data = JSON.parse(e.target.responseText)
                resolve(data.puzzle);
            } else if (e.target.readyState === 4 && e.target.status === 404) {
                reject('An error has Taken place');
            }
        })
        request.open('GET', `http://puzzle.mead.io/puzzle?wordCount=${wordCount}`);
        request.send();
    })




//1.Create a function for getting country details 
//2.Call with two arguments : countrycode,the callback funtion
//3.Make the HTTP request and call the call back with country information
//4.Use the callback to print the country name 


const requestURL = "http://restcountries.eu/rest/v2/all";

const countryNameAsyn = (countryCode) =>
    new Promise((resolve, reject) => {
        const request = new XMLHttpRequest();
        request.addEventListener('readystatechange', (e) => {
            if (e.target.readyState === 4 && e.target.status === 200) {
                const data = JSON.parse(e.target.responseText);
                const countryData = data.filter(country => country.alpha2Code === countryCode)[0]
                //  console.log(countryData);
                //   const dataType=typeof countryData;
                const countryDetails = data.find((country) => country.alpha2Code === countryCode)
                resolve(countryDetails.name)
            } else if (e.target.readyState === 4 && e.target.status === 404) {
                reject('Cannot Fetch details')
            }
        })
        request.open('GET', requestURL);
        request.send();
    })

const getPuzzleUseFetch = (wordCount) => fetch(`http://puzzle.mead.io/puzzle?wordCount=${wordCount}`, {})
    .then((response) => {
        if (response.status === 200) {

            return response.json()
        } else {
            throw new Error('Unable to fetch the puzzle');
        }
    })


const countryNameAsynFetch = (countryCode) =>
    fetch(requestURL, {}).then((response) => {
        if (response.status === 200) {
            return response.json();
        }
        else {
            throw new Error('Unable to fetch details ')
        }
    }).then(data => data.filter(country => country.alpha2Code === countryCode)[0])
        .catch((err) => {
            console.log(err);
        })




//1.Get location funtion which takes no argument 
//2.Setup ge  tLocation make a request to the url and parse the data
//3.Use getLocation to print the city,region and country information 

const getLocationFromIP = () => fetch('http://ipinfo.io/json?token=a11e1d82e34fb7', {})
    .then(response => {
        if (response.status === 200) {
            return response.json();
        } else {
            throw new Error('Unable to fetch details')
        }
    })




const getPuzzleUseFetchAysnc = async (wordCount) => {
    const response = await fetch(`http://puzzle.mead.io/puzzle?wordCount=${wordCount}`, {})
    if (response.status === 200) {
        const data = await response.json();
        return data.puzzle;
    } else {
        throw new Error('Unable to get puzzle')
    }
}

