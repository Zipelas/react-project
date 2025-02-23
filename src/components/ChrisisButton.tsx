import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  onClick?: () => void;
}

export default function ChrisisButton({ children, onClick }: Props) {
  return (
    <button
      className="bg-red-600 text-white text-2xl min-w-40 px-4 py-8 text-left rounded hover:bg-red-700 transition"
      onClick={onClick}
    >
      {children}
    </button>
  );
}
