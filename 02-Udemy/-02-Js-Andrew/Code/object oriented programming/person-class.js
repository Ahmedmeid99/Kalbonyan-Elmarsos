class Person {
  constructor(firstName, lastName, age = 20) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }
  changeName(fullName) {
    const names = fullName.split(" ");
    this.firstName = names[0];
    this.lastName = names[1];
  }
  addYears(years) {
    this.age += years;
  }
}

const Person1 = new Person("Ahmed", "ali", 10);
console.log(Person1); // Person { firstName: 'Ahmed', lastName: 'ali', age: 10 }
Person1.changeName("ali hassan");
Person1.addYears(7);
console.log(Person1); // Person { firstName: 'ali', lastName: 'hassan', age: 17 }

//////////////////////////////////////////////
// Subclass
class Employee extends Person {
  constructor(firstName, lastName, position, age = 20) {
    // set old params(saving value)
    super(firstName, lastName, age);
    // set new param (saving value)
    this.position = position;
  }
  // override method
  changeName(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
  // add new method
  getpositionMessage() {
    return `${this.firstName} ${this.lastName} work as a "${this.position}".`;
  }
}

const me = new Employee("Ahmed", "eid", "front-end Developer", 23);
console.log(me); // Employee {firstName: 'Ahmed',lastName: 'eid',age: 23,position: 'front-end Developer' }

me.changeName("ahmed ", "eid1999");
console.log(me); //Employee { firstName: 'ahmed ',lastName: 'eid1999',age: 23,position: 'front-end Developer'}

console.log(me.getpositionMessage()); //ahmed eid1999 work as a "front-end Developer".
