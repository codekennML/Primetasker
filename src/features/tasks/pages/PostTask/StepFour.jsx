import { useField, useFormikContext } from "formik";
import {
  AiOutlineCalculator,
  AiOutlineCalendar,
  AiOutlineEye,
  AiOutlineLineChart,
} from "react-icons/ai";
import { BsCalculator } from "react-icons/bs";
import Naira from "../../../../../assets/svgs/Naira";
import CustomText from "../../../../utils/CustomFieldComp/CustomText";

export const StepFour = () => {
  const context = useFormikContext();
  const { values } = context;
  return (
    <section>
      <p className=" lg:hidden uppercase font-semibold text-green-900/50 text-[.75rem]  ">
        Step 4/4
      </p>
      <h2 className="title-heading">Suggest a Budget</h2>
      <div>
        <div className="flex items-center space-x-2 mt-12 mb-6 ">
          <h3 className="text-brand-text-deep font-semibold">
            What is your Budget ?
          </h3>
        </div>
      </div>
      <article className="">
        <CustomText
          key="budget"
          label="You can always negotiate the final price"
          labelstyle={`font-bold lg:font-normal  lg:text-[13px] lg:text-base  text-gray-600 py-6 `}
          name="budget"
          // type="number"
          value={values.budget}
          // pattern="^[0-9]*$"
          inputMode="numeric"
          placeholder="Enter Budget"
          inputstyle="my-4 py-5 p-2 w-full bg-slate-100  focus:outline-green-500 indent-4 placeholder:text-[.95rem]  placeholder:text-gray-400 text-gray-600 outline-none border-0 rounded-md font-semibold"
          imgBfr="&#8358;"
          adornment="top-[36%] left-[4%] font-medium text-gray-600 font-semibold"
        />
      </article>
    </section>
  );
};
