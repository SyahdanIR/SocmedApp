import { useNavigate } from "react-router-dom";

function sidebar() {
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/login");
  };
  return (
    <aside className="w-1/4 h-screen bg-orange-200 p-4 shadow-lg items-end">
      <img
        src="https://dummyimage.com/100x100/000/fff"
        alt="logo"
        className="rounded-full"
      />
      <button
        onClick={handleLogout}
        className="mt-4 bg-orange-600 text-white rounded-lg p-2 shadow w-full"
      >
        Logout
      </button>
    </aside>
  );
}

export default sidebar;
