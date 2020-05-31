//UnixEpoch -January 1st 1970 00:00:00 
/* const now = new Date('January 21 2001 6:25:01');
console.log(now.getTime());
const timestamp=now.getTime();

const myDate= new Date(timestamp);
console.log(myDate.getFullYear()); */

'use strict'
const dateOne=new Date('March 1 2018 12:00:00');
const dateTwo=new Date();

const dateOneTimeStamp=dateOne.getTime();
const dateTwoTimeStamp=dateTwo.getTime();

if(dateOneTimeStamp< dateTwoTimeStamp){
    console.log(dateOne.toString());
}else if(dateTwoTimeStamp< dateOneTimeStamp){
    console.log(dateTwo.toString);
}



/* 
const now =moment();
now.subtract(1,'week').subtract(1,'days');
console.log(now.toString());

//now.minute(1);
console.log(now.format());
//November 3rd,2003
console.log(now.format('MMMM do,YYYY'))
console.log(now.fromNow());

const nowTimestamp=now.valueOf();
console.log(nowTimestamp);

console.log(moment(nowTimestamp).toString()); */

const now=moment();/* 
now.year(1994);
now.month(08);
now.date(09) */
now.year(1994).month(8).date(9);
console.log("----"+now.toString());

console.log(now.format('MMM D, YYYY'));