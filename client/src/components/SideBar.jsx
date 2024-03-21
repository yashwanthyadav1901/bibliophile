import React from "react";
import { FaArrowLeft } from "react-icons/fa";

import { IoLibrary } from "react-icons/io5";
import { FaHeart } from "react-icons/fa";
import { LuBookMarked } from "react-icons/lu";
import { BsCollectionFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import Header from "./Header";

const SideBar = ({ open, isOpen }) => {
  const Menus = [
    { title: "Library", icon: <IoLibrary /> },
    { title: "Favourites", icon: <FaHeart /> },
    { title: "To be read", icon: <LuBookMarked /> },
    { title: "Collections", icon: <BsCollectionFill /> },
  ];
  return (
    <>
      <div
        className={`bg-dark h-screen py-2 px-5 ${
          open ? "w-72" : "w-20"
        } duration-300 relative`}
      >
        <ul>
          {Menus.map((menu, index) => (
            <>
              <Link to="/home">
                <li
                  key={index}
                  className={`text-gray-300 text-sm flex items-center gap-x-4 cursor-pointer p-2 hover:bg-shade rounded-md my-8`}
                >
                  <span className="text-2xl block float-left">{menu.icon}</span>
                  <span
                    className={`text-base font-medium flex-1 duration-200 ${
                      !open && "hidden"
                    }`}
                  >
                    {menu.title}
                  </span>
                </li>
              </Link>
            </>
          ))}
        </ul>
      </div>
    </>
  );
};

export default SideBar;
