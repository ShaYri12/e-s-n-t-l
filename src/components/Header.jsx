// import React, { useEffect, useRef, useState } from "react";
// import { IoCloseSharp } from "react-icons/io5";

// const Header = () => {
//   const [isSticky, setIsSticky] = useState(false);
//   const [scrollProgress, setScrollProgress] = useState(0);
//   const [bannerHeight, setBannerHeight] = useState(0);
//   const bannerRef = useRef(null); // Ref to access banner element

//   useEffect(() => {
//     // Make sure the script only runs on the client-side
//     if (typeof window === "undefined") return;

//     const handleScroll = () => {
//       // Get the current scroll position
//       const scrollTop = window.scrollY;

//       // Get the height of the first menu (banner)
//       const bannerHeight = document.querySelector(".banner")?.offsetHeight || 0;

//       // Check if we have scrolled past the height of banner
//       if (scrollTop >= bannerHeight) {
//         setIsSticky(true); // Set menu_two as sticky
//       } else {
//         setIsSticky(false); // Remove sticky class
//       }

//       // Calculate the scroll progress as a percentage
//       const scrollHeight =
//         document.documentElement.scrollHeight - window.innerHeight;
//       const progress = (scrollTop / scrollHeight) * 100;
//       setScrollProgress(progress); // Update progress bar
//     };

//     // Add the scroll event listener to the window
//     window.addEventListener("scroll", handleScroll);

//     // Clean up the event listener on component unmount
//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//     };
//   }, []);

//   // Using useEffect to set bannerHeight when the component mounts
//   useEffect(() => {
//     if (bannerRef.current) {
//       setBannerHeight(bannerRef.current.offsetHeight); // Get height of banner
//     }

//     // Optionally, update the height if the window resizes
//     const handleResize = () => {
//       if (bannerRef.current) {
//         setBannerHeight(bannerRef.current.offsetHeight); // Recalculate height
//       }
//     };

//     window.addEventListener("resize", handleResize); // Listen for resize events

//     return () => {
//       window.removeEventListener("resize", handleResize); // Cleanup the listener
//     };
//   }, []);

//   return (
//     <header className="site_header">
//       {/* Top Menu */}
//       <div
//         ref={bannerRef}
//         className="banner bg-[#1e1e1e] py-[9.2px] flex items-center fixed top-0 left-0 w-full z-[999999999]"
//       >
//         <div className="container px-3 md:px-[1.25rem]">
//           <p className="text-center text-white text-[11px]">
//             <span className="font-extrabold">80% korting</span> op Designer
//             geuren & <span className="font-extrabold">Gratis verzending</span>{" "}
//             binnen Nederland &{" "}
//             <span className="font-extrabold">Tijdelijk 2+1 Gratis</span>
//           </p>
//         </div>
//       </div>

//       {/* Menu Two (with dynamic margin-top) */}
//       <div
//         className="lg:h-[80px] h-[65px] flex items-center"
//         style={{ marginTop: bannerHeight }}
//       >
//         <div className="container flex justify-between items-center relative w-full h-full px-[0.8rem] sm:px-[1.25rem]">
//           <div className="flex items-center gap-8">
//             <a href="#" className="logo relative z-[9999]">
//               <img
//                 src="/assets/logo-esntl.png"
//                 className="w-[70px]"
//                 alt="esntl logo"
//               />
//             </a>
//             <div className="gap-2 sm:mr-10 sm:flex hidden">
//               <a
//                 href="#"
//                 className="text-[#050409] group uppercase md:text-[12px] text-[10px] sm:gap-2 gap-1 flex items-center justify-center px-3 py-2 rounded-full hover:border-[1px] hover:border-[#dadbdd]"
//               >
//                 Verzending
//                 <IoCloseSharp className="group-hover:flex hidden" />
//               </a>
//               <a
//                 href="#"
//                 className="text-[#050409] group uppercase md:text-[12px] text-[10px] sm:gap-2 gap-1 flex items-center justify-center px-3 py-2 rounded-full hover:border-[1px] hover:border-[#dadbdd]"
//               >
//                 Retourbeleid
//                 <IoCloseSharp className="group-hover:flex hidden" />
//               </a>
//             </div>
//           </div>

