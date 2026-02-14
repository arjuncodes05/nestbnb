import { assets } from "../assets/assets"

const Hero = () => {
  return (
    <>
        <div className='w-full h-screen bg-[url("/src/assets/heroImage.png")] bg-center bg-cover flex flex-col pt-20 md:pt-0 justify-center items-start space-y-4 sm:space-y-6 text-white px-4 md:px-10 lg:px-24 xl:px-32'>
            {/* <img className='w-full h-full' src="/src/assets/heroImage.png" alt="" /> */}
            <div className="w-4/5 lg:w-1/2 space-y-2 sm:space-y-4">
            <p className="bg-[#49B9FF]/50 w-fit rounded-full px-2 py-1 text-xs sm:text-sm md:text-base">
                The Ultimate Hotel Experience
            </p>
            <h1 className="text-3xl sm:text-4xl md:text-5xl xl:text-6xl font-bold font-playfair">
                Discover Your Perfect Gateway Destination
            </h1>
            <p className="text-sm sm:text-md md:text-lg">
                Unparalleled luxury and comfort await at the world's most exclusive
                hotels and resorts. Start your journey today.
            </p>
            </div>

            <form className="bg-white text-black flex md:flex-row flex-col sm:flex-wrap lg:flex-nowrap lg:items-center p-4 rounded-lg gap-2 md:gap-4 select-none sm:w-3/5 md:w-fit">
            <div className="flex flex-col text-gray-600 gap-0.5">
                <div className="flex gap-2 items-center">
                <img src={assets.calenderIcon} alt="icon" className="h-4" />
                <label htmlFor="destination" className="text-sm sm:text-base ">Destination</label>
                </div>
                <input list="destinationList" placeholder="Type here" id="destination" className="border border-gray-300 px-2 py-1 rounded-md" />
                <datalist id="destinationList">
                <option value="Dehradun"/>
                <option value="Noida"/>
                <option value="Jaipur"/>
                <option value="Haridwar"/>
                </datalist>
            </div>

            <div className="flex flex-col text-gray-600 gap-0.5">
                <div className="flex gap-2 items-center">
                <img src={assets.calenderIcon} alt="icon" className="h-4" />
                <label htmlFor="checkIn" className="text-sm sm:text-base ">Chech In</label>
                </div>
                <input type="date" placeholder="dd-mm-yy" id="checkIn" className="border text-sm sm:text-base border-gray-300 px-2 py-1 rounded-md" />
            </div>

            <div className="flex flex-col text-gray-600 gap-0.5">
                <div className="flex gap-2 items-center">
                <img src={assets.calenderIcon} alt="icon" className="h-4" />
                <label htmlFor="checkOut" className="text-sm sm:text-base">Check Out</label>
                </div>
                <input type="date" placeholder="dd-mm-yy"  id="checkOut"  className="border text-sm sm:text-baseborder-gray-300 px-2 py-1 rounded-md" />
            </div>

            <div className="flex flex-col text-gray-600 gap-0.5">
                <label htmlFor="guests" className="text-sm sm:text-base">Guests</label>
                <input type="number" placeholder="2"  id="guests"  className="border text-sm sm:text-base border-gray-300 px-2 py-1 rounded-md w-12" />
            </div>

            <div className="flex justify-center items-center">
                <button className="bg-black text-white text-lg w-full h-10 lg:ml-4 px-4 rounded-md flex items-center justify-center gap-1 cursor-pointer active:scale-95">
                <img src={assets.searchIcon} alt="icon" className="h-7" />
                <span className="text-sm sm:text-base">Search</span>
                </button>
            </div>
            </form>
        </div>
    </>
  )
}

export default Hero