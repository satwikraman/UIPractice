var name = "John", age = 25;
var obj = {
    name,
    age
}
console.log(obj);
const object1 = {
    a: 1,
    b: 2,
    c: 3
};

const object2 = Object.assign({ c: 4, d: 5 }, object1);

console.log(object2.c, object2.d);
// expected output: 3 5
