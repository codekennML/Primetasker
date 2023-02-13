import { AiOutlineCalculator, AiOutlineCalendar } from "react-icons/ai";
import Naira from "../../../../../assets/svgs/Naira";
import CustomText from "../../../../utils/CustomFieldComp/CustomText";

export const StepFour = () => {
  return (
    <section>
      <h2 className="text-[30px] font-bold text-slate-900 py-2.5 text-center mb-6">
        Suggest a Budget
      </h2>
      <div>
        <div className="flex items-center space-x-2 mt-12 mb-6 ">
          <p className="text-purple-900 text-[30px]">
            <AiOutlineCalculator />
          </p>
          <h3 className="text-purple-900 font-medium">What is your Budget ?</h3>
        </div>
      </div>
      <CustomText
        label="You can always negotiate the final price"
        labelstyle={`text-[13px]  text-gray-900 py-6 font-bold `}
        name="budget"
        imgBfr={<Naira style={`text-gray-500 w-7 h-7 `} />}
        type="text"
        placeholder=""
        svgclassName="text-gray-900 absolute z-50 top-[54px] text-[25px] left-2"
        inputstyle="py-3 my-4 font-medium rounded-lg border-2 border-violet-200 placeholder:text-[15px] placeholder:text-gray-500 focus:outline-violet-500 text-base text-gray-600 bg-gray-50 indent-2 w-full rounded"
      />
    </section>
  );
};
