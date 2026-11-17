export const updateInputError = (input, errorMessage) => {
  const hasError = errorMessage !== null;
  input.classList.toggle("input-error", hasError);
  input.ariaInvalid = String(hasError);
  input.ariaDescribedByElements[0].classList.toggle("hidden", !hasError);
  input.ariaDescribedByElements[0].textContent = errorMessage ?? "";
};
