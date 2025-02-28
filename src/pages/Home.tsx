import InfoCard from "../components/InfoCard";
import MoodTracker from "../components/MoodTracker";

export default function Home() {
  return (
    <div className="bg-green-500 min-h-screen flex flex-col items-center p-4 md:p-12 w-full max-w-screen">
      <div className="flex flex-col-reverse items-center gap-6 w-full max-w-5xl">
        <div className="w-full">
          <InfoCard
            title="Om sidan"
            ingress="Denna sida handlar om mental hälsa och ger information och resurser."
            text="Här kan du läsa om olika aspekter av mental hälsa och få tips för att hantera stress, ångest och utbrändhet."
            link="https://www.1177.se"
            imageUrl="../src/assets/homepage.jpg"
            altText="Person som hanterar stress"
          />
        </div>

        <div className="w-full">
          <MoodTracker />
        </div>
      </div>
    </div>
  );
}
