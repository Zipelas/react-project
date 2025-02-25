import InfoCard from "../components/InfoCard";

export default function Emergency() {
  return (
    <div className="bg-red-600 min-h-screen flex justify-center p-6 rounded-3xl mt-6">
      <InfoCard
        title="Akut"
        ingress="Här hittar du länkar som hjälper dig om läget är akut"
        text="1177"
        link="https://www.1177.se/"
        imageUrl="https://images.pexels.com/photos/263402/pexels-photo-263402.jpeg?auto=compress&cs=tinysrgb&w=400"
        altText="Emergency-skylt"
      />
    </div>
  );
}
