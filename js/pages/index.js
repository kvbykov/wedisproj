
// Perform app initialization.
document.addEventListener('DOMContentLoaded', initIndex);

async function initIndex() {
    // Insert popular destinations.
    const popularDestinationsSection = document.getElementById('popular-destinations');
    if (popularDestinationsSection) {
        var blocks = "";
        stringAssets.destinations.forEach(destination => {
            const destinationBlock = `
                <div class="destination-block">
                    <img src="${destination.image}" alt="${destination.name}">
                    <h4>${destination.name}</h4>
                    <p>From ${destination.price}</p>
                </div>
            `;
            blocks += destinationBlock;
        });

        // TODO: Fill this section with more real data.
        popularDestinationsSection.innerHTML = blocks;
    }

    // Display weather on `Search` button click or `Enter` press.
    const searchButton = document.getElementById('search-button');
    searchButton?.addEventListener('click', displayWeather);
    const cityInput = document.getElementById('city-input');
    cityInput?.addEventListener('keypress', function (event) {
        if (event.key === 'Enter') {
            displayWeather();
        }
    });

    const animatedElements = document.querySelectorAll('.animated');

    // Loop through all the elements and add the observer to them.
    //
    // The delay of 100 milliseconds makes the animation look prettier.
    for (let i = 0; i < animatedElements.length; i++) {
        const element = animatedElements[i];
        observer.observe(element);
        await delay(200);
    }
}

/**
    Displays the weather of the city entered by the user.
**/
async function displayWeather() {
    const city = document.getElementById('city-input').value;
    if (!city) {
        return;
    }

    // Get the latitude and longitude of the city.
    const geoUrl = `https://geocoding-api.open-meteo.com/v1/search?name=${city}&count=1`;
    const geoResponse = await (await fetch(geoUrl)).json();

    var latitude;
    var longitude;
    if (geoResponse?.results) {
        latitude = geoResponse.results[0].latitude;
        longitude = geoResponse.results[0].longitude;
    } else {
        document.getElementById('weather-result').innerHTML = '<p>City not found. Please try again.</p>';
    }

    // Fetch the weather using latitude and longitude.
    const weatherUrl = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true`;
    const weatherResponse = await (await fetch(weatherUrl)).json();
    const data = weatherResponse.current_weather;

    if (data) {
        const isDay = data.is_day;
        const weatherCode = data.weathercode;

        const weatherInfo = isDay ? weatherCodes[weatherCode].day : weatherCodes[weatherCode].night;
        const weatherResult = `
            <div class="weather-container">
                <div class="weather-text">
                    <h4>Weather in ${geoResponse.results[0].name}</h4>
                    <p>Temperature: ${data.temperature}°C</p>
                    <p>Wind Speed: ${Math.floor(data.windspeed * 10 / 3.6) / 10} m/s</p>
                </div>
                <div class="weather-image">
                    <img src="${weatherInfo.image}" alt="${weatherInfo.description}">
                    <p>${weatherInfo.description}</p>
                </div>
            </div>
            `;

        document.getElementById('weather-result').innerHTML = weatherResult;
    } else {
        document.getElementById('weather-result').innerHTML = '<p>City not found. Please try again.</p>';
    }
}
