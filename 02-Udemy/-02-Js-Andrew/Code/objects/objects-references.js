let myAcount = {
  name: "Ahmed",
  income: 0,
};

let addIncome = function (acount, amount) {
  return (acount.income = acount.income + amount);
};
let resetAcount = function (acount) {
  acount.income = 0;
};
console.log(addIncome(myAcount, 1000));

console.log(myAcount); // { name: 'Ahmed', income: 1000 }
resetAcount(myAcount);
console.log(myAcount); //{ name: 'Ahmed', income: 0 }
