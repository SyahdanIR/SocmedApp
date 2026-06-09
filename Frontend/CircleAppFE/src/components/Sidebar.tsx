import { useNavigate } from "react-router-dom";
import NavbarButton from "@/components/ButtonCustom";
import { Button } from "./ui/button";
import { CircleUserRound, Heart, House, LogOut, Search } from "lucide-react";

function sidebar() {
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/login");
  };
  return (
    <aside className="fixed top-0 left-0 h-screen bg-orange-200 p-4 shadow-lg items-end sm:w-16 mb-32 md:w-64 lg:w-80">
      <div className="flex flex-col justify-between h-full">
        <div>
          <img
            src="../src/assets/Logo.png"
            alt="logo"
            className="w-16 h-16 mx-5 sm:hidden md:inline"
          />
          <NavbarButton
            toPage="/home"
            DisplayText={
              <>
                <House className="inline md:hidden" />
                <span className="hidden md:inline">Home</span>
              </>
            }
          />
          <NavbarButton
            toPage="/search"
            DisplayText={
              <>
                <Search className="inline md:hidden" />
                <span className="hidden md:inline">Search</span>
              </>
            }
          />
          <NavbarButton
            toPage="/follows"
            DisplayText={
              <>
                <Heart className="inline md:hidden justify-center items-center" />
                <span className="hidden md:inline">Follows</span>
              </>
            }
          />
          <NavbarButton
            toPage="/profile"
            DisplayText={
              <>
                <CircleUserRound className="inline md:hidden" />
                <span className="hidden md:inline">Profie</span>
              </>
            }
          />
        </div>
        <div>
          <Button
            onClick={handleLogout}
            className="mt-4 bg-orange-600 hover:bg-orange-700 text-white shadow w-full h-9 order-last"
          >
            <LogOut className="inline md:hidden" />
            <span className="hidden md:inline">Logout</span>
          </Button>
        </div>
      </div>
    </aside>
  );
}

export default sidebar;
