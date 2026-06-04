import { Link } from "react-router-dom";
import { Button } from "./ui/button";

export interface NavbarButtonProps {
  toPage: string;
  DisplayText: string;
}
export default function NavbarButton({
  toPage,
  DisplayText,
}: NavbarButtonProps) {
  return (
    <Button
      asChild
      variant="ghost"
      className="mt-4 w-full hover:bg-orange-400 hover:text-orange-700 h-12"
    >
      <Link to={toPage} className="text-white">
        <p className="text-lg font-semibold">{DisplayText}</p>
      </Link>
    </Button>
  );
}
