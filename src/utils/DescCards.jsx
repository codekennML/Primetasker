import {
 
    FaArrowRight,
    FaArrowUp,
    FaCalendar,
  
    FaChartLine,
    FaChevronUp,
    
    FaEllipsisH,
    FaEllipsisV,
    FaGlobe,
  
  } from "react-icons/fa";
const DescCards = ({Data}) => {
  return (
    <section>
    <article className="grid grid-cols-4 grid-rows-1 gap-x-4 bg-gradient-to-tr from-gray-50/60 to-gray-100/60  border-gray-100 p-2 rounded-lg shadow-md">

      <div className="tab cards  border-r-2 bg-gradient-to-tr from-blue-200/60 to-orange-200/60  
      rounded-lg    p-2 text-sm text-gray-600 px-3">
        <article className="flex flex-row justify-between items-center text-gray-500  ">
          <div className="flex flex-row space-x-2 items-center">
         
            <h3 className="font-bold text-sm text-gray-800/80">
              Total {`${Data}s `}
            </h3>
          </div>
         
        </article>
              <article className="flex flex-row items-center space-x-1 mt-3 ">
                <h3 className="text-[18px] font-bold mr-2 ">&#x20A6; 5,000</h3>
              
              </article>

        <article className="flex flex-row space-x-4 justify-between items-center mt-3">
          <div className="flex flex-row items-center ">
                  <div className="inline-flex flex-row font-sans items-center space-x-2 ">
                    <p className="inline-flex items-center text-gray-500 space-x-1">

                    <span><FaArrowRight className="-rotate-45 text-xs text-green-600 " /></span>
                    <span className="font-medium">16.5% </span>
                    </p>

                    <p className="text-[15px]  inline-flex items-center text-xs text-gray-600 font-medium space-x-1">
                    <span><FaArrowUp className="text-xs text-green-600 " /></span>
                      <span>
                      &#x20A6;89k today
                      </span>
                      
                      </p>
                   
                  </div>
                
          </div>
          <div>
          
          </div>
         
         
         
        </article>
      </div>
      <div className="tab cards bg-gradient-to-tr from-pink-200/60 to-blue-200/60  border-r-2 
      rounded-lg    p-2 text-sm text-gray-600 px-3">
        <article className="flex flex-row justify-between items-center text-gray-500  ">
          <div className="flex flex-row space-x-2 items-center">
         
            <h3 className="font-bold text-sm text-gray-800/80">
              Ongoing {Data}s
            </h3>
          </div>
         
        </article>
              <article className="flex flex-row items-center space-x-1 mt-3 ">
                <h3 className="text-[18px] font-bold mr-2 ">&#x20A6; 1540</h3>
              
              </article>

        <article className="flex flex-row space-x-4 justify-between items-center mt-3">
          <div className="flex flex-row items-center ">
                  <div className="inline-flex flex-row font-sans items-center space-x-2 ">
                    <p className="inline-flex items-center text-gray-500 space-x-1">

                    <span><FaArrowRight className="-rotate-45 text-xs text-green-600 " /></span>
                    <span className="font-medium">16.5% </span>
                    </p>

                    <p className="text-[15px]  inline-flex items-center text-xs text-gray-600 font-medium space-x-1">
                    <span><FaArrowUp className="text-xs text-green-600 " /></span>
                      <span>
                      &#x20A6;89k today
                      </span>
                      
                      </p>
                   
                  </div>
                  {/* <p><FaDotCircle /></p> */}
                {/* <div className="inline-flex  flex-row items-center space-x-1 ">
                  <p className="text-[15px] font-bold">152k</p>
                  <p className="text-[11px]">today</p>
                </div> */}
          </div>
          <div>
          
          </div>
         
         
         
        </article>
      </div>
      <div className="tab cards bg-gradient-to-tr from-orange-200/60 to-pink-200/60  border-r-2
      rounded-lg    p-2 text-sm text-gray-600 px-3">
        <article className="flex flex-row justify-between items-center text-gray-500  ">
          <div className="flex flex-row space-x-2 items-center">
         
            <h3 className="font-bold text-sm text-gray-800/80">
              {Data}s Feedback
            </h3>
          </div>
         
        </article>
              <article className="flex flex-row items-center space-x-1 mt-3 ">
                <h3 className="text-[18px] font-bold mr-2 "> 1,000</h3>
              
              </article>

        <article className="flex flex-row space-x-4 justify-between items-center mt-3">
          <div className="flex flex-row items-center ">
                  <div className="inline-flex flex-row font-sans items-center space-x-2 ">
                    <p className="inline-flex items-center text-gray-500 space-x-1">

                    <span><FaArrowRight className="-rotate-45 text-xs text-green-600 " /></span>
                    <span className="font-medium">16.5% </span>
                    </p>

                    <p className="text-[15px]  inline-flex items-center text-xs text-gray-600 font-medium space-x-1">
                    <span><FaArrowUp className="text-xs text-green-600 " /></span>
                      <span>
                      15 today
                      </span>
                      
                      </p>
                   
                  </div>
               
          </div>
          <div>
          
          </div>
         
         
         
        </article>
      </div>
      <div className="tab cards  bg-gradient-to-tr from-pink-200/60 to-blue-200/60  
      rounded-lg    p-2 text-sm text-gray-600 px-3">
        <article className="flex flex-row justify-between items-center text-gray-500  ">
          <div className="flex flex-row space-x-2 items-center">
         
            <h3 className="font-bold text-sm text-gray-800/80">
              Cancelled {Data}s
            </h3>
          </div>
         
        </article>
              <article className="flex flex-row items-center space-x-1 mt-3 ">
                <h3 className="text-[18px] font-bold mr-2 "> 50</h3>
              
              </article>

        <article className="flex flex-row space-x-4 justify-between items-center mt-3">
          <div className="flex flex-row items-center ">
                  <div className="inline-flex flex-row font-sans items-center space-x-2 ">
                    <p className="inline-flex items-center text-gray-500 space-x-1">

                    <span><FaArrowRight className="-rotate-45 text-xs text-green-600 " /></span>
                    <span className="font-medium">16.5% </span>
                    </p>

                    <p className="text-[15px]  inline-flex items-center text-xs text-gray-600 font-medium space-x-1">
                    <span><FaArrowUp className="text-xs text-green-600 " /></span>
                      <span>
                      2 today
                      </span>
                      
                      </p>
                   
                  </div>
          
          </div>
          <div>
          
          </div>
         
         
         
        </article>
      </div>

    
    </article>
  </section>
  )
}

export default DescCards