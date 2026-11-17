import { getInputError } from "./validation.js";
import { resetTipButtons } from "./reset.js";
import { tipButtons } from "./reset.js";
import { updateInputError } from "./update.js";
import { clearCustomInput } from "./reset.js";
import { updateResult } from "./update.js";

const inputs = document.querySelectorAll("input");
const customInput = document.getElementById("custom");

inputs.forEach((input) => {
  input.addEventListener("input", () => {
    const errorMessage = getInputError(input);
    updateInputError(input, errorMessage);
    updateResult();
  });
});

tipButtons.forEach((button) => {
  button.addEventListener("click", () => {
    resetTipButtons();

    button.classList.add("active-tip-button");
    button.ariaPressed = "true";
    clearCustomInput();
    updateResult();
  });
});

customInput.addEventListener("input", () => {
  const isInputEmpty = customInput.value === "";

  if (!isInputEmpty) {
    resetTipButtons();
  }
});
