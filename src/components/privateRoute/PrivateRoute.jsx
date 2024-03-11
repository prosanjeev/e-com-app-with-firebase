// PrivateRoute.js
import { Navigate, Outlet } from "react-router-dom";

const PrivateRoute = () => {
  const admin = JSON.parse(localStorage.getItem("user"));
  if (admin.user.email === "sanjeevcse2k23@gmail.com" ) {
    return <Outlet />;
  } else {
    return <Navigate to="/login" />;
  }
}

export default PrivateRoute;
