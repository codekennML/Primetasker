import { faClose, faInfoCircle } from '@fortawesome/free-solid-svg-icons'
import { useState }from 'react'
import Sub from '../assets/Sub'
import Icon from '../utils/Icon'
import Footer from './Footer'
import GenPromotion from './GenPromotion'
import LocationCard from './LocationCard'
import NewsLetter from './NewsLetter'
import OfferCard from './OfferCard'
import PropertyTypes from './PropertyTypes'
import RecentSearch from './RecentSearch'
import ReviewCard from './ReviewCard'
import ReviewCards from './ReviewCards'
import SwiperScroll from './SwiperScroll'
import TabComp from './TabComp'
import TravelConnect from './TravelConnect'

const HomePage = () => {
    const [open, setOpen] =  useState(true)
  

  return (
<main>


    <section className='mt-20 max-w-screen-lg mx-auto'>
        <article className='w-full border-gray-200 border flex flex-row space-x-6 py-4 items-center'>
            <div className='bg-[#fff0e0] p-1.5 px-3 ml-4'>
                <Icon icon = {faInfoCircle} className = {`w-5 h-5 text-red-400`} />
            </div>
            <div className='text-xs'>
                <p>Get the advice you need. Check the latest COVID-19 restrictions before you travel.
                    <a href="#" className='pl-1 text-blue-600' >Learn More</a>
                </p>
            </div>
        </article>

        <article className='mt-6'>
            <h2 className='text-xl font-bold mb-4'>Your recent Searches</h2>

              <article className='relative'> 
                <SwiperScroll content={<RecentSearch/>} slide =  {3} />

                </article>  
          


        </article>
        
        {/* Offers */}
        <article className='mt-6'>
            <h2 className='text-xl font-bold '>Offers</h2>
            <p>Promotions, deals and special offers for you</p>

              <article className='relative pt-4'> 
                <SwiperScroll content={<OfferCard/>} slide = {2}/>

                </article>  
        </article>

        {/*  */}

        <article className='mt-6'>
             <h2 className='text-xl font-bold mb-1'>Browse by Property type</h2>
             <article className='relative pt-2'> 
                <SwiperScroll content={<PropertyTypes/>} slide = {4} gap = {0}/>

                </article>  

        </article>

        {/*  */}
       <article className='mt-6'>
             <h2 className='text-xl font-bold '>Explore Nigeria</h2>
             <p>These popular destinations have a lot to offer</p>
             <article className='relative pt-4'> 
                <SwiperScroll content={<LocationCard/>} slide = {6} gap = {0}/>

                </article>  

        </article>


        {/* Subscribe Bar */}
    {
        open &&
   
        <article className='border border-gray-200 rounded flex flex-row p-3 pr-8 pt-4 justify-between items-start mt-10  mb-6'>
            <div className='flex flex-row space-x-6 '>
                            <div className='bg-blue-900 rounded-full'>
                                <Sub />
                            </div>
                        <div className='space-y-2'>
                            <h3 className='font-semibold text-md'>Subscribe to our deals</h3>
                            <p className='text-xs'>Prices drop the moment you sign up</p>
                            <div className='flex flex-row items-center space-x-4 w-[500px]'>  
                                <input type="text" name="" id=""  className='indent-4 flex-1 text-gray-800 border py-1.5 text-[12px] focus:outline-0  focus:border-blue-500 focus:border-2' placeholder='Enter e-mail '/>
                                <button className='border border-blue-800 font-semibold text-[14px] rounded px-2 py-0.5  text-blue-900'>Sign me up</button>
                            </div>
                        </div>


            </div>
            <div onClick = {() => setOpen(!open)}>
               <Icon icon =  {faClose} className = {`w-5 h-5 text-gray-500 cursor-pointer`}   /> 
            </div>

        </article>

    }

<article className='mt-6'>
            <h2 className='text-xl font-bold '>Homes guests love</h2>
            {/* <p>Promotions, deals and special offers for you</p> */}

              <article className='relative pt-4'> 
                <SwiperScroll content={<ReviewCard/>} slide = {4}/>

                </article>  
        </article>


        <article className='mt-6'>
             <h2 className='text-xl font-bold '>Explore Nigeria</h2>
             <p>These popular destinations have a lot to offer</p>
             <article className='relative pt-4'> 
                <SwiperScroll content={<TravelConnect/>} slide = {4} gap = {0}/>

                </article>  

        </article>

        <article>
            <GenPromotion />
        </article>

        <article className='mb-8'>
            <TabComp />

        </article>
    </section>

    <section>
        <NewsLetter />
        <Footer/>
    </section>

    </main>
  )
}

export default HomePage