import React, { useCallback } from "react";
import { Link } from "react-router-dom";
import { showModal } from "../../modal/modalSlice";
import { useDispatch } from "react-redux";
import useAuth from "../../../hooks/useAuth";

const ManageTaskAlert = ({ task }) => {
  const { id: userId } = useAuth();
  const dispatch = useDispatch();
  console.log(task);
  const openTaskManageDialog = () => {
    dispatch(
      showModal({
        currentModal: "TaskVerifyModal",
        modalData: task,
      })
    );
  };

  const checkRole = useCallback(() => {
    let role;

    if (task.creator._id === userId) {
      role = "isHost";
    } else if (task?.assigned?.assigneeId === userId) {
      role = "Assignee";
    } else {
      role = undefined;
    }

    return role;
  }, [task, userId]);

  const taskRole = checkRole();

  console.log(taskRole());

  return (
    <>
      {taskRole && (
        <article className="bg-brand-secondary rounded-md px-4 py-6 text-primary">
          <div>
            <h2 className="text-[1.4rem] font-bold">Manage task </h2>
          </div>

          <div className="">
            {taskRole === "Host" && task.assigned.assigneeId !== undefined && (
              <p className="py-3">
                You have assigned this task to{" "}
                <span className="text-brand-accent underline">
                  {`${task?.assigned?.Firstname}``${task.assigned.Lastname}`}{" "}
                </span>
              </p>
            )}
            {taskRole === "Assignee" && (
              <p>{`${task.creator.firstname} ${task.creator.lastname} has assigned you to help with this task `}</p>
            )}

            <div className=" mt-3 ">
              <button
                onClick={openTaskManageDialog}
                className="text-primary rounded-md px-4 border border-brand-light/90 text-brand-text py-2.5 hover:bg-brand-light hover:text-white w-full sm:w-max "
              >
                {taskRole === "Host" && "View Progress"}
                {taskRole === "Assignee" && "Manage Progress"}
              </button>
            </div>
          </div>
        </article>
      )}
    </>
  );
};

export default ManageTaskAlert;

<>
  {/* <button
                  className=" w-full text-primary border-t underline bg-brand-secondary text-brand-text py-2.5 rounded-b "
                  // onClick={() => handleDropdownOpen(8)}
                >
                  {" "}
                  Update budget{" "}
                </button> */}
  {/* <p className="text-[.7rem] mt-4">
                  You can update your offer to match the final negotiated
                  price with your host . Your renewed offer is subject to
                  approval by your host{" "}
                </p> */}

  {/* <button
                  className=" w-full text-primary border-t underline bg-brand-secondary text-brand-text py-2.5 rounded-b "
                  onClick={() => handleDropdownOpen(8)}
                >
                  {" "}
                  Update budget{" "}
                </button> */}
  {/* <button className="underline w-full">
                  {" "}
                  Approve budget{" "}
                </button> */}

  {/* <div className=" px-4 w-full bg-white   pb-2 pt-3 rounded-lg flex flex-col gap-3 items-center py-1 z-10  ">
                            <button
                              onClick={() => handleNext(1)}
                              // disabled
                              className="bg-brand-secondary/90 text-brand-text w-full py-2.5 rounded disabled:bg-brand-light/60"
                            >
                              Go Back
                            </button>
                            <button
                              onClick={() => handleNext(3)}
                              // disabled
                              className="bg-brand-light/90 hover:bg-brand-light hover:disabled:bg-brand-light/60 text-primary text-white w-full py-2.5 rounded disabled:bg-brand-light/60"
                            >
                              Request Payment
                            </button>
                          </div> */}

  {/* 
          <div>
            <button clas>Request Extension</button>
          </div> */}
</>;

// {currentPage === 4 && (
//   <div className="h-full  flex flex-col justify-between  ">
//     <div>
//       <ModalHead title="Track your task" />

//       <div className=" max-h-[90vh_-_100px] h-[400px] min-h-[200px] overflow-auto">
//         <article className="bg-brand-secondary rounded my-3 mb-6 mx-5 ">
//           <div className="flex flex-row justify-start items-start gap-x-4 py-3 px-3 rounded">
//             <div className=" relative">
//               <img
//                 src="https://images.unsplash.com/photo-1614436163996-25cee5f54290?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fHVzZXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
//                 height={50}
//                 width={50}
//                 className="rounded-full object-cover object-center h-[60px] w-[60px]"
//               />
//               <button
//                 type="button"
//                 className="absolute bottom-0 right-0 bg-brand-accent rounded-full"
//               >
//                 <AiFillCheckCircle className="text-[20px] text-white" />
//               </button>
//             </div>

