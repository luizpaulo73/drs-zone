import { listaCores } from '@/data/corEquipes';
import { Constructors } from '@/types/classificacaoResumida';
import React from 'react'

export default function CorpoTabelaConstrutores({ resumida, equipes }: { resumida: boolean, equipes: Constructors[],}) {

    let posicaoReal = 0;
    
      const encontrarCorEquipe = (i: number) => {
        const corEquipe = listaCores.find(
          (cor) => cor.nomeEquipe === equipes[i].Constructor.constructorId
        );
        return corEquipe?.hexadecimal || "#fff";
      };

  return (
    <tbody>
          {equipes.slice(0, resumida ? 5 : undefined).map((info, index) => {
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
                <td className="py-3 px-2 text-sm sm:text-base font-semibold flex gap-1 sm:gap-2 items-center">
                  <div
                    className="w-1 h-5"
                    style={{ backgroundColor: encontrarCorEquipe(index) }}
                  />
                  <p>{info.Constructor.name}</p>
                </td>
                <td className="py-3 px-2 text-sm sm:text-base text-gray">
                  {info.Constructor.name}
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
