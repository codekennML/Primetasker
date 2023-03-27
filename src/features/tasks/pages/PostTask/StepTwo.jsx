import { useFormikContext } from "formik";
import {
  AiFillCheckCircle,
  AiOutlineEnvironment,
  AiOutlinePlusCircle,
} from "react-icons/ai";
import { BsPhoneVibrate } from "react-icons/bs";
import { FaRegMap } from "react-icons/fa";
import CustomRadio from "../../../../utils/CustomFieldComp/CustomRadioCheck";
import CustomText from "../../../../utils/CustomFieldComp/CustomText";
import Select from "../../../../utils/CustomSelect";
import AutoCompleteMap from "../../utils/AutoCompleteMap";

const options = [
  "Pedicure & Manicure",
  "Facials",
  "Massage",
  "Bead Making",
  "Graphic Design",
  "Data Analysis",
  "Content Creation",
  "Bricklaying",
  "Homework",
  "",
];

const taskType = [
  {
    name: "Select this if the task requires physical attention",
    value: "Physical",
    icon: <AiOutlineEnvironment />,
  },

  {
    name: "Select this if this task can be done online",
    value: "Remote",
    icon: <BsPhoneVibrate />,
  },
];

export const StepTwo = () => {
  const context = useFormikContext();
  const { values } = context;

  // const [selected, setSelected] = useState(options[0]);
  return (
    <section>
      <h2 className="text-[30px] font-bold text-slate-900 py-2.5 text-center mb-6">
        Where ?
      </h2>
      <div>
        <div className="flex items-center space-x-2 ">
          <p className="text-purple-900 text-[30px]">
            <AiOutlinePlusCircle />
          </p>
          <h3 className="text-purple-900 font-medium">
            How would you classify this task ?
          </h3>
        </div>
      </div>
      <div className="relative my-3">
        <Select
          name="category"
          items={options}
          value={values.category}
          width={`w-full`}
          style={`py-4 text-[16px] bg-gray-50`}
        />
      </div>

      <article className="mt-8">
        <div className="flex items-center space-x-2 ">
          <p className="text-purple-900 text-[30px]">
            <AiOutlinePlusCircle />
          </p>
          <h3 className="text-purple-900 font-medium">
            What type of task is this ?
          </h3>
        </div>
        {/* 0686705704 */}
        <article>
          <CustomRadio
            name="taskType"
            options={taskType}
            checked={values.taskType}
            style={`flex justify-center space-x-12 mt-6`}
            renderItem={(name, idx, icon, value, checked) => {
              return (
                <div
                  key={idx}
                  className={` ${
                    checked
                      ? "bg-purple-800 text-white border-0"
                      : "bg-gray-50 text-gray-500"
                  } relative  w-52   text-center  rounded-lg py-4 flex flex-col items-center justify-center border border-purple-500`}
                >
                  <p
                    className={`${
                      checked ? "bg-purple-800 text-white border-0" : "hidden"
                    }`}
                  >
                    <AiFillCheckCircle className="text-[20px] font-medium absolute top-2 right-2" />
                  </p>
                  <p className="text-[24px] ">{icon}</p>
                  <p className="text-[17px] font-medium mt-2"> {value}</p>
                  <p className="text-[12px] font-medium  px-4">{name}</p>
                </div>
              );
            }}
          />
        </article>

        {values.taskType !== "Physical" ? null : (
          <div className="mt-8">
            <div className="flex items-center space-x-3 mb-3">
              <p className="text-purple-900 text-[30px]">
                <FaRegMap />
              </p>
              <h3 className="text-purple-900 font-medium">
                Where do you need this task done ?
              </h3>
            </div>

            <AutoCompleteMap name="location" />

            {/* <CustomText
              label="Task Address "
              labelstyle={`hidden`}
              name="location"
              type="text"
              value={values.location}
              placeholder="84 Etim Inyang Crescent, Victoria Island"
              inputstyle="py-4 my-2  rounded-lg border-2 border-violet-200 placeholder:text-[14px] placeholder:text-gray-500 focus:outline-violet-500 text-base text-gray-400 bg-gray-50 indent-2 w-full rounded"
            /> */}
          </div>
        )}
      </article>
    </section>
  );
};
