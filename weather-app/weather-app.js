//https://openweathermap.org/current#name

const apikey = "c7de3fba4d8146b784500ee08fe44416";

const weatherDataEl = document.querySelector(".js-weather-info");
const cityInputEl = document.getElementById("city-input");
const formEl = document.querySelector("form");

formEl.addEventListener("submit", (event) => {
  //prevent page from loading when clicking on submit button
  event.preventDefault();
  const cityValue = cityInputEl.value;

  getWeatherData(cityValue);
});

async function getWeatherData(cityValue) {
  try {
    //async makes a function return a Promise
    //await makes a function wait for a Promise (only inside an async function)
    //await makes the function pause the execution and wait for a resolved promise before it continues

    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${cityValue}&appid=${apikey}&units=imperial`
    );

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    const data = await response.json();

    const icon = data.weather[0].icon;
    const temp = Math.round(data.main.temp);
    const description = data.weather[0].description;

    const details = [
      `Feels like: ${Math.round(data.main.feels_like)}`,
      `Humidity: ${Math.round(data.main.humidity)}%`,
      `Wind speed: ${Math.round(data.wind.speed)} m/s`,
    ];

    document.querySelector(".js-weather-info").innerHTML = `
      <div class="forecast-icon">
          <img
            src="https://openweathermap.org/img/wn/${icon}.png"
            alt="Weather Icon"
          />
      </div>
      <div class="temp">${temp}F</div>
      <div class="forecast-description">${description}</div>
      <div class="forecast-details">
        ${(document.querySelector(".forecast-details").innerHTML = details
          .map((detail) => `<div>${detail}</div>`)
          .join(""))}
      </div>`;

    // or can also do:
    //weatherDataEl.querySelector(".icon").innerHTML = `<img src="http://openweathermap.org/img/wn/${icon}.png" alt="Weather Icon">`;
    //weatherDataEl.querySelector(".temp").textContent = `${temperature}°C`;
  } catch (error) {
    document.querySelector(".js-weather-info").innerHTML = `
      <div class="forecast-icon">

      </div>
      <div class="temp">
      </div>
      <div class="forecast-description">Invalid entry, please try again.</div>
      <div class="forecast-details">
      </div>`;
  }
}
