// console for the Data values
console.log('Predict the output:');

console.log('null + 1 =', null + 1); // 1 - number datatype
console.log('"5" + 3 =', '5' + 3); // 53 - string datatype
console.log(`"5" - 3 = ${'5' - 3}`); // 2 - number datatype
console.log(true + false); // 1 - boolean datatype

// console for the DataType
console.log('Check types:');

console.log(typeof []); // object
console.log(typeof null); // object - bug
console.log(typeof 123n); //

// console for Truthy or Falsy?
console.log('Truthy or Falsy:');

console.log(Boolean(0)); // Falsy
console.log(Boolean('0')); // Truthy
console.log(Boolean([])); // Truthy
console.log(Boolean(undefined)); // Falsy

// Compare with loose vs strict:
console.log('Compare with loose vs strict:');

console.log(5 == '5'); // true - loose equality
console.log(5 === '5'); // false - strict equality
