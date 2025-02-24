import { useState } from "react";
import { Outlet } from "react-router";
import Aside from "./components/Aside";
import Header from "./components/Header";

export default function App() {
  // State för att hantera bakgrundsfärg
  const [isCrisisMode, setIsCrisisMode] = useState(false);

  return (
    <div className="flex flex-col text-slate-50">
      <Header bgColor={isCrisisMode ? "bg-red-600" : "bg-green-900"} />
      <div className="flex gap-2">
        <Aside
          bgColor={isCrisisMode ? "bg-red-600" : "bg-green-900"}
          setIsCrisisMode={setIsCrisisMode}
          isCrisisMode={isCrisisMode}
        />

        <main className="flex-1 ml-4">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
