import { useState } from "react";

export default function MoodTracker() {
  const [mood, setMood] = useState<string | null>(null);

  const moods = [
    { emoji: "😃", label: "Glad" },
    { emoji: "🙂", label: "Okej" },
    { emoji: "😟", label: "Orolig" },
    { emoji: "😢", label: "Ledsen" },
    { emoji: "😡", label: "Arg" },
  ];

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg max-w-3xl text-center border-2 border-black shadow-black">
      <h2 className="text-green-900 text-2xl font-bold mb-4">
        Hur mår du idag?
      </h2>

      {/* Visa humörval */}
      <div className="flex justify-center gap-3 mb-4">
        {moods.map((m) => (
          <button
            key={m.label}
            className={`text-4xl p-2 rounded-lg transition-all ${
              mood === m.label
                ? "bg-green-300 scale-110"
                : "bg-gray-100 hover:bg-gray-200"
            }`}
            onClick={() => setMood(m.label)}
          >
            {m.emoji}
          </button>
        ))}
      </div>

      {/* Visa valt humör */}
      {mood && (
        <p className="text-lg text-gray-800 mt-2">
          Du känner dig: <span className="font-bold">{mood}</span> idag.
        </p>
      )}
    </div>
  );
}
