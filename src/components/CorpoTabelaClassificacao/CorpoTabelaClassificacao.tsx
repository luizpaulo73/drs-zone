import { listaCores } from "@/data/corEquipes";
import { Pilot } from "@/types/classificacaoResumida";

export default function CorpoTabelaClassificacao({ resumida, pilotos }: { resumida: boolean, pilotos: Pilot[] }) {

    let posicaoReal = 0;
    
      const encontrarCorEquipe = (i: number) => {
        const corEquipe = listaCores.find(
          (cor) => cor.nomeEquipe === pilotos[i].Constructors[0].constructorId
        );
        return corEquipe?.hexadecimal || "#fff";
      };

  return (
    <tbody>
          {pilotos.slice(0, resumida ? 5 : undefined).map((info, index) => {
            // Se a posição for "-", usamos um contador próprio
            const posicao =
              info.positionText !== null
                ? info.positionText
                : `${++posicaoReal}º`;

            return (
              <tr
                key={index}
                className="hover:bg-zinc-900 duration-300 border-b border-[#27272A]"
              >
                <td className="py-3 px-2 text-sm sm:text-base">{posicao}</td>
                <td className="py-3 px-2 text-sm sm:text-base font-semibold">
                  {info.Driver.givenName} {info.Driver.familyName}
                </td>
                <td className="py-3 px-2 text-sm sm:text-base text-gray flex gap-1 sm:gap-2 items-center">
                  <div
                    className="w-1 h-5"
                    style={{ backgroundColor: encontrarCorEquipe(index) }}
                  />
                  <p>{info.Constructors?.[0]?.name || "Desconhecido"}</p>
                </td>
                <td className="py-3 px-2 text-sm sm:text-base">
                  {info.points} pts
                </td>
              </tr>
            );
          })}
        </tbody>
  )
}
