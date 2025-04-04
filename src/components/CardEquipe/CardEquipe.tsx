"use client";

import { listaCores } from "@/data/corEquipes";
import { Constructors, Pilot } from "@/types/classificacaoResumida";
import { ExternalLink } from "lucide-react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function CardEquipe({ano} : {ano: number}) {

  	const route = useRouter();

    const [pilotos, setPilotos] = useState<Pilot[]>([]);
    const [equipes, setEquipes] = useState<Constructors[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(false);

    const encontrarCorEquipe = (i: number) => {
                const corEquipe = listaCores.find(
                  (cor) => cor.nomeEquipe === equipes[i].Constructor.constructorId
                );
                return corEquipe?.hexadecimal || "#fff";
    };

    const encontrarPilotos = (i: number, primeiroPiloto: boolean) => {
      const pilotosDaEquipe = pilotos && equipes 
        ? pilotos.filter(pilotos => pilotos.Constructors.some(constructor => constructor.constructorId === equipes[i].Constructor.constructorId))
            .map(piloto => `${piloto.Driver.familyName}`).slice(0, 2)
        : [];

      return primeiroPiloto ? pilotosDaEquipe[0] : pilotosDaEquipe[1];
    }

  useEffect(() => {
      async function fetchData() {
        setIsLoading(true);
        try {
          const pilotoResponse = await fetch(`/api/pilotos/${ano}`);
          if (!pilotoResponse.ok) throw new Error("Erro ao buscar pilotos");
          const pilotoData = await pilotoResponse.json();
  
          const equipeResponse = await fetch(`/api/equipes/${ano}`);
          if (!equipeResponse.ok) throw new Error("Erro ao buscar equipes");
          const equipeData = await equipeResponse.json();
  
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
        {equipes.map((info, index) => (
          <div key={index} onClick={() => route.push(`/equipe/${info.Constructor.constructorId}/${ano}`)}
          className='border border-zinc-700 gap-5 border-l-4 flex flex-col justify-between hover:border-l-8 duration-500 max-w-[400px] group cursor-pointer' style={{ borderLeftColor: encontrarCorEquipe(index)}}>
            <div className='flex justify-end'>
                <p className='text-white border border-gray max-w-fit px-2 m-2 rounded-full invisible'>{info.points} pts</p>
            </div>
            <div className='flex flex-col gap-1 p-4'>
                <div className='flex gap-2 items-center'>
                    <h2 className='text-white font-semibold text-3xl'>{info.Constructor.name}</h2>
                    <ExternalLink className='text-white invisible group-hover:visible'/>
                </div>
                <div className="flex gap-2">
                  <p className='text-white bg-[#27272A] px-2'>{encontrarPilotos(index, true)}</p>
                  <p className='text-white bg-[#27272A] px-2'>{encontrarPilotos(index, false)}</p>
                </div>
            </div>
          </div>
        ))}
    </>
  ) 
}
