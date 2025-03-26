"use client";

import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import Links from "../Links/Links";

export default function Sidebar() {
  const [open, setOpen] = useState<boolean>(false);
  const [isLg, setIsLg] = useState<boolean>(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsLg(window.innerWidth >= 1024);
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);

    return () => {
      window.removeEventListener("resize", checkScreenSize);
    };
  }, []);

  return (
    <div className="relative lg:block lg:w-1/5 xl:w-1/6 lg:h-full">
      <div className="flex justify-between items-center">
        <h1 className="text-stone-200 font-bold text-2xl">
          <span className="bg-green-600 px-1 rounded-sm">DRS</span> Zone
        </h1>
        <button onClick={() => setOpen(!open)} className="cursor-pointer lg:hidden">
          {open ? <X className="text-gray" size={30} /> : <Menu className="text-gray" size={30} />}
        </button>
      </div>
      <Links open={isLg ? true : open} />
    </div>
  );
}