//           <div className="flex items-center gap-8">
//             <span className="w-[65px] sm:flex hidden">
//               <img src="/assets/trustpilot.png" alt="trustpilot esntl" />
//             </span>
//             <a href="#" className="shopcart relative">
//               <img
//                 src="/assets/cart-icon.png"
//                 className="w-[28px]"
//                 alt="shopping"
//               />
//               <span className="absolute w-[17px] h-[17px] rounded-full bg-[#ff0000] bottom-[-4px] right-[1px] text-[12px] leading-[1px] text-white font-bold flex items-center justify-center">
//                 1
//               </span>
//             </a>
//           </div>
//         </div>
//       </div>

//       {/* Sticky Second Menu with Progress Bar */}
//       <div
//         className="lg:h-[80px] h-[65px] w-full flex items-center fixed left-0 z-[9999999] bg-white shadow-md"
//         style={{
//           top: `${bannerHeight}px`,
//           display: isSticky ? "flex" : "none",
//         }}
//       >
//         <div className="container flex justify-between items-center relative h-full w-full pl-10">
//           <a href="#" className="logo">
//             <img src="./img/logo-ESNTL.svg" className="w-[70px]" alt="logo" />
//           </a>

//           <div className="menu2_mid flex items-center">
//             <div className="flex gap-2 mr-10">
//               <a
//                 href="#"
//                 className="text-[#050409] text-[12px] gap-4 flex items-center justify-center w-[100px] h-[33px] rounded-full border-[2px] border-[#dadbdd]"
//               >
//                 Dames
//                 <IoCloseSharp />
//               </a>
//               <a
//                 href="#"
//                 className="text-[#050409] text-[12px] gap-4 flex items-center justify-center w-[100px] h-[33px] rounded-full border-[2px] border-[#dadbdd]"
//               >
//                 Haren
//                 <IoCloseSharp />
//               </a>
//             </div>
//             <p className="text-[#414655] text-[12px]">Unisex</p>
//           </div>

//           <a href="#" className="shopcart relative">
//             <img
//               src="./img/shopping-cart.svg"
//               className="w-[23px]"
//               alt="shopping"
//             />
//             <span className="absolute size-[18px] rounded-full bg-[#ff0000] bottom-[-4px] right-[-7px] text-[13px] text-white font-bold flex items-center justify-center">
//               1
//             </span>
//           </a>
//         </div>

//         {/* Progress Bar */}
//         <div className="progress-bar-container overflow-hidden w-full h-[4px] bg-gray-200 absolute bottom-0 left-0">
//           <div
//             className="progress-bar bg-black h-full transition-all"
//             style={{ width: `${scrollProgress}%` }}
//           ></div>
//         </div>
//       </div>
//     </header>
//   );
// };

// export default Header;


import React, { useEffect, useRef, useState } from "react";
import { IoCloseSharp } from "react-icons/io5";
import { throttle } from "lodash";

