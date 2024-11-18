const button = document.querySelector(".get-country");

async function main() {
  const api = await getApi();
  searchCountry(api);
  displaySuggestions(api);
}

main();
