import { Navigate } from "react-router-dom";

interface PublicOnlyRouteProps {
  children: React.ReactNode;
}

export const PublicOnlyRoute = ({ children }: PublicOnlyRouteProps) => {
  const token = localStorage.getItem("token");

  // jika sudah login, redirect ke halaman home

  if (token) {
    return <Navigate to="/home" />;
  }

  return <>{children}</>;
};
