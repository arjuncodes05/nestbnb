import { useEffect, useState } from "react"
import {useParams} from "react-router-dom"
import { assets, facilityIcons, roomCommonData, roomsDummyData } from "../assets/assets.js"

const RoomDetails = () => {

  const {id: roomId} = useParams()
  const [room, setRoom] = useState();
  const [mainImg, setMainImg] = useState(null);

  useEffect(() => {
    const roomData = roomsDummyData.find((room) => room._id ===  roomId)
    roomData && setRoom(roomData)
    roomData && setMainImg(roomData.images[0])
  }, [])

  return (
      room &&
        <div className="flex justify-between pt-30 px-5 sm:px-10 lg:px-20">
          
          <div className="space-y-6 w-full sm:w-2/3 md:w-3/5 lg:w-full"> 
              <div className="space-y-2">
                  <div className="flex items-center flex-wrap gap-2">
                    <h2 className="font-playfair text-3xl md:text-4xl font-medium">{room.hotel.name}</h2>
                    <p className="text-sm md:text-md text-gray-500">({room.roomType})</p>
                    <span className="bg-orange-400 text-white px-2 py-1 rounded-full text-xs">20% OFF</span>
                  </div>
                  <p>200+ reviews</p>
                  <div className="flex gap-2 text-gray-500 items-center text-sm">
                    <img src={assets.locationIcon} alt="location icon" />
                    {room.hotel.address}
                  </div>
              </div>
              
              {/* Room images */}
              <div className=" flex flex-col lg:flex-row gap-4">
                <div className="w-full "> 
                  <img className="w-full rounded-lg" src={mainImg} alt="" />
                </div>

                <div className="w-full grid grid-cols-2 gap-2">
                  {
                    room.images.map((img, index) => (
                      <img key={index} onClick={() => setMainImg(img)} className={`${mainImg === img && "outline-4 outline-orange-500"} rounded-lg`} src={img} alt="" />
                    ))
                  }
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex flex-col lg:flex-row lg:items-center justify-between space-y-1">
                  <h2 className="text-xl sm:text-2xl lg:text-4xl font-playfair front-semibold">Experience Luxury Like Never Before</h2>
                  <p className="text-md my-1 lg:text-xl text-gray-600 font-semibold">${room.pricePerNight}/night</p>
                </div>
                 <ul className="flex flex-row gap-2 flex-wrap">
                          {room.amenities.map((el, index) => (
                            <li key={index} className="bg-purple-500/20 px-4 py-2 rounded-md flex items-center justify-center gap-2 text-xs">
                              <img
                                className="w-4"
                                src={facilityIcons[el]}
                                alt={`${el}`}
                              />
                              <span className="text-xs">{el}</span>
                            </li>
                          ))}
                        </ul>
              </div>


              {/* form */}
              <div className="flex lg:justify-center my-10 lg:my-15">
                <form className="flex flex-col sm:flex-row flex-wrap gap-4 shadow-[0_3px_10px_rgb(0,0,0,0.1)] p-4 lg:p-8 text-gray-500 *:flex *:flex-col *:justify-center *:gap-2  *:text-sm *:lg:text-base">
                  <div>
                    <label htmlFor="checkIn" className="font-medium">Check-In</label>
                    <input type="date" name="checkIn" id="checkIn" className="border border-gray-400 px-2 py-1 rounded-sm" />
                  </div>
                  
                  <div>
                    <label htmlFor="checkOut" className="font-medium">Check-Out</label>
                    <input type="date" name="checkOut" id="checkOut" className="border border-gray-400 px-2 py-1 rounded-sm" />
                  </div>

                  <div>
                    <label htmlFor="guestCount" className="font-medium">Guest</label>
                    <input type="number" name="guestCount" id="guestCount" placeholder="2" className="border w-15 border-gray-400 px-2 py-1 rounded-sm" />
                  </div>

                  <div className="self-end lg:self-end">
                    <button className="cursor-pointer bg-blue-500 px-4 py-2 rounded-md active:scale-95 text-white font-semibold">Check Availability</button>
                  </div>

                </form>
              </div>


              {/* common data */}
              <div className="space-y-5 my-10 text-sm sm:text-base">
                {
                  roomCommonData.map((data, index) => (
                    <div key={index} className="flex items-start gap-2">
                      <img src={data.icon} alt={`${data.title} icon`} />
                      <span className="flex flex-col">
                        <p>{data.title}</p>
                        <p className="text-gray-500">{data.description}</p>
                      </span>
                    </div>
                  ))
                }
              </div>

              <div className="text-gray-500 border-y py-10 border-gray-300/90 my-4 text-sm sm:text-base">
                Guests will be allocated on the ground floor according to availability. You get a comfortable Two bedroom apartment has a true city feeling. The price quoted is for two guest, at the guest slot please mark the number of guests to get the exact price for groups. The Guests will be allocated ground floor according to availability. You get the comfortable two bedroom apartment that has a true city feeling.
              </div>

              {/* owner */}
              <div className="flex gap-6 h-30 md:h-50">
                <div className="flex justify-center items-center w-15 md:w-20 h-15 md:h-20 rounded-full overflow-hidden bg-red-400">
                  <img className="scale-150" src="https://cdn.britannica.com/54/264854-050-1F82F2BF/indian-actor-hrithik-roshan-european-premiere-kites-odeon-west-may-18-2010-london-england.jpg?w=400&h=300&c=crop" alt="ok" />
                </div>
                <div className="mt-2 md:mt-5">
                  <p className="font-semibold text-sm md:text-base">Hosted By <span>{room.hotel.owner.username}</span></p>
                  <p className="text-xs md:text-sm">200+ reviews</p>
                  <div className="mt-2 text-white font-medium text-xs md:text-base">
                    <button className="bg-blue-500/90 cursor-pointer rounded-md px-3 md:px-4 py-2 hover:bg-blue-500">Contact Now</button>
                  </div>
                </div>
              </div>
          </div>

        </div>
  )
}

export default RoomDetails