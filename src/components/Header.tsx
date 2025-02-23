interface Props {
  bgColor: string;
}

export default function Header({ bgColor }: Props) {
  return (
    <div
      className={`flex items-center justify-center ${bgColor} text-3xl px-8 py-4 font-bold rounded-3xl m-1`}
    >
      <span className="mr-2">❤</span> Mental hälsa
    </div>
  );
}
