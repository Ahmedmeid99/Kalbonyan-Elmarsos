var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
function add(a, b) {
    return a + b;
}
console.log(add(2, 3));
/******************************/
function adding(a, b) {
    return a + b;
}
console.log(adding(2, 3));
/******************************/
/*__________Generics__________*/
function pushing(array, newItem) {
    return __spreadArray([newItem], array, true);
}
console.log(pushing([1, "2", 3], 5));
console.log(pushing(5, [1, 2, 3]));
/******************************/
function pushing2(array, newItem) {
    return __spreadArray([newItem], array, true);
}
console.log(pushing2([1, "2", 3], 5));
