import ClassificacaoPilotos from "@/components/ClassificacaoPilotos/ClassificacaoPilotos";
import Hero from "@/components/Hero/Hero";
import ProximosEventos from "@/components/ProximosEventos/ProximosEventos";

export default function Home() {
  return (
    <>
      <Hero titulo="Dashboard" desc="Estatísticas Gerais da Fórmula 1"/>
      <ProximosEventos />
      <ClassificacaoPilotos resumida={true}/>
    </>
  );
}
