export default function App() {
  return (
    <div className="bg-green-500 min-h-screen flex justify-center p-6 rounded-xl">
      <div className="bg-white max-w-xl p-6 rounded-lg mt-10">
        <h1 className="text-green-900 text-4xl mb-4">Stress</h1>
        <p className="text-green-900">
          Stress är en reaktion på en yttre påfrestning. Det kan vara en fysisk
          eller psykisk påfrestning. Stress kan vara positivt och negativt.
          Positiv stress kan vara...{" "}
          <a href="https://www.1177.se/sjukdomar--besvar/psykiska-sjukdomar-och-besvar/stress/">
            Läs mer
          </a>
        </p>
      </div>
    </div>
  );
}
