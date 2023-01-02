import {useState} from 'react';
import { FaRegEdit, FaTrash } from 'react-icons/fa';
import GeneralModal from '../features/modal/GeneralModal';
import Index from '../features/guests/Index';
import ModalOverlay from './ModalOverlay';

export default (props) => {

  const cellValue = props.valueFormatted ? props.valueFormatted : props.value;

  return  (
   
       
    <p>
      

      <span   className='text-center text-[20px] w-full block '> <FaRegEdit className='inline' /> </span>

    

      {/* <span onClick = {() => alert('clicked')}  className='text-center text-[20px] w-full block '> <FaTrash className='inline' /> </span>  */}
  
    </p>
    
  )
};