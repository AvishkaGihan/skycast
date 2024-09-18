import React from "react";
import Image from "next/image";

interface WeatherData {
  name: string;
  main: {
    temp: number;
    humidity: number;
  };
  weather: Array<{
    description: string;
    icon: string;
  }>;
}

interface WeatherCardProps {
  data: WeatherData;
}

const WeatherCard: React.FC<WeatherCardProps> = ({ data }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">{data.name}</h2>
      <div className="flex items-center mb-4">
        <Image
          src={`http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}
          alt={data.weather[0].description}
          width={50}
          height={50}
          className="mr-4"
        />
        <div>
          <p className="text-4xl font-bold">{Math.round(data.main.temp)}°C</p>
          <p className="text-gray-600">{data.weather[0].description}</p>
        </div>
      </div>
      <p className="text-gray-600">Humidity: {data.main.humidity}%</p>
    </div>
  );
};

export default WeatherCard;
