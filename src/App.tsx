import { Outlet } from "react-router";
import Aside from "./components/Aside";

export default function MediaPlayerLayout() {
  return (
    <div className="flex flex-col text-slate-50">
      <header className="flex items-center justify-center bg-green-900 text-3xl px-8 py-4 font-bold">
        <span className="mr-2">❤</span> Mental hälsa
      </header>

      <div className="flex gap-2">
        <Aside />

        <main className="p-4 flex-1">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
