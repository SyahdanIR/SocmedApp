import Login from "./pages/Login";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Register from "./pages/Register";
import Home from "./pages/Home";
import { ProtectedRoute } from "./components/ProtectedRoute";
import { PublicOnlyRoute } from "./components/PublicOnlyRoute";
import { toast, Toaster } from "sonner";
import { useEffect } from "react";
import { socket } from "./lib/socket";
import DetailThread from "./pages/DetailThread";

function App() {
  useEffect(() => {
    socket.on("notip", (data) => {
      toast(`@${data.username} menambahkan thread baru!`);
    });

    return () => {
      socket.off("notip");
    };
  }, []);
  return (
    <BrowserRouter>
      <div className="bg-orange-100 text-stone-800 min-h-screen">
        <Toaster />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/login"
            element={
              <PublicOnlyRoute>
                <Login />
              </PublicOnlyRoute>
            }
          />
          <Route
            path="/register"
            element={
              <PublicOnlyRoute>
                <Register />
              </PublicOnlyRoute>
            }
          />
          <Route
            path="/home"
            element={
              <ProtectedRoute>
                <Home />
              </ProtectedRoute>
            }
          />
          <Route
            path="/thread/:id"
            element={
              <ProtectedRoute>
                <DetailThread />
              </ProtectedRoute>
            }
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
