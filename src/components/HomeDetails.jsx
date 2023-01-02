
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAirFreshener, faHeart, faShare, faFire, faLightbulb,faMapLocation, faClock,faAutomobile, faBiohazard, faClockFour, faCoffee,faDumbbell,faFan,faHouseCircleCheck,faKitchenSet,faPaw,faPeopleRoof,faPersonDrowning, faTemperatureArrowUp, faTheaterMasks, faTv, faWifi, faWineGlass } from '@fortawesome/free-solid-svg-icons'
import HomeReview from '../../../../villamanor/src/components/HomeReview'



const HomeDetails = () => {
  return (
    <section>


  <section className='container overflow-hidden grid grid-cols-2 h-[400px] my-16 space-x-3 mx-24'>
    {/* <div className='h-full'> */}
        <article className=''>
            <img src="https://heristays.com/wp-content/uploads/2022/06/476A7336-798x500.jpg" alt="" className='h-full rounded-lg '  />
        </article>
    {/* </div> */}

    <div className='grid grid-cols-2 h-[400px] gap-2'>
        <article className='h-full'>
            <img src="https://heristays.com/wp-content/uploads/2022/06/476A7069-scaled.jpg" alt="" className='h-[200px] w-full rounded-lg' />
        </article>
        <article className='h-full'>
            <img src="https://heristays.com/wp-content/uploads/2022/06/476A7126-scaled.jpg" alt=""  className='h-[200px] rounded-lg' />
        </article>
        <article className='h-full w-full rounded-lg'>
            <img src="https://heristays.com/wp-content/uploads/2022/06/476A7222-scaled.jpg" alt="" className='h-[200px] w-full rounded-lg ' />
        </article>
        <article className='h-full rounded-lg'>
            <img src="https://heristays.com/wp-content/uploads/2022/06/476A7277-scaled.jpg" alt="" className='h-[200px] rounded-lg'  />
        </article>
    </div>
  </section>

    <section className='container mt-12 flex space-x-6 mx-24'>

    <div className = 'w-2/3 pb-24 pr-8'>
            <article className = ' flex justify-between border-2 p-8   items-center rounded-lg'>
                        <div>
                            <h2 className='text-lg font-semibold text-gray-600'>SigmaBase Apartments</h2>
                            <p className='text-sm mt-2 inline-flex items-center'> 
                            <span class="pr-1 rounded-full text-xs font-medium inline-flex items-center dark:bg-primary-200 dark:text-primary-800 text-gray-700">
                            <FontAwesomeIcon icon={faMapLocation} className=' w-8 h-8 text-gray-600' />
                            
                            
                                </span>
                          
                           7/9 Molade Okoya Thomas, Victoria Island. Lagos
                          
                            
                            </p>
                        </div>

                        <div className='flex flex-row space-x-12 pr-8'>
                        <FontAwesomeIcon icon={faHeart} className=' w-8 h-8 text-gray-600' />
                        <FontAwesomeIcon icon={faShare} className=' w-8 h-8 text-gray-600' />
                        </div>

                </article>

                <article className='flex flex-row space-evenly my-6 space-x-6 w-full '>
                    <div className='bg-gray-200 flex flex-col justify-center items-center h-[100px] rounded-lg p-6'>

                    <FontAwesomeIcon icon={faHouseCircleCheck} className=' w-8 h-8'/>
                    <p className='font-semibold text-base  mt-3'>89 Apartments</p>

                    </div>
                    <div className='bg-gray-200 flex flex-col justify-center items-center h-[100px] rounded-lg p-6'>

                    <FontAwesomeIcon icon={faKitchenSet } className=' w-8 h-8' />
                    <p className='font-semibold text-base mt-3'>In-House Kitchen</p>

                    </div>
                    <div className='bg-gray-200 flex flex-col justify-center items-center h-[100px] rounded-lg p-6'>

                    <FontAwesomeIcon icon={faPeopleRoof} className=' w-8 h-8' />
                    <p className='font-semibold text-base  mt-3'>Allows Couples</p>

                    </div>

                    <div className='bg-gray-200 flex flex-col justify-center items-center h-[100px] rounded-lg p-6'>

                        <FontAwesomeIcon icon={faPaw} className=' w-8 h-8' />
                        <p className='font-semibold text-base mt-3'> Pets Allowed</p>

                        </div>
                </article>

                <article className='border-2 p-8  justify-center items-center rounded-lg'>
                <h2 className='text-lg font-semibold mb-6 mt-6'>Overview - SigmaBase</h2>
                <p className='text-sm '>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, sequi, architecto at porro iure voluptate quo non iste quod eos ea nobis dolor, quasi delectus eaque doloremque? Illum, quis placeat!
                        <br />
                        <br />
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit ex aspernatur ipsum earum mollitia, esse ipsam veritatis doloremque sint! Aliquam mollitia voluptates id veritatis. Natus modi debitis molestiae cumque numquam.
                </p>
                </article>

                <article className='mt-16 border-2 p-8  justify-center items-center rounded-lg'>
                <h2 className='text-xl font-semibold text-gray-700 mb-6'>Available Amenities</h2>
                <div className='grid grid-cols-3 gap-y-4'>

                <p className='flex text-sm space-x-2 font-semibold mt-3 items-center'>
                    <span className='pr-2'>
                    <FontAwesomeIcon icon={faTv} className=' w-6 h-8 text-gray-600' />
                    </span>
                   <span className='text-gray-700'> HDTV with Cable</span> 
                </p>
                <p className='flex text-slate-700 space-x-2 font-semibold mt-3 items-center'>
                    <span className='pr-2'>
                    <FontAwesomeIcon icon={faFan}  className=' w-8 h-8 text-gray-600'/>
                    </span>
                   <span> Air conditioner</span> 
                </p>
                <p className='flex text-sm space-x-2 font-semibold mt-3 items-center'>
                    <span className='pr-2'>
                    <FontAwesomeIcon icon={faWifi}  className=' w-8 h-8 text-gray-600'/>
                    </span>
                   <span> Free Wireless Internet</span> 
                </p>
                <p className='flex text-sm space-x-2 font-semibold mt-3 items-center'>
                    <span className='pr-2'>
                    <FontAwesomeIcon icon={faPersonDrowning} className=' w-8 h-8 text-gray-600' />
                    </span>
                   <span> Swimming Pool</span> 
                </p>
                <p className='flex text-sm space-x-2 font-semibold mt-3 items-center'>
                    <span className='pr-2'>
                    <FontAwesomeIcon icon={faBiohazard} className=' w-8 h-8 text-gray-600' />
                    </span>
                   <span> Laundry &amp; Washer</span> 
                </p>
                <p className='flex text-sm space-x-2 font-semibold mt-3 items-center'>
                    <span className='pr-2'>
                    <FontAwesomeIcon icon={faWineGlass} className=' w-6 h-6 text-gray-600' />
                    </span>
                   <span> Relaxation &amp; Lounge</span> 
                </p>
                <p className='flex text-sm space-x-2 font-semibold mt-3 items-center'>
                    <span className='pr-2'>
                    <FontAwesomeIcon icon={faTemperatureArrowUp}  className=' w-6 h-6 text-gray-600'/>
                    
                    </span>
                   <span> Water Heater</span> 
                </p>

                <p className='flex text-sm space-x-2 font-semibold mt-3 items-center'>
                    <span className='pr-2'>
                    <FontAwesomeIcon icon={faDumbbell} className=' w-8 h-8 text-gray-600' />
                    </span>
                   <span> Gym &amp; Fitness</span> 
                </p>
                <p className='flex text-sm space-x-2 font-semibold mt-3 items-center'>
                    <span className='pr-2'>
                    <FontAwesomeIcon icon={faAutomobile} className=' w-6 h-6 text-gray-600' />
                    </span>
                   <span>Free Parking Space</span> 
                </p>
                </div>

                <div className='flex justify-center  pr-12 mt-8'>
                    <button className='hover:bg-gray-600 hover:text-white border border-gray-500 px-6 text-gray-600 py-3 rounded-lg font-semibold'>Show all amenities</button>
                </div>
                </article>



           

                <article className='mt-16 border-2 p-8  justify-center items-center rounded-lg'>
                <h2 className='text-xl font-bold text-gray-700 mb-6'>SigmaBase Policies </h2>

               <div className='flex flex-row space-x-8  ' >

               <div className='shadow rounded-lg px-20  p-4 flex flex-row'>
                
               <FontAwesomeIcon icon={faClockFour} className=' h-10 w-10  text-bold text-green-300  ' />
                       
                       <p className='text-gray-600 font-bold flex flex-col pl-3'>
                       <span className=' text-sm text-gray-600 font-bold'>Check In</span> 
                           3:00 PM </p>
                         </div>
               

                <div className='shadow rounded-lg px-20  p-4 flex flex-row'>
                
                 
                <FontAwesomeIcon icon={faClockFour} className=' h-10 w-10  text-bold text-red-300 ' />
                       
                        <p className='text-gray-600 font-bold flex flex-col pl-3'>
                        <span className=' text-sm text-gray-600 font-bold'>Check Out</span> 
                            12:00 PM </p>
                                </div>
               </div>
                <ul className='space-y-4 mt-8'>
                    <li className='list-disc text-base '>
                        The minimum duratiion for stay in this apartment is 2 nights
                    </li>
                    <li className='list-disc text-base '>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum minus quod magnam nemo amet ratione. 
                    </li>
                    <li className='list-disc text-base '>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum minus quod magnam nemo amet ratione. 
                    </li>
                    <li className='list-disc text-base '>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum minus quod magnam nemo amet ratione. 
                    </li>
                </ul>
                <div className='flex justify-end pr-12'>
                <button className='border border-gray-600 px-6 rounded-lg py-2 font-semibold  text-gray-600 mt-6 '>View Guest Policies</button>
                </div>
               
                </article>

             

             <HomeReview />


    </div>
       
        <div className = 'w-1/3 pb-24'>
        <div className='sticky top-12 w-full shadow-md p-5 rounded-lg bg-gray-50 mt-8 border-gray-200 border '>
                
        <article className = ' flex justify-between '>
                            <div className='mb-6'>
                                <h2 className='text-lg font-semibold text-center mb-6'>Reserve Now</h2>
                                {/* <span>6 Reviews</span> */}
                              <form>
                                
                                <div className='border-2 rounded-xl p-4 pt-1'> 
                                <label htmlFor="" className='text-sm font-semibold pb-48 mt-4'>Arrival Date</label>
                                <input type="date" className='w-full my-3 p-2  text-sm rounded'  placeholder='Check-in Date' value="2022-01-31" />

                                <label htmlFor="" className='text-sm font-semibold mb-1 mt-4'>Departure Date</label>
                                <input type="date" className='text-sm w-full p-2 my-3 rounded' placeholder='Check-out Date' value="2022-01-31" />
                                </div>
                                
                                <div className='border-2 rounded-lg p-4 mt-4 border-slate-300 '> 
                                <label htmlFor="" className='text-sm mb-4 font-semibold'>Select Room Type</label>
                                <select name="" id="" className='w-full bg-white rounded-full mt-1 py-3 rounded px-2 border-gray-500 focus:border-gray-200'>

                                <optgroup label='One Bedroom'>
                                <option value="1bedroom">Deluxe One Bedroom</option>
                                <option value="1bedroom">Standard One (1) Bedroom</option>
                                </optgroup>
                             
                                <optgroup  label='Studios'>
                                <option value="1bedroom">Deluxe Studio</option>
                                <option value="1bedroom">Standard Studio</option>
                                </optgroup>
                               
                                <optgroup label='Two Bedrooms'>

                                <option value="1bedroom">Two Bedroom</option>
                                </optgroup>

                                </select>

                                <label htmlFor="" className='text-sm font-semibold text-gray-600 mb-4 pt-12'>Add Guests</label>
                                <input type="text" className='w-full p-2 m-2 text-sm rounded  text-gray-700' placeholder='1 Guest' />

                                </div>
                              </form>



                           
                             
                            </div>


                           
                    </article>
                    <button className=' w-full text-white font-bold p-2 rounded-lg bg-gradient-to-r from-pink-500 to-orange-500'>Reserve Now</button>
                    <div className='flex flex-row justify-center space-x-6 mt-4'>
                            <p className='text-sm mt-2 hover:underline '>Property Inquiry </p>
                                <p className=' text-sm mt-2 hover:underline '>Contact Host</p>
                            </div>

        </div>
            </div>
        

       
       
    </section >
 
    </section>
  )
}

export default HomeDetails