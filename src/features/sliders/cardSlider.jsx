<div className="w-full h-full lg:w-2/3 ">
<div className="flex items-center ">
  <div className="flex-1 ">
    <ul className="flex flex-row justify-start my-3 space-x-6">
      <li>
        <button className="py-1 px-3 font-bold text-[0.9rem] rounded-full bg-green-600/80 uppercase text-white">
          Open
        </button>
      </li>
      <li>
        <button className="py-1 px-3 font-semibold text-[0.9rem] rounded-full uppercase text-slate-400">
          Assigned
        </button>
      </li>
      <li>
        <button className="py-1 px-4 rounded-full font-bold text-[0.9rem]  uppercase text-slate-400">
          Completed
        </button>
      </li>
    </ul>
    <h2 className="text-[2.5rem] md:text-[1.7rem] font-extrabold text-gray-700  pl-2 whitespace-normal text-left  mt-8 ">
      {" "}
      {task.title}
    </h2>
    <button
      ref={mapRef}
      onClick={handleShowMap}
      className="hidden pl-2 mt-4 text-xs font-medium text-green-600 md:block"
    >
      Back to Map
    </button>

    <button
      onClick={() => setShowTaskSidebar(true)}
      className="pl-2 mt-4 text-xs font-medium text-green-600 md:hidden"
    >
      Back to tasks
    </button>
  </div>
</div>
<div className="mt-6 ml-2 ">
  <div className="flex items-center space-x-4 ">
    <img
      src={task.creator.Avatar}
      alt=""
      className="w-[50px] h-[50px] md:w-[60px] md:h-[60px] rounded-full object-cover onject-center"
    />

    <p className="flex flex-col text-[.8rem] font-medium">
      <span className="font-bold text-[.7rem] text-slate-600 uppercase tracking-wider">
        Posted By
      </span>
      <span className="text-[1rem] tracking-tight text-gray-600 mt-1 ">
        {`${
          task?.creator.firstname
        } ${task?.creator?.lastname.charAt(0)}.`}
      </span>
    </p>
  </div>

  <ul className="text-[13px] mt-6 flex flex-col md:flex-row items-start space-y-5 md:space-y-0 md:items-center   md:space-x-3 md:border-y py-2  ">
    <li className=" rounded-full flex  items-start text-gray-700/90 font-medium space-x-2 text-[13px] md:px-3 py-1">
      <p className="text-[30px] md:text-[30px] text-green-800">
        <AiOutlineEnvironment />
      </p>
      <div className="flex flex-col space-y-.5">
        <h3 className="uppercase font-bold text-[.75rem]">
          Location
        </h3>
        <p className="text-[0.9rem] text-green-800 font-bold capitalize">
          {" "}
          {task.taskType === "Remote"
            ? "Remote"
            : task.taskAddress}
        </p>
      </div>
    </li>
    <li className="  py-1 rounded-full flex items-center text-gray-700/90 font-medium space-x-2 text-[12px] md:px-3">
      <p className="text-[30px] md:text-[30px] text-green-800">
        <AiOutlineCalendar />
      </p>
      <div className="flex flex-col space-y-.5">
        <h3 className="uppercase font-bold text-[.75rem]">
          DUE DATE
        </h3>
        <p className="text-[0.9rem] text-green-800 font-bold capitalize">{` ${formatDate(
          task.taskDeadline,
          "eee dd LLL"
        )}`}</p>
      </div>
    </li>
    <li className="rounded-full flex items-center text-gray-700/90 font-medium space-x-2 text-[13px] md:px-3 py-1">
      <p className="text-[30px] md:text-[30px] text-green-800">
        <AiOutlineClockCircle />
      </p>
      <div className="flex flex-col space-y-.5">
        <h3 className="uppercase font-bold text-[.75rem]">
          Afternoon
        </h3>
        <p className="text-[0.9rem] text-green-800 font-bold capitalize">
          {" "}
          {task.taskTime}
        </p>
      </div>
    </li>
  </ul>
</div>

{/* BUDGET BAR SMALL SCREENS */}

<article className=" rounded-lg  mb-5 mt-6 bg-slate-100 pb-[0.5rem] lg:hidden ">
  <div className=" text-[30px]      border-b   ">
    <div>
      <p className="text-[12px] uppercase text-center pt-3 pb-1 font-medium text-gray-500">
        Task Budget
      </p>
    </div>
    <div className="flex flex-row items-center justify-center font-bold text-gray-700 ">
      <p className="text-[4.2rem]">
        <Naira style={`w-8 h-8 font-medium`} />
      </p>
      <p className="text-[40px] ">
        {millify(Math.floor(Number(task.budget)), 2)}
      </p>
    </div>
  </div>
  <div className="mx-3">
    <button
      onClick={handleMakeOffer}
      className="text-center bg-green-500 hover:bg-green-600 rounded-full my-3  text-white font-bold  text-[16px]  py-3  w-full"
    >
      Make an Offer
    </button>
  </div>
</article>

{/* END OF BUDGET BAR  */}

<div className="py-2 md:py-6 ">
  <h3 className="mb-4 font-bold text-slate-900/80 text-md md:font-heading md:px-2">
    Task Details
  </h3>

  <TextVisibility text={task.description} files={task.files} />
</div>

<div className="pt-2 ">
  <MemoizedImageForm
    name={`${
      task.creator.firstname
    } ${task.creator.lastname.charAt(0)}`}
    handleCreate={true}
    clearValues={clearValues}
    ref={ref}
    setClearValues={setClearValues}
    taskId={task._id}
  />
</div>

