import ExclusiveOffers from '../components/ExclusiveOffers'
import FeaturedHotels from '../components/FeaturedHotels'
import Hero from '../components/Hero'
import Testimonial from '../components/Testimonial'

const Home = () => {
  return (
    <div className=''>
        <Hero/>
        <FeaturedHotels/>
        <ExclusiveOffers/>
        <Testimonial/>
    </div>
  )
}
export default Home
