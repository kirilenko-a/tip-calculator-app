export const getBill = (input) => Number(input.value);

export const getTipPercentage = (input) => {
  const pressedButton = document.querySelector(
    '.tip-button[aria-pressed="true"]',
  );

  if (input.value !== "" && input.classList.contains("input-error")) {
    return null;
  }

  if (input.value !== "") {
    return Number(input.value);
  }

  if (pressedButton !== null) {
    return Number(pressedButton.value);
  }

  return null;
};

export const getPeopleAmount = (input) => Number(input.value);

export const calculateTipPerPerson = (bill, tipPercentage, peopleAmount) => {
  return (bill * tipPercentage) / 100 / peopleAmount;
};

export const calculateTotalPerPerson = (bill, tipPerPerson, peopleAmount) => {
  return bill / peopleAmount + tipPerPerson;
};
