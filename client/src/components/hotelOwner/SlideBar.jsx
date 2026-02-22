import { NavLink } from "react-router-dom"
import { assets } from "../../assets/assets"

const SlideBar = () => {

    const slidebarLinks = [
        {name: "Dashboard", path: "/owner", icon: assets.dashboardIcon },
        {name: "Add Room", path: "/owner/add-room", icon: assets.addIcon },
        {name: "List Room", path: "/owner/list-room", icon: assets.listIcon },
    ]

  return (
    <div className="sm:w-45 lg:w-60 w-full sm:h-full flex-row flex justify-around sm:justify-start sm:flex-col py-4 border-r border-gray-300 transition-all duration-500 shadow-sm sm:shadow-none">
        {
            slidebarLinks.map((item, index) => (
                <NavLink key={index} to={item.path} end="/owner" className={({isActive}) => `${isActive ? "sm:border-r-4 h-fit md:border-r-[6px] rounded-md sm:rounded-none bg-blue-600/10 border-blue-600 text-blue-600" : "hover:bg-gray-100/90 border-white text-gray-700"} flex flex-col sm:flex-row items-center gap-2 py-2 sm:py-3 px-4 md:px-8 border-box
                `}>
                    <img src={item.icon} alt={item.name} className="sm:min-h-6 sm:min-w-6" />
                    <p className="text-xs sm:text-base text-center">{item.name}</p>
                </NavLink>
            ))
        }
    </div>
  )
}

export default SlideBar