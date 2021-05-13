var btn = document.querySelector("button");
var body = document.querySelector("body");
var isPurple = false;
btn.addEventListener("click", function () {
  if (isPurple) {
    body.style.background = "white";
  } else {
    body.style.background = "silver";
  }
  isPurple = !isPurple;
});
