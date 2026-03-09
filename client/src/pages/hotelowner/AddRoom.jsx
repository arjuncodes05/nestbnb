import { useEffect, useState } from 'react';
import { assets } from '../../assets/assets';
import Title from '../../components/Title'
import { useAppContext } from '../../context/AppContext';

const AddRoom = () => {

  const title = "Add Room";
  const subtitle = "Fill in the details carefully and accurate room details, pricing, and amenities, to enhance the user booking experience"

  const [images, setImages] = useState({
    1: null,
    2: null,
    3: null,
    4: null,
  })

  const [inputs, setInputs] = useState({
    roomType: '',
    pricePerNight: '',
    amenities: {
      "Free Wifi": false,
      "Free Breakfast": false,
      "Room Service": false,
      "Mountain View": false,
      "Pool Access": false,
    }
  });
  
  const {BASE_URL, setToastInfo, accessToken} = useAppContext();
  const [loading, setLoading] = useState(false);
  const onSubmitHandler = async(e) => {
    e.preventDefault();        
    if(!inputs.roomType || !inputs.pricePerNight || !inputs.amenities || !Object.values(images).some((image) => image)){
      setToastInfo({
        visibility: true,
        message: "Please fill all the details",
        type: "error"
      })
      return;
    }
    setLoading(true);
    
    try {
      const formData = new FormData;
      formData.append('roomType', inputs.roomType)
      formData.append('pricePerNight', inputs.pricePerNight);
      
      // converting amenities to array and keeping only enabled ones      
      const amenities = Object.keys(inputs.amenities).filter(key => inputs.amenities[key])       
      formData.append('amenities', JSON.stringify(amenities));

      // adding images to formdata
      for (const image of Object.values(images)) {
        if (image) formData.append('images', image);
      }

      const response = await fetch(`${BASE_URL}/api/rooms`, {
        method: "POST",
        headers: {
          "Authorization": `Bearer ${accessToken()}`,
        },
        body: formData,
      })
      const data = await response.json();      
      if(data.success){
          setToastInfo({
            visible: true, 
            message: data.message,
            type: "success"
          })

          // reseting input and images field
          setInputs({
            roomType: '',
            pricePerNight: '',
            amenities: {
              "Free Wifi": false,
              "Free Breakfast": false,
              "Room Service": false,
              "Mountain View": false,
              "Pool Access": false,
            }
          })
          setImages({
            1: null,
            2: null,
            3: null,
            4: null,
          })
      }else{
        setToastInfo({
          visible: true, 
          message: data.message,
          type: "error"
        })
      }
    } catch (error) {
        setToastInfo({
          visible: true, 
          message: "Something wen wrong.",
          type: "error"
        })
    } finally {
      setLoading(false)
    }
  }
  
  return (
    <form onSubmit={onSubmitHandler} className='space-y-4 lg:space-y-5 px-5'>
      <Title title={title} subtitle={subtitle} align="start" />

      {/* images */}
      <div className='space-y-2 flex flex-col'>
        <p>Images</p>
        <div className='grid w-fit justify-self-start grid-cols-2 sm:flex flex-wrap gap-4 lg:gap-8'>
          {Object.keys(images).map((key) => (
            <label className='rounded-md overflow-hidden flex justify-center' key={key} htmlFor={`roomImage${key}`}>
              <img className="max-h-10 sm:max-h-15 md:max-h-20 cursor-pointer opacity-80" src={images[key] ? URL.createObjectURL(images[key]) : assets.uploadArea} alt="" />
              <input onChange={(e) => setImages(prev => ({...prev, [key]: e.target.files[0] }))} type="file" accept='image/*' hidden id={`roomImage${key}`} />
            </label>
          ))}
        </div>
      </div>

      <div className='flex flex-wrap gap-4'>
        {/* room type */}
        <div>
          <p>Room Type</p>
          <select value={inputs.roomType} onChange={(e) => {
            setInputs(prev => ({...prev, roomType: e.target.value}))
          }} className='border w-50 p-2 border-gray-300 mt-2 rounded-sm text-gray-500'>
            <option value="">Select Room Type</option>
            <option value="Single Bed">Single Bed</option>
            <option value="Double Bed">Double Bed</option>
            <option value="Luxury Room">Luxury Room</option>
            <option value="Family Suite">Family Suite</option>
          </select>
        </div>

        {/* price per night */}
        <div>
          <p>Price <span className='text-sm'>/night</span></p>
          <input value={inputs.pricePerNight} onChange={(e) => setInputs(prev => ({...prev, pricePerNight: e.target.value}))} type="number" name="pricePerNight" className='border w-20 p-2 border-gray-300 mt-2 rounded-sm text-gray-500 outline-none' placeholder='0' />
        </div>
      </div>

      {/* Amenities */}
      <div>
        <p>Amenities</p>
        {
          Object.keys(inputs.amenities).map((amenity, index) => (
            <div key={index} className='text-gray-500 flex gap-2' >
              <input
              checked={inputs.amenities[amenity]} onClick={(e) => {
                setInputs(prev => ({...prev, amenities: {...inputs.amenities, [amenity]: !inputs.amenities[amenity]}}))
              }}
              type="checkbox" id={`amenities${index+1}`} />
              <label htmlFor={`amenities${index+1}`}> {amenity}</label>
            </div>
          ))
        }
      </div>

      <button type='submit' className={`${loading ? "disabled bg-gray-400" : "bg-primary/90 hover:bg-primary active:scale-95"} text-white px-6 py-2 rounded-md font-medium text-sm lg:text-base`}>
        {loading ? "Adding..." : "Add room"}
      </button>
    </form>
  )
}

export default AddRoom