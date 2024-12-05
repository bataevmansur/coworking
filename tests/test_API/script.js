let weather = {
    apiKey: "4941e02079f27bac2345e598003b222c",
    fetchWeather: function (city) {
        fetch(
            `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${this.apiKey}&units=metric`
        )
        .then((response) => response.json())
        .then((data) => this.displayWeather(data))
        .catch((error) => console.error("Error fetching the weather data:", error));
    },
    displayWeather: function (data) {
        const { name } = data;
        const { temp } = data.main;
        const { description } = data.weather[0];
        const weatherInfo = `
            <h2>Weather in ${name}</h2>
            <p>Temperature: ${temp}°C</p>
            <p>Condition: ${description}</p>
        `;
        document.getElementById("weather-info").innerHTML = weatherInfo;
    },
};

weather.fetchWeather("Gent");
