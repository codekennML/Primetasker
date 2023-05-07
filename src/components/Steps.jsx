import React, { useRef } from "react";
import { AiOutlineCheckCircle } from "react-icons/ai";
import { FaPlay } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { showModal } from "../features/modal/modalSlice";

const steps = [
  {
    id: 1,
    title: "The best on every budget",
    body: "Find high-quality services at every price point. No hourly rates, just task-based pricing.",
  },
  {
    id: 2,
    title: "Quality work done quickly",
    body: "Find the right primetasker to begin working on your tasks within minutes",
  },
  {
    id: 3,
    title: "Protected payments, every time",
    body: "Always know what you'll pay upfront. Your payment isn't released until you approve the task .",
  },
  //   {
  //     id: 4,
  //     title: "24/7 support",
  //     body: "Questions? Our round-the-clock support team is available to help anytime, anywhere.Always know what you'll pay upfront. Your payment isn't released until you approve the work.",
  //   },
];
// bg-gradient-to-tr  from-slate-200 via-green-100 to-slate-200
const Steps = () => {
  const dispatch = useDispatch();
  const videoRef = useRef();

  return (
    <section className="flex items-center w-full py-20    ">
      <div class="w-[80%] mx-auto">
        <h2 className="text-[30px] font-bold   my-3 mb-6 lg:mb-16">
          A whole world of talents at your fingertips
        </h2>
        <div class="flex flex-col-reverse lg:flex-row gap-y-8 flex-items-center w-full ">
          <div class="w-full lg:w-1/2  lg:mt-3  ">
            <ul className="space-y-5 lg:space-y-10 lg:w-[90%]">
              {steps.map((step) => {
                return (
                  <li key={step.id}>
                    <p className="inline-flex items-center">
                      <span class="" aria-hidden="true">
                        <AiOutlineCheckCircle className="w-8 h-8 text-brand-light" />
                      </span>
                      <span className="text-[18px] font-roboto font-bold pl-3">
                        {step.title}
                      </span>
                    </p>
                    <p class="text-[.85rem] lg:text-[1.2em] text-brand-text-deep font-medium">
                      {step.body}
                    </p>
                  </li>
                );
              })}
            </ul>
          </div>

          <div class=" flex items-center w-full lg:w-1/2 ">
            <div class="video-modal relative ">
              <div class="picture-wrapper w-full h-full  ">
                <img
                  alt="Video teaser image"
                  src="https://images.unsplash.com/photo-1670272502246-768d249768ca?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80"
                  className="w-full h-full object-cover object-center rounded-md"
                />
                <div className="absolute flex items-center justify-center top-[45%] left-1/2 transform:-translate-x-1/2 transform:-translate-y-1/2 mx-auto w-[4em] h-[4em] text-center rounded-full bg-[rgba(0,0,0,0.45)] p-2 ">
                  <button
                    className="text-white text-[2em] "
                    onClick={() =>
                      dispatch(
                        showModal({
                          currentModal: "homepageVideo",
                          modalData: null,
                        })
                      )
                    }
                  >
                    <FaPlay />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Steps;
