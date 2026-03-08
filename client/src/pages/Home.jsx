import ExclusiveOffers from '../components/ExclusiveOffers.jsx'
import FeaturedHotels from '../components/FeaturedHotels.jsx'
import Hero from '../components/Hero.jsx'
import Newsletter from '../components/Newsletter.jsx'
import RecommendedHotels from '../components/RecommendedHotels.jsx'
import Testimonial from '../components/Testimonial.jsx'

const Home = () => {
  return (
    <div className=''>
        <Hero/>
        <RecommendedHotels/>
        <FeaturedHotels/>
        <ExclusiveOffers/>
        <Testimonial/>
        <Newsletter/>
    </div>
  )
}
export default Home
