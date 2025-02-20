import { Link, Outlet } from "react-router";

export default function MediaPlayerLayout() {
  return (
    <div className="flex flex-col text-slate-50">
      <header className="flex items-center justify-center bg-green-900 text-3xl px-8 py-4 font-bold">
        <span className="mr-2">❤</span> Mental hälsa
      </header>

      <div className="flex gap-2">
        <aside className="bg-green-900 text-2xl p-8 rounded-br-3xl">
          <nav className="flex flex-col gap-6">
            <Link to="/">Hem</Link>
            <Link to="/depression">Depression</Link>
            <Link to="/anxiety">Ångest</Link>
            <Link to="/stress">Stress</Link>
            <Link to="/burnout">Utmattning</Link>
            <Link to="/resources">Resurser</Link>
          </nav>
        </aside>

        <main className="p-4 flex-1">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
