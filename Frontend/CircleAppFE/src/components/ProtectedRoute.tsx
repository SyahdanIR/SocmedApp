import { Navigate } from "react-router-dom";

interface ProtectedRouteProps {
  children: React.ReactNode;
}

export const ProtectedRoute = ({ children }: ProtectedRouteProps) => {
  const token = localStorage.getItem("token");

  // jika belum login, redirect ke halaman login
  if (!token) {
    return <Navigate to="/login" />;
  }

  // ini jika sudah, jadi dia ke halaman yang diminta
  return <>{children}</>;
};
