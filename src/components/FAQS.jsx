import { faChevronCircleDown, faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons'
import {useState} from 'react'
import Icon from '../utils/Icon'
import SingleFAQ from './SingleFAQ'

const FAQS = () => {
        const [openFaq , setOpenFaq] =  useState(false)
  return (
    <section className='max-w-screen-lg mt-16 flex flex-row'>
        <article className='w-1/3 bg-blue-50 text-2xl font-bold px-12 pt-6'>
        FAQs about Lagos Continental Hotel

        </article>
        <article className='w-3/4 '>

            {/* <div className=' border border-blue-100' >
                        <div className='px-3 py-2'>
                        <div className='font-bold flex flex-row items-start justify-between cursor-pointer ' onClick={() => setOpenFaq(!openFaq)}>
                           <p>
                           What are the check-in and check-out times at Lagos Continental Hotel?
                            </p> 
                              <p className='self-start'>
                             <Icon icon =  { openFaq ?  faChevronDown : faChevronUp } className = {` border-2 p-1.5 border-blue-200 shadow-sm text-xs`}/> 
                            </p> 
                        </div>
                    {openFaq &&  <p className='text-xs mt-2 '>Check-in at Lagos Continental Hotel is from 14:00, and check-out is until 12:00.</p>} 
                        </div>
                </div> */}
            {/* <div className=' border border-blue-100' >
                        <div className='px-3 py-2'>
                        <div className='font-bold flex flex-row items-start justify-between cursor-pointer ' onClick={() => setOpenFaq(!openFaq)}>
                           <p>
                           What are the check-in and check-out times at Lagos Continental Hotel?
                            </p> 
                              <p className='self-start'>
                             <Icon icon =  { openFaq ?  faChevronDown : faChevronUp } className = {` border-2 p-1.5 border-blue-200 shadow-sm text-xs`}/> 
                            </p> 
                        </div>
                    {openFaq &&  <p className='text-xs mt-2 '>Check-in at Lagos Continental Hotel is from 14:00, and check-out is until 12:00.</p>} 
                        </div>
                </div> */}
                <div>
                      <SingleFAQ />
                      <SingleFAQ />
                      <SingleFAQ />
                      <SingleFAQ />
                      <SingleFAQ />
                      <SingleFAQ />
                      <SingleFAQ />
                      <SingleFAQ />
                      <SingleFAQ />

                </div>
          
        

        </article>
    </section>
  )
}

export default FAQS