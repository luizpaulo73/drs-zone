"use client";

export default function CabecalhoTabelaClassificacao(props: 
                                                      {coluna1: string, coluna2: string, coluna3: string, coluna4: string}) {
  
  const {coluna1, coluna2, coluna3, coluna4} = props;

  return (
    <thead className="my-5 w-full">
          <tr className="bg-zinc-900">
            <th className="py-3 px-2 text-left text-gray text-sm sm:text-base">
              {coluna1}
            </th>
            <th className="py-3 px-2 text-left text-gray text-sm sm:text-base">
              {coluna2}
            </th>
            <th className="py-3 px-2 text-left text-gray text-sm sm:text-base">
              {coluna3}
            </th>
            <th className="py-3 px-2 text-left text-gray text-sm sm:text-base">
              {coluna4}
            </th>
          </tr>
    </thead>
  )
}
