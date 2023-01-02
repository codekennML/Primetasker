import React from 'react'

const ReviewCard = () => {
  return (
    <div>
         <div className='w-full whitespace-pre-wrap space-y-0.5'>
        <img src="https://t-cf.bstatic.com/xdata/images/hotel/square600/87428762.webp?k=9a065fcd92168145d8c8358701662c76793535597b678efc8f6921c8e3c188e6&o=&s=1" alt="" className=' max-w-full h-[200px] w-[250px]' height='200' width = '300' />
        <p className='text-md mt-3 font-semibold mb-1'>7Seasons Apartments Budapest</p>
        <p className='text-[13px] leading-6'>06. Terézváros, Hungary, Budapest</p>
        <p className='text-[12px] mb-1.5'>Starting from <span className='text-sm font-bold'>NGN 42,359</span> </p>
        <p className='text-[12px] space-x-2 '>
            <span className='bg-blue-800 text-white font-bold text-sm p-1 rounded-t rounded-x'>
                8.8
            </span>
            <span>
                Fabulous
            </span>
            <span className='text-[11px]'>
                6,901 reviews
            </span>
        </p>
    </div>
    </div>
  )
}

export default ReviewCard