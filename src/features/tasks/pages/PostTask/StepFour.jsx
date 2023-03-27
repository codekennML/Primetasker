import { useFormikContext } from "formik";
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
      <h2 className="text-[30px] font-bold text-slate-900/80 py-2.5 text-center mb-6 ">
        Suggest a Budget
      </h2>
      <div>
        <div className="flex items-center space-x-2 mt-12 mb-6 ">
          <p className="text-purple-900 text-[30px]">
            <AiOutlineLineChart />
          </p>
          <h3 className="text-purple-900 font-semibold text-[20px] ">
            What is your Budget ?
          </h3>
        </div>
      </div>
      <article className="">
        <CustomText
          label="You can always negotiate the final price"
          labelstyle={`font-bold lg:font-normal  lg:text-[13px] lg:text-base  text-gray-600 py-6 `}
          name="budget"
          type="number"
          // pattern="/^\d+$/"
          value={values.budget}
          // pattern="^[0-9]*$"
          inputmode="numeric"
          placeholder="Enter Budget "
          inputstyle="py-5 text-[14px] appearance-none py-3 my-2.5 font-medium text-gray-500 indent-5 placeholder:text-gray-500 bg-gray-50 border-2 border-violet-200/90 placeholder:text-[12px] lg:placeholder:text-[15px] focus:outline-violet-200 lg:text-base w-full rounded"
          imgBfr="&#8358;"
          adornment="top-[35%] left-[4%] font-medium text-gray-500"
        />
      </article>
    </section>
  );
};
