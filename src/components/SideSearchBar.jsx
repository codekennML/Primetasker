import React from 'react'

const SideSearchBar = () => {
  return (
    <div className="searchbarleft p-4 bg-yellow-500 rounded">
          <p>Search</p>
              <label htmlFor="searchLocation" className='text-[11px]  '>Destination/property name</label>
              <input type="text" name="searchLocation" id="destination"  placeholder='Where are you going ?' className='px-2 w-full py-1.5 rounded-sm'/>

              <span className='text-[10px] '>Check-in date</span>
              <button className=' px-2 w-full py-1.5 text-left bg-white border rounded-sm text-[13px]'>Friday 6 January 2023</button>
              
              <span className='text-[11px]  '>Check-out date</span>
              <button className='w-full py-1.5 px-2 bg-white border rounded-sm text-[13px] text-left'>Monday 15 June 20223</button>
            <span className='text-[11px]  '>1 night Stay</span>

              <button className=' text-[13px] px-2 text-ellipsis text-left w-full py-1.5 bg-white border rounded-sm '>
                <span>2 adults </span>
                <span>0 adults </span>
                <span>1 room </span>

              </button>
            <p className='mt-3 inline-flex items-center '>
              <input type="checkbox" name="hometype" id="hometype" />
              <span className='pl-1 text-sm text-[11px]'> Entire homes & apartments</span>
             </p>

             <p className='mt-1 mb-3 inline-flex items-center '>
              <input type="checkbox" name="purpose" id="purpose" />
              <span className='pl-1 text-[11px] '> I'm travelling for work</span>
             </p>
          <button className='w-full bg-blue-800 py-2.5 mb-2 mt-1 text-white'>Search</button>
        </div>

  )
}

export default SideSearchBar