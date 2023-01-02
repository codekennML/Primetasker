import {useState} from 'react'
import DatePicker from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClose } from '@fortawesome/free-solid-svg-icons';
import { format, sub, subDays } from 'date-fns';



const BookingDateModal = ({date, setDate, isOpen, setIsOpen}) => {
  const [startDate, setStartDate] = useState(new Date())

  const [endDate, setEndDate] = useState(null)

  const onChange = dates => {
    const start =  dates[0]
    const end =  dates[1]
    setStartDate(start)
    setEndDate(end)

  
}


  return (

<>


{/* <div className='fixed w-full h-full bg-transparent '  onClick={() => setIsOpen(false)} > */}
<div  
className={` invisible lg:visible ${isOpen ? 'transition ease-in-out duration-500 opacity-100 ' : 'opacity-0 ease-out duration-500 invisible'} absolute   opacity-80  top-16 lg:left-[25%]  justify-center items-center shadow-md rounded-lg`}
>
            {/* <FontAwesomeIcon onClick={() => setIsOpen(false)} icon = {faClose} className = ' cursor-pointer text-xl absolute right-8 top-2 z-50 text-red-600' /> */}
    
      

 
 <DatePicker className='border-0'
   closeOnScroll={true}
      selected={startDate}
      onChange={onChange}
      startDate={startDate}
      endDate={endDate}
      // dateFormat= {`MMMM,dd yyyy`}
      selectsRange
      inline
      monthsShown={1}
    />




 </div>



</>

  


  )
}

export default BookingDateModal