//             <div className="text-primary text-[.9rem]  ">
//               <h2 className="text-[.95rem]"> Kennaya Xerxes</h2>
//               <p className=" ">
//                 <span className="text-brand-accent text-[.8rem]">
//                   Host
//                 </span>
//               </p>
//               <p className="text-[.8rem]">Gwagwalada</p>
//             </div>
//           </div>
//           <div className="px-4  border-b py-1 flex justify-between bg-brand-accent/80 text-white rounded-b">
//             <p>
//               {" "}
//               <span className=" text-[.85rem]">Tracking code</span>{" "}
//             </p>
//             <p>
//               {" "}
//               <span className=" text-[.85rem]">4562rt5</span>
//             </p>
//           </div>
//         </article>
//         <div className="flex flex-col overflow-auto  justify-between  ">
//           <article className="px-4 overflow-y-auto">
//             <div className="bg-brand-secondary p-4 text-center text-primary rounded-md">
//               <h className="primary font-semibold text-brand-accent">
//                 Task Budget
//               </h>
//               <p className="text-[1.2rem]">N60,000</p>
//             </div>
//             <div className="bg-brand-secondary py-4  text-justify  text-primary mt-4 rounded-md px-4">
//               {/* <h2 className="primary font-semibold text-brand-accent">
//                 Your Offer
//               </h2> */}
//               <div className="text-center">
//                 <h2 className="primary font-semibold text-brand-accent">
//                   Your initial Offer
//                 </h2>
//                 <p className="text-[1.2rem] ">N80,000</p>
//               </div>

//               <p className="pt-3">
//                 Please ensure to communicate with your Host to discuss
//                 finer details about your task and negotiate a suitable
//                 final price.{" "}
//               </p>

//               <p className="pt-4">
//                 If you have agreed on a price different from your initial
//                 offer
//               </p>
//               <p className="text-[.7rem] mt-4">
//                 You can update your offer to match the final negotiated
//                 price with your host . Your renewed offer is subject to
//                 approval by your host{" "}
//               </p>
//               <div className="text-center pt-3">
//                 <h2 className="primary font-semibold text-brand-accent  ">
//                   Kennaya's final Offer
//                 </h2>
//                 <p className="text-primary text-[1.2rem] "> - </p>
//               </div>

//               <p className="py-3">
//                 Once you approve the final offer, you won't be able to
//                 edit the price anymore and your task will be set to
//                 commence{" "}
//               </p>

//               <button className="w-full bg-brand-light py-2.5 mt-3 text-white rounded-md">
//                 Go to Chat
//               </button>
//               {/* <button
//                 className=" w-full text-primary border-t underline bg-brand-secondary text-brand-text py-2.5 rounded-b "
//                 // onClick={() => handleDropdownOpen(8)}
//               >
//                 {" "}
//                 Update budget{" "}
//               </button> */}
//             </div>
//             <div className=" mb-4">
//               {/* <button
//                 className=" w-full text-primary border-t underline bg-brand-secondary text-brand-text py-2.5 rounded-b "
//                 onClick={() => handleDropdownOpen(8)}
//               >
//                 {" "}
//                 Update budget{" "}
//               </button> */}
//               {/* <button className="underline w-full">
//                 {" "}
//                 Approve budget{" "}
//               </button> */}

//               <SmoothCollapse
//                 expanded={openDropdown === 8}
//                 heightTransition=".5s ease"
//               >
//                 {/* <div className="text-primary font-medium px-2 my-3 space-y-2 py-3">
//                   <div className="text-primary font-medium px-2 space-y-2 py-3">
//                     <p>
//                       We have ascertained your location.You are
//                       approximately 2km from the task location.Here is
//                       your task code.
//                     </p>
//                     <p className="text-[1.5rem] text-primary text-center bg-brand-secondary py-1 my-3">
//                       321469
//                     </p>
//                     <p>
//                       Share this code with your host to validate your
//                       arrival
//                     </p>
//                   </div>

//                   <p>If you notice anything suspicious. </p>
//                   <button
//                     type="button"
//                     className=" w-full  py-2 mt-2  px-6 rounded bg-brand-light/90 hover:bg-brand-light  font-semibold text-white  text-[.9rem] "
//                   >
//                     End task
//                   </button>
//                 </div> */}

