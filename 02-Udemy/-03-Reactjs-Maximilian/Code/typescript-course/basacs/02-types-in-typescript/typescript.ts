let ahmed: string; //string
ahmed = "AhmedEid";
console.log(ahmed);
/*****************************/
let age: number; //number
age = 23;
console.log(age);
/*****************************/
let isTall: boolean; //boolean [true,false]
isTall = true;
console.log(isTall);
/*****************************/
let names: string[]; //array of strings
names = ["ahmed", "eid", "ali", "mohamed"];
console.log(names);
/*****************************/
let nums: number[]; //array of numbers
nums = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(nums);
/*****************************/
let user: any; // eny type
user = {
  name: "ahmed",
  age: 23,
};
console.log(user);
/*****************************/
let user2: {
  name: string;
  age: number;
}; // object
user2 = {
  name: "ahmed",
  age: 23,
};
console.log(user2);
/*****************************/
let users: {
  name: string;
  age: number;
}[]; // array of objects
users = [
  { name: "ahmed", age: 23 },
  { name: "eid", age: 20 },
];
console.log(users);
