import Button from "./components/button";
import Count from "./components/count";
import state from "./state";

const app = document.querySelector("#app");

function render() {
  app.innerHTML = `  ${Count(state.getState().count)}
    <div class="flex justify-center">
      ${Button("+1", "increment")}
      ${Button("-1", "decrement")}
    </div>`;
}

state.subscribe(render);
render();

document.addEventListener("click", (event) => {
  if (event.target.id === "increment")
    state.setState({ count: state.getState().count + 1 });
  else if (event.target.id === "decrement")
    state.setState({ count: state.getState().count - 1 });
});
