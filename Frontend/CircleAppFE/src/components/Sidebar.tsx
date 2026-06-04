import { useNavigate } from "react-router-dom";
import NavbarButton from "@/components/ButtonCustom";

function sidebar() {
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/login");
  };
  return (
    <aside className="fixed w-80 top-0 left-0 h-screen bg-orange-200 p-4 shadow-lg items-end mb-32">
      <img src="../src/assets/Logo.png" alt="logo" className="w-16 h-16" />
      <NavbarButton toPage="/home" DisplayText="Home" />
      <NavbarButton toPage="/search" DisplayText="Search" />
      <NavbarButton toPage="/follows" DisplayText="Follows" />
      <NavbarButton toPage="/profile" DisplayText="Profile" />
      <button
        onClick={handleLogout}
        className="mt-4 bg-orange-600 text-white rounded-lg p-2 shadow w-full order-last"
      >
        Logout
      </button>
    </aside>
  );
}

export default sidebar;
