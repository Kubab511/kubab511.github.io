import Hamburger from "hamburger-react";
import { useRef, useState } from "react";
import ReactCountryFlag from "react-country-flag";
import { NavLink } from "react-router-dom";

export function Navbar() {
  const [isOpen, setOpen] = useState(false);
  const ref = useRef(null);

  const setClose = () => {
    setOpen(false);
  }

  function scrollToTop() {
    const element = document.getElementById("top");
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }

  function scrollToTopLangChange() {
    const element = document.getElementById("top");
    if (element) {
      element.scrollIntoView();
    }
  }

  function scrollToTopLangChangeMobile() {
    const element = document.getElementById("top");
    if (element) {
      element.scrollIntoView();
    }
    setClose();
  }

  function scrollToElement(id: string) {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }

  function scrollToElementMobile(id: string) {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setClose();
    }
  }

  return (
    <>
    <div className="fixed mx-auto border border-[#484b6a] border-t-transparent border-l-transparent border-r-transparent top-0 left-0 right-0 z-10 bg-[#fafafa] dark:bg-[#121212] bg-opacity-100">
      <div className="flex container lg:py-4 flex-wrap items-center justify-between mx-auto px-4 py-2">
        <div className="flex items-center flex-row">
          <button onClick={scrollToTop}>
            <img src="/favicon.webp" alt="Logo" className="h-10 w-10"/>
          </button> 
          <h1 className="text-[#ADB7BE] text-4xl pl-2 hidden md:block">Jakub Barabasz</h1>
        </div>
        <div className="menu hidden md:block md:w-auto">
          <ul className="flex items-center p-4 md:p-0 md:flex-row md:space-x-8 mt-0">
            <button onClick={() => scrollToElement("about")} className={"block py-2 pl-3 pr-4 text-[#ADB7BE] sm:text-xl rounded md:p-0  hover:text-white hover:cursor-pointer"}>
              O mnie
            </button>
            <button onClick={() => scrollToElement("projects")} className={"block py-2 pl-3 pr-4 text-[#ADB7BE] sm:text-xl rounded md:p-0  hover:text-white hover:cursor-pointer"}>
              Projekty
            </button>
            <button onClick={() => scrollToElement("more")} className={"block py-2 pl-3 pr-4 text-[#ADB7BE] sm:text-xl rounded md:p-0  hover:text-white hover:cursor-pointer"}>
              Więcej
            </button>
            <NavLink to="/" onClick={scrollToTopLangChange} className={"block py-2 pl-3 pr-4 text-[#ADB7BE] sm:text-xl rounded md:p-0  hover:text-white hover:cursor-pointer"}>
              <ReactCountryFlag 
                countryCode="us" 
                style={{
                  fontSize: '1.5em',
                  lineHeight: '1.5em',
                }}  
              />
            </NavLink>
          </ul>
        </div>
        <div ref={ref} className="block md:hidden">
          <Hamburger toggled={isOpen} size={20} toggle={setOpen} color={"#ADB7BE"} />
        </div>
      </div>
      {isOpen && (
        <ul className="flex flex-col py-4 items-center">
          <button onClick={() => scrollToElementMobile("about")} className={"block py-2 pl-3 pr-4 text-[#ADB7BE] sm:text-xl rounded md:p-0 hover:text-white hover:cursor-pointer"}>
          O mnie
          </button>
          <button onClick={() => scrollToElementMobile("projects")} className={"block py-2 pl-3 pr-4 text-[#ADB7BE] sm:text-xl rounded md:p-0 hover:text-white hover:cursor-pointer"}>
          Projekty
          </button>
          <button onClick={() => scrollToElementMobile("more")} className={"block py-2 pl-3 pr-4 text-[#ADB7BE] sm:text-xl rounded md:p-0 hover:text-white hover:cursor-pointer"}>
          Więcej
          </button>
          <NavLink to="/" onClick={scrollToTopLangChangeMobile} className={"block py-2 pl-3 pr-4 text-[#ADB7BE] sm:text-xl rounded md:p-0 hover:text-white hover:cursor-pointer"}>
            <ReactCountryFlag 
              countryCode="us" 
              style={{
                fontSize: '1.5em',
                lineHeight: '1.5em',
              }}  
            />
          </NavLink>
        </ul>
      )}
    </div>
    </>
  )
}