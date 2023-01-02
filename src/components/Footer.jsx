
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <>
    <section className='  bg-[#003580]'>
        <div className=''>

        <article className='footer-top  pb-3  text-center'>

            <p>
                <Link to = '/login' className='text-white  text-xs border border-white p-1 px-3 rounded'>List your property</Link>
            </p>

        </article>
        <hr />
        </div>
       
        <article className='flex flex-row  pt-4 text-xs space-x-12 text-center max-w-screen-lg mx-auto pb-4'>
             <p>
                <Link to = '/login' className='underline text-white text-xs'>Mobile Version</Link>
            </p>
             <p>
                <Link to = '/login' className='underline text-white text-xs'>Your account</Link>
            </p>
             <p>
                <Link to = '/login' className='underline text-white text-xs'>Make changes to your booking online</Link>
            </p>
             <p>
                <Link to = '/login' className='underline text-white text-xs'>Become an affiliate </Link>
            </p>
             <p>
                <Link to = '/login' className='underline text-white text-xs'>Booking.com for Busines</Link>
            </p>
      

        </article>

    </section>

<section className='bg-white'>
    <div className='max-w-screen-lg mx-auto'> 
            <article className='flex flex-row justify-between mt-2 text-[13px] bg-white  text-blue-600'>
            <div>
                <ul>
                    <li>
                        <Link>Countries</Link>
                    </li>
                    <li>
                        <Link>Regions</Link>
                    </li>
                    <li>
                        <Link>District</Link>
                    </li>
                    <li>
                        <Link>Cities</Link>
                    </li>
                    <li>
                        <Link>Airports</Link>
                    </li>
                </ul>
            </div>
            <div>
            <ul>
                    <li>
                        <Link>Homes</Link>
                    </li>
                    <li>
                        <Link>Apartments</Link>
                    </li>
                    <li>
                        <Link>Resorts</Link>
                    </li>
                    <li>
                        <Link>Villas</Link>
                    </li>
                    <li>
                        <Link>Hostels</Link>
                    </li>
                </ul>
            </div>
            <div>
            <ul>
                    <li>
                        <Link>Countries</Link>
                    </li>
                    <li>
                        <Link>Countries</Link>
                    </li>
                    <li>
                        <Link>Countries</Link>
                    </li>
                    <li>
                        <Link>Countries</Link>
                    </li>
                    <li>
                        <Link>Countries</Link>
                    </li>
                </ul>
            </div>
            <div>
            <ul>
                    <li>
                        <Link>Countries</Link>
                    </li>
                    <li>
                        <Link>Countries</Link>
                    </li>
                    <li>
                        <Link>Countries</Link>
                    </li>
                    <li>
                        <Link>Countries</Link>
                    </li>
                    <li>
                        <Link>Countries</Link>
                    </li>
                </ul>
            </div>
            <div>
            <ul>
                    <li>
                        <Link>Coronavirus (COVID-19) FAQs</Link>
                    </li>
                    <li>
                        <Link> Careers</Link>
                    </li>
                    <li>
                        <Link>Sustainability</Link>
                    </li>
                    <li>
                        <Link>Press centre</Link>
                    </li>
                    <li>
                        <Link>Safety resource centre</Link>
                    </li>
                    <li>
                        <Link>Investor relations</Link>
                    </li>
                    <li>
                        <Link>Terms & Conditions</Link>
                    </li>
                    <li>
                        <Link>Partner dispute</Link>
                    </li>
                    <li>
                        <Link>How we work</Link>
                    </li>
                    <li>
                        <Link>Privacy & Cookie Statement</Link>
                    </li>
                    <li>
                        <Link>MSA Statement</Link>
                    </li>
                    <li>
                        <Link>Corporate contact</Link>
                    </li>

                </ul>
            </div>

        </article>
        </div>
        <div className=' flex justify-center items-center mt-3'>
           <p className='font-bold text-gray-400'>
           Extranet login
            </p> 
        </div>
        <div className='max-w-screen-lg mx-auto pb-6'>
            <p className='text-xs'>Copyright &copy;1996-2022 Booking.com.All rights reserved</p>
        </div>
</section>

   
    </>
  )
}

export default Footer