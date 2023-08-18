import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";

const menuLinks = [
  { text: "Home", link: "#home" },
  { text: "Market", link: "#market" },
  { text: "Choose Us", link: "#choose-us" },
  { text: "Join", link: "#join" },
];

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

  const scrollAnimation = () => {
    const nav = desktopNav.current;
    if (nav) {
      if (window.scrollY >= 150) {
        nav.classList.add("!fixed", "bg-[#0f051d]");
      } else {
        nav.classList.remove("!fixed", "bg-[#0f051d]");
      }
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", scrollAnimation);
    return () => {
      window.removeEventListener("scroll", scrollAnimation);
    };
  }, []);

  return (
    <>
      <nav
        className="flex justify-between px-4 py-7 font-space items-center xl:px-24 absolute top-0 w-full z-20"
        ref={desktopNav}
      >
        <Link
          to={"/"}
          className="text-3xl font-bold cursor-pointer text-slate-100"
        >
          COINMATRIX
        </Link>
        <div
          className="text-3xl text-slate-100 md:hidden"
          onClick={handleMenuOpen}
        >
          <i className="fa-solid fa-bars-staggered hamburger-menu hover-gradient transition-all"></i>
        </div>
        <ul className="hidden md:flex font-space font-semibold text-xl gap-8 text-slate-100">
          {menuLinks.map((item) => (
            <li key={item.text}>
              <a href={item.link} className="hover-gradient">
                {item.text}
              </a>
            </li>
          ))}
        </ul>
        <div className="hidden md:flex gap-3 text-xl ml-12 xl:text-2xl xl:ml-20 text-slate-100">
          <i className="fa-brands fa-twitter cursor-pointer hover-gradient"></i>
          <i className="fa-brands fa-discord cursor-pointer hover-gradient"></i>
        </div>
      </nav>
      <nav
        className="w-screen h-screen fixed top-0 right-full bg-slate-100 flex justify-center items-center transition-all ease-in-out duration-500 md:hidden z-30"
        ref={mobileNav}
      >
        <ul className="text-center font-space font-bold text-3xl flex flex-col gap-7">
          {menuLinks.map((item) => (
            <li key={item.text} onClick={handleMenuClose}>
              <a href={item.link} className="hover-gradient">
                {item.text}
              </a>
            </li>
          ))}
        </ul>
        <div
          className="absolute top-6 right-7 text-3xl"
          onClick={handleMenuClose}
        >
          <i className="fa-solid fa-xmark close-mobile hover-gradient transition-all"></i>
        </div>
      </nav>
    </>
  );
}
