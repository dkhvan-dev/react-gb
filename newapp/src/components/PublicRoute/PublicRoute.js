import { Navigate, Outlet } from "react-router";

export const PublicRoute = ({ authed }) =>
  !authed ? <Outlet /> : <Navigate to="/profile" replace />;
