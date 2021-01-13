// Primite Variale
let num = 100;
let str = "Hello";

// Object Literals :: Reference Variable
let user1 = {
  userName: "Santosh",
  city: "Raniganj",
  mobile: "123456789",
  email: "abcd@gmail.com",
  friends: 1000,
  active: true,
};

console.log(typeof user1);
console.log("Initial ", user1);

// Accessing Member
// Using Dot Operator ::  Using Bracket Notation
console.log("USERNAME ", user1.userName, user1.city);
console.log("Username", user1["userName"]);

// Update Member
user1.city = "West Bengal";

console.log("Updated ", user1);
