import { Menu, X } from "lucide-react"; // 📌 Ikoner för hamburgermeny och stäng-knapp
import { useEffect, useState } from "react";
import Aside from "./Aside";

interface Props {
  bgColor: string;
  setIsCrisisMode: (value: boolean) => void;
  isCrisisMode: boolean;
}

export default function Header({
  bgColor,
  setIsCrisisMode,
  isCrisisMode,
}: Props) {
  const [menuOpen, setMenuOpen] = useState(false);

  // 📌 Funktion för att stänga menyn när man klickar utanför
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const menuElement = document.getElementById("mobile-menu");
      if (
        menuOpen &&
        menuElement &&
        !menuElement.contains(event.target as Node)
      ) {
        setMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menuOpen]);

  return (
    <>
      {/* Header */}
      <div
        className={`flex items-center ${bgColor} text-white text-3xl px-8 py-4 font-bold rounded-3xl m-1 w-full`}
      >
        {/* Mobil-layout (< 768px) */}
        <div className="flex w-full md:hidden justify-between items-center">
          <h1 className="text-2xl font-bold">❤ Mental hälsa</h1>

          {/* Hamburgermeny-knapp */}
          <button
            className="text-white text-3xl"
            onClick={() => setMenuOpen(true)}
            aria-label="Toggle menu"
          >
            <Menu />
          </button>
        </div>

        {/* Desktop-layout (> 768px) - Texten är centrerad */}
        <h1 className="hidden md:block w-full text-center text-2xl font-bold">
          ❤ Mental hälsa
        </h1>
      </div>

      {/* Scrollbar vid behov */}
      <div
        id="mobile-menu"
        className={`fixed top-[90px] right-0 h-[80vh] w-1/2 min-w-[165px] max-w-[330px] bg-green-900 text-white p-6 shadow-lg rounded-3xl mr-1 overflow-y-auto md:hidden transition-transform transform ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* (X-ikon) */}
        <button
          className="absolute top-4 right-4 text-white text-3xl"
          onClick={() => setMenuOpen(false)}
          aria-label="Close menu"
        >
          <X />
        </button>

        {/* Meny (Aside.tsx) */}
        <Aside
          bgColor="bg-green-900"
          setIsCrisisMode={setIsCrisisMode}
          isCrisisMode={isCrisisMode}
          closeMenu={() => setMenuOpen(false)}
        />
      </div>
    </>
  );
}
