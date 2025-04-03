"use client";

import CardPiloto from "@/components/CardPiloto/CardPiloto";
import Hero from "@/components/Hero/Hero";
import { Constructors, Pilot } from "@/types/classificacaoResumida";
import { useEffect, useState } from "react";

export default function Pilotos() {

  const [pilotos, setPilotos] = useState<Pilot[]>([]);
  const [equipes, setEquipes] = useState<Constructors[]>([]);
  const [ano, setAno] = useState<number>(new Date().getFullYear());
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
      async function fetchData() {
        setIsLoading(true);
        try {
          // Requisição para buscar pilotos
          const pilotoResponse = await fetch(`/api/pilotos/${ano}`);
          if (!pilotoResponse.ok) throw new Error("Erro ao buscar pilotos");
          const pilotoData = await pilotoResponse.json();
  
          // Requisição para buscar equipes
          const equipeResponse = await fetch(`/api/equipes/${ano}`);
          if (!equipeResponse.ok) throw new Error("Erro ao buscar equipes");
          const equipeData = await equipeResponse.json();
  
          // Atualiza os estados com os dados obtidos
          setPilotos(
            pilotoData.MRData.StandingsTable.StandingsLists[0].DriverStandings ||
              []
          );
          setEquipes(
            equipeData.MRData.StandingsTable.StandingsLists[0]
              .ConstructorStandings || []
          );
          setIsLoading(false);
        } catch (error) {
          console.error("Erro ao buscar dados:", error);
        }
      }
  
      fetchData();
    }, [ano]);

  return (
    <>
      <Hero titulo="Pilotos" desc={`Todos os pilotos da temporada de ${ano}`}/>
      <select
          name="planos"
          value={ano}
          onChange={(e) => setAno(Number(e.target.value))}
          className="bg-zinc-900 text-white py-2 px-4 border border-zinc-700 appearance-none cursor-pointer w-full sm:w-48 outline-none mt-5 max-w-[400px]"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='white' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3e%3cpolyline points='6 9 12 15 18 9'%3e%3c/polyline%3e%3c/svg%3e\")",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "right 10px center",
            backgroundSize: "16px",
          }}
        >
          {[...Array(new Date().getFullYear() - 1949)].map((_, i) => {
            const ano = new Date().getFullYear() - i;
            return (
              <option key={ano} value={ano}>
                {ano}
              </option>
            );
          })}
        </select>
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:max-w-[80%] gap-4 mt-5 mx-auto">
        <CardPiloto pilotos={pilotos} ano={ano}/>
      </section>
    </>
    
  )
}
