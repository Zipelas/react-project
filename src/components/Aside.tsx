import { Link } from "react-router";
import Button from "./Button";
import ChrisisButton from "./ChrisisButton";

interface Props {
  bgColor: string;
  setIsCrisisMode: (value: boolean) => void;
  isCrisisMode: boolean;
}

export default function Aside({
  bgColor,
  setIsCrisisMode,
  isCrisisMode,
}: Props) {
  return (
    <div className={`flex gap-2 ${bgColor} text-2xl p-8 rounded-3xl mt-6 ml-1`}>
      <nav className="flex flex-col gap-6">
        <Link to="/">
          <Button onClick={() => isCrisisMode && setIsCrisisMode(false)}>
            Hem
          </Button>
        </Link>
        <Link to="/depression">
          <Button onClick={() => isCrisisMode && setIsCrisisMode(false)}>
            Depression
          </Button>
        </Link>
        <Link to="/anxiety">
          <Button onClick={() => isCrisisMode && setIsCrisisMode(false)}>
            Ångest
          </Button>
        </Link>
        <Link to="/stress">
          <Button onClick={() => isCrisisMode && setIsCrisisMode(false)}>
            Stress
          </Button>
        </Link>
        <Link to="/burnout">
          <Button onClick={() => isCrisisMode && setIsCrisisMode(false)}>
            Utmattning
          </Button>
        </Link>
        <Link to="/images">
          <Button onClick={() => isCrisisMode && setIsCrisisMode(false)}>
            Bilder
          </Button>
        </Link>
        <Link to="/emergency">
          <ChrisisButton onClick={() => setIsCrisisMode(true)}>
            Akut hjälp
          </ChrisisButton>
        </Link>
      </nav>
    </div>
  );
}
