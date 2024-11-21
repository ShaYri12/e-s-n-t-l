import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const CustomSlider = () => {
  const slides = [
    {
      id: 1,
      image: "/assets/promotie-tom-ford-lost-cherry.png",
      title: "Tom Ford Mandarino di Amalfi",
      description: (
        <p className="text-[#fff] uppercase sm:text-[16px] text-[14px]">
          <span className="font-medium">mandarino di amalfi.</span> Een
          exclusief hoogwaardig parfum geïnspireerd op amalfi. Een prachtig
          kustdorpje aan de amalfikust in de provincie salerno.
        </p>
      ),
    },
    {
      id: 2,
      image: "/assets/promotie-tom-ford-lost-cherry.png",
      title: "Tom Ford Mandarino di Amalfi",
      description: (
        <p className="text-[#fff] uppercase sm:text-[16px] text-[14px]">
          <span className="font-medium">mandarino di amalfi.</span> Een
          exclusief hoogwaardig parfum geïnspireerd op amalfi. Een prachtig
          kustdorpje aan de amalfikust in de provincie salerno.
        </p>
      ),
    },
    {
      id: 3,
      image: "/assets/promotie-tom-ford-lost-cherry.png",
      title: "Tom Ford Mandarino di Amalfi",
      description: (
        <p className="text-[#fff] uppercase sm:text-[16px] text-[14px]">
          <span className="font-medium">mandarino di amalfi.</span> Een
          exclusief hoogwaardig parfum geïnspireerd op amalfi. Een prachtig
          kustdorpje aan de amalfikust in de provincie salerno.
        </p>
      ),
    },
  ];

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    customPaging: () => (
      <div className="flex items-center justify-center">
        <span className="dot rounded-full transition-all duration-300"></span>
      </div>
    ),
    appendDots: (dots) => (
      <div className="absolute bottom-4 left-4">
        <ul className="flex gap-[1px]">{dots}</ul>
      </div>
    ),
    responsive: [
      {
        breakpoint: 1024, // For screens <= 1024px
        settings: {
          slidesToShow: 1, // Show only 1 slide
          dots: true,
        },
      },
    ],
  };

  return (
    <div className="container relative w-full overflow-hidden pb-[45px]">
      <div className="text_top flex items-center justify-between min-h-10 md:pl-[25px] md:pr-3 md:px-0 px-3 relative">
        <span className="h-[1px] border-t-[1px] border-t-[#efefef] border-dashed z-[99] absolute w-[100vw] top-0 left-[50%] translate-x-[-50%]"></span>
        <h1 className="text-[17px] font-bold text-[#2f2f2f] sm:pb-0 pb-1">
          Uitgelicht: Tom Ford Mandarino Di Amalfi
        </h1>
      </div>
      <Slider {...settings}>
        {slides.map((slide) => (
          <div key={slide.id} className="px-[10px]">
            <img
              src={slide.image}
              alt={`Slide ${slide.id}`}
              className="w-full sm:h-[540px] sm:object-cover object-contain"
            />
            <div className="slide_bottom bg-[#000000] px-4 sm:px-7 py-6">
              <h6 className="pb-[8px] text-[#fff] text-[13px] font-black uppercase">
                {slide.title}
              </h6>
              {slide.description}
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default CustomSlider;
