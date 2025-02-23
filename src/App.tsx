import { Outlet } from "react-router";
import Aside from "./components/Aside";
import Header from "./components/Header";

export default function MediaPlayerLayout() {
  return (
    <div className="flex flex-col text-slate-50">
      <Header />
      <div className="flex gap-2">
        <Aside />

        <main className="p-4 flex-1">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
