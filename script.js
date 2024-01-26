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

class ClaseB {
  constructor() {
    this.items = [];
  }

  addItem(item) {
    this.items.push(item);
  }

  removeItem(index) {
    if (index >= 0 && index < this.items.length) {
      this.items.splice(index, 1);
    }
  }

  getTotalItems() {
    return this.items.length;
  }

  printItems() {
    return this.items.join(", ");
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

document.addEventListener("DOMContentLoaded", function () {
  const objetoB = new ClaseB();

  var addButton = document.getElementById("addButton");
  var removeButton = document.getElementById("removeButton");
  var newItemInput = document.getElementById("newItem");
  var indexToRemoveInput = document.getElementById("indexToRemove");
  var totalItems = document.getElementById("totalItems");

  addButton.addEventListener("click", function () {
    const newItem = newItemInput.value;
    if (newItem.trim() !== "") {
      objetoB.addItem(newItem);
      updateUI();
      newItemInput.value = "";
    }
  });

  removeButton.addEventListener("click", function () {
    const indexToRemove = parseInt(indexToRemoveInput.value);
    if (!isNaN(indexToRemove)) {
      objetoB.removeItem(indexToRemove);
      updateUI();
      indexToRemoveInput.value = "";
    }
  });

  function updateUI() {
    totalItems.innerText = `Total de elementos: ${objetoB.getTotalItems()}`;
    console.log(`Elementos: ${objetoB.printItems()}`);
  }
});
