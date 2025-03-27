import Hero from "@/components/Hero/Hero";
import Sidebar from "@/components/Sidebar/Sidebar";

export default function Home() {
  return (
    <main className="p-2 lg:p-4 flex flex-col lg:flex-row">
      <Sidebar/>  
      <Hero />
    </main>
  );
}
