const isInputValid = (input) => {
  const value = Number(input.value);
  const inputName = input.name;

  if (input.validity.badInput) {
    return false;
  }

  if (input.value === "") {
    return true;
  }

  if (inputName === "bill" && value <= 0) {
    return false;
  }

  if (inputName === "custom" && (value < 0 || value > 100)) {
    return false;
  }

  if (
    inputName === "people-amount" &&
    (value <= 0 || !Number.isInteger(value))
  ) {
    return false;
  }

  return true;
};
