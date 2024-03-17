import React from "react";
import Title from "./Title";
import OutsideClickHandler from "react-outside-click-handler";
import Image from "next/image";
import { IoIosCloseCircleOutline } from "react-icons/io";

const Search = (props) => {
  const { setİsSearchModa } = props;
  return (
    <div
      className="fixed
     w-screen h-screen 
      top-0 left-0 
      after:content-[''] 
      after:w-screen after:h-screen
       after:bg-white after:opacity-70 after:absolute 
       after:top-0 after:left-0 first-of-type:h-screen grid place-content-center "
    >
      <OutsideClickHandler onOutsideClick={() => setİsSearchModa(false)}>
        <div className="w-full h-full grid place-content-center">
          <div className="relative z-50  w-[600px] h-[600px] bg-white border-2 p-5">
            <Title addClass="text-[40px] text-center text-primary ">
              Search
            </Title>
            <input
              type="text"
              placeholder="Seacrh.."
              className="border w-full my-10"
            />
            <div>
              <ul className="my-10">
                <li className="flex items-center justify-between p-2 hover:bg-primary cursor-pointer ease-in duration-200">
                  <div className="relative flex">
                    <Image
                      src={"/public/favicon.icon"}
                      width={48}
                      height={48}
                      alt="İcon image"
                    />
                  </div>
                  <span className="font-bold">Good Pizza</span>
                  <span className="font-bold">$10</span>
                </li>
              </ul>
              <button
                onClick={() => setİsSearchModa(false)}
                className="absolute top-5 right-5  text-gray-500 hover:text-primary ease-in duration-200
              "
              >
                <IoIosCloseCircleOutline size={30} />
              </button>
            </div>
          </div>
        </div>
      </OutsideClickHandler>
    </div>
  );
};

export default Search;
