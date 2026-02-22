import { useState } from "react"
import Title from "../../components/Title"
import { roomsDummyData } from "../../assets/assets"

const ListRoom = () => {

  const title = "Room Listing"
  const subtitle = "View, edit, or manage all listed rooms. Keep the information up-to-date to provide the best experience for users."

  const [rooms, setRooms] = useState(roomsDummyData)

  return (
    <div>
      <Title align="start" title={title} subtitle={subtitle} />

      <p className="text-blue-950/70 font-medium text-base my-5">All Rooms</p>
      <div className="space-y-2 border border-gray-300 rounded-lg text-left max-w-3xl max-h-80 overflow-y-scroll">
        <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="py-3 px-4 font-medium">Name</th>
                <th className="py-3 px-4 font-medium max-sm:hidden">Facility</th>
                <th className="py-3 px-4 font-medium text-center">Price/night</th>
                <th className="py-3 px-4 font-medium text-center">Action</th>
              </tr>
            </thead>
            <tbody className="text-sm">
              {
                rooms.map((item, index) => (
                  <tr key={index} className="border-t border-gray-300">
                    <td className="py-3 px-4">{item.roomType}</td>
                    <td className="py-3 px-4 max-sm:hidden">{item.amenities.join(", ")}</td>
                    <td className="py-3 px-4 text-center">${item.pricePerNight}</td>
                    <td className="py-3 px-4 text-center">
                      <label className="relative inline-flex items-center cursor-pointer text-gray-900 gap-3">
                        <input type="checkbox" className="sr-only peer" checked={item.isAvailable} />
                        <div className="w-10 md:w-12 h-6 md:h-7 bg-slate-200 rounded-full peer-checked:bg-blue-600 transition-colors duration-200"></div>
                        <span className="dot absolute bg-white rounded-full top-1 left-1 w-4 h-4 md:w-5 md:h-5  transition-transform duration-200 ease-in-out"></span>
                      </label>
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

export default ListRoom