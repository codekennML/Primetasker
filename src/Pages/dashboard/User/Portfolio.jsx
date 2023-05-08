import React from "react";
import Verification from "./Settings/ProfileElements.jsx/IDVerify";
import { showModal } from "../../../features/modal/modalSlice";
import { useDispatch } from "react-redux";

const Portfolio = () => {
  const dispatch = useDispatch();

  const showSkillModal = () => {
    dispatch(
      showModal({
        currentModal: "skillModal",
        modalData: null,
      })
    );
  };

  return (
    <>
      <section>
        <div>
          <h2 className="font-bold text-[1.6rem]">Portfolio</h2>
        </div>

        <div>
          <Verification
            title="Upload Resume"
            subtitle="Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe ipsa, libero excepturi natus deserunt facere perspiciatis enim nihil rem ipsum officia, magni a? Commodi eum perspiciatis cupiditate est asperiores doloribus?"
          />
        </div>

        <div>
          <h2 className="text-primary text-[16px] font-semibold text-brand-text mb-2">
            Add Skills
          </h2>
          <p className="text-secondary text-[.8rem] w-[60%] ">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officiis
            nulla porro nemo,
          </p>

          <button
            onClick={showSkillModal}
            className="bg-brand-secondary rounded-full py-3.5 px-12 text-primary mt-6 "
          >
            Add Skill
          </button>
        </div>
      </section>
    </>
  );
};

export default Portfolio;
