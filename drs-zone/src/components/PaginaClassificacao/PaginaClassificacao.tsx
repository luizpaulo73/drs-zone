"use client";

import CabecalhoTabelaClassificacao from '@/components/CabecalhoTabelaClassificacao/CabecalhoTabelaClassificacao'
import CorpoTabelaClassificacao from '@/components/CorpoTabelaClassificacao/CorpoTabelaClassificacao'
import Hero from '@/components/Hero/Hero'
import { Pilot } from '@/types/classificacaoResumida';
import { getPilotos } from '@/utils/pilotos';
import { useState, useEffect } from 'react'

export default function PaginaClassificacao() {
    
    const [campeonato, setCampeonato] = useState<boolean>(true)
    const [pilotos, setPilotos] = useState<Pilot[]>([]);

    useEffect(() => {
        async function fetchData() {
            const pilotoResponse = await getPilotos();
            setPilotos(pilotoResponse.MRData.StandingsTable.StandingsLists[0].DriverStandings);
        }
        fetchData();
    }, []);
    
  return (
    <>
          <Hero titulo="Classificações" desc="Atual Classificação do Campeonato"/>
          <section className="text-white mt-5">
            <div>
              <button onClick={() => setCampeonato(!campeonato)} disabled={campeonato === true}>Campeonato de Pilotos</button>
              <button onClick={() => setCampeonato(!campeonato)} disabled={campeonato === false}>Campeonato de Construtores</button>
            </div>
            <table className="w-full border border-[#27272A]">
              {campeonato ? <CabecalhoTabelaClassificacao coluna1='Posição' coluna2='Piloto' coluna3='Equipe' coluna4='Pontos'/> :
                            <CabecalhoTabelaClassificacao coluna1='Posição' coluna2='Equipe' coluna3='Pilotos' coluna4='Pontos'/>}
              <CorpoTabelaClassificacao resumida={false} pilotos={pilotos} />
            </table>
          </section>
        </>
  )
}
