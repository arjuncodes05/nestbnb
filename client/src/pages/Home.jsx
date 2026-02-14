import ExclusiveOffers from '../components/ExclusiveOffers'
import FeaturedHotels from '../components/FeaturedHotels'
import Hero from '../components/Hero'

const Home = () => {
  return (
    <div className=''>
        <Hero/>
        <FeaturedHotels/>
        <ExclusiveOffers/>
    </div>
  )
}
export default Home
