import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const AppContext = createContext();

export const AppProvider = ({children}) => {
    const currency = import.meta.env.VITE_CURRENCY || "₹";
    const BASE_URL = import.meta.env.VITE_BACKEND_URL;

    const navigate = useNavigate();

    const [isOwner, setIsOwner] = useState(false);
    const [accessToken, setAccessToken] = useState(localStorage.getItem("accessToken"))
    const [user, setUser] = useState(false);
    const [showHotelReg, setShowHotelReg] = useState(false);
    const [toastInfo, setToastInfo] = useState({
        visible: false,
        message: "",
        type: "error"    // error or success
    })
    const [rooms, setRooms] = useState([]);

    const fetchRooms = async () => {
        try {
            const response = await fetch(`${BASE_URL}/api/rooms`)
            const data = await response.json();
            if(data.success){
                setRooms(data.rooms)
            }else{
                setToastInfo({
                    visible: true,
                    message: data.message,
                    type: "error"
                })
            }
        } catch (error) {
            setToastInfo({
                visible: true,
                message: error.message,
                type: "error"
            })
        }
    }

    const fetchUser = async () => {
        try {   
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
            if(data.success){
                setIsOwner(data.user.role === "hotelOwner");
                setUser(data.user)
            } else {
                setTimeout(()=> {
                    fetchUser();
                }, 5000)
            }
            }
            getUser();
        } catch (error) {
            console.log("Error while fetching user");
            // create a toast notification here
        }
    }

    useEffect(() => {
        if (!user && accessToken) {
            fetchUser();
        }
    },[user, accessToken])

    useEffect(() => {
        fetchRooms();
    },[])

    useEffect(() => {
        const handleMessage = (event) => {
            if(event.data.type === "AUTH_SUCCESS"){
                fetchUser();
            }
        }
        window.addEventListener('message', handleMessage)

        return () => window.removeEventListener('message', handleMessage);
    }, [])

    const value = {
        currency, BASE_URL,  navigate, user, setUser, isOwner, setIsOwner, showHotelReg, setShowHotelReg, fetchUser, setToastInfo, toastInfo, rooms, setRooms
    }

    return  (
        <AppContext.Provider value={value}>
            {children}
        </AppContext.Provider>
    )
}

export const useAppContext = () => useContext(AppContext);