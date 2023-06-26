function updateTime() {
  // Lausanne
  let lausanneElement = document.querySelector("#lausanne");
  if (lausanneElement) {
    let lausanneDateElement = lausanneElement.querySelector(".date");
    let lausanneTimeElement = losAngelesElement.querySelector(".time");
    let lausanneTime = moment().tz("Europe/Lausanne");

    lausanneDateElement.innerHTML = lausanneTime.format("MMMM	Do YYYY");
    lausanneTimeElement.innerHTML = lausanneTime.format(
      "h:mm:ss [<small>]A[</small>]"
    );
  }
}

// Venice
let veniceElement = document.querySelector("#venice");
if (veniceElement) {
  let veniceDateElement = veniceElement.querySelector(".date");
  let veniceTimeElement = veniceElement.querySelector(".time");
  let veniceTime = moment().tz("Europe/Venice");

  veniceDateElement.innerHTML = veniceTime.format("MMMM	Do YYYY");
  veniceTimeElement.innerHTML = veniceTime.format(
    "h:mm:ss [<small>]A[</small>]"
  );
}

// City Update
function updateCity(event) {
  let cityTimeZone = event.target.value;
  if (cityTimeZone === "current") {
    cityTimeZone = moment.tz.guess();
  }
  let cityName = cityTimeZone.replace("_", " ").split("/")[1];
  let cityTime = moment().tz(cityTimeZone);
  let citiesElement = document.querySelector("#cities");
  citiesElement.innerHTML = `
  <div class="city">
    <div>
      <h2>${cityName}</h2>
      <div class="date">${cityTime.format("MMMM	Do YYYY")}</div>
    </div>
    <div class="time">${cityTime.format("h:mm:ss")} <small>${cityTime.format(
    "A"
  )}</small></div>
  </div>
  `;
}

updateTime();
setInterval(updateTime, 1000);

let citiesSelectElement = document.querySelector("#city");
citiesSelectElement.addEventListener("change", updateCity);
