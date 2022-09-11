/*--using get & set in object --*/
const data = {
  get location() {
    return "this is a test from (get)";
  },
  set location(value) {
    this._location = value.trim();
  },
};
console.log(data); // { location: [Getter/Setter] }
console.log(data.location); // this is a test from (get)
data.location = "  cairo ";
console.log(data); // { location: [Getter/Setter], _location: 'cairo' }
console.log(data._location); // cairo

////////////////////////////////////////////////////////
class Person {
  constructor(firstName, lastName, age = 20) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }
  set fullName(fullName) {
    const names = fullName.split(" ");
    this.firstName = names[0];
    this.lastName = names[1];
  }
  get fullName() {
    return `my name is "${this.firstName} ${this.lastName}".`;
  }
  addYears(years) {
    this.age += years;
  }
}
// 01
// const me = new Person("ahmed", "eid"); // Person { firstName: 'ahmed', lastName: 'eid', age: 20 }
// 02
////////////////////////
const me = new Person();
me.fullName = "ahmed eid";
console.log(me); // Person { firstName: 'ahmed', lastName: 'eid', age: 20 }
console.log(me.firstName); // ahmed
me.fullName = "mohamed ali";
console.log(me.firstName); // mohamed
console.log(me.fullName); // my name is "mohamed ali".
