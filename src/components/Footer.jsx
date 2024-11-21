import React from "react";

const Footer = () => {
  return (
    <footer className="overflow-hidden md:px-6 px-4">
      <div className="container pb-[60px]">
        <div className="pt-6 pb-6 grid grid-cols-2 relative">
          <div className="">
            <h5 className="pb-4 leading-[1] text-[#111116] text-[15px]">
              Parfum merken
            </h5>
            <ul className="text-[14px] text-[#111116] leading-[1] grid gap-3">
              <li className="hover:text-gray-500">
                <a href="#">Byredo</a>
              </li>
              <li className="hover:text-gray-500">
                <a href="#">Tom Ford</a>
              </li>
              <li className="hover:text-gray-500">
                <a href="#">De Marly</a>
              </li>
              <li>
                <a href="#">Maison Francis Kurkdjian</a>
              </li>
              <li className="hover:text-gray-500">
                <a href="#">Le labo</a>
              </li>
            </ul>
          </div>
          <div className="">
            <h5 className="pb-4 leading-[1] text-[#111116] text-[15px]">
              Meest verkocht
            </h5>
            <ul className="text-[14px] text-[#111116] leading-[1] grid gap-3">
              <li className="hover:text-gray-500">
                <a href="#">Baccarat Rouge 540</a>
              </li>
              <li className="hover:text-gray-500">
                <a href="#">Oud Satin Mood</a>
              </li>
              <li className="hover:text-gray-500">
                <a href="#">Straight to heaven</a>
              </li>
              <li className="hover:text-gray-500">
                <a href="#">Lost Cherry</a>
              </li>
              <li className="hover:text-gray-500">
                <a href="#">Vanille 44</a>
              </li>
            </ul>
          </div>
          <span className="h-[1px] border-t-[1px] border-t-[#efefef] border-dashed z-[99] absolute w-[100vw] bottom-0 left-[50%] translate-x-[-50%]"></span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
