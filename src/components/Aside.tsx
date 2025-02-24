import { Link } from "react-router-dom";
import Button from "./Button";
import ChrisisButton from "./ChrisisButton";

interface Props {
  bgColor: string;
  setIsCrisisMode: (value: boolean) => void;
  isCrisisMode: boolean;
  closeMenu?: () => void; // 📌 Funktion för att stänga hamburgermenyn
}

export default function Aside({
  bgColor,
  setIsCrisisMode,
  isCrisisMode,
  closeMenu,
}: Props) {
  return (
    <div
      className={`md:flex flex-col md:w-64 w-full ${bgColor} text-2xl p-8 rounded-3xl mt-6 ml-1`}
    >
      <nav className="flex flex-col gap-6">
        <Link to="/" onClick={closeMenu}>
          <Button onClick={() => isCrisisMode && setIsCrisisMode(false)}>
            Hem
          </Button>
        </Link>
        <Link to="/depression" onClick={closeMenu}>
          <Button onClick={() => isCrisisMode && setIsCrisisMode(false)}>
            Depression
          </Button>
        </Link>
        <Link to="/anxiety" onClick={closeMenu}>
          <Button onClick={() => isCrisisMode && setIsCrisisMode(false)}>
            Ångest
          </Button>
        </Link>
        <Link to="/stress" onClick={closeMenu}>
          <Button onClick={() => isCrisisMode && setIsCrisisMode(false)}>
            Stress
          </Button>
        </Link>
        <Link to="/burnout" onClick={closeMenu}>
          <Button onClick={() => isCrisisMode && setIsCrisisMode(false)}>
            Utmattning
          </Button>
        </Link>
        <Link to="/images" onClick={closeMenu}>
          <Button onClick={() => isCrisisMode && setIsCrisisMode(false)}>
            Bilder
          </Button>
        </Link>
        <Link to="/emergency" onClick={closeMenu}>
          <ChrisisButton onClick={() => setIsCrisisMode(true)}>
            Akut hjälp
          </ChrisisButton>
        </Link>
      </nav>
    </div>
  );
}
