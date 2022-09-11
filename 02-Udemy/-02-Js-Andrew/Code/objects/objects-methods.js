let user = {
  name: "ahmed",
  age: 22,
  changeName: function (newName) {
    this.name = newName;
  },
  changeAge: function (newAge) {
    this.age = newAge;
  },
};
console.log(user);
/*
{
  name: 'ahmed',
  age: 22,
  changeName: [Function: changeName],
  changeAge: [Function: changeAge]
}
*/
user.changeName("eid");
user.changeAge(17);

console.log(user);
/*
{
  name: 'eid',
  age: 17,
  changeName: [Function: changeName],
  changeAge: [Function: changeAge]
}
*/
