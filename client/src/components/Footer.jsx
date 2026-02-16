import { Link } from "react-router-dom"
import { assets } from "../assets/assets"

const Footer = () => {
  return (
    <div className="w-full bg-slate-50 flex flex-col justify-center px-5 sm:px-10 lg:px-20 pt-10">
        <div className="w-full flex justify-between flex-wrap gap-4 *:p-4">

            {/* s-1 */}
            <div className="max-w-3/3 md:max-w-1/3 lg:max-w-1/3">
                <div className="items-center flex gap-3 cursor-pointer">
                    <img className="w-10 lg:w-14" src={assets.logo} alt="logo" />
                    <p className={`font-semibold text-xl lg:text-2xl text-black/80`}>Nestbnb</p>
                </div>
                <div>
                    <p className="text-sm my-4 text-gray-500/90">Discover the world's most extraordinary places to stay, from boutique hotels to luxury villas and private islands.</p>
                    <ul className="flex gap-2">
                        <li><img src={assets.instagramIcon} alt="instagram icon" className="w-6" /></li>
                        <li><img src={assets.facebookIcon} alt="facebook icon" className="w-6"/></li>
                        <li><img src={assets.twitterIcon} alt="twitter icon" className="w-6"/></li>
                        <li><img src={assets.linkendinIcon} alt="linkedin icon" className="w-6"/></li>
                    </ul>
                </div>
            </div>

            {/* s-2 */}
            <div className="space-y-4">
                <h3 className="font-playfair text-xl">COMPANY</h3>
                <ul className="text-gray-500/90 text-sm space-y-2 cursor-pointer">
                    <li>About</li>
                    <li>Careers</li>
                    <li>Press</li>
                    <li>Blog</li>
                    <li>Partners</li>
                </ul>
            </div>
            
            <div className="space-y-4">
                <h3 className="font-playfair text-xl">SUPPORT</h3>
                <ul className="text-gray-500/90 text-sm space-y-2 cursor-pointer">
                    <li>Help Center</li>
                    <li>Safety Information</li>
                    <li>Cancellation Options</li>
                    <li>Contact Us</li>
                    <li>Accessibility</li>
                </ul>
            </div>

            <div className="space-y-4 sm:max-w-2/3 md:max-w-1/2">
                <h3 className="font-playfair text-xl">STAY UPDATED</h3>
                <p className="text-gray-500/90 text-sm">Subscribe to our newsletter for travel inspiration and special offers.</p>
                <div className="flex">
                    <input type="text" placeholder="Your Email" className="border text-gray-600 outline-none border-gray-400/50 bg-white rounded-sm rounded-r-none px-4 py-2 z-1 text-xs sm:text-sm lg:text-base" />
                    <img src={assets.arrowIcon} alt="arrow icon" className="invert bg-white -translate-x-1 rounded-sm px-4" />
                </div>
            </div>
        </div>
        
        <hr className="text-gray-300/80" />
        
        <div className="flex justify-between items-center md:items-start space-y-2 flex-col md:flex-row my-5 text-gray-400 text-sm">
            <div>© {new Date().getFullYear()} Nestbnb. All rights reserved.</div>
            <ul className="flex gap-5">
                <li>Privacy</li>
                <li>Terms</li>
                <li>Sitemap</li>
            </ul>
        </div>
    </div>
  )
}

export default Footer