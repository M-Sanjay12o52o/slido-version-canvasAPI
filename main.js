const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

window.addEventListener("resize", () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});

canvas.addEventListener("click", (event) => {
  const x = event.clientX;
  const y = event.clientY;

  console.log("x: ", x);
  console.log("y:", y);

  handleTextInput(x, y);
});

let textInputs = [];

function handleTextInput(x, y) {
  const input = {
    x,
    y,
    text: "",
  };
  textInputs.push(input);
  console.log("input.text: ", input.text);

  document.addEventListener("keydown", handleKeyDown);

  draw();
}
function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  textInputs.forEach((input) => {
    ctx.fillStyle = "black";
    ctx.fillText(input.text, input.x, input.y);
  });
}

function handleKeyDown(event) {
  const key = event.key;
  console.log("key from handleKeyDown fn: ", key);

  if (textInputs.length > 0) {
    const currentInput = textInputs[textInputs.length - 1];

    if (key === "Backspace") {
      currentInput.text = currentInput.text.slice(0, -1);
    } else if (key.length === 1) {
      currentInput.text += key;
    }

    draw();
  }
}
