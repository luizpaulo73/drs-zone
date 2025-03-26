import ProximaCorrida from '../ProximaCorrida/ProximaCorrida'

export default function Hero() {
  return (
    <section className='mt-8 w-full'>
        <div className="sm:flex justify-between w-full items-center">
            <div className='flex flex-col gap-2'>
                <h1 className='text-white text-2xl xl:text-3xl 2xl:text-4xl font-bold'>Dashboard</h1>
                <p className='text-gray xl:text-lg 2xl:text-xl'>Estatísticas Gerais da Fórmula 1</p>
            </div>
            <ProximaCorrida />
        </div>
        
    </section>
  )
}
