class ClaseA {
  constructor() {
    this.foo = 0;
    this.bar = 0;
    this.lorem = "ipsum";
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

class ClaseC {
  constructor() {
    this.words = [];
  }

  addWord(word) {
    this.words.push(word);
  }

  capitalizeWords() {
    this.words = this.words.map((word) => word.toUpperCase());
  }

  countWords() {
    return this.words.length;
  }

  printWords() {
    return this.words.join(", ");
  }

  reverseWords() {
    this.words = this.words.map((word) => word.split("").reverse().join(""));
  }
}

function initializeCounter() {
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
}

function initializeItemList() {
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
}

function initializeWordProcessor() {
  const objetoC = new ClaseC();
  const addWordButton = document.getElementById("addWordButton");
  const capitalizeWordsButton = document.getElementById(
    "capitalizeWordsButton"
  );
  const countWordsButton = document.getElementById("countWordsButton");
  const reverseWordsButton = document.getElementById("reverseWordsButton");
  const wordInput = document.getElementById("wordInput");
  const wordsResult = document.getElementById("wordsResult");
  const wordsList = document.getElementById("wordsList");

  addWordButton.addEventListener("click", function () {
    const newWord = wordInput.value;
    if (newWord.trim() !== "") {
      objetoC.addWord(newWord);
      updateUI();
      wordInput.value = "";
    }
  });

  capitalizeWordsButton.addEventListener("click", function () {
    objetoC.capitalizeWords();
    updateUI();
  });

  countWordsButton.addEventListener("click", function () {
    const count = objetoC.countWords();
    wordsResult.innerText = `Número de palabras: ${count}`;
  });

  reverseWordsButton.addEventListener("click", function () {
    objetoC.reverseWords();
    updateUI();
  });

  function updateUI() {
    console.log(`Palabras: ${objetoC.printWords()}`);
    displayWords();
  }

  function displayWords() {
    const words = objetoC.printWords().split(", ");
    wordsList.innerHTML = "";
    words.forEach((word) => {
      const li = document.createElement("li");
      li.textContent = word;
      wordsList.appendChild(li);
    });
  }
}

document.addEventListener("DOMContentLoaded", function () {
  initializeCounter();
  initializeItemList();
  initializeWordProcessor();
});