const Header = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [menuOneHeight, setMenuOneHeight] = useState(0);
  const menuOneRef = useRef(null); // Ref to access menu_one element

  useEffect(() => {
    if (typeof window === "undefined") return;

    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const documentHeight = document.documentElement.scrollHeight;
      const viewportHeight = window.innerHeight;
      const scrollableHeight = documentHeight - viewportHeight;

      console.log("Scroll Top:", scrollTop);
      console.log("Document Height:", documentHeight);
      console.log("Viewport Height:", viewportHeight);
      console.log("Scrollable Height:", scrollableHeight);

      // Check sticky state
      const menuOneHeight =
        document.querySelector(".menu_one")?.offsetHeight || 0;
      setIsSticky(scrollTop >= menuOneHeight);

      // Calculate progress
      if (scrollableHeight > 0) {
        const progress = (scrollTop / scrollableHeight) * 100;
        setScrollProgress(progress);
      } else {
        setScrollProgress(0);
      }
    };

    window.addEventListener("scroll", handleScroll, true);
    handleScroll(); // Initialize values on mount

    return () => {
      window.removeEventListener("scroll", handleScroll, true);
    };
  }, []);

  useEffect(() => {
    if (menuOneRef.current) {
      setMenuOneHeight(menuOneRef.current.offsetHeight);
    }

    const handleResize = () => {
      if (menuOneRef.current) {
        setMenuOneHeight(menuOneRef.current.offsetHeight);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <header className="site_header">
      {/* Top Menu */}
      <div
        ref={menuOneRef}
        className="menu_one bg-[#1e1e1e] py-[9.2px] flex items-center fixed top-0 left-0 w-full z-[999999999]"
      >
        <div className="container px-3 md:px-[1.25rem]">
          <p className="text-center text-white text-[11px]">
            <span className="font-extrabold">80% korting</span> op Designer
            geuren & <span className="font-extrabold">Gratis verzending</span>{" "}
            binnen Nederland &{" "}
            <span className="font-extrabold">Tijdelijk 2+1 Gratis</span>
          </p>
        </div>
      </div>

      {/* Menu Two (with dynamic margin-top) */}
      <div
        className="menu_two lg:h-[80px] h-[65px] flex items-center"
        style={{ marginTop: menuOneHeight }}
      >
        <div className="container flex justify-between items-center relative w-full h-full px-[0.8rem] sm:px-[1.25rem]">
          <div className="flex items-center gap-8">
            <a href="#" className="logo relative z-[9999]">
              <img
                src="/assets/logo-esntl.png"
                className="w-[70px]"
                alt="esntl logo"
              />
            </a>
            <div className="gap-2 sm:mr-10 sm:flex hidden">
              <a
                href="#"
                className="text-[#050409] group uppercase md:text-[12px] text-[10px] sm:gap-2 gap-1 flex items-center justify-center px-3 py-2 rounded-full hover:border-[1px] hover:border-[#dadbdd]"
              >
                Verzending
                <IoCloseSharp className="group-hover:flex hidden" />
              </a>
              <a
                href="#"
                className="text-[#050409] group uppercase md:text-[12px] text-[10px] sm:gap-2 gap-1 flex items-center justify-center px-3 py-2 rounded-full hover:border-[1px] hover:border-[#dadbdd]"
              >
                Retourbeleid
                <IoCloseSharp className="group-hover:flex hidden" />
              </a>
            </div>
          </div>

          <div className="flex items-center gap-8">
            <span className="w-[65px] sm:flex hidden">
              <img src="/assets/trustpilot.png" alt="trustpilot esntl" />
            </span>
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
      </div>

      {/* Sticky Second Menu with Progress Bar */}
      <div
        className="lg:h-[80px] h-[65px] w-full flex items-center fixed left-0 z-[9999999] bg-white shadow-md"
        style={{
          top: `${menuOneHeight}px`,
        }}
      >
        <div className="container flex justify-between items-center relative h-full w-full pl-10">
          <a href="#" className="logo">
            <img src="/assets/logo-esntl.png" className="w-[70px]" alt="logo" />
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
              src="/assets/shopping-cart.svg"
              className="w-[23px]"
              alt="shopping"
            />
            <span className="absolute size-[18px] rounded-full bg-[#ff0000] bottom-[-4px] right-[-7px] text-[13px] text-white font-bold flex items-center justify-center">
              1
            </span>
          </a>
        </div>

        {/* Progress Bar */}
        <div className="progress-bar-container overflow-hidden w-full h-[4px] bg-gray-200 absolute bottom-0 left-0">
          <div
            className="progress-bar bg-black h-full transition-all"
            style={{ width: `${scrollProgress}%` }}
          ></div>
        </div>
      </div>
    </header>
  );
};

export default Header;
