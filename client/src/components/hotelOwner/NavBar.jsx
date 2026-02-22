import { Link } from "react-router-dom"
import { assets } from "../../assets/assets"

const NavBar = () => {
  return (
    <div className="flex items-center justify-between w-full bg-white px-4 md:px-8  py-2 shadow-sm">
          <Link to="/" className="items-center flex gap-3 cursor-pointer">
                <img className="w-10 sm:w-12 lg:w-14" src={assets.logo} alt="logo" />
                <p className={`font-semibold text-lg sm:text-xl lg:text-2xl`}>Nestbnb</p>
            </Link>

            <div className="cursor-pointer text-xs sm:text-base">
                <p>(User Button here)</p>
            </div>
    </div>
  )
}

export default NavBar