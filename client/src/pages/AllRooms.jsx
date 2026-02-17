import { useState } from "react"
import { assets, roomsDummyData } from "../assets/assets.js"
import Filters from "../components/Filters.jsx"
import Title from "../components/Title.jsx"
import RoomCard from "../components/RoomCard.jsx"

const AllRooms = () => {

    const [showMobileFilter, setShowMobilefilter] = useState(false)

    const title = "Hotel Rooms"
    const subtitle = "Take advantage of our limited-time offers and special packages to enhance your stay and create unforgettable memories."

    const handleFilterOnMobile = () => {
        setShowMobilefilter(prev => !prev)
    }

  return (
    <div className="flex justify-between pt-20 px-5 sm:px-10 lg:px-20">
        {/* left */}
        <div className="lg:w-4/6">
            <div className="flex flex-col">
                <Title title={title} subtitle={subtitle} align="start"/>
                <div onClick={handleFilterOnMobile} className="mt-5 md:hidden w-full flex justify-center text-sm">
                    <div className="bg-slate-100 px-4 py-2 w-50 rounded-full flex justify-between items-center">
                        <span>Filters</span>
                        {showMobileFilter === true ? <img className="h-3" src={assets.closeIcon} alt="close icon" /> : <img className="h-3 opacity-60" src={assets.downArrow} alt="show" />}
                    </div>
                </div>
                {
                    showMobileFilter && <Filters visibilitySize="smallScreen" otherClasses="shadow-sm rounded-md mt-5"/>
                }
            </div>
            <div className="flex flex-col justify-center items-center md:items-start my-10">
                {
                    roomsDummyData.map((room) => (
                        <RoomCard room={room} key={room._id}/>
                    ))
                }
            </div>
        </div>
        <Filters visibilitySize="largeScreen" otherClasses="mt-50" />

        {/* right */}
    </div>
  )
}

export default AllRooms