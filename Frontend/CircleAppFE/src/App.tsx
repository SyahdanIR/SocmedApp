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
import { Provider } from "react-redux";
import { store } from "./store/Store";
import Profile from "./pages/Profile";

function App() {
  useEffect(() => {
    socket.on("notip", (data) => {
      toast(`@${data.username} menambahkan thread baru!`);
    });

    return () => {
      socket.off("notip");
    };
  }, []);

  useEffect(() => {
    socket.on("reply-notif", () => {
      toast(`seseorang membalas thread`);
    });
    return () => {
      socket.off("reply-notif");
    };
  });
  return (
    <Provider store={store}>
      <BrowserRouter>
        <div className="bg-stone-50 text-stone-800 min-h-screen">
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
              path="/profile"
              element={
                <ProtectedRoute>
                  <Profile />
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
    </Provider>
  );
}

export default App;
