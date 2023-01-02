import {  faArrowUp, faBathtub, faBed, faBuilding, faCheck, faFan, faGlassMartini, faHouse, faMugHot, faPeopleRoof, faSwimmingPool, faTv, faUser, faWater, faWifi 
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import TableData from './TableData'
import {amenities} from '../constants/Amenities'

const TableBody = () => {

  return (

    <tbody className='text-[12px]'>
    <tr >
        <td rowSpan = {8} className = 'border-2 border-yellow-600 px-3 w-[320px] pb-16'>
       <p className='text-lg text-blue-700 font-medium underline my-2' >Superior Room
       
        </p> 
        <p className=''> 
            <span><FontAwesomeIcon icon ={faArrowUp}/></span>       High floor</p>

<p className=''>  1 extra-large double bed   <span><FontAwesomeIcon icon ={faBed} className =  'w-7 h-7'/> </span>   </p>
<p className='my-3'> This double room features a tile/marble floor, air conditioning and bathrobe. </p>
  
     <article className='  flex items-center flex-wrap space-y-2 gap-x-2 border-b border-gray-300 pb-6 '>
        
            <p className=' '>
            <FontAwesomeIcon icon =  {faHouse} className = 'pr-1'/>
            <span>42sqm</span>
            </p>
         
            <p>
            <FontAwesomeIcon icon =  {faWater} className = 'pr-1'/>
            <span>Sea view</span>
            </p>
            <p>
            <FontAwesomeIcon icon =  {faBuilding} className = 'pr-1'/>
            <span>City view</span>
            </p>
            <p>
            <FontAwesomeIcon icon =  {faSwimmingPool} className = 'pr-1' />
            <span>Pool with a view</span>
            </p>
            <p>
            <FontAwesomeIcon icon =  {faPeopleRoof} className = 'pr-1'/>
            <span>Rooftop pool</span>
            </p>
            <p>
            <FontAwesomeIcon icon =  {faFan} className = 'pr-1'/>
            <span>Air conditioning</span>
            </p>
            <p>
            <FontAwesomeIcon icon =  {faBathtub} className = 'pr-1'/>
            <span>Private bathroom</span>
            </p>
            <p>
            <FontAwesomeIcon icon =  {faTv} className = 'pr-1'  />
            <span>Flat-screen TV</span>
            </p>
            <p>
            <FontAwesomeIcon icon =  {faWifi}className = 'pr-1'/>
            <span> Free Wifi</span>
            </p>
            <p>
            <FontAwesomeIcon icon =  {faGlassMartini} className = 'pr-1'/>
            <span>MiniBar</span>
            </p>
     </article>
 <article className='flex flex-wrap gap-x-2 gap-y-1 mt-3'>
    {amenities.map(item => 
            <p key = {item.key} className = 'inline-flex items-center'>
            <FontAwesomeIcon icon  = {faCheck} className =  'pr-1 text-green-600' />
            <span>{item.item}</span>
            
          </p>
        
        )}
    
 </article>
   


        </td>
        <td rowSpan  =  {1} className='border py-2.5 border-cyan-500 pl-2  '>
            {/* <FontAwesomeIcon icon = {faUser} className = 'w-3 h-3' />  */}
            <FontAwesomeIcon icon = {faUser} className = 'w-3 h-3' /> 
        </td>
        <td rowSpan  =  {1} className='border py-2.5 border-cyan-500 pl-2  text-gray-700'>
            <p className='font-bold text-base'>NGN 484,500</p>
            <p className='text-[11px]'>Includes taxes and charges</p>
        </td>
        <td rowSpan  =  {1} className='border border-cyan-500  '>
            <ul className='pl-3 py-2.5 text-[11px] space-y-2'>
                <li className='inline-flex items-center space-x-2 text-green-700 text-[11px]'>
                    <FontAwesomeIcon icon = {faMugHot} />
                    <p> <span className='font-bold'>Breakfast &amp; Dinner</span> included</p>
                </li>
                <li className='text-black '>
                    <p className='text-[11px] font-bold '> <span className='text-[12px] font-bold pr-2 '>•</span> Partially refundable</p>
                </li>
            </ul>
        </td>
        <td rowSpan  =  {1} className='border pb-2.5 border-cyan-500 px-1.5'>
            <select name="" id="" className=' w-[40px] border border-gray-500'>
                <option value="">0</option>
                <option value="">1 (N484,400)</option>

           
            </select>
        </td>
      

    </tr>

    <TableData />
    <TableData />
    <TableData />
    <TableData />
    <TableData />
    <TableData />
    <TableData />
   
      
      </tbody>   
      )
}

export default TableBody