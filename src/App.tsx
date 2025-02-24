import { useState } from "react";
import { Outlet } from "react-router";
import Aside from "./components/Aside";
import Header from "./components/Header";

export default function App() {
  // State för att hantera bakgrundsfärg
  const [isCrisisMode, setIsCrisisMode] = useState(false);

  return (
    <div className="flex flex-col text-slate-50 min-h-screen">
      {/* Header hanterar hamburgermenyn */}
      <Header
        bgColor={isCrisisMode ? "bg-red-600" : "bg-green-900"}
        setIsCrisisMode={setIsCrisisMode}
        isCrisisMode={isCrisisMode}
      />

      <div className="flex flex-1 gap-2">
        {/* Visa `Aside.tsx` ENDAST på stora skärmar */}
        <div className="hidden md:block">
          <Aside
            bgColor={isCrisisMode ? "bg-red-600" : "bg-green-900"}
            setIsCrisisMode={setIsCrisisMode}
            isCrisisMode={isCrisisMode}
          />
        </div>

        {/* Huvudinnehåll */}
        <main className="flex-1 ml-4">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
