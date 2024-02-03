let btn = document.querySelector("button");

btn.addEventListener("click", function () {
  let h3 = document.querySelector("h1");
  let randomColor = generateRandomColor();
  h3.innerText = randomColor;

  let div = document.querySelector("div");
  div.style.backgroundColor = randomColor;
  console.log("Color Updated!");
});
function generateRandomColor() {
  let red = Math.floor(Math.random() * 255);
  let green = Math.floor(Math.random() * 255);
  let blue = Math.floor(Math.random() * 255);

  let color = `RGB(${red},${green},${blue})`;
  return color;
}
