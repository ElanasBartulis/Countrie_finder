const suggestionsBox = document.querySelector(".suggestions-box");
const search = document.querySelector(".search");

function displaySuggestions(countries) {
  const listOfCountries = countries.map((country) => country.country);

  const listOfCurrencies = countries.map((currency) => currency.currency);
  const uniqueCurrency = [...new Set(listOfCurrencies)];

  const listOfCapitals = countries.map((capital) => capital.capital);

  const listOfLanguages = countries.map((lang) => lang.language);
  const uniqueLanguages = [
    ...new Set(listOfLanguages.flatMap((item) => item.split(","))),
  ];

  search.addEventListener("input", (event) => {
    if (search.value === "") {
      suggestionsBox.style.display = "none";
    } else {
      const input = event.target.value;
      suggestionsBox.innerHTML = "";
      suggestionsBox.style.display = "block";

      createDiv(listOfCountries, input);
      createDiv(uniqueCurrency, input);
      createDiv(listOfCapitals, input);
      createDiv(uniqueLanguages, input);
    }
  });
}

function createDiv(list, input) {
  const data = list.filter((value) =>
    value.toLowerCase().includes(input.toLowerCase())
  );

  const value = data.forEach((value) => {
    const item = document.createElement("div");
    item.className = "suggestion-item";
    item.textContent = value;

    item.addEventListener("click", () => {
      search.value = value;
      suggestionsBox.style.display = "none";
    });

    suggestionsBox.appendChild(item);
  });

  return value;
}
