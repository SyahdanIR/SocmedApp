import { Link, useLocation } from "react-router-dom";
import { Button } from "./ui/button";

export interface NavbarButtonProps {
  toPage: string;
  DisplayText: any;
  customClass?: string;
}

export default function NavbarButton({
  toPage,
  DisplayText,
}: NavbarButtonProps) {
  const location = useLocation();
  const isActive = location.pathname === toPage;

  return (
    <div className="relative my-1.5">
      {/* Garis di kiri untuk menu aktif */}
      {isActive && (
        <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-8 bg-[#7a3a00] rounded-r-full z-10" />
      )}

      <Button
        asChild
        variant="ghost"
        className={`
          w-full h-12 md:justify-start lg:justify-start sm:justify-center sm:items-center
          transition-all duration-200
          ${
            isActive
              ? "bg-[#e2ceb7] text-[#7a3a00]"
              : "hover:bg-[#e2ceb7] hover:text-[#9f4200] text-[#6a6253]"
          }
        `}
      >
        <Link to={toPage}>
          <p
            className={`text-lg font-semibold mx-5 ${isActive ? "text-[#7a3a00]" : ""}`}
          >
            {DisplayText}
          </p>
        </Link>
      </Button>
    </div>
  );
}
