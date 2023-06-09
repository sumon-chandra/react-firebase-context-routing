import React from "react";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import RootLayout from "./layouts/RootLayout";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import PrivateRoute from "./routes/PrivateRoute";
import Admin from "./pages/Admin";
import About from "./pages/About";
import Services from "./pages/Services";

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="about" element={<About />} />
        <Route path="services" element={<Services />} />
        <Route element={<PrivateRoute />}>
          <Route path="admin" element={<Admin />} />
        </Route>
      </Route>
    )
  );
  return <RouterProvider router={router} />;
};

export default App;
