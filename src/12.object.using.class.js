class Person {
  constructor(id, name, email = "india@gmail.com") {
    this.id = id;
    this.name = name;
    this.email = email;
  }

  // Member Function
  sayHi() {
    return "Hi " + this.name;
  }
}

let p1 = new Person(1, "Virat", "virat@gmail.com");
let p2 = new Person(2, "Rohit");

console.log(p1, p2);

let o1 = p1.sayHi();
let o2 = p2.sayHi();

console.log(o1, o2);
