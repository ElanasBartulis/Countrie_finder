async function getApi() {
  const promise = await fetch("https://restcountries.com/v3.1/all");
  const response = await promise.json();

  const newObject = response.map((value) => {
    let timeZone =
      value.timezones && value.timezones.length > 0
        ? value.timezones[0]
        : "UTC";

    if (timeZone.startsWith("UTC")) {
      const offset = timeZone.replace("UTC", "").replace(":00", "");
      timeZone = `Etc/GMT${-parseInt(offset)}`;
    }

    let currentTime;
    try {
      currentTime = new Date().toLocaleTimeString("en-US", {
        timeZone: timeZone,
        hour: "2-digit",
        minute: "2-digit",
        hour12: true,
      });
    } catch (error) {
      currentTime = new Date().toLocaleTimeString("en-US", {
        timeZone: "UTC",
        hour: "2-digit",
        minute: "2-digit",
        hour12: true,
      });
    }
    return {
      country: value.name.common,
      population: value.population,
      currency: value.currencies
        ? value.currencies[Object.keys(value.currencies)[0]]?.name
        : "Unknown",
      currencySymbol: value.currencies
        ? value.currencies[Object.keys(value.currencies)[0]]?.symbol
        : "Unknown",
      capital: value.capital?.[0] || "No Capital",
      time: currentTime,
      language: value.languages
        ? Object.values(value.languages).toString()
        : "Unknown",
      flagImg: value.flags.svg,
    };
  });

  return newObject;
}
