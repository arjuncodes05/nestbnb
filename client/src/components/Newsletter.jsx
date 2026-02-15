import Title from './Title'
import { assets } from '../assets/assets';

const Newsletter = () => {

  const title = "Stay Inspired";
  const subtitle = "Join our newsletter and be the first to discover new destinations, exclusive offers, and travel inspiration."

  return (
    <div className="w-full flex bg-white flex-col items-center mt-10 mb-10 py-5 md:py-12 space-y-5 sm:space-y-8 px-4 sm:px-8 md:px-10 lg:px-24 xl:px-32">
      <div className='bg-gray-900 rounded-xl space-y-10 max-w-5xl lg:w-full  p-5'>
        <Title title={title} subtitle={subtitle} textColor="white" align="center" />

      <div className='md:space-y-0 space-y-4'>
          <div className='flex flex-col sm:flex-row justify-center items-center md:items-start md:space-y-4 gap-2 md:gap-5'>
              <input type="text" placeholder='Enter your email' className='bg-gray-600 text-white outline-none border border-white/25 px-4 py-2 rounded-md' />
              <button className='bg-black flex gap-2 text-white rounded-md px-4 py-2 active:scale-95'><span>Subscribe</span> <img className='invert' src={assets.arrowIcon} alt="arrow icon" /></button>
          </div>
          <div className='w-full text-center text-white/50 text-xs flex justify-center mb-5'>
            <p>By subscribing, you agree to our Privacy Policy and consent to receive updates.</p>
          </div>
      </div>
      </div>
    </div>
  )
}

export default Newsletter