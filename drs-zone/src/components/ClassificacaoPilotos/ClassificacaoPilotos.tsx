import Link from "next/link";
import CabecalhoTabelaClassificacao from "../CabecalhoTabelaClassificacao/CabecalhoTabelaClassificacao";
import CorpoTabelaClassificacao from "../CorpoTabelaClassificacao/CorpoTabelaClassificacao";

export default async function ClassificacaoPilotos(props: {resumida: boolean}) {

  const { resumida } = props;

  return (
    <section className="text-white mt-5">
      <table className="w-full border border-[#27272A]">
          <CabecalhoTabelaClassificacao />
          <CorpoTabelaClassificacao resumida={resumida} />
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
