import React from "react";
import { IoMdCheckmark } from "react-icons/io";

const Tikmarks = () => {
  return (
    <div className="tikmark_area bg-[#fafafa] flex items-center relative overflow-hidden">
      <div className="container py-[10px] px-[1.25rem]">
        <ul className="flex items-center sm:justify-center justify-between sm:gap-14 gap-x-4 gap-y-2 flex-wrap">
          <li className="flex items-center text-[12px] text-[#3d3d3d] gap-5">
            <IoMdCheckmark className="text-green-500 w-3" />
            <p>Gratis verzending</p>
          </li>
          <li className="flex items-center text-[12px] text-[#3d3d3d] gap-5">
            <IoMdCheckmark className="text-green-500 w-3" />
            <p>Als best beoordeeld</p>
          </li>
          <li className="flex items-center text-[12px] text-[#3d3d3d] gap-5">
            <IoMdCheckmark className="text-green-500 w-3" />
            <p>Niet goed? Geld terug</p>
          </li>
        </ul>
      </div>
      <span className="h-[1px] border-t-[1px] border-t-[#efefef] border-dashed z-[99] absolute w-[100vw] bottom-0 left-[50%] translate-x-[-50%]"></span>
    </div>
  );
};

export default Tikmarks;
