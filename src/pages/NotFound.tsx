import { Link } from "react-router";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-gray-900 p-6">
      <h1 className="text-6xl font-bold text-green-700 mb-4">404</h1>
      <h2 className="text-2xl font-semibold mb-4">
        Oops! Sidan kunde inte hittas
      </h2>
      <p className="text-lg text-gray-600 mb-6">
        Sidan du letar efter finns inte eller har flyttats.
      </p>

      {/* Knapp tillbaka till hem */}
      <Link
        to="/"
        className="bg-green-800 hover:bg-green-700 text-white px-6 py-3 rounded-full text-lg font-semibold transition"
      >
        Tillbaka till Hem
      </Link>
      <p>&nbsp;</p>
      {/* Bild */}
      <img
        src="https://images.pexels.com/photos/263402/pexels-photo-263402.jpeg?auto=compress&cs=tinysrgb&w=400"
        alt="Emergency"
        className="rounded-lg shadow-lg mb-6"
      />
    </div>
  );
}
