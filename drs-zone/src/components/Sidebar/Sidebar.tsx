"use client";

import Link from "next/link";
import {
  Calendar,
  ChevronLeft,
  ChevronRight,
  Flag,
  Home,
  Menu,
  Timer,
  TrendingUp,
  Trophy,
  Users,
  X,
} from "lucide-react";
import { useState } from "react";

export default function Sidebar() {

    const [open, setOpen] = useState<boolean>(false);

  return (
    <div className="relative">
        <div className="flex justify-between items-center">
            <h1 className="text-stone-200 font-bold text-2xl"><span className="bg-green-600 px-1 rounded-sm">DRS</span> Zone</h1>
            <button onClick={() => setOpen(!open)}>
                {open ? <X className="text-gray" size={30} /> :
                <Menu className="text-gray" size={30} />}
            </button>
        </div>
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
    
    </div>
  );
}
