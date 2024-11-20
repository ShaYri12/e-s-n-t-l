import React from "react";

const ServiceBox = ({ iconSrc, title, description, iconWidth }) => {
  return (
    <div className="service_box flex items-center justify-center py-8">
      <div className="text-center">
        <div className="service_icon flex items-center justify-center h-[35px]">
          <img
            src={iconSrc}
            alt={title}
            style={{ width: iconWidth }}
            className={`lazy-load`}
          />
        </div>
        <h3 className="font-bold text-[#111116] text-sm pt-4 pb-2">{title}</h3>
        <p className="text-[#111116] text-xs">{description}</p>
      </div>
    </div>
  );
};

const Services = () => {
  const services = [
    {
      iconSrc: "/assets/reviews-icon-service.png",
      title: "Als best beoordeeld",
      description: "Beste parfumerie NL",
      iconWidth: "50px",
    },
    {
      iconSrc: "/assets/betaling-icon-service.png",
      title: "Veilig betalen",
      description: "Betaal met iDeal/Klarna",
      iconWidth: "33px",
    },
    {
      iconSrc: "/assets/bezorging-icon-service.png",
      title: "Gratis bezorging",
      description: "Binnen 24/u verzonden",
      iconWidth: "45px",
    },
    {
      iconSrc: "/assets/kwaliteit-icon-service.png",
      title: "100% Kwaliteit",
      description: "Alleen de hoogste kwaliteit",
      iconWidth: "40px",
    },
  ];

  return (
    <div className="service_area bg-[#F6F6F6] relative md:px-6 px-4">
      <div className="container grid lg:grid-cols-4 grid-cols-2 gap-4">
        {services.map((service, idx) => (
          <ServiceBox
            key={idx}
            iconSrc={service.iconSrc}
            title={service.title}
            description={service.description}
            iconWidth={service.iconWidth}
          />
        ))}
      </div>
      <span className="h-[1px] border-t border-dashed border-[#efefef] absolute w-full bottom-[-20px] left-1/2 transform -translate-x-1/2"></span>
    </div>
  );
};

export default Services;
