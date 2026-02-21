import { NavLink } from "react-router-dom"
import { assets } from "../../assets/assets"

const SlideBar = () => {

    const slidebarLinks = [
        {name: "Dashboard", path: "/owner", icon: assets.dashboardIcon },
        {name: "Add Room", path: "/owner/add-room", icon: assets.addIcon },
        {name: "List Room", path: "/owner/list-room", icon: assets.listIcon },
    ]

  return (
    <div className="md:w-64 w-16 h-full flex flex-col py-4 border-r border-gray-300 transition-all duration-500">
        {
            slidebarLinks.map((item, index) => (
                <NavLink key={index} to={item.path} end="/owner" className={({isActive}) => `${isActive ? "border-r-4 md:border-r-[6px] bg-blue-600/10 border-blue-600 text-blue-600" : "hover:bg-gray-100/90 border-white text-gray-700"} flex items-center gap-2 py-3 px-4 md:px-8 border-box
                `}>
                    <img src={item.icon} alt={item.name} className="min-h-6 min-w-6" />
                    <p className="md:block hidden text-center">{item.name}</p>
                </NavLink>
            ))
        }
    </div>
  )
}

export default SlideBar