export default function BordaComDegrade(props: { cor: string}) {
  return (
    <div
              className="absolute top-0 left-0 w-full h-[4px] pointer-events-none"
              style={{
              background: `linear-gradient(to right, ${props.cor} 0%, transparent 80%)`,
              zIndex: 0
              }}
            /> 
  )
}
