import { useNavigate, useLocation } from "react-router-dom";
import NavbarButton from "@/components/ButtonCustom";
import { Button } from "./ui/button";
import { CircleUserRound, Heart, House, LogOut, Search } from "lucide-react";

function Sidebar() {
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/login");
  };

  const isActive = (path: string) => location.pathname === path;

  return (
    <aside className="fixed top-0 left-0 h-screen bg-[#eadecc] p-4 shadow-lg sm:w-16 md:w-64 lg:w-80">
      <div className="flex flex-col justify-between h-full">
        <div>
          <div className="mb-4 sm:hidden md:inline">
            <img src="http://localhost:3000/uploads/Icon.png" />
          </div>

          {/* Home */}
          <div className="relative my-1.5">
            {isActive("/home") && (
              <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-8 bg-[#7a3a00] rounded-r-full z-10" />
            )}
            <NavbarButton
              toPage="/home"
              DisplayText={
                <>
                  <House className="inline md:hidden" />
                  <span className="hidden md:inline-flex items-center gap-3">
                    {<House size={28} className="!w-6 !h-6" />} Home
                  </span>
                </>
              }
              customClass={
                isActive("/home") ? "bg-[#d4b89c] text-[#5c2a00]" : ""
              }
            />
          </div>

          {/* Search */}
          <div className="relative my-1.5">
            {isActive("/search") && (
              <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-8 bg-[#7a3a00] rounded-r-full z-10" />
            )}
            <NavbarButton
              toPage="/search"
              DisplayText={
                <>
                  <Search className="inline md:hidden" />
                  <span className="hidden md:inline-flex items-center gap-3">
                    {" "}
                    {<Search size={28} className="!w-6 !h-6" />} Search
                  </span>
                </>
              }
              customClass={
                isActive("/search") ? "bg-[#d4b89c] text-[#5c2a00]" : ""
              }
            />
          </div>

          {/* Follows */}
          <div className="relative my-1.5">
            {isActive("/follows") && (
              <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-8 bg-[#7a3a00] rounded-r-full z-10" />
            )}
            <NavbarButton
              toPage="/follows"
              DisplayText={
                <>
                  <Heart className="inline md:hidden" />
                  <span className="hidden md:inline-flex items-center gap-3">
                    {<Heart size={28} className="!w-6 !h-6" />} Follows
                  </span>
                </>
              }
              customClass={
                isActive("/follows") ? "bg-[#d4b89c] text-[#5c2a00]" : ""
              }
            />
          </div>

          {/* Profile */}
          <div className="relative my-1.5">
            {isActive("/profile") && (
              <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-8 bg-[#7a3a00] rounded-r-full z-10" />
            )}
            <NavbarButton
              toPage="/profile"
              DisplayText={
                <>
                  <CircleUserRound className="inline md:hidden" />
                  <span className="hidden md:inline-flex items-center gap-3">
                    {<CircleUserRound size={28} className="!w-6 !h-6" />}{" "}
                    Profile
                  </span>
                </>
              }
              customClass={
                isActive("/profile") ? "bg-[#d4b89c] text-[#5c2a00]" : ""
              }
            />
          </div>
        </div>

        <div>
          <Button
            onClick={handleLogout}
            className="mt-4 bg-[#9f4200] hover:bg-orange-700 text-white shadow w-full h-9"
          >
            <LogOut className="inline md:hidden" />
            <span className="hidden md:inline">Logout</span>
          </Button>
        </div>
      </div>
    </aside>
  );
}

export default Sidebar;
