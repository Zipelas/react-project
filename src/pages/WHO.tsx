import InfoCard from "../components/InfoCard";

export default function WHO() {
  return (
    <div className="min-h-screen flex justify-center p-6 rounded-xl">
      <InfoCard
        title="WHO"
        ingress="Stress är en naturlig reaktion i kroppen som uppstår när vi upplever hot eller fara."
        text="Stress kan vara både positivt och negativt. Positiv stress kan hjälpa oss att prestera bättre i vissa situationer, medan negativ stress kan leda till ohälsa och sjukdom."
        link="https://www.1177.se/Vastra-Gotaland/liv--halsa/stresshantering-och-somn/stress/https://www.1177.se/sjukdomar--besvar/stress-och-angest/"
        imageUrl="../src/assets/who.jpg"
        altText="Person som hanterar stress"
      />
    </div>
  );
}
