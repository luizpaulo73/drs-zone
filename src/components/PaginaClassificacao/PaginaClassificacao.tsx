"use client";

import CabecalhoTabelaClassificacao from "@/components/CabecalhoTabelaClassificacao/CabecalhoTabelaClassificacao";
import CorpoTabelaClassificacao from "@/components/CorpoTabelaClassificacao/CorpoTabelaClassificacao";
import Hero from "@/components/Hero/Hero";
import { Constructors, Pilot } from "@/types/classificacaoResumida";
import { useState, useEffect } from "react";
import CorpoTabelaConstrutores from "../CorpoTabelaConstrutores/CorpoTabelaConstrutores";

export default function PaginaClassificacao() {
  const [campeonato, setCampeonato] = useState<boolean>(true);
  const [pilotos, setPilotos] = useState<Pilot[]>([]);
  const [equipes, setEquipes] = useState<Constructors[]>([]);
  const [ano, setAno] = useState<number>(new Date().getFullYear());
  const [isLoading, setIsLoading] = useState<boolean>(false);

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
      <Hero titulo="Classificações" desc="Atual Classificação do Campeonato" />
      <section className="text-white mt-5 flex flex-col gap-5">
        <div className="flex w-full justify-evenly bg-zinc-900 py-1 px-1 text-xs sm:text-sm md:text-base">
          <button
            onClick={() => setCampeonato(!campeonato)}
            disabled={campeonato === true}
            style={{
              backgroundColor: campeonato === true ? "#09090B" : "transparent",
            }}
            className="w-1/2 p-2 font-semibold"
          >
            Campeonato de Pilotos
          </button>
          <button
            onClick={() => setCampeonato(!campeonato)}
            disabled={campeonato === false}
            style={{
              backgroundColor: campeonato === false ? "#09090B" : "transparent",
            }}
            className="w-1/2 p-2 font-bold"
          >
            Campeonato de Construtores
          </button>
        </div>
        <select
          name="planos"
          value={ano}
          onChange={(e) => setAno(Number(e.target.value))}
          className="bg-zinc-900 text-white py-2 px-4 border border-zinc-700 rounded appearance-none cursor-pointer w-full sm:w-48 outline-none"
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
        <table className="w-full border border-[#27272A]">
          {campeonato ? (
            <>
              <CabecalhoTabelaClassificacao
                coluna1="Pos"
                coluna2="Piloto"
                coluna3="Equipe"
                coluna4="Pontos"
              />
              <CorpoTabelaClassificacao resumida={false} pilotos={pilotos} />
            </>
          ) : (
            <>
              <CabecalhoTabelaClassificacao
                coluna1="Pos"
                coluna2="Equipe"
                coluna3="Pilotos"
                coluna4="Pontos"
              />
              <CorpoTabelaConstrutores
                resumida={false}
                equipes={equipes}
                piloto={pilotos}
              />
            </>
          )}
        </table>
      </section>
    </>
  );
}
