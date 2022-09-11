////////////////////////
// learn local storage
////////////////////////
// // Craete , Update
// localStorage.setItem('user','Ahmed')
// // Read
// const userName = localStorage.getItem('user')
// console.log(userName)
// // delete
// localStorage.remove('user')
// // delete All
// localStorage.clear()

const user = {
  name:'Ahmed',
  age:23
}
//Create
const userJson = JSON.stringify(user)
localStorage.setItem('user',userJson)
// Reade 
const userDataString = localStorage.getItem('user')
const userDataObject = JSON.parse(userDataString)
console.log(`username : ${userDataObject.name} \n age : ${userDataObject.age}`)
//delete
// localStorage.clear()