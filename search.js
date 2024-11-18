function searchCountry(param) {
  const searchInputElement = document.querySelector(".search");
  const searchButton = document.querySelector(".get-country");

  searchButton.addEventListener("click", () => {
    const inputValue = searchInputElement.value.toLowerCase();
    if (inputValue === "") return;
    const filteredCountries = param.filter(
      (value) =>
        value.country.toLowerCase().includes(inputValue) ||
        value.currency.toLowerCase().includes(inputValue) ||
        value.capital.toLowerCase().includes(inputValue) ||
        value.language.toLowerCase().includes(inputValue)
    );
    suggestionsBox.style.display = "none";
    htmlGen(filteredCountries);
  });
}