//                 <Formik
//                   initialValues={{ budget: "" }}
//                   onSubmit={(values) => {}}
//                 >
//                   {({ values }) => {
//                     return (
//                       <Form className="flex flex-col flex-1 justify-between">
//                         <div className="mx-auto flex flex-col items-center justify-center py-6"></div>
//                         <p className="text-[.8rem]">
//                           Please enter the one time password (OTP) sent to
//                           you to authenticate your payment release request
//                         </p>

//                         <CustomText
//                           label={`Payment release OTP`}
//                           labelstyle="my-1 py-3 text-gray-600 font-bold text-[.85rem] sr-only"
//                           type="text"
//                           name="budget"
//                           value={values.amount}
//                           inputstyle="py-4 border-0 font-medium  rounded-lg placeholder:text-[15px] placeholder:text-gray-500 focus:outline-brand-light text-base text-gray-600 bg-brand-secondary indent-1 w-full rounded auto my-3"
//                           adornment="absolute top-6 left-2 text-[15px] font-bold text-gray-600 "
//                         />
//                         <div className="flex justify-end">
//                           <button className="text-brand-accent flex justify-end text-[.8rem]">
//                             Send code
//                           </button>
//                         </div>

//                         {/* <div className=" px-4 w-full bg-white   pb-2 pt-3 rounded-lg flex flex-col gap-3 items-center py-1 z-10  ">
//                           <button
//                             onClick={() => handleNext(1)}
//                             // disabled
//                             className="bg-brand-secondary/90 text-brand-text w-full py-2.5 rounded disabled:bg-brand-light/60"
//                           >
//                             Go Back
//                           </button>
//                           <button
//                             onClick={() => handleNext(3)}
//                             // disabled
//                             className="bg-brand-light/90 hover:bg-brand-light hover:disabled:bg-brand-light/60 text-primary text-white w-full py-2.5 rounded disabled:bg-brand-light/60"
//                           >
//                             Request Payment
//                           </button>
//                         </div> */}
//                       </Form>
//                     );
//                   }}
//                 </Formik>
//               </SmoothCollapse>
//             </div>
//             {/* <div className="  text-center py-2 bg-brand-secondary ">
//               <p className="text-primary">Deadline </p>
//               <p className="text-[1.1rem] font-bold text-brand-text">
//                 Fri, 18 May 2023
//               </p>
//               <p className="text-primary"> 12h : 16m : 01s </p>
//             </div>

//             <div className="mt-4 flex flex-col md:flex-row gap-4 ">
//               <button
//                 type="button"
//                 onClick={handleMessageRedirect}
//                 className="bg-brand-secondary text-primary  w-full py-3 border  rounded"
//               >
//                 Message Host
//               </button>
//               <button
//                 onClick={() => handleNext(2)}
//                 className="bg-brand-light/90 hover:bg-brand-light text-primary text-white w-full py-2.5 rounded "
//               >
//                 Mark as completed
//               </button>
//             </div> */}
//             {/*
//         <div>
//           <button clas>Request Extension</button>
//         </div> */}
//           </article>
//         </div>
//       </div>
//     </div>

//     <div className=" px-4 w-full bg-white  pb-2  rounded-lg flex flex-col gap-3 items-center ">
//       <button
//         type="button"
//         onClick={() => handleNext(6)}
//         className="bg-brand-secondary/80 hover:bg-brand-secondary text-primary text-brand-text w-full py-2.5 rounded"
//       >
//         Cancel task
//       </button>
//       <button
//         type="button"
//         onClick={() => handleNext(7)}
//         className="bg-brand-secondary/80 hover:bg-brand-secondary text-primary text-brand-text w-full py-2.5 rounded"
//       >
//         Approve N100k
//       </button>
//       {/* <button
//         type="button"
//         disabled
//         onClick={() => handleNext(7)}
//         className="bg-brand-light/90 hover:bg-brand-light text-primary text-white w-full py-2.5 rounded disabled:bg-brand-light/50"
//       >
//         Approve N100k
//       </button> */}
//       {/* <button
//         type="button"
//         onClick={() => handleNext(4)}
//         className="bg-brand-secondary/90 hover:bg-brand-secondary text-primary text-brand-text w-full py-2.5 rounded"
//       >
//         Update Offer
//       </button>
//       <button
//         type="button"
//         onClick={() => handleNext(4)}
//         className="bg-brand-light/90 hover:bg-brand-light text-primary text-white w-full py-2.5 rounded"
//       >
//         Keep original Offer
//       </button> */}
//     </div>
//   </div>
// )}

