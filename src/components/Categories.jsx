import React from "react";

const Categories = () => {
  const logos = [
    "./assets/partner-byredo-logo.png",
    "./assets/partner-tom-ford-logo.png",
    "./assets/partner-maison-francis-kurkdjian-logo.png",
    "./assets/partner-le-labo-logo.png",
    "./assets/logo-chanel-esntl.png",
    "./assets/logo-dior-esntl.png",
    "./assets/logo-creed-esntl.png",
  ];
  return (
    <div className="bg-[#fafafa] min-h-[46px] flex items-center relative overflow-hidden">
      <span className="h-[1px] border-t-[1px] border-t-[#efefef] border-dashed z-[99] absolute w-[100vw] top-0 left-[50%] translate-x-[-50%]"></span>
      <div className="container flex flex-wrap logos-contianer items-center h-full px-4 sm:px-[1.25rem]">
        {logos.map((brand, index) => (
          <a key={brand} href="#" className="modal_one_toggle">
            <img
              src={brand}
              className={`lazy-load ${
                index === 4 ? "md:w-[60px]" : "md:w-[70px]"
              } w-[40px] min-w-[40px]`}
              alt="logo"
            />
          </a>
        ))}
      </div>
      <span className="h-[1px] border-t-[1px] border-t-[#efefef] border-dashed z-[99] absolute w-[100vw] bottom-0 left-[50%] translate-x-[-50%]"></span>
    </div>
  );
};

export default Categories;
