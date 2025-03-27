import CabecalhoTabelaClassificacao from '@/components/CabecalhoTabelaClassificacao/CabecalhoTabelaClassificacao'
import CorpoTabelaClassificacao from '@/components/CorpoTabelaClassificacao/CorpoTabelaClassificacao'
import React from 'react'

export default function page() {
  return (
    <section className="text-white mt-5">
      <table className="w-full border border-[#27272A]">
          <CabecalhoTabelaClassificacao />
          <CorpoTabelaClassificacao resumida={false} />
      </table>
    </section>
    
  )
}
