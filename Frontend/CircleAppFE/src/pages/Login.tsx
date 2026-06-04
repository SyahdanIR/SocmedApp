import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  const [emailorusername, setEmailorusername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:3000/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ emailorusername, password }),
      });

      const data = await response.json();

      if (response.ok) {
        navigate("/home");
        localStorage.setItem("token", data.token);
        localStorage.setItem("user", JSON.stringify(data.data));
      } else {
        setError(data.message);
      }
    } catch (error) {
      setError("Something went wrong! : " + error);
    }
  };
  return (
    <div className="p-4 mt-10 mx-auto shadow rounded-lg bg-orange-150 w-full max-w-md">
      <img src="" alt="AntiSocial" />
      <h1 className="text-3xl font-bold py-4 text-orange-950 p-5">
        Login to AntiSocial
      </h1>
      {error && (
        <p className="text-red-500 text-sm text-center mb-4">{error}</p>
      )}
      <form
        className="flex flex-col gap-4 w-full max-w-sm mx-auto"
        onSubmit={handleSubmit}
      >
        <input
          type="text"
          placeholder="Email/Username"
          className="border border-orange-600 rounded-lg p-2"
          value={emailorusername}
          onChange={(e) => setEmailorusername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          className="border border-orange-600 rounded-lg p-2"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <a href="/forgot-password" className="text-orange-500 text-sm text-end">
          Forgot password
        </a>
        <button
          type="submit"
          className="bg-orange-600 text-white rounded-lg p-2 shadow"
        >
          Login
        </button>
      </form>
      <p className="text-center text-sm text-orange-800 mt-4">
        Don't have an account?{" "}
        <a href="/register" className="text-orange-500">
          Let's create one!
        </a>
      </p>
    </div>
  );
}

export default Login;
