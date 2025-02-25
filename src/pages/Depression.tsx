import InfoCard from "../components/InfoCard";

export default function Depression() {
  return (
    <div className="min-h-screen flex justify-center p-6 rounded-xl">
      <InfoCard
        title="Depression"
        ingress="Du kan ha fått en depression om du under en längre tid känner dig nedstämd, trött och inte har någon ork. Det kan också vara att du känner att du har tappat lusten även till sådant som du brukar tycka om att göra. Det är viktigt att inte vänta för länge med att söka hjälp."
        text="Att känna sig ledsen eller nedstämd är vanligt och händer alla ibland. Det är vanliga reaktioner som oftast går över av sig själv. Här kan du läsa mer om vad derpression är, symtom och när du ska söka vård."
        link="https://www.1177.se/Vastra-Gotaland/sjukdomar--besvar/psykiska-sjukdomar-och-besvar/depression/depression/"
        imageUrl="https://images.pexels.com/photos/3356489/pexels-photo-3356489.jpeg?auto=compress&cs=tinysrgb&w=400"
        altText="En deprimerad kvinna"
      />
    </div>
  );
}
