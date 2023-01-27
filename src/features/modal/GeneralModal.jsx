import React, { memo } from "react";
import { useDispatch } from "react-redux";
import { closeAnyModal } from "./modalSlice";

const GeneralModal = ({ children }) => {
  const dispatch = useDispatch();
  // const modalStatus =  useSelector((state) => state.modal.status)

  return (
    <section
      className="w-full h-full fixed flex justify-center items-center top-0 left-0 right-0 bg-slate-700/40 z-50 transition ease-in-out duration-500 opacity-100 "
      onClick={() => dispatch(closeAnyModal())}
    >
      <article className="" onClick={(e) => e.stopPropagation()}>
        <div
          id="defaultModal"
          tabIndex="-1"
          aria-hidden="true"
          className="  z-50 justify-center items-center md:inset-0 h-modal md:h-full"
        >
          <div className="relative  w-full max-w-screen-lg h-full md:h-auto">
            {/* <!-- Modal content --> */}
            <div className="relative  bg-white rounded-lg shadow dark:bg-gray-800 sm:p-5">
              {/* <!-- Modal header --> */}

              {children}
            </div>
          </div>
        </div>
      </article>
    </section>
  );
};

// export const memoizedModal = memo(GeneralModal);
export default GeneralModal;
