import React from 'react'
import {format } from 'date-fns'
import { FaRegEdit } from 'react-icons/fa';

export default (props) => {
  const cellValue = props.valueFormatted ? props.valueFormatted : props.value;

//   const buttonClicked = () => {
//     alert(`${cellValue} medals won!`);
//   };
// const today = new Date()
// const date = format(new Date(cellValue), 'dd.MM.yyyy')


  return  (
   
    //    <button className='flex flex-row space-x-1 items-center'>
        <span   className='text-center  w-full block '>{cellValue}</span>
    //    {/* </button> */}
    
    
  )
};