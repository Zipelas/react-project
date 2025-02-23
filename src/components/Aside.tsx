import { Link } from "react-router";
import Button from "./Button";
import ChrisisButton from "./ChrisisButton";

export default function Aside() {
  return (
    <div className="flex gap-2 bg-green-900 text-2xl p-8 rounded-3xl mt-6 ml-1">
      <nav className="flex flex-col gap-6">
        <Link to="/">
          <Button>Hem</Button>
        </Link>
        <Link to="/depression">
          <Button>Depression</Button>
        </Link>
        <Link to="/anxiety">
          <Button>Ångest</Button>
        </Link>
        <Link to="/stress">
          <Button>Stress</Button>
        </Link>
        <Link to="/burnout">
          <Button>Utmattning</Button>
        </Link>
        <Link to="/resources">
          <Button>Resurser</Button>
        </Link>
        <Link to="/emergency">
          <ChrisisButton>Akut hjälp</ChrisisButton>
        </Link>
      </nav>
    </div>
  );
}
