import React, { useState } from "react";
import { Search, ThermometerSun } from "lucide-react";

interface HeaderProps {
  onSearch: (city: string) => void;
}

export function Header({ onSearch }: HeaderProps) {
  const [city, setCity] = useState("");

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSearch(city);
  };

  return (
    <div className="flex flex-col items-center pt-4 gap-2">
      <div className="flex items-center">       
        <ThermometerSun className="w-10 h-10"/>
        <h1 className="text-blue-300 font-bold text-5xl font-mono">Weather</h1>
      </div>

      <div className="w-72 px-3 py-1.5 border border-white/10 rounded-lg flex items-center gap-3 ">
        <Search className="w-6 h-6"/>
        <form onSubmit={handleSubmit}>
          <input 
            type="text"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            className="bg-transparent outline-none border-0 text-xl focus:ring-0 mb-0.5"
            placeholder="Digite sua cidade..."
            required
          />
          <button type="submit" className="hidden">Procurar</button>
        </form>
      </div>
    </div>
  );
}
