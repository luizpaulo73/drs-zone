import React from 'react'

export default function CabecalhoTabelaClassificacao() {
  return (
    <thead className="my-5 w-full">
          <tr className="bg-zinc-900">
            <th className="py-3 px-2 text-left text-gray text-sm sm:text-base">
              Posição
            </th>
            <th className="py-3 px-2 text-left text-gray text-sm sm:text-base">
              Piloto
            </th>
            <th className="py-3 px-2 text-left text-gray text-sm sm:text-base">
              Equipe
            </th>
            <th className="py-3 px-2 text-left text-gray text-sm sm:text-base">
              Pontos
            </th>
          </tr>
    </thead>
  )
}
