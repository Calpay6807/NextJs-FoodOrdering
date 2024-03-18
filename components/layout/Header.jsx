import React, { useState } from "react";
import Logo from "../ui/Logo";
import { FaUser } from "react-icons/fa6";
import { FaShoppingCart } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import Search from "../ui/Search";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoIosCloseCircleOutline } from "react-icons/io";

const Header = () => {
  const [isSerachModal, setİsSearchModa] = useState(false);
  const [isMenuModal, setİsMenuModa] = useState(false);
  return (
    <div className="h-[5.5rem]  bg-secondary ">
      <div className="container mx-auto text-white flex justify-between items-center h-full">
        <div>
          <Logo />
        </div>
        <nav
          className={`sm:static absolute top-0 left-0 sm:flex hidden  sm:w-auto sm:h-auto w-full h-full sm:text-white text-black sm:bg-transparent bg-white ${
            isMenuModal === true && "!grid place-content-center"
          }`}
        >
          <ul className="flex gap-x-2 sm:flex-row items-center flex-col ">
            <li className="px-[5px] py-[20px] uppercase hover:text-primary cursor-pointer">
              <a href="">Home</a>
            </li>
            <li className="px-[5px] py-[20px] uppercase hover:text-primary cursor-pointer">
              <a href="">Menu</a>
            </li>{" "}
            <li className="px-[5px] py-[20px] uppercase hover:text-primary cursor-pointer">
              <a href="">About</a>
            </li>{" "}
            <li className="px-[5px] py-[20px] uppercase hover:text-primary cursor-pointer">
              <a href="">Book Table</a>
            </li>
          </ul>
        </nav>
        <div className="flex gap-x-4 items-center">
          <a href="" className="hover:text-primary">
            <FaUser />
          </a>
          <a href="" className="hover:text-primary">
            <FaShoppingCart />
          </a>
          <button
            onClick={() => setİsSearchModa(true)}
            href=""
            className="hover:text-primary "
          >
            <FaSearch />
          </button>
          <a href="" className="md:inline-block hidden">
            <button className="btn-primary">Order Online</button>
          </a>
          <button onClick={() => setİsMenuModa(true)}>
            <GiHamburgerMenu />
          </button>
          {isMenuModal && (
            <button
              onClick={() => setİsMenuModa(false)}
              className="absolute top-5 right-5  text-gray-500 hover:text-primary ease-in duration-200
              "
            >
              <IoIosCloseCircleOutline size={30} />
            </button>
          )}
        </div>
      </div>
      {isSerachModal && <Search setİsSearchModa={setİsSearchModa} />}
    </div>
  );
};

export default Header;
