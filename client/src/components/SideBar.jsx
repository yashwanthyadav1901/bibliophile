import React from "react";
import { FaArrowLeft } from "react-icons/fa";

import { IoLibrary } from "react-icons/io5";
import { FaHeart } from "react-icons/fa";
import { LuBookMarked } from "react-icons/lu";
import { BsCollectionFill } from "react-icons/bs";
import { Link } from "react-router-dom";

const SideBar = ({ open, isOpen }) => {
  const Menus = [
    { title: "Library", icon: <IoLibrary />, to: "/library" },
    { title: "Favourites", icon: <FaHeart />, to: "/favourites" },
    { title: "To be read", icon: <LuBookMarked />, to: "/toberead" },
    { title: "Collections", icon: <BsCollectionFill />, to: "/collections" },
  ];
  return (
    <>
      <div
        className={`bg-white-light dark:bg-black-shade h-screen py-2 px-5 ${
          open ? "w-72" : "w-20"
        } duration-300 border-r border-black-shade dark:border-white-trans`}
      >
        <ul>
          {Menus.map((menu, index) => (
            <>
              <Link to={menu.to}>
                <li
                  key={index}
                  className={`text-dark-shade dark:text-white-light text-sm flex items-center gap-x-4 cursor-pointer p-2 hover:bg-grey-shade dark:hover:bg-white-trans rounded-md my-8`}
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
