export default function ProximaCorrida() {
  return (
    <div className="bg-blue-600/5 border border-blue-600/20 p-2 flex flex-col gap-2 w-[300px] xl:w-[500px] mt-5 sm:mt-0">
      <h2 className="text-blue-600 xl:text-xl">Próxima Corrida: monaco</h2>
      <div className="flex">
        <div className="w-1/4 text-center">
          <p className="text-white text-2xl xl:text-3xl">0</p>
          <p className="text-gray text-sm xl:text-lg">Dias</p>
        </div>
        <div className="w-1/4 text-center">
          <p className="text-white text-2xl xl:text-3xl">0</p>
          <p className="text-gray text-sm xl:text-lg">Horas</p>
        </div>
        <div className="w-1/4 text-center">
          <p className="text-white text-2xl xl:text-3xl">0</p>
          <p className="text-gray text-sm xl:text-lg">Minutos</p>
        </div>
        <div className="w-1/4 text-center">
          <p className="text-white text-2xl xl:text-3xl">0</p>
          <p className="text-gray text-sm xl:text-lg">Segundos</p>
        </div>
      </div>
    </div>
  );
}
