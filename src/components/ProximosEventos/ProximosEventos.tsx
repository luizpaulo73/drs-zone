"use client"

import Link from "next/link";
import { ExternalLink } from "lucide-react";
import { getPilotos } from "@/utils/pilotos";
import { getEquipes } from "@/utils/equipes";
import { useEffect, useState } from "react";
import { Constructors, Pilot } from "@/types/classificacaoResumida";

export default function ProximosEventos() {

      const [pilotos, setPilotos] = useState<Pilot[]>([]);
      const [equipes, setEquipes] = useState<Constructors[]>([]);
      useEffect(() => {
          async function fetchData() {
              const pilotoResponse = await getPilotos();
              const equipeResponse = await getEquipes();
              setPilotos(pilotoResponse.MRData.StandingsTable.StandingsLists[0].DriverStandings);
              setEquipes(equipeResponse.MRData.StandingsTable.StandingsLists[0].ConstructorStandings)
          }
          fetchData();
      }, []);

    const piloto = pilotos[0]
    const equipe = equipes[0]
    const pilotosDaEquipe = piloto && equipe 
  ? pilotos.filter(piloto => piloto.Constructors.some(constructor => constructor.constructorId === equipe.Constructor.constructorId))
      .map(piloto => `${piloto.Driver.familyName}`).slice(0, 2)
  : [];


  return (
    <section className="grid grid-cols-1 lg:grid-cols-3 gap-3 mt-5">
            <div className="border border-zinc-700 w-full sm:w-full p-4 flex flex-row justify-between items-center gap-3">
                <div>
                    <h2 className="text-gray text-sm">Próxima Corrida</h2>
                    <p className="text-white font-bold sm:text-2xl">Grande Prêmio de Mônaco</p>
                </div>
                <Link href={"/"} className="text-white p-2 hover:text-zinc-400 duration-300">
                    <ExternalLink />
                </Link>
            </div>

            {/* Verificar se piloto e equipe estão definidos antes de exibir as informações */}
            {piloto && equipe && (
                <>
                    <div className="border border-zinc-700 w-full sm:w-full p-4 flex flex-row justify-between items-center gap-3">
                        <div>
                            <h2 className="text-gray text-sm">Líder de Pilotos</h2>
                            <div className="flex items-center gap-2">
                                <p className="text-white font-bold sm:text-2xl">{piloto.Driver.givenName + " " + piloto.Driver.familyName}</p>
                                <p className="text-white text-sm sm:text-base bg-blue-600 max-w-fit px-2 rounded-2xl">{piloto.points} pts</p>
                            </div>
                            <p className="text-gray text-sm sm:text-base">{piloto.Constructors[0].name}</p>
                        </div>
                        <Link href={"/"} className="text-white p-2 hover:text-zinc-400 duration-300">
                            <ExternalLink />
                        </Link>
                    </div>

                    <div className="border border-zinc-700 w-full sm:w-full p-4 flex flex-row justify-between items-center gap-3">
                        <div>
                            <h2 className="text-gray text-sm">Líder de Construtores</h2>
                            <div className="flex items-center gap-2">
                                <p className="text-white font-bold sm:text-2xl">{equipe.Constructor.name}</p>
                                <p className="text-white text-sm sm:text-base bg-blue-600 max-w-fit px-2 rounded-2xl">{equipe.points} pts</p>
                            </div>
                            <p className="text-gray text-sm sm:text-base">{pilotosDaEquipe[0] + " e " + pilotosDaEquipe[1]}</p>
                        </div>
                        <Link href={"/"} className="text-white p-2 hover:text-zinc-400 duration-300">
                            <ExternalLink />
                        </Link>
                    </div>
                </>
            )}
        </section>
  );
}
