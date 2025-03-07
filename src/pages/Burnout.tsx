import InfoCard from "../components/InfoCard";

export default function Burnout() {
  return (
    <div className="min-h-screen flex justify-center p-6 rounded-xl">
      <InfoCard
        title="Utmattning"
        ingress="Utmattningssyndrom innebär att du har flera olika kroppsliga och psykiska besvär som beror på långvarig stress eller hög psykisk belastning. Med stöd och behandling kan du återhämta dig, även om du kan vara mer känslig för stress en tid efteråt. För vissa tar återhämtningen lång tid."
        text="Utmattningssyndrom är en följd av svår stress i kombination med för lite återhämtning. Det kallades tidigare för utbrändhet eller utmattningsdepression. Men det är inte alla som får utmattningssyndrom som får en depression. Här kan du läsa mer om va utmattningssyndrom är, symtom och när du ska söka vård"
        link="https://www.1177.se/Vastra-Gotaland/sjukdomar--besvar/hjarna-och-nerver/utmattningssyndrom/"
        imageUrl="https://images.pexels.com/photos/3767411/pexels-photo-3767411.jpeg?auto=compress&cs=tinysrgb&w=400"
        altText="En kvinna som är utmattad"
      />
    </div>
  );
}
