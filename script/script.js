const valueDisplay = document.getElementById("number");
const incrementBtn = document.getElementById("increment");
const decrementBtn = document.getElementById("decrement");
const resetBtn = document.getElementById("reset");

let currentCount = 0;

function updateDisplay() {
  valueDisplay.textContent = currentCount;

  const isMultipleOfTen = currentCount !== 0 && currentCount % 10 === 0;

  valueDisplay.classList.toggle("highlight", isMultipleOfTen);
}

function resetCount() {
  currentCount = 0;
  updateDisplay();
}

incrementBtn.addEventListener("click", () => {
  currentCount++;
  updateDisplay();
});

decrementBtn.addEventListener("click", () => {
  currentCount--;
  updateDisplay();
});

resetBtn.addEventListener("click", resetCount);
