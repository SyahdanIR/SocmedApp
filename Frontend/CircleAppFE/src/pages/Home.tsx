import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/login");
  };
  return (
    <div className="text-center">
      <h1 className="text-3xl font-bold py-4 text-orange-700">
        Welcome to AntiSocial
      </h1>
      <p className="text-lg text-orange-600">
        Connect with friends and share your moments with the world.
      </p>
      <button
        onClick={handleLogout}
        className="mt-4 bg-orange-600 text-white rounded-lg p-2 shadow"
      >
        Logout
      </button>
    </div>
  );
}
export default Home;
