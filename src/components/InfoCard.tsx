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
    <div className="bg-white w-full max-w-3xl p-6 rounded-lg shadow-lg border-2 border-black flex flex-col gap-6">
      <div className="flex-1 flex flex-col">
        <h1 className="text-green-700 text-3xl font-bold mb-4">{title}</h1>

        {imageUrl && (
          <img
            src={imageUrl}
            alt={altText}
            className="w-full md:w-2/3 lg:w-1/2 rounded-lg object-cover mb-4 self-center"
          />
        )}

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
    </div>
  );
}
