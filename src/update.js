import { isReadyToCalculate } from "./validation.js";
import { getBill } from "./calculations.js";
import { getTipPercentage } from "./calculations.js";
import { getPeopleAmount } from "./calculations.js";
import { calculateTipPerPerson } from "./calculations.js";
import { calculateTotalPerPerson } from "./calculations.js";

export const tipAmount = document.getElementById("tip-amount");
export const totalAmount = document.getElementById("total-amount");
const bill = document.getElementById("bill");
const people = document.getElementById("people-amount");
const customInput = document.getElementById("custom");

export const updateInputError = (input, errorMessage) => {
  const hasError = errorMessage !== null;
  input.classList.toggle("input-error", hasError);
  input.ariaInvalid = String(hasError);
  input.ariaDescribedByElements[0].classList.toggle("hidden", !hasError);
  input.ariaDescribedByElements[0].textContent = errorMessage ?? "";
};

export const updateResult = () => {
  if (!isReadyToCalculate()) {
    tipAmount.textContent = `$0.00`;
    totalAmount.textContent = `$0.00`;
    return;
  }

  const billAmount = getBill(bill);
  const tipPercentage = getTipPercentage(customInput);
  const numberOfPeople = getPeopleAmount(people);

  const tipPerPerson = calculateTipPerPerson(
    billAmount,
    tipPercentage,
    numberOfPeople,
  );
  const totalPerPerson = calculateTotalPerPerson(
    billAmount,
    tipPerPerson,
    numberOfPeople,
  );

  tipAmount.textContent = `$${tipPerPerson.toFixed(2)}`;
  totalAmount.textContent = `$${totalPerPerson.toFixed(2)}`;
};
