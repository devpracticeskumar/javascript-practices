// var variable scope - function

var x = 1;
{
  var x = 2;
}

console.log('x =', x);

let a = 5;
{
  let b = 6;
  console.log('a =', a, ' & ', 'b =', b);
}

console.log('a =', a);

// console.log('a =', a, ' & ', 'b =', b);
