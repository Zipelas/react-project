interface Props {
  title: string;
  text: string;
  link?: string;
}

export default function InfoCard({ title, text, link }: Props) {
  return (
    <div className="bg-white max-w-xl p-6 rounded-lg mt-10">
      <h1 className="text-green-900 text-2xl mb-4">{title}</h1>
      <p className="text-green-900">
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
