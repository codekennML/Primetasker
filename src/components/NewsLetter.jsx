import React from 'react'
import Footer from './Footer'

const NewsLetter = () => {
  return (
    <section className='bg-[#00224f] '>

 
    <div className='  pt-12 pb-6 '>
        <div className=''>
        <article className='text-center '>
            <h3 className='text-gray-200 text-[23px]'>Save time, save money!</h3>
            <p className='text-gray-400 mb-3'>Sign up and we'll send the best deals to you</p>
            <div className='py-2'>
                <input type="text" className='py-3 px-16 mr-2 rounded' />
                <button className='bg-blue-700 text-white  py-3 px-12 rounded text-[18px]'>Subscribe</button>
            </div>
        </article>
        </div>
    </div>

    </section>
  )
}

export default NewsLetter