
import 'react-day-picker/dist/style.css';
import  { useEffect, useState } from 'react';
import { subDays, addDays, format, isValid } from 'date-fns';
import { DayPicker } from 'react-day-picker';

const DatePicker = ({getDateRange,isFilterActive}) => {
  // const dateRange{
  //   from: pastMonth,
  //   to: addDays(pastMonth, 4),
  // }
  // const dateRange = useState({
  //   from : null,
  //   to : null
  const today = new Date();
  // })
  const defaultSelected =  {
    from: today,
    to: addDays(today, 7)
  };

  // const today =  new Date()
  // const weekRange = subDays(today , 7)

  const [range, setRange] = useState(defaultSelected)
  if(!isValid(range?.from))
  {
    setRange( prev => ({
      ...prev,
      from : defaultSelected?.from  

    }))}
    else if (!isValid(range?.to)) {
      setRange( prev => ({
        ...prev,
        to: defaultSelected?.to 
  
      }))}
    
  useEffect(() => {
    
    getDateRange(range)
  },[range])
 

 


  return (
    <div className={`${isFilterActive ? 'opacity-100 ease-in ' : 'opacity-0 invisible ease-out ' } transition-opacity duration-300  bg-gray-50 text-gray-600 font-sans font-medium text-sm py-2 w-[620px] max- h-[330px] absolute z-50 right-0 top-11 `} >
          <DayPicker 
          selected={range}
          required
            mode="range"
            onSelect={setRange}
          numberOfMonths={2} pagedNavigation   className='w-full' 
          // footer = {footer} 
          />
    </div>

  )
}

export default DatePicker