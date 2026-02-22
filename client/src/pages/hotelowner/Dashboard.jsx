import { useState } from "react"
import { assets, dashboardDummyData } from "../../assets/assets"
import Title from "../../components/Title"

const Dashboard = () => {

  const title = "Dashboard"
  const subtitle = "Monitor your room listings, track bookings and analyze revenue-all in one place. Stay updated with real-time insights to ensure smooth operations."

  const [dashboardData, setDashboardData] = useState(dashboardDummyData)

  return (
    <div>
      <Title title={title} subtitle={subtitle} align="start" />

      <div className="flex flex-wrap justify-center md:justify-start w-full gap-4 my-10">
        {/* Total Bookings */}
        <div className="flex items-center justify-center border border-gray-300 bg-primary/3 p-2 md:p-4 text-sm md:text-base  gap-4 font-semibold rounded">
          <img className="w-8 md:w-10" src={assets.totalBookingIcon} alt="total bookings icon" />
          <p className="flex flex-col text-blue-500">Total Bookings <span className="text-neutral-500">{dashboardData.totalBookings}</span></p>  
        </div>

        {/* Total Revenue */}
        <div className="flex items-center justify-center border border-gray-300 bg-primary/3 p-2 md:p-4 text-sm md:text-base gap-4 font-semibold rounded">
          <img className="w-8 md:w-10" src={assets.totalRevenueIcon} alt="total revenue icon" />
          <p className="flex flex-col text-blue-500">Total Revenue <span className="text-neutral-500">{dashboardData.totalRevenue}</span></p>  
        </div>
      </div>

      {/* Recent Bookings */}
      <p className="text-blue-950/70 font-medium text-xl mb-5">Recent Bookings</p>
      <div className="space-y-2 border border-gray-300 rounded-lg text-left max-w-3xl max-h-60 overflow-y-scroll">
        <table className="w-full">
          <thead className="bg-gray-50">
            <tr>
              <th className="py-3 px-4 font-medium">User Name</th>
              <th className="py-3 px-4 font-medium max-sm:hidden">Room Name</th>
              <th className="py-3 px-4 font-medium text-center">Total Amount</th>
              <th className="py-3 px-4 font-medium text-end ">Payment Status</th>
            </tr>
          </thead>
          <tbody className="text-sm">
            {
              dashboardData.bookings.map((item, index) => (
                <tr key={index} className="border-t border-gray-300">
                  <td  className="py-3 px-4">{item.user.username}</td>
                  <td  className="py-3 px-4 max-sm:hidden">{item.room.roomType}</td>
                  <td  className="py-3 px-4 text-center">${item.room.pricePerNight}</td>
                  <td  className="py-3 px-4 text-end ">
                    <button className={`${item.isPaid ? "bg-green-200 text-green-600" : "bg-amber-200 text-yellow-600"} px-3 py-1 rounded-full text-xs`}>{item.isPaid ? "Completed" : "Pending"}</button>
                  </td>
                </tr>
              ))
            }
          </tbody>
        </table>
      </div>

    </div>
  )
}

export default Dashboard