import { assets, exclusiveOffers } from "../assets/assets";
import ExclusiveOffersCard from "./ExclusiveOffersCard";
import Title from "./Title";

const ExclusiveOffers = () => {

    const title = "Exclusive Offer"
    const subtitle = "Take advantage of our limited-time offers and special packages to enhance your stay and create unforgettable memories."

  return (
    <div className="w-full flex bg-white flex-col items-center mt-10 h-fit mb-10 py-5 md:py-12 text-black space-y-5 sm:space-y-8 px-4 sm:px-8 md:px-10 lg:px-24 xl:px-32">
        <div className="w-full flex flex-col md:flex-row space-y-5 md:space-y-0 justify-between">

            <Title title={title} subtitle={subtitle} align="start" />

            <div className="px-4 py-2 text-gray-900 flex justify-center items-center ">
                <button className="group flex gap-2">
                    <p className="whitespace-nowrap ">View All Offers</p>
                    <img className="w-4 group-hover:translate-x-1 transition-all" src={assets.arrowIcon} alt="arrow icon" />
                    </button>
            </div>
        </div>

        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 flex-wrap p-4 '>
            {exclusiveOffers.map((item) => <ExclusiveOffersCard item={item} /> )}
        </div>
    </div>
  );
};

export default ExclusiveOffers;
