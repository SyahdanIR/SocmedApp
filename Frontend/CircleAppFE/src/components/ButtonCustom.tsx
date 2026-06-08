import { Link } from "react-router-dom";
import { Button } from "./ui/button";

export interface NavbarButtonProps {
  toPage: string;
  DisplayText: any;
}
export default function NavbarButton({
  toPage,
  DisplayText,
}: NavbarButtonProps) {
  return (
    <Button
      asChild
      variant="ghost"
      className="mt-4 w-full hover:bg-orange-400 hover:text-orange-200 h-12 md:justify-start lg:justify-start sm:justify-center sm:items-center"
    >
      <Link to={toPage} className="text-orange-700">
        <p className="text-lg font-semibold mx-5">{DisplayText}</p>
      </Link>
    </Button>
  );
}
