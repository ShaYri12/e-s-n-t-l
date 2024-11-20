import React from "react";
import { IoCloseSharp } from "react-icons/io5";

const TextArea = () => {
  return (
    <div className="text_area relative bg-[#fafafa] overflow-hidden">
      <div className="container pb-[50px] px-[1.25rem]">
        <div className="text_content pb-[10px] mb-[30px] relative">
          <div className="text_top flex items-center justify-between h-10 pl-[25px] pr-0 relative mb-2">
            <span className="h-[1px] border-t-[1px] border-t-[#efefef] border-dashed z-[99] absolute w-[100vw] top-0 left-[50%] translate-x-[-50%]"></span>
            <h1 className="text-[16px] font-bold text-[#001623]">
              ESNTL: Parfum Olie
            </h1>
            <button className="close">
              <IoCloseSharp />
            </button>
            <span className="h-[1px] border-t-[1px] border-t-[#efefef] border-dashed z-[99] absolute w-[100vw] bottom-0 left-[50%] translate-x-[-50%]"></span>
          </div>
          <div className="border-l-[3px] border-l-[#ff6800] pt-3 pb-3 pl-6 pr-7 bg-[#F6F6F6] rounded-md">
            <p className="text-[#111116] opacity-[0.8] text-[14px] leading-[1.7]">
              ESNTL is jouw bestemming voor exclusieve parfumolies die
              geïnspireerd zijn op geuren van designers zoals{" "}
              <a
                href="#"
                className="text-[#515151] underline hover:text-[#111116] hover:no-underline"
              >
                Maison Francis Kurkdjian,
              </a>{" "}
              <a
                href="#"
                className="text-[#515151] underline hover:text-[#111116] hover:no-underline"
              >
                Tom Ford,
              </a>
              <a
                href="#"
                className="text-[#515151] underline hover:text-[#111116] hover:no-underline"
              >
                Byredo,
              </a>{" "}
              <a
                href="#"
                className="text-[#515151] underline hover:text-[#111116] hover:no-underline"
              >
                Gucci,
              </a>
              <a
                href="#"
                className="text-[#515151] underline hover:text-[#111116] hover:no-underline"
              >
                Yves Saint Laurent
              </a>{" "}
              <a
                href="#"
                className="text-[#515151] underline hover:text-[#111116] hover:no-underline"
              >
                Le Labo,
              </a>
              <a
                href="#"
                className="text-[#515151] underline hover:text-[#111116] hover:no-underline"
              >
                Dior,
              </a>
              <a
                href="#"
                className="text-[#515151] underline hover:text-[#111116] hover:no-underline"
              >
                Bond no.9
              </a>{" "}
              en veel meer.
            </p>
            <hr className="pt-3 pb-3 border-[0]" />
            <p className="text-[#111116] text-[14px] leading-[1.7] opacity-[0.8]">
              Onze hoogwaardige parfumolie biedt dezelfde luxe geurervaring als
              de designer parfums, maar dan tegen een fractie van de prijs.
            </p>
          </div>
          <span className="h-[1px] border-t-[1px] border-t-[#efefef] border-dashed z-[99] absolute w-[100vw] bottom-0 left-[50%] translate-x-[-50%]"></span>
        </div>
        <div className="text_content relative">
          <div className="text_top flex items-center justify-between h-10 pl-[25px] pr-0 relative">
            <span className="h-[1px] border-t-[1px] border-t-[#efefef] border-dashed z-[99] absolute w-[100vw] top-0 left-[50%] translate-x-[-50%]"></span>
            <h2 className="text-[16px] font-bold text-[#001623]">Geuren</h2>
            <button className="close">
              <IoCloseSharp />
            </button>
            <span className="h-[1px] border-t-[1px] border-t-[#efefef] border-dashed z-[99] absolute w-[100vw] bottom-0 left-[50%] translate-x-[-50%]"></span>
          </div>
          <div className="pt-3 pb-6 pl-6 pr-7">
            <p className="text-[#111116] text-[14px] leading-[1.7] opacity-[0.8]">
              ESNTL is jouw bestemming voor exclusieve parfumolies die
              geïnspireerd zijn op geuren van designers zoals Maison Francis
              Kurkdjian, Tom Ford, Byredo, Gucci, Yves Saint Laurent, Le Labo,
              Dior, Bond no.9 en veel me.<span className="ellipses">....</span>
              <span className="see_more_conetnt">
                Onze hoogwaardige parfumolie biedt dezelfde luxe geurervaring
                als de designer parfums, maar dan tegen een fractie van de
                prijs.
              </span>
            </p>
            <button className="see_more_and_less_btn text-center text-[#006cff] text-[15px] font-medium pt-7 w-full">
              Klik hier voor meer
            </button>
          </div>

          <span className="h-[1px] border-t-[1px] border-t-[#efefef] border-dashed z-[99] absolute w-[100vw] bottom-0 left-[50%] translate-x-[-50%]"></span>
        </div>
      </div>
      <span className="h-[1px] border-t-[1px] border-t-[#efefef] border-dashed z-[99] absolute w-[100vw] bottom-0 left-[50%] translate-x-[-50%]"></span>
    </div>
  );
};

export default TextArea;
