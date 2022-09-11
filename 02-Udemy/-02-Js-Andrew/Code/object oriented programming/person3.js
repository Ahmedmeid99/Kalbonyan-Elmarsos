const Person = function (firstName, lastName, age = 20) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.age = age;
};
const person1 = new Person("ahmed", "eid", 23);
console.log(person1); // Person { firstName: 'ahmed', lastName: 'eid', age: 23 }

Person.prototype.changeName = function (fullName) {
  const names = fullName.split(" ");
  this.firstName = names[0];
  this.lastName = names[1];
};
Person.prototype.addYears = function (years) {
  this.age += years;
};
person1.changeName("ali hassan");
person1.addYears(7);
console.log(person1); // Person { firstName: 'ali', lastName: 'hassan', age: 30 }
