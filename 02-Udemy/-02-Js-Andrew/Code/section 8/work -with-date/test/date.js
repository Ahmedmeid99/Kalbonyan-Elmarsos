//Unix Epoch - january 1st 1970 00:00:00
////////////////////////////////
const now1 = new Date();

console.log(now1.toString()); // to save time and naver chanage
// اعتمادا عليها(notes)تحويل التاريخ الي صيغة رقمية لتسهيل ترتيب ال
const timeStamp = now1.getTime(); // 1653916053723

const myDate = new Date(timeStamp); // Mon May 30 2022 17:13:48 GMT+0200

console.log(` Year: ${myDate.getFullYear()}`); // Year: 2022

// console.log(` Year: ${now1.getFullYear()}`);
// console.log(` Month: ${now1.getMinutes()}`);
// console.log(` Day of: ${now1.getDay()}`);
// console.log(` Hour: ${now1.getHours()}`);
// console.log(` Minute: ${now1.getMinutes()}`);
// console.log(` seconds: ${now1.getSeconds()}`);

//////////////////////////////////
//CHALANGE
//////////////////////////////////
/*** create two date and test how come first ****/

const dateOne = new Date("May 10 2021 12:00:00");
const dateTwo = new Date();

const dateOneTimetamp = dateOne.getTime();
const dateTwoTimetamp = dateTwo.getTime();

if (dateOneTimetamp < dateTwoTimetamp) {
  console.log(dateOne.toString());
} else if (dateOneTimetamp > dateTwoTimetamp) {
  console.log(dateTwo.toString());
}
// => May 10 2021 12:00:00

// moment => js lib
const now = moment();
console.log(now.toString()); // Mon May 30 2022 19:57:52 GMT+0200
console.log(new Date()); // Mon May 30 2022 19:57:52 GMT+0200

now.add(1, "year");
console.log(now.toString()); // Tue May 30 2023 20:07:24 GMT+0200

now.subtract(29, "day");
console.log(now.toString()); // Mon May 01 2023 20:09:19 GMT+0200

console.log(now.format("MMM Do, YYYY")); // May 1st, 2023
console.log(now.format("LLL")); // May 1, 2023 8:44 PM

console.log(now.fromNow()); // in a year

console.log(now.valueOf()); // 1682964888593

console.log(moment(now.valueOf()).toString()); // Mon May 01 2023 20:43:38 GMT+0200

//////////////////////////////////
//CHALANGE
//////////////////////////////////

const now3 = moment();
const myFirstDay = moment("mar ,6 1999");

console.log(now3.toString()); // Mon May 30 2022 21:08:26 GMT+0200

console.log(myFirstDay.toString()); // Sat Mar 06 1999 00:00:00 GMT+0200

console.log(myFirstDay.fromNow()); // 23 years ago

///////////////////////////////////
const myBirthday = moment();

// myBirthday.year(1999);
// myBirthday.month(3);
// myBirthday.day(6);

myBirthday.year(1999).month(3).day(6);

console.log(now3.toString()); // Mon May 30 2022 21:08:26 GMT+0200
console.log(myBirthday.toString()); // Sat May 01 1999 21:23:38 GMT+0300
console.log(myBirthday.format("MMM D, YYYY")); // May 1, 1999
console.log(myBirthday.fromNow()); // 23 years ago
