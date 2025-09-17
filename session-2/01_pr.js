// post increment inside a function
let likes = 100;

function postIncLikes() {
  return likes++;
}

console.log('For likes :', postIncLikes());
console.log(likes);

// pre increment inside a function
let blogs = 10;

function preIncBlog() {
  return ++blogs;
}

console.log('For blogs :', preIncBlog());
console.log(blogs);

// i
let i = 1;
console.log(++i); // 2
console.log(i++); // 2
console.log(++i); // 4

let j = 3;
switch (j) {
  case 1:
    console.log('case 1');
  case 3:
    console.log('case 3');
  case 5:
    console.log('case 5');
  default:
    console.log('default.');
  // break;
}

let l = 1;
switch (l) {
  case 1:
    console.log('case 1');
  case 3:
    console.log('case 3');
  case 5:
    console.log('case 5');
  default:
    console.log('default.');
    break;
}
