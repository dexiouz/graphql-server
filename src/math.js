const math = ([x, y], operation) => console.log(x, y, operation);

// math is an es6 arrow function with implicit return. Let show you a return statement in es5
// function math([x, y], operation){
//   return  operation(Number(x), Number(y));

// }
const plus = (x, y) => x + y;
const minus = (x, y) => x - y;
const times = (x, y) => x * y;
const div = (x, y) => x / y;

console.log(math`3 ${plus} 4 `);

// const s = (x, y) => x + y;
// const n = 44;
// const m = 5;

// console.log(`3 ${s} 4`);
