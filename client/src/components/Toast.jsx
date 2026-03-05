import { useEffect } from "react";
import { useAppContext } from "../context/AppContext.jsx";
import { assets } from "../assets/assets.js";

const Toast = () => {
    const {toastInfo, setToastInfo} = useAppContext();

    const isSuccess = toastInfo.type === "success";

    useEffect(() => {
        if(!toastInfo.visible) return;

        const timer = setTimeout(() => {
            setToastInfo({visible: false, message: "", type: ""})
        }, 4000)

        return () => clearTimeout(timer)
    }, [toastInfo.visible, setToastInfo])


  return (
    <div className={`${toastInfo.visible ? "translate-y-20 opacity-100" : "-translate-y-20 opacity-0"} overflow-hidden fixed w-fit rounded-lg shadow-lg bg-white/90 h-12 sm:h-15 md:h-20 left-[50%] -translate-x-1/2 transition-all duration-100 flex flex-col items-center`}>        
        <div className='flex gap-2 justify-center items-center w-full h-full font-medium text-xs sm:text-sm whitespace-nowrap md:text-lg text-black/80 px-5'>
            <img
                className={`w-4 sm:w-5 md:w-6 ${isSuccess ? "bg-green-500 rounded-full" : ""}`}
                src={isSuccess ? assets.greenTick : assets.errorIcon}
                alt="icon"
            />
           <span>{toastInfo.message || "aoks askh dha sdhas dash d"}</span>
        </div>
    </div>
  )
}

export default Toast