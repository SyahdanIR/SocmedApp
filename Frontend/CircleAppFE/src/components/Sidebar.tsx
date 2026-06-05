import { useNavigate } from "react-router-dom";
import NavbarButton from "@/components/ButtonCustom";
import { Button } from "./ui/button";

function sidebar() {
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/login");
  };
  return (
    <aside className="fixed w-80 top-0 left-0 h-screen bg-orange-200 p-4 shadow-lg items-end mb-32">
      <div className="flex flex-col justify-between h-full">
        <div>
          <img
            src="../src/assets/Logo.png"
            alt="logo"
            className="w-16 h-16 mx-5"
          />
          <NavbarButton toPage="/home" DisplayText="Home" />
          <NavbarButton toPage="/search" DisplayText="Search" />
          <NavbarButton toPage="/follows" DisplayText="Follows" />
          <NavbarButton toPage="/profile" DisplayText="Profile" />
        </div>
        <div>
          <Button
            onClick={handleLogout}
            className="mt-4 bg-orange-600 hover:bg-orange-700 text-white shadow w-full h-9 order-last"
          >
            Logout
          </Button>
        </div>
      </div>
    </aside>
  );
}

export default sidebar;
