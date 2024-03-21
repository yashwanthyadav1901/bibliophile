import React from "react";
import { IoMdMenu } from "react-icons/io";
import { FaBookReader } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";
import { IoMdMoon } from "react-icons/io";

const Header = ({ open, isOpen }) => {
  return (
    <div className="div-full py-2 bg-dark flex justify-between">
      <div className="inline-flex">
        <IoMdMenu
          className="text-white mx-1 text-4xl block cursor-pointer hover:bg-shade"
          onClick={() => {
            isOpen();
          }}
        />
        <FaBookReader
          className={`text-purple bg-light rounded p-1 ml-3 text-4xl block float-left mr-2 cursor-pointer duration-500 ${
            !open && "rotate-[360deg]"
          }`}
        />
        <h1
          className={`text-white text-3xl ml origin-left duration-300 font-medium ${
            !open ? "" : ""
          }`}
        >
          Bibliophile
        </h1>
      </div>
      <div
        className={`flex items-center rounded-md bg-shade ${
          !open ? "px-2.5" : "px-4"
        }  `}
      >
        <CiSearch
          className={`text-white text-lg block float-left cursor-pointer ${
            open && "mr-2"
          }`}
        />
        <input
          type="search"
          placeholder="search by title"
          className={`text-base bg-transparent w-full text-white focus:outline-none  ${
            !open && ""
          }`}
        />
      </div>
      <div>
        <IoMdMoon className="text-white mx-1 text-4xl block cursor-pointer hover:bg-shade" />
      </div>
    </div>
  );
};

export default Header;
