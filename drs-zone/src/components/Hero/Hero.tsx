import ProximaCorrida from '../ProximaCorrida/ProximaCorrida'

export default function Hero(props: { titulo: string, desc: string}) {

  const { titulo, desc } = props

  return (
    <section className='mt-8 w-full'>
        <div className="sm:flex justify-between w-full items-center">
            <div className='flex flex-col gap-2'>
                <h1 className='text-white text-2xl xl:text-3xl 2xl:text-4xl font-bold'>{titulo}</h1>
                <p className='text-gray xl:text-lg 2xl:text-xl'>{desc}</p>
            </div>
            <ProximaCorrida />
        </div>
        
    </section>
  )
}
