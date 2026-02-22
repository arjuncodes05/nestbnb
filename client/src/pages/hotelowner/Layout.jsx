import { Outlet } from "react-router-dom"
import NavBar from "../../components/hotelOwner/NavBar"
import SlideBar from "../../components/hotelOwner/SlideBar"

const Layout = () => {
  return (
    <div className="min-h-screen">
      <NavBar/>
      <div className="flex flex-col sm:flex-row min-h-screen sm:h-screen">
        <SlideBar/>
        <div className="flex-1 px-4 md:px-10 h-screen">
          <Outlet/>
        </div>
      </div>
    </div>
  )
}

export default Layout