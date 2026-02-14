import { assets } from "../assets/assets";
import {Link} from "react-router-dom"

const HotelCard = ({data}) => {
  return (
    <div className="cursor-pointer w-65 sm:w-[40%] md:w-64 xl:w-65 rounded-lg overflow-hidden shadow-sm">
      <img src={data.images[0]} alt="image" />
      <div className="p-4 space-y-2">
        <div className="flex justify-between">
          <h3 className="font-playfair font-medium text-lg md:text-xl">
            {data.hotel.name}
          </h3>
          <p className="flex justify-center items-center gap-1">
            <img src={assets.starIconFilled} alt="" className="h-5" /> 4.9
          </p>
        </div>
        <p className="flex items-center gap-1 text-gray-500 text-sm mb-4">
          <img src={assets.locationIcon} alt="location icon" />
          <span>{data.hotel.address}</span>
        </p>
        <div className="flex justify-between items-center">
          <h4 className="flex items-center gap-0.5 text-md ">
            <span className="font-medium text-gray-600">
              ${data.pricePerNight}
            </span>
            <p className="font-medium text-sm text-gray-500">/night</p>
          </h4>
          <Link to={`/rooms/${data._id}`} className="cursor-pointer hover:bg-slate-50 border border-gray-300 font-medium px-2 text-sm py-1 rounded-md">
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HotelCard;
