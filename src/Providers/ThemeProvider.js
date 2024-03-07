"use client";

import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { useTheme } from "@/context/ThemeContext";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ThemeProvider = ({ children }) => {
  const { darkMode } = useTheme();
  return (
    <div
      className={`${darkMode ? " dark text-white " : " bg-white text-black "}`}
    >
      <ToastContainer />
      <div>
        <div
          className={`${
            darkMode ? " dark text-white " : " bg-white text-black "
          }" navbar bg w-screen sticky top-0 z-50"`}
        >
          <Navbar />
        </div>
        <div className=" mainBox flex flex-col  w-[100vw] min-h-[500px] overflow-x-hidden items-center">
          {children}
        </div>
      </div>
      <div className={`"w-screen"`}>
        <Footer />
      </div>
    </div>
  );
};

export default ThemeProvider;
