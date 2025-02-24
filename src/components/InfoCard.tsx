interface Props {
  title: string;
  ingress: string;
  text: string;
  link?: string;
  imageUrl?: string;
  altText: string;
}

export default function InfoCard({
  title,
  ingress,
  text,
  link,
  imageUrl,
  altText,
}: Props) {
  return (
    <div className="bg-white w-full max-w-3xl p-6 rounded-lg shadow-lg border-2 border-black flex flex-col md:flex-row gap-6">
      {/* Textsektion (på små skärmar kommer den FÖRST, på större skärmar BREDVID bilden) */}
      <div className="flex-1 order-2 md:order-1">
        <h1 className="text-green-700 text-3xl font-bold mb-4">{title}</h1>
        <h2 className="text-lg text-gray-700 font-medium mb-3">{ingress}</h2>
        <p className="text-base text-gray-800">
          {text}{" "}
          {link && (
            <a href={link} className="text-blue-500 hover:underline">
              Läs mer
            </a>
          )}
        </p>
      </div>

      {/* Bildsektion (på små skärmar UNDER text, på större skärmar BREDVID text) */}
      {imageUrl && (
        <img
          src={imageUrl}
          alt={altText}
          className="w-full md:w-1/3 rounded-lg object-cover order-1 md:order-2"
        />
      )}
    </div>
  );
}
