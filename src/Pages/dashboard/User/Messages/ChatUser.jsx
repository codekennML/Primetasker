
const ChatUser = ({name, img}) => {
  return (
    

           <li className=' list-none hover:bg-gray-100 cursor-pointer  px-3 py-2  '>
        <div className='flex flex-row justify-start w-full '>
            <div>

            <img src={img} alt="" className="w-[50px] h-[50px] rounded-full object-cover object-center" />
            </div>

        
        <div className='flex flex-row flex-1 justify-between items-center '>  

        <div className='pl-3 space-y-1'>
            <p className='text-[14px] font-medium text-gray-600 text-left'>{name}</p> 
          <p className='text-[11px] text-clip font-medium text-gray-500'>
              Hi there, how are  today ?
            </p>  
            {/* <p className="text-xs"> Hi there, how are you ?</p> */}
            </div>

            <p className='flex flex-col space-y-1 px-3 '>
            <span className='text-[11.5px] font-medium'> 07:51</span>
            <span className='bg-indigo-500 rounded-full text-[10px] w-[20px] h-[20px] text-white inline-flex justify-center items-center  '>
                5 
            </span>

            </p>
           
            
        </div>
  </div>
        </li>
 
  )
}

export default ChatUser