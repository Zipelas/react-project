import InfoCard from "../components/InfoCard";

export default function Stress() {
  return (
    <div className="bg-green-500 min-h-screen flex justify-center p-6 rounded-xl">
      <InfoCard
        title="Stress"
        ingress="Stress kan ge dig extra energi när du har bråttom eller måste klara något viktigt. Men du kan må dåligt om du är stressad för länge eller för ofta. Det är viktigt att få pauser från stress."
        text="Stress kan påverka kroppen på många sätt. Det kan visa sig på olika sätt för olika personer. Här kan du läsa mer om vad stress är, tecken på att du mår dåligt av stress och när du ska söka vård."
        link="https://www.1177.se/Vastra-Gotaland/liv--halsa/stresshantering-och-somn/stress/"
        imageUrl="../src/assets/stress.jpg"
        altText="Person som hanterar stress"
      />
    </div>
  );
}
