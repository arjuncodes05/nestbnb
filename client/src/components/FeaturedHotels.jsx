import { useNavigate } from 'react-router-dom'
import { roomsDummyData } from '../assets/assets'
import HotelCard from './HotelCard'
import Title from './Title'

const FeaturedHotels = () => {

    const title = "Featured Hotels";
    const subtitle = "Discover our handpicked selection of exceptional properties around the world, offering unparalleled luxury and unforgettable experiences.";

    const navigate = useNavigate();

  return (
    <div className='w-full flex bg-slate-50 flex-col items-center min-h-screen py-10 md:py-12 text-black space-y-10 md:space-y-15 px-4 md:px-10 lg:px-24 xl:px-32'>
        <Title title={title} subtitle={subtitle} align="center" />

        <div className='flex justify-center gap-8 flex-wrap'>
          { roomsDummyData.slice(0, 4).map((data) => {
            return <HotelCard data={data} key={data._id}/>
          })}
        </div>

        <div>
          <button onClick={() => {
            navigate("/rooms")
            scrollTo(0, 0)
          }} className='cursor-pointer border border-gray-400 text-gray-500 px-6 py-2 rounded-md shadow-md'>View All Hotels</button>
        </div>
    </div>
  )
}

export default FeaturedHotels