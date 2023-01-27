import { navlinks } from "../constants/Navbar";
import styles, { layout } from "../styles/style";
import {
  NavLink,
  Outlet,
  Link,
  useNavigate,
  useLocation,
} from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAutomobile,
  faBars,
  faBed,
  faGear,
  faPlane,
  faPlaneCircleCheck,
  faTaxi,
  faUserCircle,
} from "@fortawesome/free-solid-svg-icons";
import { format, addDays } from "date-fns";
import { useState } from "react";
import BookingOccupantModal from "../features/modal/BookingOccupantModal";

const Navbar = ({ type }) => {
  const navigate = useNavigate();

  const [displayDateRange, setDisplayDateRange] = useState(false);

  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: addDays(new Date(), 7),
      key: "selection",
    },
  ]);

  const handleSearch = () => {
    return navigate("/searchresults", { date, occupants, destination });
  };

  const [showOccupantModal, setShowOccupantModal] = useState(false);
  const [destination, setDestination] = useState();
  const [occupants, setOccupants] = useState({
    adults: 1,
    children: 0,
    rooms: 1,
  });

  const handleOccupants = (name, operation) => {
    setOccupants((prev) => {
      return {
        ...prev,
        [name]:
          operation === "increase" ? occupants[name] + 1 : occupants[name] - 1,
      };
    });
  };

  return (
    <>
      {/* <section className='min-w-full '>
    <header className={`${layout.section} ${styles.flexBetween} items-center w-full pt-0 py-2 h-16 bg-[#003580] lg:px-48   `}>
        <Link to =  '/' className="logo font-medium text-white text-[22px]">
            Booking.com
      </Link>
 

        <ul  className={`${layout.sectionImgReverse} hidden lg:flex space-x-4`}>
            {  navlinks.map((link) => {
                    return (

                       <li key =  {link.id} >
                            <NavLink to = { link.href }  className = 'text-white font-medium capitalize text-[14px]'> {link.text}</NavLink>
                       </li> 
                    )
                   
                })
            }

          
        </ul>
          
        <ul className='lg:hidden flex flex-row space-x-8' >
            <li>
            <FontAwesomeIcon icon={faUserCircle} className = 'text-white text-[32px]'  />
            </li>
               
            <li>
            <FontAwesomeIcon icon={faBars} className = 'text-white text-[32px]' />
              
            </li>

        </ul>
        
    </header>

   
    <section className='flex flex-row items-center bg-[#003580] text-white  pb-3 px-4 lg:px-48 
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


    </section>  */}
      <section className="w-[80%] mx-auto overflow-hidden">
        <Outlet />
      </section>
    </>
  );
};

export default Navbar;
