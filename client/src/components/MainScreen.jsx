import React, { useState } from "react";
import SideBar from "./SideBar";
import Header from "./Header";

const MainScreen = () => {
  const [open, setOpen] = useState(true);

  const isOpen = () => {
    setOpen(!open);
  };
  return (
    <div>
      <Header open={open} isOpen={isOpen} />
      <div className="flex">
        <SideBar open={open} isOpen={isOpen} />
        <div className="p-7">
          <h1>homepage</h1>
        </div>
      </div>
    </div>
  );
};

export default MainScreen;
