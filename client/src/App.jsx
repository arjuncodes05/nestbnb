import { Route, Routes, useLocation } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./pages/home";
import Footer from "./components/Footer";
import AllRooms from "./pages/AllRooms";
import RoomDetails from "./pages/RoomDetails";
import MyBookings from "./pages/MyBookings";
import HotelReg from "./components/HotelReg.jsx";
import Layout from "./pages/hotelowner/Layout.jsx"

import Dashboard from "./pages/hotelowner/Dashboard.jsx"
import AddRoom from "./pages/hotelowner/AddRoom.jsx"
import ListRoom from "./pages/hotelowner/ListRoom.jsx"
import AuthSuccess from "./pages/AuthSuccess.jsx";
import { useAppContext } from "./context/AppContext.jsx";
import Toast from "./components/Toast.jsx";
import { useState } from "react";

const App = () => {

  const isOwnerPath = useLocation().pathname.includes("owner");
  const {showHotelReg} = useAppContext();
  const [mobileMenu, setMobileMenu] = useState(false);
  
  return (
    <div>
      <Toast/>
      { !isOwnerPath && <NavBar mobileMenu={mobileMenu} setMobileMenu={setMobileMenu} />}
      {showHotelReg && <HotelReg setMobileMenu={setMobileMenu} />}
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/rooms" element={<AllRooms/>}/>
          <Route path="/rooms/:id" element={<RoomDetails/>}/>
          <Route path="/my-bookings" element={<MyBookings/>}/>
          <Route path="/owner" element={<Layout/>}>
            <Route index element={<Dashboard/>} />
            <Route path="add-room" element={<AddRoom/>} />
            <Route path="list-room" element={<ListRoom/>} />
          </Route>
          <Route path="/auth-success" element={<AuthSuccess/>} />
        </Routes>
      <Footer/>
    </div>
  );
};

export default App;
