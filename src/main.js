import { getInputError } from "./validation.js";
const inputs = document.querySelectorAll("input");
const tipButtons = document.querySelectorAll(".tip-button");
const customInput = document.getElementById("custom");

const updateInputError = (input, errorMessage) => {
  const hasError = errorMessage !== null;
  input.classList.toggle("input-error", hasError);
  input.ariaInvalid = String(hasError);
  input.ariaDescribedByElements[0].classList.toggle("hidden", !hasError);
  input.ariaDescribedByElements[0].textContent = errorMessage ?? "";
};

inputs.forEach((input) => {
  input.addEventListener("input", () => {
    const errorMessage = getInputError(input);

    updateInputError(input, errorMessage);
  });
});

const resetTipButtons = () => {
  tipButtons.forEach((tip) => {
    tip.classList.remove("active-tip-button");
    tip.ariaPressed = "false";
  });
};

const clearCustomInput = () => {
  customInput.value = "";
  updateInputError(customInput, null);
};

tipButtons.forEach((button) => {
  button.addEventListener("click", () => {
    resetTipButtons();

    button.classList.add("active-tip-button");
    button.ariaPressed = "true";
    clearCustomInput();
  });
});

customInput.addEventListener("input", () => {
  const isInputEmpty = customInput.value === "";

  if (!isInputEmpty) {
    resetTipButtons();
  }
});
