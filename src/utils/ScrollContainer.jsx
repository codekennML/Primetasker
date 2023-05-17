import React from "react";

const ScrollContainer = ({ style, children }) => {
  return (
    <div className={`${style ? style : ""} overflow-y-auto    `}>
      {children}
    </div>
  );
};

export default ScrollContainer;

// <article className="px-4 ">
// <Formik enableReinitialize={true} initialValues={initialValues}>
//   {({ values }) => {
//     return (
//       <Form className="overflow-y-auto">
//         <div className=" space-y-4 ">
//           <article className=" ">
//             <div
//               onClick={() => handleDropdownOpen(1)}
//               className="bg-brand-secondary flex justify-between items-center space-x-3 py-2 px-4 rounded cursor-pointer"
//             >
//               <div className="flex items-center space-x-3  ">

//                 <h2 className="text-gray-700 text-[.95rem] font-semibold">
//                   Location
//                 </h2>
//               </div>
//               <button>
//                 <HiChevronDown className="text-[20px] text-brand-light" />
//               </button>
//             </div>
//             <SmoothCollapse
//               expanded={openDropdown === 1}
//               heightTransition=".5s ease"
//             >
//               <div className="border-t border-gray-200 px-2 py-5 ">
//                 <div className=" pl-1    rounded-lg">
//                   <p className="font-medium text-[.85rem] my-2 ">
//                     Help us keep Primetasker safe and fun, and
//                     fill in a few details.
//                   </p>
//                   <div className="flex flex-col   max-w-lg   px-4 justify-start items-start"></div>
//                 </div>
//                 <div className=" py-4 w-full  ">
//                   <button
//                     type="button"
//                     className=" w-full  py-2  px-6 rounded bg-brand-light/90 hover:bg-brand-light font-semibold text-white  text-[.9rem] "
//                   >
//                     Share Location
//                   </button>
//                 </div>
//                 <p className="text-[.75rem]  text-left text-brand-light font-bold">
//                   Kindly ask the tasker for this code
//                 </p>
//               </div>
//             </SmoothCollapse>
//           </article>
//           <article>
//             <div className=" flex justify-between items-center space-x-3 py-2 px-4 rounded bg-brand-secondary">
//               <div className="flex items-center space-x-3   ">
//                 <h2 className="text-gray-700 text-[.95rem] font-semibold ">
//                   OTP
//                 </h2>
//               </div>
//               <button onClick={() => handleDropdownOpen(8)}>
//                 <HiChevronDown className="text-[20px] text-brand-light" />
//               </button>
//             </div>
//             <SmoothCollapse
//               expanded={openDropdown === 8}
//               heightTransition=".5s ease"
//             >
//               <div className="text-primary font-medium px-2 my-3 space-y-2 py-3">
//                 <div className="text-primary font-medium px-2 space-y-2 py-3">
//                   <p>
//                     We have ascertained your location.You are
//                     approximately 2km from the task location.Here
//                     is your task code.
//                   </p>
//                   <p className="text-[1.5rem] text-primary text-center bg-brand-secondary py-1 my-3">
//                     321469
//                   </p>
//                   <p>
//                     Share this code with your host to validate
//                     your arrival
//                   </p>
//                 </div>

//                 <p>If you notice anything suspicious. </p>
//                 <button
//                   type="button"
//                   className=" w-full  py-2 mt-2  px-6 rounded bg-brand-light/90 hover:bg-brand-light  font-semibold text-white  text-[.9rem] "
//                 >
//                   End task
//                 </button>
//               </div>
//             </SmoothCollapse>
//           </article>

//           <article>
//             <div className="  flex justify-between items-center space-x-3 py-2 px-4 rounded bg-brand-secondary">
//               <div className="flex items-center space-x-3  ">
//                 <h2 className="text-gray-700 text-[.95rem] font-semibold">
//                   Identity
//                 </h2>
//               </div>
//               <button onClick={() => handleDropdownOpen(2)}>
//                 <HiChevronDown className="text-[20px] text-brand-light" />
//               </button>
//             </div>
//             <SmoothCollapse
//               expanded={openDropdown === 2}
//               heightTransition=".5s ease"
//             >
//               <div className="00 border-t border-gray-200 px-3 ">
//                 <div className="py-5     rounded-lg">
//                   {/* <p className="font-medium text-[.85rem] my-2 ">
//                     Help us keep Primetasker safe and fun, and
//                     fill in a few details.
//                   </p> */}
//                   <div className="flex flex-col   max-w-lg    justify-start items-start">
//                     <CustomText
//                       label={``}
//                       labelstyle="my-1 py-3 text-gray-600 font-bold text-[.85rem]"
//                       type="text"
//                       name="values.phone.number"
//                       // value={values.phone.number}
//                       inputstyle="py-2.5 border-0 font-medium  rounded-lg placeholder:text-[15px] placeholder:text-gray-500 focus:outline-brand-light text-base text-gray-600 bg-slate-200 indent-1 w-full rounded auto my-3"
//                       adornment="absolute top-6 left-2 text-[15px] font-bold text-gray-600 "
//                     />
//                     <p className="text-[.75rem]  text-left text-brand-light font-bold">
//                       Kindly ask the tasker for this code
//                     </p>
//                   </div>
//                 </div>
//                 <div className="flex justify-end pb-4 ">
//                   <button
//                     type="button"
//                     className=" mr-3  py-2  px-6 rounded bg-brand-light font-semibold text-white  text-[.9rem] "
//                   >
//                     Verify
//                   </button>
//                 </div>
//               </div>
//             </SmoothCollapse>
//           </article>

//           <article>
//             <div className="flex justify-between items-center space-x-3  py-3 px-4 rounded bg-brand-secondary">
//               <div className="flex items-center space-x-3  ">
//                 <h2 className="text-gray-700 font-semibold">
//                   Review
//                 </h2>
//               </div>
//               <button onClick={() => handleDropdownOpen(6)}>
//                 <HiChevronRight
//                   className={`${
//                     openDropdown === 6
//                       ? "rotate-90  "
//                       : "rotate-0"
//                   } transition duration-300 ease text-[20px] text-brand-light`}
//                 />
//               </button>
//             </div>
//             <SmoothCollapse
//               expanded={openDropdown === 6}
//               heightTransition=".5s ease"
//             >
//               <div className="py-5 pl-1">
//                 <div className="flex flex-row space-x-4 items-center max-w-lg overflow-hidden">

//                   <button
//                     type="button"
//                     className="bg-slate-200 h-24 min-w-[6rem] w-[6rem] rounded-lg flex items-center
// justify-center"
//                   >
//                     <span>
//                       <AiOutlinePlusCircle className="text-[2.5rem] text-brand-light/80" />{" "}
//                     </span>
//                   </button>

//                 </div>
//               </div>
//             </SmoothCollapse>
//           </article>
//         </div>
//       </Form>
//     );
//   }}
// </Formik>
// </article>
