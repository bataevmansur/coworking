let weather = {  // nieuw object weer
    apiKey: "4941e02079f27bac2345e598003b222c",
    fetchWeather: function (city) {
        fetch(
            `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${this.apiKey}&units=metric`
            // fetch data van een gekozen API
        )
        .then((response) => response.json())
        .then((data) => this.displayWeather(data))
        .catch((error) => console.error("Error fetching the weather data:", error));
    },
    displayWeather: function (data) {   // functie om data op scherm te krijgen
        const { name } = data;          // constante name = naam gegeven stad
        const { temp } = data.main;     // constante temp = temperatuur
        const { description } = data.weather[0];    // constante description = weeromstandigheden
        const weatherInfo = `
            <h2>Weather in ${name}</h2>         
            <p>Temperature: ${temp}°C</p>   // alle info in 1 variabele
            <p>Condition: ${description}</p>
        `;
        document.getElementById("weather-info").innerHTML = weatherInfo;    //info op scherm tonen
    },
};

weather.fetchWeather("Gent");   //roept functie op
