import Link from "next/link"
import {
  Calendar,
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
        <nav className="absolute lg:block bg-blackfundo w-full">
          <ul className="flex flex-col text-gray my-8 gap-4">
            <li>  
              <Link href={"/"} className="flex gap-2 items-center ">
                <Home size={30} /><p>Dashboard</p>
              </Link>
            </li>
            <li>
              <Link href={"/"} className="flex gap-2 items-center ">
                <Users size={30} /><p>Pilotos</p>
              </Link>
            </li>
            <li>
              <Link href={"/"} className="flex gap-2 items-center ">
                <Flag size={30} /><p>Equipes</p>
              </Link>
            </li>
            <li>
              <Link href={"/"} className="flex gap-2 items-center ">
                <Calendar size={30} /><p>Corridas</p>
              </Link>
            </li>
            <li>
              <Link href={"/"} className="flex gap-2 items-center ">
                <Timer size={30} /><p>Análises de Volta</p>
              </Link>
            </li>
            <li>
              <Link href={"/"} className="flex gap-2 items-center ">
                <Trophy size={30}/><p>Classificações</p>
              </Link>
            </li>
            <li>
              <Link href={"/"} className="flex gap-2 items-center ">
                <TrendingUp size={30}/><p>Estatísticas</p>
              </Link>
            </li>
          </ul>
        </nav>  : null
      }
      </>
  )
}