<article className="pb-4 ">
  <div className="py-3 my-6 mb-2 md:pr-4">
    <h3 className="mb-4 font-bold text-slate-900/80 text-md md:font-heading">
      All Offers
    </h3>
    <div className="space-y-12">
      {task.offers.length > 0 ? (
        task.offers.map((offer, idx) => {
          if (!offer.userDeleted) {
            return (
              <li key={idx} className="list-none">
                <TaskComments comment={offer} type="offer" />
              </li>
            );
          }
        })
      ) : (
        <div className="flex flex-col items-center justify-center ">
          <p>
            <AiOutlineShoppingCart className="text-[6rem] text-yellow-500 -rotate-12" />
          </p>

          <div className="text-[.95rem] font-semibold text-gray-800 mt-6 font-inter  ">
            No offers for this task yet.
            <button
              onClick={handleMakeOffer}
              className="pl-2 text-yellow-600"
            >
              {" "}
              Be the first ?
            </button>
          </div>
        </div>
      )}
    </div>
    {task?.hasMoreOffers && isLoggedIn ? (
      <div className="flex justify-center my-4">
        <button
          onClick={loadMoreOffers}
          className="bg-gray-50 border text-green-600 text-[14px] font-semibold px-4 py-2 rounded-full "
        >
          More Offers
        </button>
      </div>
    ) : null}
  </div>
</article>

{!isLoggedIn ? (
  <div className="flex flex-col items-center justify-center">
    <p className="text-[1rem] font-medium text-yellow-700 py-6 ">
      Join the conversation ?
    </p>
    <div className="flex flex-row items-center space-x-3">
      <button className="px-4 py-2 font-semibold text-white rounded-full bg-green-600/90 ">
        Join Primetasker
      </button>
      <p className="font-medium">or</p>
      <button className="px-5 py-2 font-semibold text-green-800 rounded-full bg-green-50 ">
        Log In
      </button>
    </div>
  </div>
) : null}

<div className="pb-20 ">
  <div className="pt-6 mt-6 ml-4 space-y-8 border-t">
    <h3 className=" text-gray-900/80 font-bold  mb-2 text-[.7rem] uppercase">
      {`Questions ( ${task.comments?.length}  )`}
    </h3>
    {task.comments.length > 0
      ? task.comments.map((comment, idx) => {
          return (
            <li key={idx} className="list-none">
              <TaskComments comment={comment} type="comment" />
            </li>
          );
        })
      : null}
  </div>

  {task?.hasMoreComments ? (
    <div className="flex justify-center my-4">
      <button
        onClick={loadMoreComments}
        className="bg-gray-50 border text-purple-600 text-[14px] font-semibold px-4 py-2 rounded-full "
      >
        Load more comments
      </button>
    </div>
  ) : null}
</div>
</div>

<aside className="sticky top-0 right-0 hidden lg:w-1/3 lg:block ">
<section className="w-[250px]  left-0 bottom-0 top-0 mx-auto  ">
  <article className="relative ">
    <article className=" rounded-lg  mb-5 mt-2 bg-slate-100 pb-[0.5rem]  ">
      <div className=" text-[30px]      border-b   ">
        <div>
          <p className="text-[12px] uppercase text-center pt-3 pb-1 font-medium text-gray-500">
            Task Budget
          </p>
        </div>
        <div className="flex flex-row items-center justify-center font-bold text-gray-700 ">
          <p className="text-[4.2rem]">
            <Naira style={`w-8 h-8 font-medium`} />
          </p>
          <p className="text-[40px] ">
            {millify(Math.floor(Number(task.budget)), 2)}
          </p>
        </div>
      </div>
      <div className="mx-3">
        <button
          onClick={handleMakeOffer}
          className="text-center bg-green-500 hover:bg-green-600 rounded-full my-3  text-white font-bold  text-[16px]  py-3  w-full"
        >
          Make an Offer
        </button>
      </div>
    </article>

    <div className="share ">
      <div className="bg-slate-100 border text-[12px] font-medium mt-4 rounded-lg">
        <button
          onClick={() => createSimilarTask(task)}
          className="flex items-center justify-center w-full py-4 space-x-3 border-b "
        >
          <span>
            <AiOutlineCopy />
          </span>
          <span>Post Similar Task</span>
        </button>
        <button className="flex items-center justify-center w-full py-4 space-x-3 border-b ">
          <span>
            <AiOutlineBell />
          </span>
          <span>Set Alerts for similar tasks</span>
        </button>
        <button
          onClick={handleFlag}
          disabled={!isLoggedIn}
          className="flex items-center justify-center w-full py-4 space-x-3 "
        >
          <span>
            <AiOutlineFlag />
          </span>
          <span>Report this task</span>
        </button>
      </div>
    </div>
    <article className="w-full p-3 mt-8 border rounded-lg more options bg-slate-200">
      <div className="share ">
        <div className="bg-gradient-to-br from-purple-50 via-gray-50 to-purple-50 border text-[12px] font-medium mt-8 rounded-lg">
          <button className="w-full py-4 border-b ">
            Share & Refer
            <span></span>
          </button>
          <article className="w-full more options">
            <div className="text-[16px] flex flex-row justify-center items-center space-x-5  bg-gray-50 p-2 my-1   ">
              <button className="p-2 text-white bg-blue-600 rounded-full">
                <FaFacebookF />
              </button>
              <button className="p-2 text-white bg-green-600 rounded-full">
                <AiOutlineWhatsApp />
              </button>
              <button className="p-2 rounded-full bg-[#00aced] text-white">
                <AiOutlineTwitter />
              </button>
              <button className="p-2 rounded-full bg-[#1c6ed1] text-white">
                <FaLinkedinIn />
              </button>
            </div>
          </article>
        </div>
      </div>
    </article>
  </article>
</section>
</aside>