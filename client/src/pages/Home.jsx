import ExclusiveOffers from '../components/ExclusiveOffers'
import FeaturedHotels from '../components/FeaturedHotels'
import Hero from '../components/Hero'
import Newsletter from '../components/Newsletter'
import Testimonial from '../components/Testimonial'

const Home = () => {
  return (
    <div className=''>
        <Hero/>
        <FeaturedHotels/>
        <ExclusiveOffers/>
        <Testimonial/>
        <Newsletter/>
    </div>
  )
}
export default Home
