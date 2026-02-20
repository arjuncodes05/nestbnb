import { useState } from 'react'
import Title from '../components/Title'
import { assets, userBookingsDummyData } from '../assets/assets'

const MyBookings = () => {
    const title = "My Bookings"
    const subtitle = "Easily manage your past, current, and upcoming hotel reservations in one place. Plan your trips seamlessly with just a few clicks"

    const [bookings, setBookings] = useState(userBookingsDummyData)

  return (
    <div className="flex justify-between flex-col pt-20 space-y-8 px-5 sm:px-10 lg:px-20">
        <div className='lg:w-2/3'>
            <Title title={title} subtitle={subtitle} align="start" />
        </div>

        <div className='space-y-2'>
            <div className='hidden md:flex justify-between w-full lg:text-lg font-semibold'>
                <p className='w-[50%] md:w-2/4 lg:w-[50%]'>Hotels</p>
                <p className='w-[40%] md:w-1/4 lg:ml-10 xl:ml-0'>Date & Timing</p>
                <p className='w-[10%] md:w-1/4 md:text-end'>Payment</p>
            </div>
            <div className='space-y-4'>
                {
                    bookings.map((data) => (
                        <div key={data._id} className='md:border-b rounded-md border-gray-300 py-2 pb-6 space-y-4 md:space-y-0 flex flex-col md:flex-row justify-between'>
                           {/* hotels */}
                            <div className='flex flex-col lg:flex-row gap-4 md:w-2/4 lg:w-[50%] w-full '>
                                <div>
                                    <img className='md:w-[70%] lg:w-42 xl:w-50 rounded-lg' src={data.room.images[0]} alt="" />
                                </div>
                                <div className='flex flex-col justify-center gap-2'>
                                    <h2 className='text-2xl font-playfair gap-2'>{data.hotel.name} <span className='text-xs text-gray-500 font-medium'>({data.room.roomType})</span></h2>
                                    <p className='text-gray-500 whitespace-nowrap flex gap-1 text-sm '>
                                        <img src={assets.locationIcon} alt="location icon" />
                                        <span>{data.hotel.address}</span>
                                    </p>
                                    <p className='text-gray-500 flex gap-1 text-sm'>
                                        <img src={assets.guestsIcon} alt="guest icon" />
                                        <span>Guests: {data.guests}</span>
                                    </p>
                                    <p className=' text-sm  text-end md:text-start font-medium'>Total: ${data.totalPrice}</p>
                                </div>
                            </div>

                            {/* Date & Timing */}
                            <div className='w-full md:w-1/4 lg:w-[40%] ,md:justify-center justify-start text-sm md:text-base border-y py-3 md:py-0 border-gray-300 md:border-none flex flex-col md:flex-row md:items-center lg:items-center lg:ml-10 xl:ml-0'>
                            <p className='md:hidden font-semibold'>Date & Timing</p>
                                <div className='flex flex-col lg:flex-row lg:gap-15 text-sm '>
                                    <p className='flex whitespace-nowrap gap-5 lg:gap-0 justify-between lg:flex-col'>
                                        Check-In:
                                        <span className='text-gray-500'>
                                            {new Date(data.checkInDate).toDateString()}
                                        </span>
                                    </p>

                                    <p className='flex justify-between lg:flex-col'>Check-Out:
                                        <span  className='text-gray-500'>
                                            {new Date(data.checkOutDate).toDateString()}
                                        </span>
                                    </p>
                                </div>
                            </div>

                            {/* Payment */}
                            <div className='w-full md:w-1/4 lg:w-[10%] text-sm md:text-base flex items-start md:items-end justify-between md:justify-center  md:flex-col'>
                                <p className='md:hidden font-semibold'>Payment Status</p>
                                <div>
                                    <div className='flex items-center gap-2'>
                                        <div className={`${data.isPaid ? "bg-green-500" : "bg-red-500"} size-2 rounded-full`}></div>
                                        <p className={`${data.isPaid ? "text-green-500" : "text-red-500"}`}>{data.isPaid ? "Paid" : "Unpaid"}</p>
                                    </div>
                                    {
                                        !data.isPaid && (
                                            <button className='bg-primary/90 hover:bg-primary px-2 py-1 mt-2 text-xs md:text-sm rounded-full text-white'>Pay Now</button>
                                        )
                                    }
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    </div>
  )
}

export default MyBookings