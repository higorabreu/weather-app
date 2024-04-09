import { Search, ThermometerSun } from "lucide-react";

export function Header() {
  return (
    <div className="flex flex-col items-center pt-4 gap-2">

      <div className="flex items-center">       
        <ThermometerSun className="size-10"/>
        <h1 className="text-blue-300 font-bold text-5xl font-mono">Weather</h1>
      </div>

      <div className="w-72 px-3 py-1.5 border border-white/10 rounded-lg flex items-center gap-3 ">
        <Search className="size-6 py-0.5"/>
        <input 
        className="bg bg-transparent flex justify-center outline-none border-0 text-xl focus:ring:0 mb-0.5"
        placeholder="Digite seu cep..."
        />
      </div>

    </div>
  )
}