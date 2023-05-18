import { useRef } from "react";

export default function Navbar() {
  const mobileNav = useRef(null);
  const desktopNav = useRef(null);

  const handleMenuOpen = () => {
    mobileNav.current.classList.add("!right-0");
    document.body.style.overflow = "hidden";
  };
  const handleMenuClose = () => {
    mobileNav.current.classList.remove("!right-0");
    document.body.style.overflow = "visible";
  };

  window.addEventListener("scroll", () => {
    if (window.scrollY >= 150) {
      desktopNav.current && desktopNav.current.classList.add("!fixed");
      desktopNav.current && desktopNav.current.classList.add("bg-[#0f051d]");
    } else {
      desktopNav.current && desktopNav.current.classList.remove("!fixed");
      desktopNav.current && desktopNav.current.classList.remove("bg-[#0f051d]");
    }
  });

  return (
    <>
      <nav
        className="flex justify-between px-4 py-7 font-space items-center xl:px-24 absolute top-0 w-full z-20"
        ref={desktopNav}
      >
        <div className="text-3xl font-bold cursor-pointer text-slate-100">
          COINMATRIX
        </div>
        <div
          className="text-3xl text-slate-100 md:hidden"
          onClick={handleMenuOpen}
        >
          <i className="fa-solid fa-bars-staggered hamburger-menu hover-gradient transition-all"></i>
        </div>
        <ul className="hidden md:flex font-space font-semibold  text-xl gap-8  text-slate-100">
          <li>
            <a href="#home" className="hover-gradient">
              Home
            </a>{" "}
          </li>
          <li>
            <a href="#market" className="hover-gradient">
              Market
            </a>{" "}
          </li>
          <li>
            <a href="#choose-us" className="hover-gradient">
              Choose Us
            </a>
          </li>
          <li>
            <a href="#join" className="hover-gradient">
              Join
            </a>{" "}
          </li>
        </ul>
        <div className="hidden md:flex gap-3 text-xl ml-12 xl:text-2xl xl:ml-20 text-slate-100">
          <i className="fa-brands fa-twitter cursor-pointer hover-gradient"></i>
          <i className="fa-brands fa-discord cursor-pointer hover-gradient"></i>
        </div>
      </nav>
      <div
        className="w-screen h-screen fixed top-0 right-full bg-slate-100 flex justify-center items-center transition-all ease-in-out duration-500 md:hidden z-30"
        ref={mobileNav}
      >
        <ul className="text-center font-space font-bold text-3xl flex flex-col gap-7">
          <li>
            <a href="#home" onClick={handleMenuClose}>
              Home
            </a>{" "}
          </li>
          <li>
            <a href="#market" onClick={handleMenuClose}>
              Market
            </a>{" "}
          </li>
          <li>
            <a href="#choose-us" onClick={handleMenuClose}>
              Choose Us
            </a>
          </li>
          <li>
            <a href="#join" onClick={handleMenuClose}>
              Join
            </a>{" "}
          </li>
        </ul>
        <div
          className="absolute top-6 right-7 text-3xl"
          onClick={handleMenuClose}
        >
          <i className="fa-solid fa-xmark close-mobile hover-gradient transition-all"></i>
        </div>
      </div>
    </>
  );
}
