class Person {
  constructor(id, name) {
    this.id = id;
    this.name = name;
  }

  sayHi() {
    return "Hi Person " + this.name;
  }
}

class Student extends Person {
  constructor(id, name, country) {
    super(id, name);

    this.country = country;
  }
}

let ref1 = new Student(1, "Virat", "India");
let o1 = ref1.sayHi();
console.log(o1);
