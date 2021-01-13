// Named Function
// p1 can be undefined
function helloWorld(p1) {
  // lets handle the case of undefined :: and provide some default value
  if (p1 == undefined) {
    p1 = 10;
  }

  console.log("Hello World", p1);
}

// Defining the Default value to p1
function addition(p1 = 20, p2 = 40) {
  console.log("Addition Here", p1, p2);
  return p1 + p2;
}

helloWorld();
let sum1 = addition();
console.log("Sum is ", sum1);

let sum2 = addition(undefined, 10);
console.log("Sum is ", sum2);

// helloWorld(100)
