import {
  countDisplayRef,
  decrementRef,
  incrementRef,
  resetRef,
} from "./lib.js";

let count = 0;

function setCount(newCount) {
  count = newCount;
  render();
}

function render() {
  countDisplayRef.textContent = count;
}

incrementRef.addEventListener("click", () => {
  setCount(count + 1);
});

decrementRef.addEventListener("click", () => {
  setCount(count - 1);
});

resetRef.addEventListener("click", () => {
  setCount(0);
});

render();
