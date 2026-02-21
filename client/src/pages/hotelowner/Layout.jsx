import { Outlet } from "react-router-dom"
import NavBar from "../../components/hotelOwner/NavBar"
import SlideBar from "../../components/hotelOwner/SlideBar"

const Layout = () => {
  return (
    <div className="h-screen">
      <NavBar/>
      <div className="flex h-screen">
        <SlideBar/>
        <div className="flex-1 p-4 pt-10 md:px-10 h-full">
          <Outlet/>
        </div>
      </div>
    </div>
  )
}

export default Layout