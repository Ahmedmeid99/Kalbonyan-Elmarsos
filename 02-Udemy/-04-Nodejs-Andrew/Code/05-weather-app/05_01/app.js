console.log("start"); // call stack

setTimeout(() => {
  // callback queue
  console.log("2 second timer");
}, 200);
setTimeout(() => {
  // callback queue
  console.log("0 second timer");
}, 0);

console.log("stop"); // call stack

/*
start
stop
0 second timer
2 second timer
*/
