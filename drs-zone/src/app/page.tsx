import Hero from "@/components/Hero/Hero";
import Sidebar from "@/components/Sidebar/Sidebar";

export default function Home() {
  return (
    <section className="p-2 lg:p-4 flex flex-col lg:flex-row">
      <Sidebar/>  
      <Hero />
    </section>
  );
}
