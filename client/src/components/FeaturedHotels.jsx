import { Link } from 'react-router-dom'
import { roomsDummyData } from '../assets/assets'
import HotelCard from './HotelCard'
import Title from './Title'

const FeaturedHotels = () => {
  return (
    <div className='w-full flex bg-white flex-col items-center h-fit mt-8 py-5 md:py-12 text-black space-y-10 md:space-y-15 px-4 md:px-10 lg:px-24 xl:px-32'>

        <Title 
          title="Featured Hotels" 
          subtitle="Discover our handpicked selection of exceptional properties around the world, offering unparalleled luxury and unforgettable experiences." 
          align="center"
          />

        <div className='flex justify-center gap-8 flex-wrap'>
          { roomsDummyData.slice(0, 4).map((data) => {
            return <HotelCard data={data}/>
          })}
        </div>

        <div>
          <Link to="/rooms" className='cursor-pointer border border-gray-400 text-gray-500 px-6 py-2 rounded-md shadow-md'>View All Hotels</Link>
        </div>
    </div>
  )
}

export default FeaturedHotels