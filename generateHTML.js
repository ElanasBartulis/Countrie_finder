function htmlGen(param) {
  let html = "";
  for (let value of param) {
    html += `
          <div class="flag">
              <img src=${value.flagImg} alt="Salies Veleva">
              <h2>${value.country}</h2>
          
                <div class="country-info">
                    <ul>
                        <li>Population: ${value.population.toLocaleString()}</li>
                        <li>Currency: ${value.currency}</li>
                        <li>Capital: ${value.capital}</li>
                        <li>Time: ${value.time}</li>
                        <li>Language: ${value.language}</li>
                    </ul>
                </div>
            </div>
      `;
  }

  const mainContentElement = document.querySelector(".main-content");
  mainContentElement.innerHTML = html;
}
