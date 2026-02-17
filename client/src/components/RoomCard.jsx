import { assets, facilityIcons } from "../assets/assets";
import {Link} from "react-router-dom"

const RoomCard = ({ room }) => {

  const handleRating = (rating) => {
    const maxRating = 5;
    const stars = [];
    for (let i = 0; i < maxRating; i++) {
      stars.push(
        <img
        className="w-4"
          key={i}
          src={i < rating ? assets.starIconFilled : assets.starIconOutlined}
          alt="star icon"
        />,
      );
    }
    return stars;
  };

  return (
    <div className="overflow-hidden shadow-sm p-2 xl:shadow-none xl:p-0 rounded-lg flex flex-col xl:flex-row sm:items-start md:items-center gap-4 my-5 pb-6 border-gray-400/90">
      <img
        className="w-full xl:w-1/2 max-h-60 rounded-xl"
        src={room.images[0]}
        alt="room image"
      />

      <div className="px-4 space-y-2 lg:space-y-2">
        <p className="text-gray-500/80 text-sm font-medium">
          {room.hotel.city}
        </p>
        <h3 className="font-playfair text-2xl font-semibold ">
          {room.hotel.name}
        </h3>
        <div className="text-sm md:text-md flex gap-2">
            <div className="flex gap-1">
                {handleRating(room.hotel.rating).map((item) => item)}
            </div>
          <p>200+ Reviews</p>
        </div>
        <p className="flex gap-1 text-gray-500/80 text-sm">
          <img src={assets.locationIcon} alt="location icon" />
          {room.hotel.address}
        </p>
        <ul className="flex flex-row gap-2 flex-wrap">
          {room.amenities.map((el, index) => (
            <li key={index} className="bg-purple-500/20 px-4 py-2 rounded-md flex items-center justify-center gap-2 text-xs">
              <img
                className="w-4"
                src={facilityIcons[el]}
                alt={`${el}`}
              />
              <span className="text-xs">{el}</span>
            </li>
          ))}
        </ul>
    
        <div className="flex justify-between items-center mt-3">
          <span className="font-medium text-md md:text-lg">${room.pricePerNight}/night</span>
          <Link to={`/rooms/${room._id}`} className="group flex font-medium justify-center items-center text-gray-500  px-4 py-2 rounded-md gap-2 text-xs">
            <span>Details</span> 
            <img className="w-3 group-hover:translate-x-0.5 opacity-60" src={assets.arrowIcon} alt="arrow icon" />
          </Link>
        </div>
      </div>

    </div>
  );
};

export default RoomCard;
