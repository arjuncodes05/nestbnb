import { useEffect, useState } from "react";
import {assets} from "../assets/assets.js"
import {Link} from "react-router-dom"

const NavBar = () => {

  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY  > 10)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div className="overflow-y-scroll h-88 md:h-64">
      <p className="h-125 w-20"></p>
      <nav className={`fixed top-0 left-0 z-50 w-full flex justify-between items-center px-4 lg:px-10 lg:px-24 xl:px-32 text-white transition-all duration-500 ${isScrolled ? "bg-white shadow-md py-4 md:py-3" : "py-3 bg-transparent md:py-4"}`}>
          <div className="items-center flex gap-3 cursor-pointer">
                <img className="w-10 lg:w-15" src={assets.logo} alt="" />
                <p className={`font-semibold text-xl lg:text-3xl ${isScrolled ? "invert" : "bg-text-white"}`}>Nestbnb</p>
            </div>

            {/* desktop navLinks */}
            <div className="hidden md:flex flex-row gap-4 items-center">
                    <Link to="/" className={`relative cursor-pointer group ${isScrolled ? "invert" : "text-white"}`}>Home
                      <span className="absolute h-0.5 bg-white w-full left-0 -bottom-1 scale-x-0 transition-transform origin-left duration-300 group-hover:scale-x-100"></span>
                    </Link>
                    <Link to="/" className={`relative cursor-pointer group ${isScrolled ? "invert" : "text-white"}`}>Hotel
                      <span className="absolute h-0.5 bg-white w-full left-0 -bottom-1 scale-x-0 transition-transform origin-left duration-300 group-hover:scale-x-100"></span>
                    </Link>
                    <Link to="/" className={`relative cursor-pointer group ${isScrolled ? "invert" : "text-white"}`}>Experience
                      <span className="absolute h-0.5 bg-white w-full left-0 -bottom-1 scale-x-0 transition-transform origin-left duration-300 group-hover:scale-x-100"></span>
                    </Link>
                    <Link to="/" className={`relative cursor-pointer group ${isScrolled ? "invert" : "text-white"}`}>About
                      <span className="absolute h-0.5 bg-white w-full left-0 -bottom-1 scale-x-0 transition-transform origin-left duration-300 group-hover:scale-x-100"></span>
                    </Link>
                    <button className={`border px-4 py-1 text-sm font-light rounded-full cursor-pointer ${isScrolled ? 'text-black' : 'text-white'} transition-all`}>Dashboard</button>
            </div>

            {/* mobile navLinks */}
            <div className={`w-full flex justify-end md:hidden`}> 
              <img className={`${isScrolled ? "invert" : ""}`} onClick={() => setMobileMenu(!mobileMenu)} src={assets.menuIcon} alt="" />
              <div className={`${mobileMenu === true ? "left-0" : "-left-full" } flex top-0 bg-white text-black w-full h-screen absolute justify-center items-center flex-col transition-all duration-300`}>

                <img onClick={() => setMobileMenu(false)} src={assets.closeMenu} alt="" className="absolute h-6.5 top-4 right-4" />
                <div className="flex justify-center flex-col gap-6 *:cursor-pointer items-center">
                    <Link to="/home" className="relative group">Home
                      <span className="absolute h-0.5 bg-white w-full left-0 -bottom-1 scale-x-0 transition-transform origin-left duration-300 group-hover:scale-x-100"></span>
                    </Link>

                    <Link to="/" className="relative group">Hotel
                      <span className="absolute h-0.5 bg-white w-full left-0 -bottom-1 scale-x-0 transition-transform origin-left duration-300 group-hover:scale-x-100"></span>
                    </Link>

                    <Link to="/" className="relative group">Experience
                      <span className="absolute h-0.5 bg-white w-full left-0 -bottom-1 scale-x-0 transition-transform origin-left duration-300 group-hover:scale-x-100"></span>
                    </Link>

                    <Link to="/" className="relative group">About
                      <span className="absolute h-0.5 bg-white w-full left-0 -bottom-1 scale-x-0 transition-transform origin-left duration-300 group-hover:scale-x-100"></span>
                    </Link>

                    <button className="border px-4 py-1 text-sm font-normal rounded-full cursor-pointer transition-all">Dashboard</button>
                    <button className="bg-black px-6 py-2 rounded-full text-white">Login</button>
                </div>
              </div>
            </div>

            <div>
              <ul className="hidden md:flex flex-row gap-5 items-center">
                <li>
                  <img className={`h-7 ${isScrolled ? "invert" : ""} transition-all duration-500`} src={assets.searchIcon} alt="search" />
                </li>
                <li>
                  <button className="bg-black px-6 py-2 rounded-full">Login</button>
                </li>
              </ul>
            </div>
        </nav>
    </div>
  );
};

export default NavBar;
