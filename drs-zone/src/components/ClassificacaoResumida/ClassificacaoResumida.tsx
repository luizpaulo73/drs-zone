import { Pilot } from "@/types/classificacaoResumida";
import { getPilotos } from "@/utils/pilotos";

export default async function ClassificacaoResumida() {

    const pilotoResponse = await getPilotos();
    
    const pilotos: Pilot[] = pilotoResponse.MRData.StandingsTable.StandingsLists[0].DriverStandings;

  return (
    <section className="text-white mt-5">
        <table className="w-full border border-[#27272A]">
            <thead className="my-5 w-full">
                <tr className="bg-zinc-900">
                    <th className="py-3 px-2 text-left text-gray">Posição</th>
                    <th className="py-3 px-2 text-left text-gray">Piloto</th>
                    <th className="py-3 px-2 text-left text-gray">Equipe</th>
                    <th className="py-3 px-2 text-left text-gray">Pontos</th>
                </tr>
            </thead>
            <tbody>
                {pilotos.slice(0,5).map((i) => (
                    <tr key={i.positionText} className="hover:bg-zinc-900 duration-300 border-b border-[#27272A]">
                        <td className="py-3 px-2">{i.position}º</td>
                        <td className="py-3 px-2 font-semibold">{i.Driver.givenName} {i.Driver.familyName}</td>
                        <td className="py-3 px-2 text-gray">{i.Constructors[0].name}</td>
                        <td className="py-3 px-2">{i.points} pts</td>
                    </tr>
                ))}
            </tbody>
            <tfoot>
                <tr className="py-3">
                    <td colSpan={4} className="text-center p-2">
                        <button className="border border-[#27272A] w-full h-full p-2 hover:bg-zinc-900 duration-300 cursor-pointer">Ver Classificação Completa</button>
                    </td>
                </tr>
            </tfoot>
        </table>
    </section>
  )
}
