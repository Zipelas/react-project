import InfoCard from "../components/InfoCard";

export default function Anxiety() {
  return (
    <div className="min-h-screen flex justify-center p-6 rounded-xl">
      <InfoCard
        title="Ångest"
        ingress="Ångest är rädsla eller oro som ofta känns i kroppen. Ångest kan kännas mycket obehagligt och skrämmande, men är ofarligt. Däremot kan det påverka livet mycket om du har ångest ofta. Då kan du behöva hjälp att må bättre. Det finns många sätt att få stöd och hjälp. Det finns även mycket du kan göra själv."
        text="Ångest är det som händer i kroppen när du upplever ett hot. Det är en automatisk reaktion som inte går att styra med vilja. Hotet kan handla om något du är rädd för, eller något du har varit med om tidigare. Oroande tankar kan ge samma reaktion i kroppen som ett verkligt hot. Det kan vara mycket obehagligt, plågsamt och skrämmande att ha ångest, men det är inte farligt. Här kan du läsa mer om vad ångest är, vad panikångest är och när du ska söka vård."
        link="https://www.1177.se/Vastra-Gotaland/sjukdomar--besvar/psykiska-sjukdomar-och-besvar/angest/angest--starka-kanslor-av-oro/"
        imageUrl="../src/assets/anxiety.jpg"
        altText="En kvinna med ångest"
      />
    </div>
  );
}
