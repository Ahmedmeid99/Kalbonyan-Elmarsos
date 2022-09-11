// const person = function () {};
// const me = person();
// console.log(me); // undefined

// const person = function () {};
// const me = new person();
// console.log(me); // person {}

// const person = function () {
//   console.log(this);
// };
// const me = new person();
// console.log(me); //  person {} person {}

const Person = function (firstName, lastName, age) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.age = age;
};
const me = new Person("Ahmed", "Eid", 23);
console.log(me); //  Person { firstName: 'Ahmed', lastName: 'Eid', age: 23 }
console.log(me.age); // 23
me.lastName = "Ali";
console.log(me); //  Person { firstName: 'Ali', lastName: 'Eid', age: 23 }

const person2 = new Person("Eid", "Mohamed", 17);
console.log(person2); // Person { firstName: 'Eid', lastName: 'Mohamed', age: 17 }
