import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAutomobile, faBars, faBed, faGear, faPlane, faPlaneCircleCheck, faTaxi, faUserCircle } from '@fortawesome/free-solid-svg-icons'

const RentalOptions = () => {
  return (
    <section className='flex flex-row items-center bg-black text-white  pb-6 px-4 lg:px-48
    whitespace-nowrap'>
        <div className='w-[600px] overflow-scroll scrollbar-hide space-x-5'>
          
        <a href="" className='inline-flex items-center border rounded-full px-3  py-2'>
       <FontAwesomeIcon icon={faBed} className = 'pr-2 text-[12px]' />
       <span className='font-medium text-[13px]'>Stay</span>
       </a>
       <a href="" className='inline-flex items-center   '>
       <FontAwesomeIcon icon={faPlaneCircleCheck} className = 'pr-2 text-[12px]' />
       <span className='font-medium text-[13px]'>Flights</span>
       </a>
       <a href="" className='inline-flex items-center   '>
       <FontAwesomeIcon icon={faAutomobile} className = 'pr-2 text-[12px]' />
       <span className='font-medium text-[13px] '>Car rentals</span>
       </a>
       <a href="" className='inline-flex items-center '>
       <FontAwesomeIcon icon={faGear}  className = 'pr-2 text-[12px]'/>
       <span className='font-medium text-[13px] '>Attractions</span>
       </a>
       <a href="" className='inline-flex items-center hover:  '>
       <FontAwesomeIcon icon={faTaxi}  className = 'pr-2 text-[12px]'/>
       <span className='font-medium text-[13px]'>Airport taxis</span>
       </a>

   
        </div>
 
    </section>
  )
}

export default RentalOptions