import React from 'react'
import { useGetBookingsQuery,selectBookingById } from './bookingSlice'
import { useNavigate } from 'react-router-dom'
import { parseISO, format } from 'date-fns'
import { useSelector } from 'react-redux'

const BookingDataRow = ( { bookingId } ) => {
    const navigate =  useNavigate()

    const booking =  useSelector(state => selectBookingById(state, bookingId))

    // const { booking } = useGetPropertiesQuery
   

    const openBooking =  () => {
        navigate(`/dashboard/bookings/single-booking/${bookingId}`)
    }
    let content 
    // {console.log(props.length);}
// if{
//   content = <p>No Properties Found</p>
// }
// else{
  // {console.log(booking)}
  content =  (
    
    
        <tr onClick = {openBooking} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
        <th scope="row" className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
        {booking.id}
        </th>
        <td className="py-4 px-6">
        {format(parseISO(booking.checkInDate), 'yyyy-MM-dd')}
        </td>
        <td className="py-4 px-6">
        { format(parseISO(booking.checkOutDate), 'yyyy-MM-dd')}

        </td>
        
       
    </tr>
  )
// }
  return content 
}

export default BookingDataRow

