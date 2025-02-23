import InfoCard from "../components/InfoCard";

export default function Emergency() {
  return (
    <div className="bg-red-600 min-h-screen flex justify-center p-6 rounded-xl">
      <InfoCard
        title="Akut"
        ingress="Här hittar du länkar som hjälper dig om läget är akut"
        text="1177"
        link="https://www.1177.se/"
        imageUrl="../src/assets/emergency.jpg"
        altText="Emergency-skylt"
      />
    </div>
  );
}
