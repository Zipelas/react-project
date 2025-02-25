import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  onClick?: () => void;
}

export default function Button({ children, onClick }: Props) {
  return (
    <button
      className="bg-green-850 text-xl cursor-pointer min-w-40 text-left px-4 py-2 hover:bg-green-700 transition rounded-full"
      onClick={onClick}
    >
      {children}
    </button>
  );
}
