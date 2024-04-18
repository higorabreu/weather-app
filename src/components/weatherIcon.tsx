import React from "react";
import { Sun, Cloud, Droplet } from "lucide-react";

interface WeatherIconProps {
  weatherType: string;
}

const WeatherIcon: React.FC<WeatherIconProps> = ({ weatherType}) => {
  switch (weatherType.toLowerCase()) {
    case "clear":
      return <Sun className="text-yellow-400 size-10" />;
    case "clouds":
      return <Cloud className="text-zinc-500 size-10" />;
    case "rain":
      return <Droplet className="text-blue-500 size-10" />;
    default:
      return <div />;
  }
};

export default WeatherIcon;
