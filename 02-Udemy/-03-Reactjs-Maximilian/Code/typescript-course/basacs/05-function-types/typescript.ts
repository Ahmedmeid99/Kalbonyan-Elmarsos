function add(a: number, b: number) {
  return a + b;
}
console.log(add(2, 3));
/******************************/
function adding(a: number, b: number): number {
  return a + b;
}
console.log(adding(2, 3));

/******************************/
/******************************/
function pushing(array: any, newItem: any) {
  return [newItem, ...array];
}
console.log(pushing([1, "2", 3], 5));
// console.log(pushing(5, [1, 2, 3])); //not work

/*__________Generics__________*/
/******************************/

function pushing2<T>(array: T[], newItem: T) {
  return [newItem, ...array];
}
console.log(pushing2([1, "2", 3], 5));
// console.log(pushing2(5, [1, 2, 3])); //error 5 is not an array
