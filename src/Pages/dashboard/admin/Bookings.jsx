import { FaDownload, FaFilter, FaGlobe, FaLayerGroup } from "react-icons/fa";
// const AgTable = React.lazy(() => import("../../../utils/AgTable"))
import DescCards from "../../../utils/DescCards";

const Bookings = () => {
  return (
    <div className="w-full max-w-screen-full  mx-auto px-6 ">
      <section className=" h-16 ">
        <div className="flex flex-row space-x-1 items-center py-4 px-4">
          <p className="text-2xl bg-indigo-800 text-white p-1.5 rounded">
            <FaLayerGroup />
          </p>
          <h2 className="text-2xl text-indigo-800 font-bold">Bookings</h2>
        </div>
        <div>
          <DescCards Data={`Booking`} />
        </div>

        <div className="mt-6">
          <h2 className="font-semibold text-xl text-indigo-800">Bookings</h2>
          {/* <article className='w-full flex items-center space-x-4 justify-between '>

            <div className=' flex flex-row items-center  flex-1 space-x-8 '>
            <form class="flex items-center flex-1  ">   
                <label for="simple-search" class="sr-only">Search</label>
                <div class="relative w-full">
                    <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                        <svg aria-hidden="true" class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd"></path></svg>
                    </div>
                    <input type="text" id="simple-search" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full pl-10 p-1.5  " placeholder="Search all bookings" required />
                </div>
               
            </form>
            <ul className='justify-self-end flex flex-row  text-sm font-medium group bg-gray-100 text-gray-70 '>
              <li className=' py-2 px-3 flex flex-row space-x-1 items-center  rounded-l-lg' aria-disabled ={true} disabled>
               <p className='text-gray-500  font-medium'> </p>
               <p className='text-[18px] text-gray-500'><FaFilter /></p>
               
              </li>
              <li className=' py-2 px-3 border-2 border-b-0 rounded-tl-lg hover:bg-indigo-50 hover:text-gray-700 cursor-pointer'>
                Todays bookings
              </li>
              <li className=' py-2 px-3 border-2 border-l-0  border-b-0 cursor-pointer '>
                Ongoing 
              </li>
              <li className=' py-2 px-3 border-2 border-l-0  border-b-0 cursor-pointer '>
                Completed 
              </li>
            
              <li className=' py-2 px-3 border-2 border-l-0  border-b-0 cursor-pointer '>
                Feedback
              </li>
              <li className=' py-2 px-3 border-2 border-l-0  border-b-0  rounded-tr-md '>
                AWOL
              </li>

            </ul>
            </div>
<div className='flex flex-row items-center'>

            <button type="submit" className=" mr-4 flex items-center p-2 px-3 ml-2 text-sm font-medium text-gray-700 border border-gray-400 rounded-lg  hover:bg-gray-200  focus:outline-none  ">
            <span class="">Create Booking</span>
                  
                </button>
                <button type="submit" className=" mr-4 flex items-center p-2 px-4 ml-2 text-sm font-medium text-gray-700 border border-gray-400  rounded-lg  hover:bg-gray-200  focus:outline-none  dark:bg-blue-600 dark:hover:bg-blue-700 ">
                  <span className='pr-2 text-[10px] text-gray-500'><FaDownload /></span>
            <span class="">Export</span>
                  
                </button>
</div>
          
          </article> */}
        </div>
      </section>

      <div className="h-[490px] mt-[11.5rem] sticky bottom-0"></div>
      {/* <BookingsList /> */}
    </div>
  );
};

export default Bookings;
