// src/Info/Info.jsx
import React, { useEffect, useState } from "react";
import "./Info.css";

function Info({ city }) {
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const apiKey = "7c475af5178142b9a1b172828250611";

  useEffect(() => {
    if (!city) return; 

    setLoading(true);
    setError("");

    fetch(`https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}&aqi=no`)
      .then((res) => {
        if (!res.ok) throw new Error("City not found!");
        return res.json();
      })
      .then((data) => {
        setWeather(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setWeather(null);
        setLoading(false);
      });
  }, [city]); 

  if (!city) return <p>Enter a city name to check the weather 🌦️</p>;
  if (loading) return <p>Loading weather...</p>;
  if (error) return <p style={{ color: "red" }}>{error}</p>;
  if (!weather) return null;

  return (
    <div className="info">
      <h1>Weather of {city}</h1>
      <div className="stats">
        <div className="temperature">
          <h2>Temperature</h2>
          <h1>{weather.current.temp_c} °C</h1>
        </div>
        <div className="wind">
          <h2>Wind Speed</h2>
          <h1>{weather.current.wind_kph} km/h</h1>
        </div>
        <div className="condition">
          <h2>Condition</h2>
          <h1>{weather.current.condition.text}</h1>
        </div>
      </div>
    </div>
  );
}

export default Info;
