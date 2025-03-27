import ClassificacaoPilotos from "@/components/ClassificacaoPilotos/ClassificacaoPilotos";
import Hero from "@/components/Hero/Hero";
import ProximosEventos from "@/components/ProximosEventos/ProximosEventos";
import Sidebar from "@/components/Sidebar/Sidebar";

export default function Home() {
  return (
    <main className="p-2 lg:p-4 flex flex-col lg:flex-row">
      <div className="flex flex-col lg:flex-row w-full">
        <Sidebar/>
        <div className="w-full">
          <Hero />
          <ProximosEventos />
          <ClassificacaoPilotos resumida={true}/>
        </div>
      </div>
    </main>
  );
}
