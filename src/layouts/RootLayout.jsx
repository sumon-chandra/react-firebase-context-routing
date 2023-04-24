import React from "react";
import Navbar from "../components/navbar/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";

const RootLayout = () => {
  return (
    <>
      <Navbar />
      <main className="px-6 lg:px-32 mx-auto">
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default RootLayout;
