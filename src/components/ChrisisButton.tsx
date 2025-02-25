import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  onClick?: () => void;
}

export default function ChrisisButton({ children, onClick }: Props) {
  return (
    <button
      className="bg-red-700 text-white text-lg md:text-xl font-bold w-full min-w-[140px] max-w-[200px] py-3 rounded-lg transition hover:bg-red-600 cursor-pointer"
      onClick={onClick}
    >
      {children}
    </button>
  );
}
