import React, { useRef } from "react";
import { AiOutlineCheckCircle } from "react-icons/ai";
import { FaPlay } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { showModal } from "../features/modal/modalSlice";

const steps = [
  {
    id: 1,
    title: "The best for every budget",
    body: "Find high-quality services at every price point. No hourly rates, just project-based pricing.",
  },
  {
    id: 2,
    title: "Quality work done quickly",
    body: "Find the right freelancer to begin working on your project within minutes",
  },
  {
    id: 3,
    title: "Protected payments, every time",
    body: "Always know what you'll pay upfront. Your payment isn't released until you approve the work.",
  },
  //   {
  //     id: 4,
  //     title: "24/7 support",
  //     body: "Questions? Our round-the-clock support team is available to help anytime, anywhere.Always know what you'll pay upfront. Your payment isn't released until you approve the work.",
  //   },
];

const Steps = () => {
  const dispatch = useDispatch();
  const videoRef = useRef();

  return (
    <section className="flex items-center w-full py-20  bg-gradient-to-tr  from-gray-200 via-purple-100 to-blue-200   ">
      <div class="w-[80%] mx-auto">
        <div class="flex flex-items-center">
          <div class="w-1/2 ">
            <h2 className="text-[35px] font-bold pr-6 w-3/4 my-3 mb-6">
              A whole world of freelance talent at your fingertips
            </h2>
            <ul className="space-y-5 pr-32 ">
              {steps.map((step) => {
                return (
                  <li key={step.id}>
                    <p className="inline-flex items-center">
                      <span class="" aria-hidden="true">
                        <AiOutlineCheckCircle className="w-8 h-8 text-purple-900" />
                      </span>
                      <span className="text-[18px] font-roboto font-bold pl-3">
                        {step.title}
                      </span>
                    </p>
                    <p class="text-[18px]">{step.body}</p>
                  </li>
                );
              })}
            </ul>
          </div>

          <div class="w-1/2 flex items-center ">
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
