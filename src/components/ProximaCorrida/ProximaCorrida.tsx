"use client";

import { Corrida, TempoRestante } from "@/types/corrida";
import { useEffect, useState } from "react";

export default function ProximaCorrida() {

  const [corrida, setCorrida] = useState<Corrida>();
  const [tempoRestante, setTempoRestante] = useState<TempoRestante>({
    dias: 0,
    horas: 0,
    minutos: 0,
    segundos: 0,
  });
  
  useEffect(() => {
    async function fetchData() {
        try {
            const corridaResponse = await fetch("/api/corrida");
            const data = await corridaResponse.json();

            const corridas = data.MRData.RaceTable.Races || [];
            const agora = new Date(); // Data atual

            // Filtrar corridas futuras e ordenar pela mais próxima
            const proximaCorrida = corridas
                .map(corrida => ({
                    ...corrida,
                    dateTime: new Date(`${corrida.date}T${corrida.time}`)
                }))
                .filter(corrida => corrida.dateTime > agora)
                .sort((a, b) => a.dateTime - b.dateTime)[0];

            setCorrida(proximaCorrida || null);
        } catch (error) {
            console.error("Erro ao buscar os dados da corrida:", error);
        }
    }
    fetchData();
}, []);

useEffect(() => {
  if (corrida) {
    const intervalo = setInterval(() => {
      const agora = new Date();
      const tempoRestanteMs = corrida.dateTime.getTime() - agora.getTime();

      if (tempoRestanteMs <= 0) {
        clearInterval(intervalo); // Para o contador se a corrida já passou
      } else {
        const dias = Math.floor(tempoRestanteMs / (1000 * 60 * 60 * 24));
        const horas = Math.floor((tempoRestanteMs % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutos = Math.floor((tempoRestanteMs % (1000 * 60 * 60)) / (1000 * 60));
        const segundos = Math.floor((tempoRestanteMs % (1000 * 60)) / 1000);

        setTempoRestante({ dias, horas, minutos, segundos });
      }
    }, 1000);

    return () => clearInterval(intervalo); // Limpeza do intervalo ao desmontar
  }
}, [corrida]);

  
  return (
    <div className="bg-blue-600/5 border border-blue-600/20 p-2 flex flex-col gap-2 w-[300px] xl:w-[500px] mt-5 sm:mt-0">
      <h2 className="text-blue-600 xl:text-xl">Próxima Corrida: {corrida?.raceName}</h2>
      <div className="flex">
        <div className="w-1/4 text-center">
          <p className="text-white text-2xl xl:text-3xl">{tempoRestante.dias}</p>
          <p className="text-gray text-sm xl:text-lg">Dias</p>
        </div>
        <div className="w-1/4 text-center">
          <p className="text-white text-2xl xl:text-3xl">{tempoRestante.horas}</p>
          <p className="text-gray text-sm xl:text-lg">Horas</p>
        </div>
        <div className="w-1/4 text-center">
          <p className="text-white text-2xl xl:text-3xl">{tempoRestante.minutos}</p>
          <p className="text-gray text-sm xl:text-lg">Minutos</p>
        </div>
        <div className="w-1/4 text-center">
          <p className="text-white text-2xl xl:text-3xl">{tempoRestante.segundos}</p>
          <p className="text-gray text-sm xl:text-lg">Segundos</p>
        </div>
      </div>
    </div>
  );
}
