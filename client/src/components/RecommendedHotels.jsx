import HotelCard from './HotelCard.jsx'
import Title from './Title.jsx'
import { useAppContext } from '../context/AppContext.jsx';
import { useEffect } from 'react';
import { useState } from 'react';

const RecommendedHotels = () => {

    const title = "Recommended Hotels";
    const subtitle = "Discover our handpicked selection of exceptional properties around the world, offering unparalleled luxury and unforgettable experiences.";

    const [recommended, setRecommended] = useState([]);
    const {rooms, searchedCities} = useAppContext();

    const filterHotels = () => {
        const filteredHotels = rooms.slice().filter((room) => searchedCities.includes(room.hotel.city));
        setRecommended(filteredHotels);
    }
    
    useEffect(() => {
        filterHotels();
    }, [rooms, searchedCities])

  return recommended.length > 0 && (
    <div className='w-full flex flex-col items-center min-h-screen py-10 md:py-12 text-black space-y-10 md:space-y-15 px-4 md:px-10 lg:px-24 xl:px-32'>
        <Title title={title} subtitle={subtitle} align="center" />

        <div className='flex justify-center gap-8 flex-wrap'>
          { recommended.slice(0, 4).map((data) => {
            return <HotelCard data={data} key={data._id}/>
          })}
        </div>
    </div>
  )
}

export default RecommendedHotels