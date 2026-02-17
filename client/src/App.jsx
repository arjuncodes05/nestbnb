import { Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./pages/home";
import Footer from "./components/Footer";
import AllRooms from "./pages/AllRooms";

const App = () => {
  return (
    <div>
      <NavBar/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/rooms" element={<AllRooms/>}/>
        </Routes>
      <Footer/>
    </div>
  );
};

export default App;
