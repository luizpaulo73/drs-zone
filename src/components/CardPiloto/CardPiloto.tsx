import { listaCores } from '@/data/corEquipes';
import { Pilot } from '@/types/classificacaoResumida'
import { ExternalLink } from 'lucide-react';
import { useRouter } from 'next/navigation';

export default function CardPiloto({pilotos, ano} : {pilotos: Pilot[], ano: number}) {

    const route = useRouter();

    const encontrarCorEquipe = (i: number) => {
            const corEquipe = listaCores.find(
              (cor) => cor.nomeEquipe === pilotos[i].Constructors[0].constructorId
            );
            return corEquipe?.hexadecimal || "#fff";
    };

  return (
    <>
    {pilotos.map((info, index) => (
       <div key={index} onClick={() => route.push(`/pilotos/${info.Driver.driverId}/${ano}`)}
       className='border gap-5 border-l-4 flex flex-col justify-between hover:border-l-8 duration-500 max-w-[400px] group cursor-pointer' style={{ borderLeftColor: encontrarCorEquipe(index)}}>
            <div className='flex justify-end'>
                <p className='text-white border border-gray max-w-fit px-2 rounded-full'>{info.points} pts</p>
            </div>
            <div className='flex flex-col gap-1 p-4'>
                <div className='flex gap-2 items-center'>
                    <h2 className='text-white font-semibold text-3xl'>{info.Driver.givenName} {info.Driver.familyName}</h2>
                    <ExternalLink className='text-white invisible group-hover:visible'/>
                </div>
                <p className='text-gray'>{info.Constructors[0].name}</p>
            </div>
        </div> 
    ))}
    </>
  )
}
