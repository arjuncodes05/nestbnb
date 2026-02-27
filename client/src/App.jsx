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
import { useEffect } from "react";

const App = () => {

  const isOwnerPath = useLocation().pathname.includes("owner");

  useEffect(() => {
    const accessToken = localStorage.getItem("accessToken")    
    async function getUser() {
      const response = await fetch("http://localhost:3000/api/user", {
        headers: {
          Authorization: `Bearer ${accessToken}`
        }
      });
      if(response.status === 401){
        localStorage.removeItem("accessToken")
        return;
      }
      const data = await response.json()
      console.log("user data ", data);  
    }
    if(accessToken){
      getUser();
    }
  }, [])
  
  return (
    <div>
      { !isOwnerPath && <NavBar/>}
      {false && <HotelReg />}
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
