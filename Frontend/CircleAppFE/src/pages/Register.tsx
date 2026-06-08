import React from "react";
import { useNavigate } from "react-router-dom";

function Register() {
  const navigate = useNavigate();
  const [full_name, setFullName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [error, setError] = React.useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:3000/api/auth/register", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({ full_name, email, password }),
      });
      const data = await response.json();

      if (response.ok) {
        alert("Registrasi berhasil! Silahkan login.");
        navigate("/login");
        localStorage.setItem("token", data.token);
        localStorage.setItem("user", JSON.stringify(data.user));
      } else {
        setError(data.message);
      }
    } catch (error) {
      setError("Something went wrong! : " + error);
    }
  };
  return (
    <div className="p-4 mt-10 mx-auto shadow rounded-lg bg-orange-150 w-full max-w-md">
      <img
        src="../src/assets/Logo.png"
        alt="AntiSocial"
        className="w-16 h-16"
      />
      <h1 className="text-3xl font-bold py-4 text-orange-950 p-5">
        Become AntiSocial
      </h1>
      {error && (
        <p className="text-red-500 text-sm text-center mb-4">{error}</p>
      )}
      <form
        autoComplete="off"
        onSubmit={handleSubmit}
        className="flex flex-col gap-4 w-full max-w-sm mx-auto"
      >
        <input
          type="text"
          id="full_name"
          value={full_name}
          onChange={(e) => setFullName(e.target.value)}
          placeholder="Full Name"
          className="border border-orange-600 rounded-lg p-2"
        />
        <input
          type="text"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          className="border border-orange-600 rounded-lg p-2"
        />
        <input
          type="password"
          id="password"
          autoComplete="new-password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          className="border border-orange-600 rounded-lg p-2"
        />
        <button
          type="submit"
          className="bg-orange-600 text-white rounded-lg p-2 shadow"
        >
          Register
        </button>
      </form>
      <p className="text-center text-sm text-orange-800 mt-4">
        Already have an account?{" "}
        <a href="/login" className="text-orange-500">
          Login here!
        </a>
      </p>
    </div>
  );
}

export default Register;
