"use client";

import Hero from "@/components/Hero/Hero";
import { tipoPiloto } from "@/types/piloto";
import { use, useEffect, useState } from "react";

export default function Piloto({ params }: { params: Promise<{ id: string; ano: string }> }) {
  const { id, ano } = use(params);
  

  const [pilotoData, setPilotoData] = useState<tipoPiloto[]>([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(`/api/piloto/${ano}`);
        if (!response.ok) throw new Error("Erro ao buscar pilotos");
        const data = await response.json();

        const foundPiloto = data.MRData.DriverTable.Drivers.find(
          (obj) => obj.driverId === id
        );
        setPilotoData(foundPiloto || null);
      } catch (error) {
        console.error("Erro ao buscar dados:", error);
      } finally {
      }
    }

    fetchData();
  }, [ano, id]);  

  return (
    <section>
      <Hero titulo={pilotoData?.givenName + " " + pilotoData.familyName} desc="" />
    </section>
  );
}
