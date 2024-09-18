"use client";

import React, { useState } from "react";
import SearchBar from "../components/SearchBar";
import WeatherCard from "../components/WeatherCard";

export default function Home() {
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSearch = async (city: string) => {
    setLoading(true);
    setError("");
    try {
      const response = await fetch(
        `/api/weather?city=${encodeURIComponent(city)}`
      );
      if (!response.ok) {
        throw new Error("Failed to fetch weather data");
      }
      const data = await response.json();
      setWeatherData(data);
    } catch (err) {
      setError("Error fetching weather data. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <h1 className="text-4xl font-bold mb-8">SkyCast Weather App</h1>
      <div className="w-full max-w-md">
        <SearchBar onSearch={handleSearch} />
        {loading && <p className="text-center">Loading...</p>}
        {error && <p className="text-red-500 text-center">{error}</p>}
        {weatherData && <WeatherCard data={weatherData} />}
      </div>
    </main>
  );
}
