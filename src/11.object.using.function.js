function Person(name, country) {
  this.name = name;
  this.country = country;

  this.sayHi = () => {
    return "Hi" + this.name;
  };
}

let p1 = new Person("Santosh", "India");
let p2 = new Person("Pooja", "India");

let o1 = p1.sayHi();
let o2 = p2.sayHi();
console.log(o1, o2);
