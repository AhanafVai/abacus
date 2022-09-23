// getting elements
let display = document.getElementById("display");

// ? getting key value
document.getElementById("keyPads").addEventListener("click", (e) => {
  switch (e.target.value) {
    case "C":
      display.value = "";
      break;
    case "=":
      try {
        display.value = eval(display.value);
      } catch {
        display.value = "Error";
      }
      break;
    case "<":
      if (display.value) {
        display.value = display.value.slice(0, -1);
      }
      break;
    default:
      display.value += e.target.value;
  }
});
