class ClaseA {
  constructor() {
    this.foo = 0;
    this.bar = 0;

    this.fooInc = 1;
    this.barInc = 2;
  }

  tick() {
    this.foo += this.fooInc;
    this.bar += this.barInc;
  }

  inc() {
    this.fooInc *= 2;
    this.barInc *= 2;
  }

  print() {
    return `
Foo: ${this.foo}
Bar: ${this.bar}
FooInc: ${this.fooInc}
BarInc: ${this.barInc}`.trim();
  }
}

document.addEventListener("DOMContentLoaded", function () {
  const objetoA = new ClaseA();

  var myButton = document.getElementById("myButton");

  var counter = document.getElementById("counter");

  setInterval(() => {
    objetoA.tick();
    counter.innerText = objetoA.print();
  }, 250);

  myButton.addEventListener("click", function () {
    objetoA.inc();
  });
});
