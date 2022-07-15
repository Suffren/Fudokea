import { Navigate, Outlet } from "react-router-dom";

export default function PrivateRoute({ isConnected }) {
  return isConnected ? <Outlet /> : <Navigate to="/login" />;
}
