const errors = {
  invalidValue: "Invalid value",
  lessThanZero: "Must be greater than zero",
  moreThanHundred: `Can't be more than one hundred`,
  integerValue: "Value has to be an integer",
  noError: null,
};

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
