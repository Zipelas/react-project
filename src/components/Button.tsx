import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  onClick?: () => void;
}

export default function Button({ children, onClick }: Props) {
  return (
    <button
      className="bg-green-850 text-white text-lg md:text-xl w-full min-w-[140px] max-w-[200px] py-2 rounded-full transition hover:bg-green-700 cursor-pointer"
      onClick={onClick}
    >
      {children}
    </button>
  );
}
