"use client"

import Link from "next/link";
import CabecalhoTabelaClassificacao from "../CabecalhoTabelaClassificacao/CabecalhoTabelaClassificacao";
import CorpoTabelaClassificacao from "../CorpoTabelaClassificacao/CorpoTabelaClassificacao";
import { useEffect, useState } from "react";
import { getPilotos } from "@/utils/pilotos";

export default function ClassificacaoPilotos(props: {resumida: boolean}) {

  const { resumida } = props;

  const [pilotos, setPilotos] = useState([]);

  useEffect(() => {
    async function fetchData() {
        const pilotoResponse = await getPilotos();
        setPilotos(pilotoResponse.MRData.StandingsTable.StandingsLists[0].DriverStandings);
    }
    fetchData();
}, []);

  return (
    <section className="text-white mt-5">
      <table className="w-full border border-[#27272A]">
          <CabecalhoTabelaClassificacao coluna1='Posição' coluna2='Piloto' coluna3='Equipe' coluna4='Pontos'/>
          <CorpoTabelaClassificacao resumida={resumida} pilotos={pilotos} />
        <tfoot>
          <tr className="py-3">
            <td colSpan={4} className="text-center p-2">
              <Link href={"/campeonato/classificacao"} className="block border border-[#27272A] w-full h-full p-2 hover:bg-zinc-900 duration-300 cursor-pointer">
                Ver Classificação Completa
              </Link>
            </td>
          </tr>
        </tfoot>
      </table>
    </section>
  );
}
