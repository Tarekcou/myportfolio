import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";

const MainLayout = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div className="relative">
      <div
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          isScrolled
            ? " backdrop-blur-md shadow-lg bg-base-100"
            : "bg-transparent"
        }`}
      >
        <Navbar />
      </div>
      <div className="my-20 min-h-[calc(100vh-60px)]">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default MainLayout;
