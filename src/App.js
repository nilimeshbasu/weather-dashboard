import React, { useState } from 'react';
import './App.css';

function App() {
  const [city, setCity] = useState('');
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  // Your actual API Key is here
  const API_KEY = 'fba42f7c8ef9682067ea7352861ed280'; 

  const fetchWeather = async (e) => {
    e.preventDefault();
    if (!city) return;

    setLoading(true);
    setError('');
    setWeatherData(null);

    try {
      const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`);
      
      // Parse the response data first to catch the exact API error
      const data = await response.json();
      
      if (!response.ok) {
        // Capitalize and throw the exact error message from OpenWeatherMap
        const errorMessage = data.message ? data.message.charAt(0).toUpperCase() + data.message.slice(1) : 'City not found';
        throw new Error(`API Error: ${errorMessage}`);
      }

      setWeatherData(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const formatTime = (unixTime) => {
    return new Date(unixTime * 1000).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  return (
    <div className="app-container">
      <div className="weather-card">
        <h1 className="title">Weather Dashboard</h1>
        
        <form onSubmit={fetchWeather} className="search-form">
          <input 
            type="text" 
            placeholder="Enter city name..." 
            value={city} 
            onChange={(e) => setCity(e.target.value)} 
            className="search-input"
          />
          <button type="submit" className="search-btn">Search</button>
        </form>

        {loading && (
          <div className="spinner-container">
            <div className="spinner"></div>
            <p>Fetching weather...</p>
          </div>
        )}

        {error && <div className="error-message">⚠️ {error}</div>}

        {weatherData && !loading && !error && (
          <div className="weather-info slide-up">
            <h2>{weatherData.name}, {weatherData.sys.country}</h2>
            <img 
              src={`http://openweathermap.org/img/wn/${weatherData.weather[0].icon}@4x.png`} 
              alt="Weather Icon" 
              className="weather-icon"
            />
            <div className="temp">{Math.round(weatherData.main.temp)}°C</div>
            <p className="description">{weatherData.weather[0].description.toUpperCase()}</p>
            
            <div className="details-grid">
              <div className="detail-box">
                <span className="label">Humidity</span>
                <span className="value">{weatherData.main.humidity}%</span>
              </div>
              <div className="detail-box">
                <span className="label">Wind Speed</span>
                <span className="value">{weatherData.wind.speed} m/s</span>
              </div>
              <div className="detail-box">
                <span className="label">Sunrise</span>
                <span className="value">{formatTime(weatherData.sys.sunrise)}</span>
              </div>
              <div className="detail-box">
                <span className="label">Sunset</span>
                <span className="value">{formatTime(weatherData.sys.sunset)}</span>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;