import React from "react";
import { IoCloseSharp } from "react-icons/io5";

const Header = () => {
  return (
    <header className="site_header">
      <div className="menu_one bg-[#1e1e1e] py-[9.2px] flex items-center fixed top-0 left-0 w-full z-[999999999]">
        <div className="container">
          <p className="text-center text-white text-[11px]">
            <span className="font-extrabold">80% korting</span> op Designer
            geuren & <span className="font-extrabold">Gratis verzending</span>{" "}
            binnen Nederland &{" "}
            <span className="font-extrabold">Tijdelijk 2+1 Gratis</span>
          </p>
        </div>
      </div>

      <div className="menu_two mt-[33px] lg:h-[80px] h-[65px] flex items-center">
        <div className="container flex justify-between items-center relative w-full h-full pl-10">
          <a href="#" className="logo relative z-[9999]">
            <img src="/assets/logo-esntl.png" className="w-[70px]" alt="logo" />
          </a>

          <div className="menu2_mid flex items-center">
            <div className="flex gap-2 mr-10">
              <a
                href="#"
                className="text-[#050409] text-[12px] gap-4 flex items-center justify-center w-[100px] h-[33px] rounded-full border-[2px] border-[2px]-[#dadbdd]"
              >
                Dames
                <IoCloseSharp />
              </a>
              <a
                href="#"
                className="text-[#050409] text-[12px] gap-4 flex items-center justify-center w-[100px] h-[33px] rounded-full border-[2px] border-[2px]-[#dadbdd]"
              >
                Haren
                <IoCloseSharp />
              </a>
            </div>
            <p className="text-[#414655] text-[12px]">Unisex</p>
          </div>

          <a href="#" className="shopcart relative">
            <img
              src="/assets/cart-icon.png"
              className="w-[28px]"
              alt="shopping"
            />
            <span className="absolute w-[17px] h-[17px] rounded-full bg-[#ff0000] bottom-[-4px] right-[1px] text-[12px] leading-[1px] text-white font-bold flex items-center justify-center">
              1
            </span>
          </a>
        </div>
      </div>

      <div className="menu_two menu_two_fixed lg:h-[80px] h-[65px] w-full flex items-center fixed top-[-80px] left-0 z-[9999999]">
        <div className="container flex justify-between items-center relative h-full w-full pl-10">
          <a href="#" className="logo">
            <img src="./img/logo-ESNTL.svg" className="w-[70px]" alt="logo" />
          </a>

          <div className="menu2_mid flex items-center">
            <div className="flex gap-2 mr-10">
              <a
                href="#"
                className="text-[#050409] text-[12px] gap-4 flex items-center justify-center w-[100px] h-[33px] rounded-full border-[2px] border-[#dadbdd]"
              >
                Dames
                <IoCloseSharp />
              </a>
              <a
                href="#"
                className="text-[#050409] text-[12px] gap-4 flex items-center justify-center w-[100px] h-[33px] rounded-full border-[2px] border-[#dadbdd]"
              >
                Haren
                <IoCloseSharp />
              </a>
            </div>
            <p className="text-[#414655] text-[12px]">Unisex</p>
          </div>

          <a href="#" className="shopcart relative">
            <img
              src="./img/shopping-cart.svg"
              className="w-[23px]"
              alt="shopping"
            />
            <span className="absolute size-[18px] rounded-full bg-[#ff0000] bottom-[-4px] right-[-7px] text-[13px] text-white font-bold flex items-center justify-center">
              1
            </span>
          </a>
        </div>
        <div className="progress-bar-container overflow-hidden z-[99999] w-full left-0 h-[2px] bg-transparent bottom-[-1px] absolute block">
          <div className="progress-bar bg-black h-full block"></div>
        </div>
      </div>
    </header>
  );
};

export default Header;
