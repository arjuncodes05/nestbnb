import { useState } from 'react';
import { assets, cities } from '../assets/assets'
import { useAppContext } from '../context/AppContext.jsx'

const HotelReg = ({setMobileMenu}) => {

    const [name, setName] = useState("");        
    const [contact, setContact] = useState("");
    const [address, setAddress] = useState("");
    const [city, setCity] = useState("");
    
    const {BASE_URL, setShowHotelReg, setToastInfo, setIsOwner} = useAppContext();

    const onSubmitHandler = async(e) => {
        e.preventDefault();
        const accessToken = localStorage.getItem("accessToken")
        try {
            const response = await fetch(`${BASE_URL}/api/hotels/`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization" : `Bearer ${accessToken}`
            },
            body : JSON.stringify({
                name, contact, address, city
            })
        })
        const data = await response.json();
        if(data.success){
            setShowHotelReg(false)
            setIsOwner(true);
            setToastInfo({visible: true, message: data.message, type: "success"})
        }else{
            // implement it as well
        }
        setName("")
        setContact("")
        setAddress("")
        setCity("")
        setMobileMenu(false)
        } catch (error) {
          console.log(error);
        }
    }

  return (
    <div onClick={() => setShowHotelReg(false)} className='absolute h-screen w-full flex items-center justify-center bg-black/80'>
        <form onSubmit={(e) => onSubmitHandler(e)} onClick={(e) => {e.stopPropagation()}} className=' bg-white rounded-lg overflow-hidden w-[90%] sm:w-[60%] md:w-[90%] lg:w-4/5 xl:w-3/5 flex'>
            <img src={assets.regImage} alt="reg image" className='hidden md:flex w-1/2' />
            <div className='relative px-4 md:px-6 py-10 flex flex-col justify-center space-y-2.5 md:space-y-5 w-full md:w-1/2'>
                <img onClick={() => setShowHotelReg(false)} src={assets.closeIcon} alt="close icon" className='absolute top-4 right-4 w-3' />
                <p className='text-black text-center text-xl md:text-2xl font-bold'>Register Your Hotel</p>

                <div className='space-y-1 text-sm md:text-base'>
                    <label htmlFor="hotelName" className='flex flex-col space-y-2'>Hotel Name</label>
                    <input type="text" 
                        value={name}
                        onChange={(e) => setName(e.target.value)}  
                        id="hotelName" placeholder='Enter Hotel Name' 
                        className='border outline-none w-full rounded-sm border-gray-400 p-1.5'
                    />
                    
                </div>

                <div className='space-y-1 text-sm md:text-base'>
                    <label htmlFor="phone" className='flex flex-col space-y-2'>Phone</label>
                    <input type="number"
                        value={contact}
                        onChange={(e) => setContact(e.target.value)}  
                        id="phone" placeholder='Enter your Phone Number' 
                        className='border outline-none w-full rounded-sm border-gray-400 p-1.5'
                    />
                </div>

                <div className='space-y-1 text-sm md:text-base'> 
                    <label htmlFor="address" className='flex flex-col space-y-2'>Address</label>
                    <textarea id="address" 
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}  
                        rows="2" placeholder='Enter your Address' 
                        className='border outline-none w-full rounded-sm border-gray-400 p-1.5 resize-none'
                    />
                </div>

                <div className='flex flex-col gap-1 md:w-1/2 text-sm md:text-base'>
                    <label htmlFor="city">City</label>
                    <select 
                        value={city}
                        onChange={(e) => setCity(e.target.value)}  
                        name="city" id="city" className='border outline-none px-4 py-2 rounded-sm border-gray-400 p-1.5'>
                            <option className='hidden'>Select City</option>
                            {
                                cities.map((city) => (
                                    <option key={city} value={city}>{city}</option>
                                )) 
                            }
                    </select>
                </div>

                <div className='text-sm md:text-base'>
                    <button type='submit' className='px-4 py-2 bg-primary/90 rounded-md hover:bg-primary active:scale-95 text-white font-medium'>Register</button>
                </div>
            </div>
        </form>
    </div>
  )
}

export default HotelReg