const weatherContainer = document.getElementById('current-temp');
const weatherIcon = document.getElementById('weather-icon');
const weatherDesc = document.getElementById('weather-desc');
const forecastContainer = document.getElementById('forecast-container');

const apiKey = '1d7610ad05fe575a67eba8a28fe158a4';  // Replace with your actual OpenWeatherMap API key
const lat = '49.75';  // Example coordinates
const lon = '6.64';

async function fetchWeather() {
    const weatherUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=imperial&appid=${apiKey}`;
    
    try {
        const response = await fetch(weatherUrl);
        const data = await response.json();
        
        // Current weather
        const currentWeather = data.list[0];
        weatherContainer.textContent = `${Math.round(currentWeather.main.temp)}°F`;
        weatherDesc.textContent = currentWeather.weather[0].description;
        
        const iconSrc = `https://openweathermap.org/img/wn/${currentWeather.weather[0].icon}@2x.png`;
        weatherIcon.src = iconSrc;
        weatherIcon.alt = currentWeather.weather[0].description;

        // 3-Day Forecast
        forecastContainer.innerHTML = '';
        for (let i = 7; i < data.list.length; i += 8) {
            const forecastDay = data.list[i];
            const dayElement = document.createElement('div');
            dayElement.innerHTML = `
                <p>${new Date(forecastDay.dt * 1000).toLocaleDateString('en-US', {weekday: 'short'})}</p>
                <img src="https://openweathermap.org/img/wn/${forecastDay.weather[0].icon}@2x.png" alt="${forecastDay.weather[0].description}">
                <p>${Math.round(forecastDay.main.temp)}°F</p>
            `;
            forecastContainer.appendChild(dayElement);
        }
    } catch (error) {
        console.error('Weather fetch error:', error);
    }
}

fetchWeather();
