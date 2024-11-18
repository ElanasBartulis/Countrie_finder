const flagImage = document.querySelector(".flag");
const countryInfo = document.querySelector(".country-info");

flagImage.addEventListener("click", () => {
  countryInfo.style.display =
    countryInfo.style.display === "none" || countryInfo.style.display === ""
      ? "block"
      : "none";
});
