const btn = document.querySelector(".increment");

const counter = {
  count: 0,
  increase: function () {
    console.log(this);
    this.count++;
    console.log(this.count);
  },
};

// fail
// btn.addEventListener("click", counter.increase);

// btn.addEventListener("click", counter.increase.bind(counter));

const increment = counter.increase.bind(counter);
btn.addEventListener("click", increment);
btn.removeEventListener("click", increment);
