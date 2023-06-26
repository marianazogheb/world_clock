// Lausanne
function updateLausanneTime() {
  let lausanneElement = document.querySelector("#lausanne");
  let lausanneDateElement = lausanneElement.querySelector(".date");
  let lausanneTimeElement = lausanneElement.querySelector(".time");

  let lausanneTimezone = moment().tz("Europe/Lausanne");

  lausanneDateElement.innerHTML = lausanneTimezone.format("dddd, MMMM D, YYYY");
  lausanneTimeElement.innerHTML = lausanneTimezone.format("h:mm:ss");
}

// New York
function updateNewYorkTime() {
  let newYorkElement = document.querySelector("#new-york");
  let newYorkDateElement = newYorkElement.querySelector(".date");
  let newYorkTimeElement = newYorkElement.querySelector(".time");

  let newYorkTimezone = moment().tz("America/New_York");

  newYorkDateElement.innerHTML = newYorkTimezone.format("dddd, MMMM D, YYYY");
  newYorkTimeElement.innerHTML = newYorkTimezone.format("h:mm:ss");
}

// Sydney
function updateSydneyTime() {
  let sydneyElement = document.querySelector("#sydney");
  let sydneyDateElement = sydneyElement.querySelector(".date");
  let sydneyTimeElement = sydneyElement.querySelector(".time");

  let sydneyTimezone = moment().tz("Australia/Sydney");

  sydneyDateElement.innerHTML = sydneyTimezone.format("dddd, MMMM D, YYYY");
  sydneyTimeElement.innerHTML = sydneyTimezone.format("h:mm:ss");
}

// City Update
function showCity(event) {
  let cityTimeZone = event.target.value;
  if (cityTimeZone === "current") {
    cityTimeZone = moment.tz.guess();
  }
  let cityName = cityTimeZone.replace("_", " ").split("/")[1];
  let cityTime = moment().tz(cityTimeZone);
  let citiesElement = document.querySelector("#cities");
  citiesElement.innerHTML = `
        <div class="city row">${cityName}</div>
        <div class="row">
        <div class="date col">${cityTime.format("MMMM D, YYYY")}</div>
        <div class="time col">${cityTime.format("h:mm:ss")}</div>
        </div>
        
        <div class="goBackLink"><a href="index.html">Back to Cities</a></div>
        `;
}

let citiesSelectElement = document.querySelector("#selectCity");
citiesSelectElement.addEventListener("change", showCity);

setInterval(updateLausanneTime, 1);
setInterval(updateNewYorkTime, 1);
setInterval(updateSydneyTime, 1);
