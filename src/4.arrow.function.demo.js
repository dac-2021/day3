function addition(a = 1, b = 1) {
  return a + b;
}

let sum = (a = 1, b = 1) => a + b;

let total = sum();
console.log("Total", total);
