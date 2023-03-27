import { Outlet, useLocation, Navigate } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";

const RequireAuth = ({ allowedRoles }) => {
  const location = useLocation();
  const redirectUri = location?.pathname;
  const redirectData = location?.state?.data;

  const { roles } = useAuth();

  const content = roles.some((role) => allowedRoles.includes(role)) ? (
    <Outlet />
  ) : (
    <Navigate
      to="/login"
      state={{ from: location, data: redirectData, redirectUri: redirectUri }}
      replace
    />
  );

  return content;
};

export default RequireAuth;
