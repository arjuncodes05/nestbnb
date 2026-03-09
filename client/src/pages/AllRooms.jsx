import { useState } from "react"
import { assets } from "../assets/assets.js"
import Filters from "../components/Filters.jsx"
import Title from "../components/Title.jsx"
import RoomCard from "../components/RoomCard.jsx"
import { useSearchParams } from "react-router-dom"
import { useAppContext } from "../context/AppContext.jsx"
import { useMemo } from "react"

const AllRooms = () => {

    const [searchParams, setSearchParams] = useSearchParams();
    const {rooms} = useAppContext();

    const [showMobileFilter, setShowMobilefilter] = useState(false)

    const [selectedFilters, setSelectedFilters] = useState({
        roomType: [],
        priceRange: []
    });
    
    
    const [selectedSort, setSelectedSort] = useState("");

    const title = "Hotel Rooms"
    const subtitle = "Take advantage of our limited-time offers and special packages to enhance your stay and create unforgettable memories."

    const roomType = [
        { filter: "Single Bed", name: "singleBed" },
        { filter: "Double Bed", name: "doubleBed" },
        { filter: "Luxury Room", name: "luxuryRoom" },
        { filter: "Family Suite", name: "familySuite" },
    ]

    const priceRange = [
        { range: "0 to 500", name: "range1" },
        { range: "500 to 1000", name: "range2" },
        { range: "1000 to 2000", name: "range3" },
        { range: "2000 to 3000", name: "range4" },
    ]

    const sortOptions = [
        { by: "Price Low to High", name: "lowToHigh" },
        { by: "Price High To Low", name: "highToLow" },
        { by: "Newest First", name: "newestFirst" },
    ]


    const handleFilterOnMobile = () => {
        setShowMobilefilter(prev => !prev)
    }


    // function to check if a room matched the selected room type
    const matchesRoomType = (room) => {
      return selectedFilters.roomType.length === 0 || selectedFilters.roomType.includes(room.roomType)
    }

      // function to check if a room matchse the
      const matchesPriceRange = (room) => {
      return selectedFilters.priceRange.length === 0 || selectedFilters.priceRange.some((range) => {        
        const [min, max] = range.split(' to ').map(Number);
        return room.pricePerNight >= min && room.pricePerNight <= max;
      })
    }

    // sorting rooms function
    const sortRooms = (a, b) => {
      if(selectedSort?.by === 'Price Low to High'){
        return a.pricePerNight - b.pricePerNight
      }
      if(selectedSort?.by === "Pirce High To Low"){
        return b.pricePerNight - a.pricePerNight
      }
      if(selectedSort?.by === "Newest First"){
        return new Date(b.createdAt) - new Date(a.createdAt);
      }
      return 0;
    }

    // filter destination
    const filterDestination = (room) => {
      const destination = searchParams.get('destination');      
      if(!destination) return true
      return room.hotel.city.toLowerCase().includes(destination.toLowerCase());
    }

    // filter and sort room based on the selected filters and sort options
    const filteredRooms = useMemo(() => {
      return rooms.filter(room => matchesRoomType(room) && matchesPriceRange(room) && filterDestination(room)).sort(sortRooms)
    }, [rooms, selectedFilters, selectedSort, searchParams])


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
                    showMobileFilter &&   <Filters 
                      visibilitySize="smallScreen" 
                      otherClasses="shadow-sm rounded-md mt-5"
                      selectedFilters={selectedFilters} 
                      setSelectedFilters={setSelectedFilters}
                      selectedSort={selectedSort}
                      setSelectedSort={setSelectedSort}
                      roomType={roomType}
                      priceRange={priceRange}
                      sortOptions={sortOptions}
                      setSearchParams={setSearchParams}
                    />
                }
            </div>
            <div className="flex flex-col justify-center items-center md:items-start my-10">
                {
                  filteredRooms.length === 0 ? (
                    <div className="h-100 animate-pulse w-full text-center md:text-left text-md md:text-2xl font-medium text-gray-400">
                      No Rooms Available...
                    </div>
                  ) : (
                    filteredRooms.map((room) => (
                        <RoomCard room={room} key={room._id}/>
                    ))
                )}
            </div>
        </div>
        {
          filteredRooms.length !== 0 && (
            <Filters 
                visibilitySize="largeScreen" 
                otherClasses="mt-50" 
                selectedFilters={selectedFilters} 
                setSelectedFilters={setSelectedFilters}
                selectedSort={selectedSort}
                setSelectedSort={setSelectedSort}
                roomType={roomType}
                priceRange={priceRange}
                sortOptions={sortOptions}
                setSearchParams={setSearchParams}
            />
        )}
    </div>
  )
}

export default AllRooms