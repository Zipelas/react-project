// import { Outlet } from "react-router";

export default function MediaPlayerLayout() {
  return (
    <div className="flex flex-col text-slate-50">
      <header className="bg-slate-950 text-4xl px-4 py-2 justify-between">
        Header
      </header>
      <div className="flex gap-2">
        <aside className="bg-slate-800 text-4xl p-4 rounded">Sidebar</aside>
        <main className="bg-slate-700 rounded p-4 flex-1">
        
        </main>
      </div>
    </div>
  );
}
