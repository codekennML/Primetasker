import { useEffect } from "react";
import { useFormikContext } from "formik";
import {
  AiFillCheckCircle,
  AiOutlineEnvironment,
  // AiOutlinePlusCircle,
} from "react-icons/ai";
import { BsPhoneVibrate } from "react-icons/bs";
// import { FaRegMap } from "react-icons/fa";
import CustomRadio from "../../../../utils/CustomFieldComp/CustomRadioCheck";
// import CustomText from "../../../../utils/CustomFieldComp/CustomText";
// import Select from "../../../../utils/CustomSelect";
import AutoCompleteMap from "../../utils/AutoCompleteMap";
// import Example from "../../../../utils/CustomComboBox";
import AutoCompleteCombobox from "../../../../utils/CustomComboBox";
import { useSelector } from "react-redux";
import { allTaskCategories } from "../../../categories/slices/categorySlice";

const taskType = [
  {
    name: "This task requires physical attention",
    value: "Physical",
    icon: <AiOutlineEnvironment />,
  },

  {
    name: "This task can be done online",
    value: "Remote",
    icon: <BsPhoneVibrate />,
  },
];

export const StepTwo = () => {
  const categories = useSelector(allTaskCategories);

  const context = useFormikContext();
  const { values } = context;

  // const [selected, setSelected] = useState(options[0]);
  return (
    <section>
      <p className="lg:hidden uppercase font-semibold text-green-900/50 text-[.75rem]  ">
        Step 2/4
      </p>
      <h2 className="title-heading">Where ?</h2>
      <div>
        <div className="flex items-center space-x-2 ">
          <h3 className="task-input-label">What type of task is this ?</h3>
        </div>
      </div>
      <div className="relative my-3">
        <AutoCompleteCombobox name="categoryId" categories={categories} />
      </div>

      <article className="mt-8">
        <div className="flex items-center space-x-2 ">
          <h3 className="task-input-label">
            How would you classify this task ?
          </h3>
        </div>
        {/* 0686705704 */}
        <article>
          <CustomRadio
            name="taskType"
            options={taskType}
            checked={values.taskType}
            style={`grid grid-cols-2 justify-center gap-3 mt-6`}
            renderItem={(name, idx, icon, value, checked) => {
              return (
                <div
                  key={idx}
                  className={` ${
                    checked
                      ? "bg-brand-light  border-0  text-white"
                      : "bg-slate-100  text-brand-text"
                  } relative  text-center  rounded-lg py-4 flex flex-col items-center justify-center `}
                >
                  <p
                    className={`${
                      checked ? "bg-purple-800 text-white border-0" : "hidden"
                    }`}
                  >
                    <AiFillCheckCircle className="text-[20px] font-medium absolute top-2 right-2" />
                  </p>
                  <p className="text-[24px] ">{icon}</p>
                  <p className="text-[.9rem] font-medium mt-2 "> {value}</p>
                  <p className="text-[12px] font-medium  px-4 ">{name}</p>
                </div>
              );
            }}
          />
        </article>

        {values.taskType !== "Physical" ? null : (
          <div className="mt-8">
            <div className="flex items-center space-x-3 mb-3">
              <h3 className="text-brand-text font-medium">
                Where do you need this task done ?
              </h3>
            </div>

            <AutoCompleteMap
              name="location"
              placeType={[]} //This searches regions, places etc
              paddingHeight="py:3 lg:py-5"
            />
          </div>
        )}
      </article>
    </section>
  );
};
