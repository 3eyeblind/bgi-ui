async function getWeather() {
    const currentDate = new Date();
    const nextSaturday = new Date();
    nextSaturday.setDate(currentDate.getDate() + (6 - currentDate.getDay()));
    console.log(nextSaturday.toDateString());
    const formattedDate = nextSaturday.toISOString().split('T')[0];
    const url = "https://api.open-meteo.com/v1/forecast?latitude=37.4418&longitude=-77.0436&hourly=temperature_2m,rain&temperature_unit=fahrenheit&wind_speed_unit=mph&precipitation_unit=inch&start_date=" + formattedDate + "&end_date=" + formattedDate;

    const response = await fetch(url);
    const weatherData = await response.json();

    const tempAtIndex7 = weatherData.hourly.temperature_2m[7];
    const tempAtIndex15 = weatherData.hourly.temperature_2m[15];

    let domq = document.getElementById("weatherdiv");
    domq.innerHTML = nextSaturday.toDateString() + " 7am Temp: " + tempAtIndex7 + "°F " +
        " 3pm Temp: " + tempAtIndex15 + "°F";
}

getWeather();


// var on todays date and sat date

// var url = "https://api.open-meteo.com/v1/forecast?latitude=37.4418&longitude=-77.0436&hourly=temperature_2m,rain&temperature_unit=fahrenheit&wind_speed_unit=mph&precipitation_unit=inch&start_date=2024-02-03&end_date=2024-02-03"
// async function getWeather() {
//     const response = await fetch(url);
//     const weatherData = await response.json();
//     //console.log(response);
//     console.log(weatherData);
//     let domq = document.getElementById("weatherdiv");
//     domq.innerHTML = "latitude: " + weatherData.latitude + " longitude: " + weatherData.longitude;
// }
// getWeather();
