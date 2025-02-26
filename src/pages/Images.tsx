import { useEffect, useState } from "react";
import InfoCard from "../components/InfoCard";

const PEXELS_API_KEY =
  "5nP4bLcAUL6yzDxvrQ96GDVPS9wgpafc4zD3q1DzNkQx2lyeWopBkexy";
const SEARCH_QUERY = "mental health + yoga";
const API_URL = `https://api.pexels.com/v1/search?query=${SEARCH_QUERY}&per_page=5`;

interface PexelsPhoto {
  id: number;
  src: { medium: string };
  alt: string;
}

export default function Images() {
  const [images, setImages] = useState<PexelsPhoto[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch(API_URL, {
      headers: {
        Authorization: PEXELS_API_KEY,
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP-fel! Status: ${response.status}`);
        }
        return response.json();
      })
      .then((jsonData) => {
        console.log("Pexels API Response:", jsonData);
        setImages(jsonData.photos);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Fel vid API-anrop:", err);
        setError(err.message);
        setLoading(false);
      });
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6">
      <h1 className="text-4xl font-bold text-green-900 mb-6">
        Bilder om Mental Hälsa
      </h1>

      {loading && <p className="text-xl">Laddar bilder...</p>}
      {error && <p className="text-xl text-red-500">Fel: {error}</p>}

      {/* Flex istället för grid */}
      <div className="flex flex-wrap justify-center gap-6 w-full max-w-5xl">
        {images.map((image) => (
          <InfoCard
            key={image.id}
            title="Mental Hälsa"
            ingress="En inspirerande bild relaterad till mental hälsa."
            text="Hämtad från Pexels API."
            imageUrl={image.src.medium}
            altText={image.alt}
          />
        ))}
      </div>
    </div>
  );
}
