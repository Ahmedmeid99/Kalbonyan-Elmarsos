// Prototypeal inheritance

const Person = function (firstName, lastName, age, likes = []) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.age = age;
  this.likes = likes;
};

////////////////////////////////
Person.prototype.getBio2 = function () {
  let bio = `${this.firstName} is ${this.age}`;
  this.likes.forEach((like) => {
    bio += ` ${this.firstName} likes ${like}`;
  });
  return bio;
};

//////////////////////////////////////////
const me = new Person("Ahmed", "Eid", 23, ["one", "two"]);
//////////////////////////////////////////

console.log(me.getBio2());
Person.prototype.setName = function (fullName) {
  const names = fullName.split(" ");
  this.firstName = names[0];
  this.lastName = names[1];
};
me.setName("hassan eid"); // Person { firstName: 'hassan', lastName: 'eid', age: 23 }

Person.prototype.location = "cairo";
console.log(me.location); // cairo
console.log(me); //  Person { firstName: 'Ahmed', lastName: 'Eid', age: 23 }

//////////////////////////////////////////
const person2 = new Person("Eid", "Mohamed", 17, ["three", "four"]);
//////////////////////////////////////////

console.log(person2); // Person { firstName: 'Eid', lastName: 'Mohamed', age: 17 }

//
//
//
//
//
//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//
//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//

// Person.prototype.getBio = function () {
//     return `${this.firstName} is ${this.age}`;
//   };

// console.log(me.getBio()); // Ahmed is 23
// console.log(person2.getBio()); // Eid is 17
