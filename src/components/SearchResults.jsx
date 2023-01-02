import { faChevronDown, faThumbsUp, faUpDown, faStar, faUmbrellaBeach, faLeaf, faLaptop, faChevronRight } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useState } from "react"
import SideSearchBar from './SideSearchBar'
import { Link, useLocation } from "react-router-dom"
import Icon from "../utils/Icon"

const SearchResults = () => {
  const location =  useLocation()
  const [dropdown, setIsDropdown] =  useState(false)
  const [sortSelect, setSortSelect] =  useState('Our top picks')

  
  return (
    <section className='max-w-screen-2xl' >
    <section className='flex  lg:flex-row px-48 gap-5 '>
    
      <article className='bg-white h-40 w-1/4 '>
      <ul className="text-[11.5px] text-blue-700 flex flex-row mb-4 mt-1 space-x-2 ">
          <li>Home <span><FontAwesomeIcon icon={faChevronRight} className = 'w-2.5 h-2.5 text-gray-600' /></span> </li>
          <li>Nigeria <span><FontAwesomeIcon icon={faChevronRight} className = 'w-2.5 h-2.5 text-gray-600' /></span></li>
          <li>Lagos <span><FontAwesomeIcon icon={faChevronRight} className = 'w-2.5 h-2.5 text-gray-600' /></span></li>
          <li className="text-gray-600">Search results</li>
        </ul>
       
       <SideSearchBar />
        <div className="filtercheckright border-2 my-2 mb-24 space-y-2 space-x-2 rounded-lg">
            <p className='border-b text-sm font-bold pl-2 py-2'>Filter by : </p>
          <p className='text-[12px] font-bold'> Your Previous filters</p>


          <div className='space-y-2'>
           <p className='flex items-center'>
             <input type="checkbox" />
             <span className='pl-1 text-[12px]'>Bed and Breakfast</span>
            </p>
           <p className='flex items-center'>
             <input type="checkbox" />
             <span  className='pl-1 text-[12px]'>Guest houses</span>
            </p>
         

            <p className='flex items-center'>
             <input type="checkbox" />
             <span  className='pl-1 text-[12px]'>Villas</span>
            </p>
           <p className='flex items-center'>
             <input type="checkbox" />
             <span  className='pl-1 text-[12px]'>Holiday parks</span>
            </p>
           <p className='flex items-center'>
             <input type="checkbox" />
             <span  className='pl-1 text-[12px]'>Homestays</span>
            </p>
           <p className='flex items-center'> 
             <input type="checkbox" />
             <span  className='pl-1 text-[12px]'> Adapted bath</span>
            </p>
            </div>
        </div>
      </article>


      <article className=' w-3/4 grow'>
          <div className="location-property-total flex justify-between mt-6 border-b border-gray-300">
            <p className="pt-8 pb-6 font-bold text-2xl">Lagos:  647 properties found</p>
            <p className="w-[150px] bg-gray-400 rounded  mb-4 flex justify-center items-center bg-[url('https://t-cf.bstatic.com/psb/capla/static/media/map-entry-point.6b01012a.png')]">
              <button className = 'px-4 py-2 bg-blue-600 rounded text-[12px] font-bold text-white '>Show on Map</button>
            </p>
          </div>
          <div className='landmark__property_filters'>
          <p className="text-[15px] font-bold text-gray-500 pt-2 ">Nearby beaches:   <span className=" pl-6 text-[15px] font-bold text-gray-600"> Landmark Beach</span> </p>
         
          <button onClick = {() => setIsDropdown(!dropdown)} className='relative border  border-blue-600 rounded-full px-2 py-1.5 bg-white text-sm mt-3 text-blue-600 font-medium'> Sort by: <span>{sortSelect}</span>
          <span className="pl-2 align-center"><FontAwesomeIcon icon = {faChevronDown} className= 'w-3 h-4' /> </span>
          
          <ul className={`${dropdown ? 'visible transition opacity-100 duration-500 ' : 'invisible transition opacity-0 duration-300' }   font-normal text-gray-600 top-12 text-[13px] absolute z-10 bg-white shadow-md  rounded-lg  space-y-2 w-full`}>
            <li className="hover:bg-gray-100 py-2 text-left px-3 " onClick = {() => setSortSelect('Our top Picks')}>Our top picks </li>
            <li className="hover:bg-gray-100 py-2 text-left px-3 " onClick = {() => setSortSelect('Homes & Apartment')}>Homes &amp; Apartment </li>
            <li className="hover:bg-gray-100 py-2 text-left px-3 " onClick = {() => setSortSelect('Stars(Highest First) ')}>Stars(Highest First) </li>
            <li className="hover:bg-gray-100 py-2 text-left px-3 " onClick = {() => setSortSelect('Distance from City Centre')}>Distance from City Centre </li>
            <li className="hover:bg-gray-100 py-2 text-left px-3 " onClick = {() => setSortSelect('Top Reviewed')}>Top Reviewed </li>
            <li className="hover:bg-gray-100 py-2 text-left px-3 " onClick = {() => setSortSelect('Stars(Lowest First)')}>Stars(Lowest First) </li>
          </ul>
      
          </button>


          </div>
          
{/* Single Property Detail */}
          <Link to = '/single-property'> 
          <div className='property_detail border border-gray-400 py-5 px-3 flex flex-row justify-start gap-x-3 mt-4'>
      
          
                <article className='flex flex-row space-x-3 '>
                
                  
                                    <img src="https://t-cf.bstatic.com/xdata/images/hotel/square600/333543119.webp?k=8f0009ad96d0c73bacdcd4613aa5333e6eb094d53bd6bd61fcc32f0fb3bdf644&o=&s=1" alt="" className='rounded-lg h-[200px]' width = '200' height = '200' />

                        
                </article>
         
          <div className="flex flex-row justify-between flex-1" >
                  <article className="flex-1">

                      <div className="flex flex-row items-start space-x-1">
                              
                      <p className="text-lg font-bold text-[#0071c2] hover:text-red-900 space-x-1">
                               Lagos Continental Hotel </p>
                              <p className="self-start">
                                  <Icon icon =  {faStar} className =  {`text-yellow-400 text-[10px]`}/>
                                  <Icon icon =  {faStar} className =  {`text-yellow-400 text-[10px]`}/>
                                  <Icon icon =  {faStar} className =  {`text-yellow-400 text-[10px]`}/>
                                  <Icon icon =  {faStar} className =  {`text-yellow-400 text-[10px]`}/>
                                  <Icon icon =  {faStar} className =  {`text-yellow-400 text-[10px]`}/>
                              </p>
                        
                              
                              <span className="px-1">
                              <FontAwesomeIcon icon =  {faThumbsUp} className =  ' text-base  w-3 h-3'/>
                              </span>
                                
                      </div>
                                
                              
                              <p className='text-[11px]  text-blue-600 space-x-1.5'>
                                      <span className="underline" >Victoria Island, Lagos</span>
                                      <span className="underline">Show on map</span>
                                      <span className="text-gray-600">11.1 km from centre</span>
                                      <span className="text-gray-600">Beach nearby</span>
                                </p>

                                <p className='text-[11px] py-1'>
                                  <span className="pr-1 text-gray-500"><FontAwesomeIcon icon = {faUmbrellaBeach} /> </span>
                                  2.6 km from beach</p>
                                <p className='text-[11px]'>
                                <span className="pr-1 text-gray-500"><FontAwesomeIcon icon = {faLeaf} /> </span>
                                  Travel Sustainable Property</p>
                                <p className='text-[11px]'>
                                <span className="pr-1 text-gray-500"><FontAwesomeIcon icon = {faLaptop} /> </span>
                                  Work Friendly</p>
                              <section className="space-y-0.5">
                              <p className='font-medium text-[12px] text-gray-800 '>Standard King Room</p>        
                                              <p className='text-[11px] '> 1 large double bed </p> 
                                              <p className='text-[12px] font-medium text-green-600'>FREE cancellation • No prepayment needed</p>
                                             
                                              <p  className='text-[12px] font-medium text-red-500'> Only 3 rooms left at this price on our site </p>    
                          
                              </section>
                              </article>

                      <article className="px-2   ">
                        <div className="flex flex-row items-center justify-end ">
                            <p className="flex flex-col space-x-0 pr-2 "> 
                              <span className="text-[15px] text-gray-800 font-medium">Fabulous  </span> 
                               <span className="text-[11px] self-end">  702 Reviews    </span>
                            </p>
                            <p className="bg-blue-800 rounded-r-lg rounded-tl-lg text-white font-bold p-1 ">8.0</p>
                        </div>
                          <div className="text-end">
                            <p className="text-base font-medium text-[#0071c2] py-1">Location 10 </p>
                            <p className="text-[11px] bg-yellow-500  py-0.5">New to Booking.com</p>
                          </div>
                        <div className="text-end self-end pt-2">
                          <p className="text-[11px] text-gray-500">4 nights, 2 adults</p>
                          <p className="text-lg font-medium">NGN 124,306</p>
                          <p className="text-[11px] text-gray-600"> <span>Includes taxes and charges</span>  </p>
                        <button className="bg-[#0071c2] text-xs mt-2 w-full text-white font-medium px-2 py-2 rounded ">
                          see availability <span><FontAwesomeIcon icon =  {faChevronRight} className ='w-3 h-3' /></span>
                          </button>
                        </div>

                    
                        </article>
              </div>

          

          </div>
          </Link>
          <Link to = '/single-property'> 
          <div className='property_detail border border-gray-400 py-5 px-3 flex flex-row justify-start gap-x-3 mt-4'>
      
          
                <article className='flex flex-row space-x-3 '>
                
                  
                                    <img src="https://t-cf.bstatic.com/xdata/images/hotel/square600/318110349.webp?k=647d5e5c97000db665d75a9e93efb44cf27a0590bfd9bf340d72df2ef5faaab7&o=&s=1" alt="" className='rounded-lg h-[200px]' width = '200' height = '200' />

                        
                </article>
         
          <div className="flex flex-row justify-between flex-1" >
                  <article className="flex-1">

                
                              <p className="text-lg font-bold text-[#0071c2] hover:text-red-900 space-x-1">
                              <span > Nordic Hotel, Lagos</span> 
                              <span>
                              <FontAwesomeIcon icon =  {faStar} className =  'text-yellow-400 text-[12px] midd'/>
                              </span>
                              <span>
                              <FontAwesomeIcon icon =  {faStar} className =  'text-yellow-400 text-[12px] midd'/>
                              </span>
                              <span>
                              <FontAwesomeIcon icon =  {faStar} className =  'text-yellow-400 text-[12px] midd'/>
                              </span>
                              <span>
                              <FontAwesomeIcon icon =  {faStar} className =  'text-yellow-400 text-[12px] midd'/>
                              </span>
                              <span>
                              <FontAwesomeIcon icon =  {faStar} className =  'text-yellow-400 text-[12px] midd'/>
                              </span>
                              <span className="px-2">
                              <FontAwesomeIcon icon =  {faThumbsUp} className =  ' text-base  w-3 h-3'/>
                              </span>
                                
                                
                                </p>
                              <p className='text-[11px]  text-blue-600 space-x-1.5'>
                                      <span className="underline" >Victoria Island, Lagos</span>
                                      <span className="underline">Show on map</span>
                                      <span className="text-gray-600">11.1 km from centre</span>
                                      <span className="text-gray-600">Beach nearby</span>
                                </p>

                                <p className='text-[11px] py-1'>
                                  <span className="pr-1 text-gray-500"><FontAwesomeIcon icon = {faUmbrellaBeach} /> </span>
                                  2.6 km from beach</p>
                                <p className='text-[11px]'>
                                <span className="pr-1 text-gray-500"><FontAwesomeIcon icon = {faLeaf} /> </span>
                                  Travel Sustainable Property</p>
                                <p className='text-[11px]'>
                                <span className="pr-1 text-gray-500"><FontAwesomeIcon icon = {faLaptop} /> </span>
                                  Work Friendly</p>
                              <section className="space-y-0.5">
                              <p className='font-medium text-[12px] text-gray-800 '>Standard King Room</p>        
                                              <p className='text-[11px] '> 1 large double bed </p> 
                                              <p className='text-[12px] font-medium text-green-600'>FREE cancellation • No prepayment needed</p>
                                              <p className='text-[11px] font-medium'>  You can cancel later, so lock in this great price today.   </p> 
                                              <p  className='text-[12px] font-medium text-red-500'> Only 3 rooms left at this price on our site </p>    
                          
                              </section>
                              </article>

                      <article className="px-2   ">
                        <div className="flex flex-row items-center justify-end ">
                            <p className="flex flex-col space-x-0 pr-2 "> 
                              <span className="text-[15px] text-gray-800 font-medium">Fabulous  </span> 
                               <span className="text-[11px] self-end">  702 Reviews    </span>
                            </p>
                            <p className="bg-blue-800 rounded-r-lg rounded-tl-lg text-white font-bold p-1 ">8.0</p>
                        </div>
                          <div className="text-end">
                            <p className="text-base font-medium text-[#0071c2] py-1">Location 10 </p>
                            <p className="text-[11px] bg-yellow-500  py-0.5">New to Booking.com</p>
                          </div>
                        <div className="text-end self-end pt-2">
                          <p className="text-[11px] text-gray-500">4 nights, 2 adults</p>
                          <p className="text-lg font-medium">NGN 124,306</p>
                          <p className="text-[11px] text-gray-600"> <span>Includes taxes and charges</span>  </p>
                        <button className="bg-[#0071c2] text-xs mt-2 w-full text-white font-medium px-2 py-2  ">
                          See availability <span><FontAwesomeIcon icon =  {faChevronRight} className ='w-3 h-3' /></span>
                          </button>
                        </div>

                    
                        </article>
              </div>

          

          </div>
          </Link>

          <Link to = '/single-property'> 
          <div className='property_detail border border-gray-400 py-5 px-3 flex flex-row justify-start gap-x-3 mt-4'>
      
          
                <article className='flex flex-row space-x-3 '>
                
                  
                                    <img src="https://t-cf.bstatic.com/xdata/images/hotel/square600/250058565.webp?k=8c4f7090701aa0c46bb32a2db8fca7f37cd0516c9d5b05b5f6c79afe00d48e5c&o=&s=1" alt="" className='rounded-lg h-[200px]' width = '200' height = '200' />

                        
                </article>
         
          <div className="flex flex-row justify-between flex-1" >
                  <article className="flex-1">

                
                              <div className="text-lg font-bold text-[#0071c2] hover:text-red-900 space-x-0.5 flex flex-row items-center">
                              <p> Raddisson Blu  Anchorage Hotel</p> 
                              <p>
                              <FontAwesomeIcon icon =  {faStar} className =  'text-yellow-400 text-[10px] '/>
                              </p>
                              <p>
                              <FontAwesomeIcon icon =  {faStar} className =  'text-yellow-400 text-[10px] '/>
                              </p>
                              <p>
                              <FontAwesomeIcon icon =  {faStar} className =  'text-yellow-400 text-[10px] '/>
                              </p>
                              <p>
                              <FontAwesomeIcon icon =  {faStar} className =  'text-yellow-400 text-[10px] '/>
                              </p>
                              <p>
                              <FontAwesomeIcon icon =  {faStar} className =  'text-yellow-400 text-[10px] '/>
                              </p>
                              <p className="px-2">
                              <FontAwesomeIcon icon =  {faThumbsUp} className =  ' text-base  w-3 h-3'/>
                              </p>
                                
                                
                                </div>
                              <p className='text-[11px]  text-[#0071c2] space-x-1.5'>
                                      <span className="underline" >Victoria Island, Lagos</span>
                                      <span className="underline">Show on map</span>
                                      <span className="text-gray-600">11.1 km from centre</span>
                                      <span className="text-gray-600">Beach nearby</span>
                                </p>

                                <p className='text-[11px] py-1'>
                                  <span className="pr-1 text-gray-500"><FontAwesomeIcon icon = {faUmbrellaBeach} /> </span>
                                  2.6 km from beach</p>
                                <p className='text-[11px]'>
                                <span className="pr-1 text-gray-500"><FontAwesomeIcon icon = {faLeaf} /> </span>
                                  Travel Sustainable Property</p>
                                <p className='text-[11px]'>
                                <span className="pr-1 text-gray-500"><FontAwesomeIcon icon = {faLaptop} /> </span>
                                  Work Friendly</p>
                              <section className="space-y-0.5">
                              <p className='font-medium text-[12px] text-gray-800 '>Standard King Room</p>        
                                              <p className='text-[11px] '> 1 large double bed </p> 
                                              <p className='text-[12px] font-medium text-green-600'>FREE cancellation • No prepayment needed</p>
                                              <p className='text-[11px] font-medium'>  You can cancel later, so lock in this great price today.   </p> 
                                              <p  className='text-[12px] font-medium text-red-500'> Only 3 rooms left at this price on our site </p>    
                          
                              </section>
                              </article>

                      <article className="px-2   ">
                        <div className="flex flex-row items-center justify-end ">
                            <p className="flex flex-col space-x-0 pr-2 "> 
                              <span className="text-[15px] text-gray-800 font-medium">Fabulous  </span> 
                               <span className="text-[11px] self-end">  702 Reviews    </span>
                            </p>
                            <p className="bg-blue-800 rounded-r-lg rounded-tl-lg text-white font-bold p-1 ">8.0</p>
                        </div>
                         
                        <div className="text-end self-end pt-2">
                         
                        <button className="bg-[#0071c2] text-xs mt-2 w-full text-white font-medium px-2 py-2 rounded ">
                          Show Prices <span><FontAwesomeIcon icon =  {faChevronRight} className ='w-3 h-3' /></span>
                          </button>
                        </div>

                    
                        </article>
              </div>

          

          </div>
          </Link>


      </article>

    </section>
    </section>
  )
}

export default SearchResults