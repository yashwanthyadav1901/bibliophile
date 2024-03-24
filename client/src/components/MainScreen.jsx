import React, { useState } from "react";
import SideBar from "./SideBar";
import Header from "./Header";
import { Outlet } from "react-router-dom";

const MainScreen = () => {
  const [open, setOpen] = useState(true);
  const [darkMode, setDarkMode] = useState(true);

  const isOpen = () => {
    setOpen(!open);
  };

  const isDarkMode = () => {
    setDarkMode(!darkMode);
  };
  return (
    <div className={darkMode && "dark"}>
      <Header
        open={open}
        isOpen={isOpen}
        darkMode={darkMode}
        isDarkMode={isDarkMode}
      />
      <div className="flex">
        <SideBar open={open} isOpen={isOpen} />
        <Outlet />
      </div>
    </div>
  );
};

export default MainScreen;
