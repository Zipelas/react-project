import InfoCard from "../components/InfoCard";
import MoodTracker from "../components/MoodTracker";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col-reverse items-center justify-center p-6 rounded-xl gap-6">
      <MoodTracker />

      <InfoCard
        title="Om sidan"
        ingress="❤ Mental hälsa ger dig lite information om olika psykiska tillstånd och hur du kan hantera dem."
        text="Här kan du läsa om depression, ångest, stress och utmattningssyndrom. Du kan också hitta resurser för att få hjälp. Här kan du läsa mer om de olika tillstånden och hur du kan hantera dem."
        link="https://www.1177.se/"
        imageUrl="https://images.pexels.com/photos/2821823/pexels-photo-2821823.jpeg?auto=compress&cs=tinysrgb&w=400"
        altText="En tavla med texten Self care isn't selfish på en vägg."
      />
    </div>
  );
}
