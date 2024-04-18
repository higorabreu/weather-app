import { useState } from "react";
import { Header } from "./components/header";
import { Dashboard } from "./components/dashboard";

export function App() {
  const [city, setCity] = useState("");

  const handleSearch = (city: string) => {
    setCity(city);
  };

  return (
    <div className="flex flex-col justify-center h-lvh">
      <Header onSearch={handleSearch} />
      <Dashboard city={city} />
    </div>
  );
}
