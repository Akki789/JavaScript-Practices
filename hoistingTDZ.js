//Question 1
// console.log(a); //error because of TDZ only with let and const
// let a = 5; 

//Question 2
// {
//   console.log(b); //error because of TDZ only with let and const
//   let b = 20;
// }

// Question 3
// let x = 10;

// {
//   console.log(x); //TDZ because it is other block of code
//   let x = 20;
// }


//Question 4

// const a = 10; 

// {
//   console.log(a); //output 10 because not other variable in this scope
// }

//🔥 SET 3: Hoisting + Functions + TDZ Combo

//Question 5
// console.log(a); //undefined

// let a = 10; 

// function test() {
//   console.log(a);
// }


// Question 6
var a = 10;

function test() {
  console.log(a); //undefined TDZ
  let a = 20;
}

test(); //undefined




