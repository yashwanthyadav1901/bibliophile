import React from "react";
import { IoMdMenu } from "react-icons/io";
import { FaBookReader } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";
import { IoMdMoon } from "react-icons/io";
import { LuSunMedium } from "react-icons/lu";

const Header = ({ open, isOpen, darkMode, isDarkMode }) => {
  return (
    <div className="div-full py-3 bg-white-light dark:bg-black-shade   flex justify-between border-b border-black-shade dark:border-white-trans ">
      <div className="inline-flex">
        <IoMdMenu
          className="text-black-shade dark:text-white-light mx-1 text-4xl block cursor-pointer hover:bg-grey-shade dark:hover:bg-white-trans"
          onClick={() => {
            isOpen();
          }}
        />
        <FaBookReader
          className={`text-purple bg-grey-shade dark:bg-white-trans rounded p-1 ml-3 text-4xl block float-left mr-2 cursor-pointer duration-500 ${
            !open && "rotate-[360deg]"
          }`}
        />
        <h1
          className={`text-black-shade dark:text-white-light text-3xl ml origin-left duration-300 font-medium ${
            !open ? "" : ""
          }`}
        >
          Bibliophile
        </h1>
      </div>
      <div
        className={`flex items-center rounded-md bg-grey-shade dark:bg-white-trans w-2/5 ${
          !open ? "px-2.5" : "px-4"
        }  `}
      >
        <CiSearch
          className={`text-black-shade dark:text-white-light text-lg block float-left cursor-pointer ${
            open && "mr-2"
          }`}
        />
        <input
          type="search"
          placeholder="search by title"
          className={`text-base bg-transparent w-full text-black-shade dark:text-white-light focus:outline-none  ${
            !open && ""
          }`}
        />
      </div>
      <div>
        <button
          onClick={() => {
            isDarkMode();
          }}
        >
          {darkMode ? (
            <IoMdMoon className="text-black-shade dark:text-white-light  mx-3 text-3xl  block cursor-pointer hover:bg-white-trans" />
          ) : (
            <LuSunMedium className="text-black-shade dark:text-white-light mx-3 text-3xl  block cursor-pointer hover:bg-grey-shade" />
          )}
        </button>
      </div>
    </div>
  );
};

export default Header;
