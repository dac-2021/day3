function Hello() {
  this.sayHi = () => {
    console.log("Hi");
    return this;
  };

  this.sayHello = () => {
    console.log("Hello");
    return this;
  };
}

let ref = new Hello();
ref.sayHi().sayHello();
