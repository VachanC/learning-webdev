var p1Display = document.getElementById("p1Display");
var p2Display = document.getElementById("p2Display");
var p1Button = document.getElementById("p1Button");
var p2Button = document.getElementById("p2Button");
var resetButton = document.getElementById("reset");
var numInput = document.querySelector("input");
var winningScoreDisplay = document.getElementById("playingTo");
var p1Score = 0;
var p2Score = 0;
var winnigScore = 5;
var gameOver = false;

p1Button.addEventListener("click", () => {
  if (!gameOver) {
    p1Score++;
    if (p1Score === winnigScore) {
      p1Display.classList.add("winner");
      gameOver = true;
    }
    p1Display.textContent = p1Score;
  }
});

p2Button.addEventListener("click", () => {
  if (!gameOver) {
    p2Score++;
    if (p2Score === winnigScore) {
      p2Display, classList.add("winner");
      gameOver = true;
    }
    p2Display.textContent = p2Score;
  }
});

resetButton.addEventListener("click", () => {
  reset();
});
function reset() {
  p1Score = 0;
  p2Score = 0;
  p1Display.textContent = 0;
  p2Display.textContent = 0;
  p1Display.classList.remove("winner");
  p2Display.classList.remove("winner");
  gameOver = false;
}

numInput.addEventListener("change", () => {
  winningScoreDisplay.textContent = numInput.value;
  winnigScore = Number(numInput.value);
  reset();
});