// {currentPage === 2 && (
//   <div className=" h-full flex flex-col">
//     <ModalHead title="Request Payment" />

//     <div class="verification-message flex-1 flex flex-col font-medium space-y-4 text-[.9rem] ">
//       <Formik initialValues={{ payOTP: "" }} onSubmit={(values) => {}}>
//         {({ values }) => {
//           return (
//             <Form className="flex flex-col flex-1 justify-between">
//               <ScrollContainer style={`px-4   `}>
//                 <div className="mx-auto flex flex-col items-center justify-center py-6">
//                   <FaFingerprint className="text-[50px] h-12 text-brand-accent" />
//                   <h3 className="text-[1.2rem]  font-semibold text-brand-light py-1 text-center">
//                     Security Verification
//                   </h3>
//                 </div>
//                 <p>
//                   Please enter the one time password (OTP) sent to you to
//                   authenticate your payment release request
//                 </p>

//                 <CustomText
//                   label={`Payment release OTP`}
//                   labelstyle="my-1 py-3 text-gray-600 font-bold text-[.85rem] sr-only"
//                   type="text"
//                   name="payOTP"
//                   value={values.payOTP}
//                   inputstyle="py-4 border-0 font-medium  rounded-lg placeholder:text-[15px] placeholder:text-gray-500 focus:outline-brand-light text-base text-gray-600 bg-brand-secondary indent-1 w-full rounded auto my-3"
//                   adornment="absolute top-6 left-2 text-[15px] font-bold text-gray-600 "
//                 />
//                 <div className="flex justify-end">
//                   <button className="text-brand-accent flex justify-end text-[.8rem]">
//                     Send code
//                   </button>
//                 </div>

//               </ScrollContainer>

//               <div className=" px-4 w-full bg-white   pb-2 pt-3 rounded-lg flex flex-col gap-3 items-center py-1 z-10  ">
//                 <button
//                   onClick={() => handleNext(1)}
//                   // disabled
//                   className="bg-brand-secondary/90 text-brand-text w-full py-2.5 rounded disabled:bg-brand-light/60"
//                 >
//                   Go Back
//                 </button>
//                 <button
//                   onClick={() => handleNext(3)}
//                   // disabled
//                   className="bg-brand-light/90 hover:bg-brand-light hover:disabled:bg-brand-light/60 text-primary text-white w-full py-2.5 rounded disabled:bg-brand-light/60"
//                 >
//                   Request Payment
//                 </button>
//               </div>
//             </Form>
//           );
//         }}
//       </Formik>
//     </div>
//   </div>
// )}

// {currentPage === 3 && (
//   <div className="flex flex-col h-full ">
//     <ModalHead title="" />
//     <div>
//       <div className="mx-auto flex justify-center py-6 ">
//         <FaCheckCircle className="text-[50px] h-12 text-brand-accent" />
//       </div>
//       <h3 className="text-[1.4rem]  font-bold text-brand-light py-1 text-center">
//         Request Success
//       </h3>
//     </div>
//     <div className=" flex flex-col justify-between flex-1">
//       <ScrollContainer style={`min-h-[calc(78vh_-_100px)]`}>
//         <div class="verification-message py-12 font-medium space-y-4 text-[.9rem] px-6">
//           <p>Your payment request has been sent.</p>
//           <p>
//             Approved funds will be deposited to your account once your
//             host approves your payment.
//           </p>
//           <div></div>
//           <div className="">
//             <h2 className="text-primary text-[.85rem] text-brand-accent pt-4">
//               What would you like to do next ?
//             </h2>
//           </div>
//         </div>
//       </ScrollContainer>

//       <div className=" px-6 md:px-12 w-full bg-white h-full  pb-6 pt-3 rounded-lg flex flex-col md:flex-row gap-3 items-center py-1 ">
//         <button
//           onClick={() => {
//             dispatch(hideModal());
//           }}
//           className="bg-brand-light/90 hover:bg-brand-light text-primary text-center text-white w-full py-2.5 rounded "
//         >
//           Close
//         </button>

//         {/* <div class="spinner"></div> */}
//       </div>
//     </div>
//   </div>
// )}

{
  /* Task Started */
}

{
  /* Appeal sent */
}
{
}
// {currentPage === 11 && <></>}
