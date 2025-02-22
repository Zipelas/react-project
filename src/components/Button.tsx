import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  onClick?: () => void;
}

export default function Button({ children, onClick }: Props) {
  return (
    <button
      className="bg-green-850 text-2xl text-white px-4 py-2 hover:bg-green-800 transition"
      onClick={onClick}
    >
      {children}
    </button>
  );
}
