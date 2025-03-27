import CorpoTabelaClassificacao from "../CorpoTabelaClassificacao/CorpoTabelaClassificacao";

export default async function ClassificacaoPilotos(props: {resumida: boolean}) {

  const { resumida } = props;

  return (
    <section className="text-white mt-5">
      <table className="w-full border border-[#27272A]">
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
          <CorpoTabelaClassificacao resumida={resumida} />
        <tfoot>
          <tr className="py-3">
            <td colSpan={4} className="text-center p-2">
              <button className="border border-[#27272A] w-full h-full p-2 hover:bg-zinc-900 duration-300 cursor-pointer">
                Ver Classificação Completa
              </button>
            </td>
          </tr>
        </tfoot>
      </table>
    </section>
  );
}
