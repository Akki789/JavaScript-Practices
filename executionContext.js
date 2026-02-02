// Question 1

console.log(a); // hoisted but out will be undefined because we are calling it before declaration(Global execution Context) here a = undefined in memory
var a = 10; // now memory updated to a = 10
console.log(a); // so now the output will 10


// Question 2

var x = 1;  // x = undefined , entire function in memory
function test() { //new execution context in code context 
  console.log(x); //where x= undefined
  var x = 2; // now x = 2
}
test(); // output will be undefined

//Question 3

console.log(foo()); //hello will be output

function foo() { 
  return "Hello"; 
}

//Question 4

console.log(bar()); //undefined

var bar = function () {
  return "Hi";
};




