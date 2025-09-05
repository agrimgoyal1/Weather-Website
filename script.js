    const apiKey = "A8CQAAPE9RYYYCKVF4Y2YQ9YD";
const apiUrl = "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon")

async function checkweather(city) {
    const response = await fetch(apiUrl + encodeURIComponent(city) + `?unitGroup=metric&key=${apiKey}&contentType=json`);


if (response.status == 400) {
    document.querySelector(".error").style.display = "block";
    document.querySelector(".weather").style.display = "none"
}
else {
    var data = await response.json()
    document.querySelector(".name").innerHTML = data.address.toUpperCase();
    document.querySelector(".Temp").innerHTML = data.days[0].temp + "°C";
    document.querySelector(".humidity").innerHTML = data.days[0].humidity + "%";
    document.querySelector(".wind").innerHTML = data.days[0].windspeed + "km/h";
    document.querySelector(".max-temp").innerHTML = data.days[0].tempmax + "°C";
    document.querySelector(".min-temp").innerHTML = data.days[0].tempmin + "°C";
    document.querySelector(".faketemp").innerHTML = data.days[0].feelslike + "°C";
    document.querySelector(".sunrise").innerHTML = "Sun rises at " + data.days[0].sunrise
    document.querySelector(".sunset").innerHTML = "Sun sets at " + data.days[0].sunset;
    document.querySelector(".visibility").innerHTML = "The area is visibile for " + data.days[0].visibility + "km";
    document.querySelector(".lastupdate").innerHTML = "Last updated at : " + data.currentConditions.datetime;
    document.querySelector(".descripition").innerHTML = data.description;
    document.querySelector(".date").innerHTML = "Date: " + data.days[0].datetime;   

    if (data.days[0].icon == "rain") {
        weatherIcon.src = "images/rain.png";
    }else if (data.days[0].icon == "clear") {
    weatherIcon.src = "images/clear.png" ;
   }
   else if (data.days[0].icon == "clouds") {
    weatherIcon.src = "images/clouds.png";
   }
   else if (data.days[0].icon == "drizzle") {
    weatherIcon.src = "images/drizzle.png";
   }
   else if (data.days[0].icon == "mist") {
    weatherIcon.src = "images/mist.png";
   }


   document.querySelector(".weather").style.display = "block"
   document.querySelector(".error").style.display = "none"
}
}
searchBtn.addEventListener("click", function () {
    checkweather(searchBox.value);
});
