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
    <div className="bg-white max-w-xl p-6 rounded-lg mt-10">
      <h1 className="text-green-700 text-4xl font-bold mb-4 flex justify-between">
        {title}
        <img
          src={imageUrl}
          alt={altText}
          className="w-full md:w-1/2 rounded-lg object-cover"
        />
      </h1>

      <h2 className="text-green-700 text-lg font-medium mb-3">{ingress} </h2>
      <p className="text-green-900 text-base">
        {text}{" "}
        {link && (
          <a href={link} className="text-blue-500 hover:underline">
            Läs mer
          </a>
        )}
      </p>
    </div>
  );
}
