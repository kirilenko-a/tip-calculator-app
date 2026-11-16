import { getInputError } from "./validation.js";
const inputs = document.querySelectorAll("input");
const tipButtons = document.querySelectorAll(".tip-button");

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

tipButtons.forEach((button) => {
  button.addEventListener("click", () => {
    tipButtons.forEach((tip) => {
      tip.classList.remove("active-tip-button");
      tip.ariaPressed = "false";
    });

    button.classList.add("active-tip-button");
    button.ariaPressed = "true";
  });
});
