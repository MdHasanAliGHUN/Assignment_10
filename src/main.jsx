import { createRoot } from "react-dom/client";
import "./index.css";
import  'sweetalert2/dist/sweetalert2.js'
import App from "./App.jsx";
import { BrowserRouter, Route, Routes } from "react-router";
import Home from "./pages/Home/Home.jsx";
import ErrorPage from "./components/ErrorPage/ErrorPage.jsx";
import Pricing from "./pages/Home/Pricing.jsx";
import Services from "./pages/Home/Services.jsx";
import Blogs from "./pages/Home/Blogs.jsx";
import Login from "./components/Login/Login.jsx";
import Register from "./components/Register/Register.jsx";
import AuthProvider from "./context/AuthContext.jsx";
import PrivateRoute from "./privateRoutes/PrivateRoute.jsx";
import Dashboard from "./pages/dashboard/Dashboard.jsx";

createRoot(document.getElementById("root")).render(
  <AuthProvider>
    <BrowserRouter>
      <Routes>
        <Route element={<App />}>
          <Route path="/" element={<Home />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/services" element={<Services />} />
          <Route path="/blogs" element={<Blogs />} />
        </Route>
        <Route path="*" element={<ErrorPage />} />
        {/* Authentication routes */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* Dashboard  */}
        <Route path="/dashboard" element={<PrivateRoute><Dashboard/></PrivateRoute>} />
      </Routes>
    </BrowserRouter>
  </AuthProvider>,
);
