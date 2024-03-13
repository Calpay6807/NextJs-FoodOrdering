import React, { useState } from "react";
import Logo from "../ui/Logo";
import { FaUser } from "react-icons/fa6";
import { FaShoppingCart } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import OutsideClickHandler from "react-outside-click-handler";
import Title from "../ui/Title";
const Header = () => {
  const [isSerachModal, setİsSearchModa] = useState(false);
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
          <a href="" className="hover:text-primary">
            <FaUser />
          </a>
          <a href="" className="hover:text-primary">
            <FaShoppingCart />
          </a>
          <button
            onClick={() => setİsSearchModa(true)}
            href=""
            className="hover:text-primary"
          >
            <FaSearch />
          </button>
          <button className="btn-primary">Order Online</button>
        </div>
      </div>
      {isSerachModal && (
        <OutsideClickHandler onOutsideClick={() => setİsSearchModa(false)}>
          <div>
            <Title addClass="text-9xl">Search</Title>
          </div>
        </OutsideClickHandler>
      )}
    </div>
  );
};

export default Header;
