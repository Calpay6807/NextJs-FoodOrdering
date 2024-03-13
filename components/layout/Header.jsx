import React from "react";
import Logo from "../ui/Logo";
import { FaUser } from "react-icons/fa6";
import { FaShoppingCart } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
const Header = () => {
  return (
    <div className="h-[5.5rem]  bg-secondary ">
      <div className="container mx-auto text-white flex justify-between items-center h-full">
        <div>
          <Logo />
        </div>
        <nav>
          <ul className="flex gap-x-2">
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
          <a href="">
            <FaUser />
          </a>
          <a href="">
            <FaShoppingCart />
          </a>
          <a href="">
            <FaSearch />
          </a>
          <button className="btn-primary">Order Online</button>
        </div>
      </div>
    </div>
  );
};

export default Header;
