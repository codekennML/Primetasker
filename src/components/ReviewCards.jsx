import React from 'react'

const ReviewCards = ({name, country}) => {
  return (
    <article className='border border-gray-200 rounded p-3 w-full px-3 '>
        <div className='flex flex-row space-x-2'>
            <div>

            <img src="https://lh3.googleusercontent.com/a-/AOh14GigCOoRDZc_tWz56xZpC_Krwja__Mv4FnzWIj-Z=s96-c" alt="" className='block w-[30px] h-[30px] rounded-full object-cover'/>
            </div>
            <p>
                <span className='block font-medium text-xs'>{name}</span>
                <span className='block text-[11px]'>{country}</span>
            </p>
        </div>
        <p className='text-[13px] py-3'>
            <q>
            If you want to feel Nigeria in Lagos choose this hotel. Nice people, nice food (a lot of local dishes), nice room, excelent view, nice pool (and pool bar), great hospitality.
            </q>
     </p>
     <p className='text-blue-600 text-xs font-medium'>Read More </p>

    </article>
    )

}

export default ReviewCards