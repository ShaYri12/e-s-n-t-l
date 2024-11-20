import React from "react";

const partners = [
  {
    href: "#",
    src: "/assets/partner-byredo-logo.png",
    alt: "Byredo Logo",
    width: "75px",
    className: "modal_one_toggle",
  },
  {
    href: "#",
    src: "/assets/partner-tom-ford-logo.png",
    alt: "Tom Ford Logo",
    width: "100px",
    className: "modal_two_toggle",
  },
  {
    href: "#",
    src: "/assets/partner-maison-francis-kurkdjian-logo.png",
    alt: "Maison Francis Kurkdjian Logo",
    width: "140px",
  },
  {
    href: "#",
    src: "/assets/partner-le-labo-logo.png",
    alt: "Le Labo Logo",
    width: "90px",
  },
];

const Partners = () => {
  return (
    <div className="md:px-6 px-4 bg-[#FCFCFC] relative overflow-hidden min-h-[75px] sm:h-[75px] h-fit flex items-center mt-[70px] mb-[50px]">
      {/* Dashed line at the top */}
      <span className="absolute top-0 left-1/2 w-full border-t border-dashed border-[#efefef] -translate-x-1/2"></span>

      {/* Partner Logos */}
      <div className="container flex flex-wrap sm:justify-between justify-center items-center opacity-50 sm:gap-x-3 sm:gap-y-3 gap-x-8 gap-y-0">
        {partners.map((partner, idx) => (
          <img
            key={idx}
            src={partner.src}
            alt={partner.alt}
            style={{ width: partner.width }}
            className="lazy-load"
          />
        ))}
      </div>

      {/* Dashed line at the bottom */}
      <span className="absolute bottom-0 left-1/2 w-full border-t border-dashed border-[#efefef] -translate-x-1/2"></span>
    </div>
  );
};

export default Partners;
