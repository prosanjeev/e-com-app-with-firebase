import {
  BrowserRouter as Router,
  Route,
  Routes,
  Outlet,
  Navigate,
} from "react-router-dom";
import Home from "./pages/home/Home";
import Order from "./pages/order/Order";
import Cart from "./pages/cart/Cart";
import Dashboard from "./pages/admin/dashboard/Dashboard";
import NoPage from "./pages/nopage/NoPage";
import MyState from "./context/data/myState";
import Layout from "./components/layout/Layout";
import Signup from "./pages/auth/Signup";
import Login from "./pages/auth/Login";
import ProductInfo from "./pages/productInfo/ProductInfo";
import AddProduct from "./pages/admin/pages/AddProduct";
import UpdateProduct from "./pages/admin/pages/UpdateProduct";
import AllProduct from "./pages/allproducts/AllProducts";
import AllOrder from "./pages/order/AllOrder";

const App = () => {
  return (
    <MyState>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="" element={<Home />} />
            <Route
              path="/order"
              element={
                <ProtectedRoutes>
                  <Order />
                </ProtectedRoutes>
              }
            />
            <Route path="/allorder" element={<AllOrder/>} />
            <Route path="/cart" element={<Cart />} />

            {/* <Route path="/dashboard" element={ <ProtectedRoutesForAdmin><Dashboard /></ProtectedRoutesForAdmin> } /> */}
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/*" element={<NoPage />} />
            <Route path="/productinfo/:id" element={<ProductInfo />} />
            <Route path="/add-product" element={<AddProduct />} />
            <Route path="/update-product" element={<UpdateProduct />} />
            <Route path="/allproducts" element={<AllProduct />} />
          </Route>
          <Route path="/signup*" element={<Signup />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </Router>
    </MyState>
  );
};

export default App;

export const ProtectedRoutes = () => {
  if (localStorage.getItem("user")) {
    return <Outlet />;
  } else {
    return <Navigate to="/login" />;
  }
};

export const ProtectedRoutesForAdmin = () => {
  const admin = JSON.parse(localStorage.getItem("user"));
  console.log(admin.user.email);
  if (admin.user.email === "sanjeevcse2k23@gmail.com") {
    return <Outlet />;
  } else {
    return <Navigate to="/login" />;
  }
};
