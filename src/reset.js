import { updateInputError } from "./update.js";
import { tipAmount } from "./update.js";
import { totalAmount } from "./update.js";

export const tipButtons = document.querySelectorAll(".tip-button");
const inputs = document.querySelectorAll("input");
const form = document.getElementById("form");
const customInput = document.getElementById("custom");

export const resetTipButtons = () => {
  tipButtons.forEach((tip) => {
    tip.classList.remove("active-tip-button");
    tip.ariaPressed = "false";
  });
};

export const clearCustomInput = () => {
  customInput.value = "";
  updateInputError(customInput, null);
};

form.addEventListener("reset", () => {
  resetTipButtons();

  inputs.forEach((input) => {
    updateInputError(input, null);
  });

  tipAmount.textContent = `$0.00`;
  totalAmount.textContent = `$0.00`;
});
