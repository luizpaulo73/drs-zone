import Link from "next/link"
import {
  Calendar,
  ChevronLeft,
  ChevronRight,
  Flag,
  Home,
  Timer,
  TrendingUp,
  Trophy,
  Users
} from "lucide-react";

export default function Links(props: {open:boolean}) {

    const open = props.open;

  return (
    <>
    { open ?
        <nav className="absolute bg-blackfundo w-full">
          <ul className="flex flex-col text-gray my-8 gap-4">
            <li className="flex gap-2 items-center">
              <Home size={30}/>
              <Link href={"/"}>Dashboard</Link>
            </li>
            <li className="flex gap-2 items-center">
              <Users size={30}/>
              <Link href={"/"}>Pilotos</Link>
            </li>
            <li className="flex gap-2 items-center">
              <Flag size={30}/>
              <Link href={"/"}>Equipes</Link>
            </li>
            <li className="flex gap-2 items-center">
              <Calendar size={30}/>
              <Link href={"/"}>Corridas</Link>
            </li>
            <li className="flex gap-2 items-center">
              <Timer size={30}/>
              <Link href={"/"}>Análises de Volta</Link>
            </li>
            <li className="flex gap-2 items-center">
              <Trophy size={30}/>
              <Link href={"/"}>Classificações</Link>
            </li>
            <li className="flex gap-2 items-center">
              <TrendingUp size={30}/>
              <Link href={"/"}>Estatísticas</Link>
            </li>
          </ul>
        </nav>  : null
      }
      </>
  )
}
