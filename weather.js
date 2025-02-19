const apiKey = "3e6e6ba005164f98837105559251802";
const search_btn = document.getElementById("search_btn");
const location_input = document.getElementById("location_input");
const weather_result = document.getElementById("weather_result");
const weather_icn = document.getElementById("weather_icn");

search_btn.addEventListener("click", () => {
    const location = location_input.value;
    if (location)
    {
        fetchWeather(location);
        location_input.value="";
    }
});

location_input.addEventListener("keydown", (e)=>{
    if(e.key === "Enter")
    {
        const location = location_input.value;
        if(location)
        {
            fetchWeather(location);
        }
        location_input.value="";
    }
});

async function fetchWeather(location)
{
    const url = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${location}`;
    try{
    const response = await fetch(url);
    const data = await response.json();
    if (data.cod === "404")
    {
        weather_result.innerHTML = `<p class="error_message">Location Not Found</p>`;
    }
    else
    {
        const weather = data.current.condition.text;
        const temperature = data.current.temp_c;
        const feels_like = data.current.feelslike_c;
        const humidity = data.current.humidity;
        const wind_speed = data.current.wind_kph;
        weather_result.innerHTML = `
        <div class="info">
        <h2 style="margin-left:20px;color:white;font-family:arial;margin-bottom:0px;">${location}</h2>
        <p class="para">Weather: ${weather}</p>
        <p class="para">Temperature: ${temperature}°C</p>
        <p class="para">Feels Like: ${feels_like}°C</p>
        <p class="para">Humidity: ${humidity}%</p>
        <p class="para">Wind Speed: ${wind_speed} km/h</p>
        </div>
        `;
        // if (weather ==="Sunny")
        // {
        //     weather_icn.innerHTML = `<img class="image" src ="images/sunny.jpg">`;
        // }
        // else if (weather === "light rain")
        // {
        //     weather_icn.innerHTML = `<img class="image" src="images/light rain.jpg">`;
        // }
        // else if (weather === "cloudy")
        // {
        //     weather_icn.innerHTML = `<img class="image" src="images/cloudy.jpg">`;
        // }
        // else if (weather === "partly cloudy")
        // {
        //     weather_icn.innerHTML = `<img class="image" src="images/partly_cloudy.jpg">`;
        // }
        // else if (weather === "breezy")
        // {
        //     weather_icn.innerHTML = `<img class="image" src="images/breezy.jpg">`;
        // }
        // else if (weather === "light snow")
        // {
        //     weather_icn.innerHTML = `<img class="image" src="images/light_snow.jpg">`;
        // }
        // else
        // {
        //     weather_icn.innerHTML = `<img class="image" src="images/hazy.jpg">`;
        // }
        if (weather === "Sunny") {
            weather_icn.innerHTML = `<img class="image" src="images/sunny.jpg" alt="sunny">`;
        } else if (weather === "Cloudy") {
            weather_icn.innerHTML = `<img class="image"  src="images/cloudy.jpg" alt="cloudy">`;
        } else if (weather === "Light rain") {
            weather_icn.innerHTML = `<img class="image"  src="images/light rain.jpg" alt="light rain">`;
        } else if (weather === "Heavy rain") {
            weather_icn.innerHTML = `<img class="image"  src="images/heavy rain.jpg" alt="light rain">`;
        } else if (weather === "Windy") {
            weather_icn.innerHTML = `<img class="image"  src="images/windy.jpg" alt="windy">`;
        } else if (weather === "Partly cloudy") {
            weather_icn.innerHTML = `<img class="image"  src="images/partly cloudy.jpg" alt="Partly Cloudy">`;
        } else if (weather === "Snow") {
            weather_icn.innerHTML = `<img class="image"  src="images/light snow.jpg" alt="Snowy Weather">`;
        } else if (weather === "Haze") {
            weather_icn.innerHTML = `<img class="image"  src="images/hazy.jpg" alt="Hazy Weather">`;
        } else if (weather === "Fog") {
            weather_icn.innerHTML = `<img class="image"  src="images/foggy.jpg" alt="Foggy Weather">`;
        } else if (weather === "Thunderstorm") {
            weather_icn.innerHTML = `<img class="image"  src="images/thunderstorm.jpg" alt="Thunderstorm Weather">`;
        } else if (weather === "Drizzle") {
            weather_icn.innerHTML = `<img class="image"  src="images/scattered showers.jpg" alt="Drizzly Weather">`;
        }else if (weather === "Overcast")
        {
            weather_icn.innerHTML = `<img class="image"  src="images/overcast.jpg" alt="Overcast Weather">`;
        }
        else if (weather === "Clear")
        {
            weather_icn.innerHTML = `<img class="image"  src="images/clear.jpg" alt="Clear Weather">`;
        } 
        else if (weather === "Mist")
        {
            weather_icn.innerHTML = `<img class="image"  src="images/foggy.jpg" alt="Misty Weather">`;
        }
        else {
            weather_icn.innerHTML = `<img class="image"  src="images/partly cloudy.jpg" alt="Other Weather">`;
        }
        weather_result.style.opacity = "1";

    }
    }
    catch(error)
    {
        weather_result.innerHTML = `<p class="error_message">Location not found</p>`;
    }

}