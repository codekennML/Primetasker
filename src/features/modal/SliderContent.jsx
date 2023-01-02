import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faArrowRight, faArrowLeft} from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'

const SliderContent = ({openSlider,setOpenSlider, content}) => {


 


  return (
    <section className='max-w-full h-screen w-screen  fixed flex flex-row justify-center items-center top-0 left-0  bg-gray-800/80 z-50' 
    onClick = {() => setOpenSlider(!openSlider)}>
    <article className='' onClick = {(e) => e.stopPropagation()} >
            

{content}

    </article>
</section>


  )
}

export default SliderContent