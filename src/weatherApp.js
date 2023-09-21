import React, {useState} from "react";

const WeatherApp = () => {
  const [city, setCity] = useState('');
  const [weatherData, setWeatherData] = useState(null);

  const apiKey = '210fbc1e4d3b3c21766a91c33d4fae51';

  const fecthWeatherData = async () => {
    try{
      const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`);
      const data = await response.json();
      setWeatherData(data);
    } catch (error) {
      console.error('Error fetching weather data', error);
    }
  };

  return(
    <div>
      <h1>Weather App</h1>
      <input
        type = "text"
        placeholder="Ingresa una ciudad"
        value = {city}
        onChange={(e) => setCity(e.target.value)}
        />
        <button onClick={fecthWeatherData}>Obtener pronostico</button>
        {weatherData && (
          <div>
            <h2>{weatherData.name}, {weatherData.sys.country}</h2>
            <p>Temperatura: {weatherData.main.temp}°C</p>
            <p>Clima: {weatherData.weather[0].description}</p>
          </div>
        )}
    </div>
  );
};

export default WeatherApp;
