import axios from "axios";
import { useEffect, useState } from "react";
import WeatherIcon from "./weatherIcon";
import { weatherDescriptions } from "../util/weatherTranslations";
import { weather_api_key } from "../util/apiKey";

interface DashboardProps {
  city: string;
}

export function Dashboard({ city }: DashboardProps) {
  const [weatherData, setWeatherData] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const fetchWeatherData = async () => {
    try {
      setLoading(true);
      const cityNameEncoded = encodeURIComponent(city);
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${cityNameEncoded}&appid=${weather_api_key}&units=metric`
      );
      console.log("Dados do clima:", response.data);
      
      if (response.data.weather && response.data.weather.length > 0) {
        const translatedDescription = weatherDescriptions[response.data.weather[0].description.toLowerCase()];
        response.data.weather[0].description = translatedDescription || response.data.weather[0].description;
      }

      if (response.data.main && response.data.main.temp) {
        response.data.main.temp = Math.round(response.data.main.temp);
      }

      setWeatherData(response.data);
      setLoading(false);
    } catch (error) {
      console.error("Erro ao buscar dados do clima:", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    if (city) { 
      fetchWeatherData();
    }
  }, [city]);

  return (
    <div className="flex flex-col items-center pt-8">
      {loading ? (
        <p>Carregando...</p>
      ) : weatherData ? (
        <div className="w-72 px-3 py-8 border border-white/10 rounded-lg flex items-center flex-col gap-3 ">
          <div>
            <WeatherIcon weatherType={weatherData.weather[0].main}/>
          </div>
          <div>
            <p>Clima: {weatherData.weather[0].description}</p>
            <p>Temperatura: {weatherData.main.temp}°C</p>
            <p>Umidade: {weatherData.main.humidity}%</p>
          </div>
        </div>
      ) : (
        <p>Por favor, pesquise por uma cidade</p>
      )}
    </div>
  );
}
