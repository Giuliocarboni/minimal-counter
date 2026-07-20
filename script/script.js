const displayedNumber = document.querySelector(".displayed-number");
const buttonsContainer = document.querySelector(".buttons-container");
const buttonsTopContainer = document.querySelector(".buttons-top");

const valueDisplay = document.createElement("span");
valueDisplay.id = "number";
valueDisplay.setAttribute("aria-live", "polite");
valueDisplay.setAttribute("aria-atomic", "true");
valueDisplay.textContent = "0";
displayedNumber.appendChild(valueDisplay);

const decrementBtn = document.createElement("button");
decrementBtn.className = "button";
decrementBtn.id = "decrement";
decrementBtn.setAttribute("aria-label", "Decrementa");
decrementBtn.textContent = "-";
buttonsTopContainer.appendChild(decrementBtn);

const incrementBtn = document.createElement("button");
incrementBtn.className = "button";
incrementBtn.id = "increment";
incrementBtn.setAttribute("aria-label", "Incrementa");
incrementBtn.textContent = "+";
buttonsTopContainer.appendChild(incrementBtn);

const resetBtn = document.createElement("button");
resetBtn.className = "button";
resetBtn.id = "reset";
resetBtn.textContent = "Reset";
buttonsContainer.appendChild(resetBtn);

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
