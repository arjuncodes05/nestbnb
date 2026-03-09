import { useEffect, useState } from "react";
import {assets} from "../assets/assets.js"
import {Link, useLocation} from "react-router-dom"
import LoginBoxes from "./LoginBoxes.jsx";
import { useAppContext } from "../context/AppContext.jsx";

const NavBar = ({mobileMenu, setMobileMenu}) => {

  const {user, navigate, isOwner, setShowHotelReg, logout} = useAppContext();
  const [isScrolled, setIsScrolled] = useState(false);
  const [showLoginBox, setShowLoginBox] = useState({
    desktop: false,
    mobile: false
  });
  const [showUserMenu, setShowUserMenu] = useState(false);

  const location = useLocation()

  useEffect(() => {
    if(location.pathname !== "/"){
      setIsScrolled(true);
      return;
    }else{
      setIsScrolled(false)
    }
    setIsScrolled(prev => location.pathname !== "/" ? true : prev)
    const handleScroll = () => {
      setIsScrolled(window.scrollY  > 10)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [location.pathname])

  useEffect(() => {
    setShowLoginBox({ desktop: false, mobile: false })
    setMobileMenu(false)
    setShowUserMenu(false);
  }, [location.pathname])

  
  return (
    <div className="z-1 fixed top-0 left-0 h-88 md:h-64">
      <p className="h-125 w-20"></p>
      <nav className={`fixed top-0 left-0 z-50 w-full flex justify-between items-center px-4 sm:px-8 md:px-10 lg:px-24 xl:px-32 text-white transition-all ease duration-500 ${isScrolled ? "bg-white/90 backdrop-blur-xs shadow-md py-4 md:py-2" : "py-3 bg-transparent md:py-3"}`}>
          <Link to="/" className="items-center flex gap-3 cursor-pointer">
                <img className="w-10 lg:w-14" src={assets.logo} alt="logo" />
                <p className={`font-semibold text-xl lg:text-2xl ${isScrolled ? "invert" : "bg-text-white"}`}>Nestbnb</p>
            </Link>

            {/* desktop navLinks */}
            <div className="hidden md:flex flex-row gap-4 lg:gap-8 items-center">
                    <Link to="/" className={`relative cursor-pointer group ${isScrolled ? "invert" : "text-white"}`}>Home
                      <span className="absolute h-0.5 bg-white w-full left-0 -bottom-1 scale-x-0 transition-transform origin-left duration-300 group-hover:scale-x-100"></span>
                    </Link>
                    <Link to="/rooms" className={`relative cursor-pointer group ${isScrolled ? "invert" : "text-white"}`}>Hotel
                      <span className="absolute h-0.5 bg-white w-full left-0 -bottom-1 scale-x-0 transition-transform origin-left duration-300 group-hover:scale-x-100"></span>
                    </Link>
                    <Link to="/" className={`relative cursor-pointer group ${isScrolled ? "invert" : "text-white"}`}>Experience
                      <span className="absolute h-0.5 bg-white w-full left-0 -bottom-1 scale-x-0 transition-transform origin-left duration-300 group-hover:scale-x-100"></span>
                    </Link>
                    <Link to="/about" className={`relative cursor-pointer group ${isScrolled ? "invert" : "text-white"}`}>About
                      <span className="absolute h-0.5 bg-white w-full left-0 -bottom-1 scale-x-0 transition-transform origin-left duration-300 group-hover:scale-x-100"></span>
                    </Link>
                    { user && (
                      <button 
                      onClick={() => {
                        if(isOwner){
                          navigate("/owner");
                          scrollTo(0, 0)
                        } else{
                          setShowHotelReg(true)
                        }
                      }}
                      className={`border px-4 py-1 text-sm font-light rounded-full cursor-pointer ${isScrolled ? 'text-black' : 'text-white'} transition-all`}>
                        {isOwner ? 'Dashboard' : 'List You Hotel'}
                      </button>
                    )}
            </div>

            {/* mobile navLinks */}
            <div className={`w-full flex justify-end md:hidden`}> 
              {
                user && (
                  <div className="relative">
                    <div 
                      onClick={() => setShowUserMenu(!showUserMenu)}
                      className="w-8 h-8 mr-4 rounded-full overflow-hidden cursor-pointer border-2"
                    >
                      <img src={user.image} alt="user" className="w-full h-full object-cover" />
                    </div>
                    
                    {/* Mobile User Dropdown */}
                    {showUserMenu && (
                      <div className="absolute right-4 top-10 bg-white rounded-lg shadow-lg py-2 w-40 z-50">

                        <button
                          onClick={() => {
                            navigate("/my-bookings");
                            setShowUserMenu(false);
                          }}
                          className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        >
                          My Bookings
                        </button>
                        <button
                          onClick={() => {
                            logout();
                            setShowUserMenu(false);
                          }}
                          className="w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-gray-100"
                        >
                          Logout
                        </button>
                      </div>
                    )}
                  </div>
                )
              }
              <img className={`${isScrolled ? "invert" : ""}`} onClick={() => setMobileMenu(!mobileMenu)} src={assets.menuIcon} alt="" />
              <div className={`${mobileMenu === true ? "left-0" : "-left-full" } flex top-0 bg-white text-black w-full h-screen absolute justify-center items-center flex-col transition-all duration-300`}>

                <img onClick={() => {
                  setShowLoginBox(prev => ({desktop: false, mobile: false}))
                  setMobileMenu(false)
                }} src={assets.closeMenu} alt="" className="absolute h-6.5 top-4 right-4" />
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

                    <Link to="/about" className="relative group">About
                      <span className="absolute h-0.5 bg-white w-full left-0 -bottom-1 scale-x-0 transition-transform origin-left duration-300 group-hover:scale-x-100"></span>
                    </Link>

                    { user && (
                      <button 
                      onClick={() => {
                        isOwner ? navigate("/owner") : setShowHotelReg(true);
                      }}
                      className="border px-4 py-1 text-sm font-normal rounded-full cursor-pointer transition-all">
                        {isOwner ? 'Dashboard' : 'List Your Hotel'}
                      </button>
                    )}
                    { !user && (
                      <div className="relative">
                        <button onClick={() => {
                          setShowLoginBox(prev => ({desktop: false, mobile: !prev.mobile}))
                        }} className="bg-black px-6 py-2 rounded-full text-white">Login</button>  
                        {
                        showLoginBox.mobile &&
                          <LoginBoxes type="mobile" setMobileMenu={setMobileMenu} setShowLoginBox={setShowLoginBox}/>
                        }
                      </div>
                    )}
                </div>
              </div>
            </div>

            <div>
              <ul className="hidden md:flex flex-row gap-5 items-center">
                {
                  !user ? (
                  <li className="relative">
                    <button onClick={() => setShowLoginBox(prev => ({mobile: false, desktop: !prev.desktop}))} className="relative bg-black px-6 py-2 rounded-full">Login</button>
                      {
                        showLoginBox.desktop &&
                        <LoginBoxes type="desktop" setShowLoginBox={setShowLoginBox}/>
                    }
                  </li> ) : (
                    <li className="relative">
                      <div 
                        onClick={() => setShowUserMenu(!showUserMenu)}
                        className="w-8 h-8 rounded-full overflow-hidden cursor-pointer"
                      >
                        <img src={user.image} alt="user" className="w-full h-full object-cover" />
                      </div>
                      
                      {/* Desktop User Dropdown */}
                      {showUserMenu && (
                        <div className="absolute right-0 mt-2 bg-white rounded-lg shadow-lg py-2 w-48 z-50">
                          <div className="px-4 py-2 border-b border-gray-100">
                            <p className="text-sm font-semibold text-gray-800">{user.name || 'User'}</p>
                            <p className="text-xs text-gray-500">{user.email || ''}</p>
                          </div>

                          <button
                            onClick={() => {
                              navigate("/my-bookings");
                              setShowUserMenu(false);
                            }}
                            className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                          >
                            My Bookings
                          </button>

                          {isOwner && (
                            <button onClick={() => {
                                navigate("/owner");
                                setShowUserMenu(false);
                              }}
                              className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                            >Dashboard</button>
                          )}
                          
                          <button onClick={() => {
                              logout();
                              setShowUserMenu(false);
                            }}
                            className="w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-gray-100 border-t border-gray-100 mt-1"
                          >Logout</button>
                        </div>
                      )}
                    </li>
                  )
                }
              </ul>
            </div>
        </nav>
    </div>
  );
};

export default NavBar;