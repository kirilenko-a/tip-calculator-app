const errors = {
  invalidValue: "Invalid value",
  lessThanZero: "Must be greater than zero",
  moreThanHundred: `Can't be more than one hundred`,
  integerValue: "Value has to be an integer",
  noError: null,
};

import { getTipPercentage } from "./calculations.js";

const customInput = document.getElementById("custom");
const bill = document.getElementById("bill");
const people = document.getElementById("people-amount");

export const getInputError = (input) => {
  const value = Number(input.value);
  const inputName = input.name;

  if (input.validity.badInput) {
    return errors.invalidValue;
  }

  if (input.value === "") {
    return errors.noError;
  }

  if (inputName === "bill" && value <= 0) {
    return errors.lessThanZero;
  }

  if (inputName === "custom" && (value < 0 || value > 100)) {
    if (value < 0) {
      return errors.lessThanZero;
    }

    return errors.moreThanHundred;
  }

  if (
    inputName === "people-amount" &&
    (value <= 0 || !Number.isInteger(value))
  ) {
    if (value <= 0) {
      return errors.lessThanZero;
    }

    return errors.integerValue;
  }

  return errors.noError;
};

export const isInputValid = (input) => {
  return input.value !== "" && !input.classList.contains("input-error");
};

export const isReadyToCalculate = () => {
  return (
    isInputValid(bill) &&
    isInputValid(people) &&
    getTipPercentage(customInput) !== null
  );
};
