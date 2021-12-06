class Counter {
  constructor(element, value) {
    this.counter = element;
    this.value = value;
    this.resetBtn = element.querySelector(".reset");
    this.decreaseBtn = element.querySelector(".decrease");
    this.increaseBtn = element.querySelector(".increase");
    this.valueDOM = element.querySelector(".value");
    this.valueDOM.textContent = this.value;

    this.increase = this.increase.bind(this);
    this.reset = this.reset.bind(this);
    this.decrese = this.decrese.bind(this);

    this.increaseBtn.addEventListener("click", this.increase);
    this.resetBtn.addEventListener("click", this.reset);
    this.decreaseBtn.addEventListener("click", this.decrese);
  }
  increase() {
    this.value++;
    this.valueDOM.textContent = this.value;
  }
  reset() {
    this.value = 0;
    this.valueDOM.textContent = this.value;
  }
  decrese() {
    this.value--;
    this.valueDOM.textContent = this.value;
  }
}

const firstCounter = new Counter(getElement(".first-counter"), 100);
const secondCounter = new Counter(getElement(".second-counter"), 200);

function getElement(selection) {
  const element = document.querySelector(selection);
  if (element) {
    return element;
  }
  throw new Error(
    `Please check "${selection}" selection. No such element exist`
  );
}
