import { assets } from "../assets/assets"

const ExclusiveOffersCard = ({item}) => {
  return (
        <div 
            style={{ backgroundImage: `url(${item.image})` }}
            className={`flex flex-wrap flex-col items-start justify-between sm:flex-col min-h-50 space-y-6 rounded-lg  bg-cover bg-center text-white bg-no-repeat p-4 cursor-default`}>

            <div className="bg-slate-50 rounded-full w-fit text-gray-900 text-xs font-medium px-4 py-1 md:py-2 text-center flex justify-center items-center">
            
            <p>{item.priceOff} <span>% OFF</span> </p>
            </div>
                <div className="space-y-2 md:space-y-1">
                    <h3 className="font-playfair text-xl md:text-2xl">{item.title}</h3>
                    <p className="text-xs text-white/80">Expired {item.expiryDate}</p>
                    <p className="text-sm md:text-md">{item.description}</p>
                </div>
                <div className="group w-full cursor-pointer">
                    <button className="rounded-full flex justify-center items-center gap-2 text-sm lg:text-md font-medium">
                        <span className="">View Offer</span> 
                        <img className="invert  group-hover:translate-x-0.5 transition-all" src={assets.arrowIcon} alt="arrow icon" />
                    </button>
                </div>
        </div>
  )
}

export default ExclusiveOffersCard