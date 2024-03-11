// UserPrivateRoute.js
import { Navigate, Outlet } from "react-router-dom";

const UserPrivateRoute = () => {
    if (localStorage.getItem("user")) {
        return <Outlet />;
      } else {
        return <Navigate to="/login" />;
      }
}

export default UserPrivateRoute;