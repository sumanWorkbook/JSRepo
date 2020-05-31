let myBook = {
    title: '1984',
    author: 'George Orwell',
    pageCount: 326
}

let otherBook = {
    title: 'People History',
    author: 'howard Zinn',
    pageCount: 723
}

let getSummary = function(book){
    return {
        summary : `${book.title} by ${book.author}`,
        pageCountSummary:`${book.title} is ${book.pageCount} pages long`
    }
}
let bookSummary=getSummary(myBook);
console.log(bookSummary.pageCountSummary);

// Challange area
//Create a function -take fahrenheit in -return all 3 values

let temps= function (temp){
  return {  fahrenheit:temp,
    celcius : (5*(temp-32)/9),
    kelvin : (5*(temp-32)/9)+273
  }
}
let reqTemp=temps(32);
console.log(reqTemp.celcius);
console.log(reqTemp.fahrenheit);
console.log(reqTemp.kelvin);

