import React from "react";

import { Outlet } from "react-router-dom";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";
//import '../index.css';

const MainLayout = () => {
  return (
    <>
      <div className="container">
        <div className="layout">
          <Navbar />

          <div className="page">
            <Outlet />
          </div>

          <Footer />
        </div>
      </div>
    </>
  );
};

export default MainLayout;
