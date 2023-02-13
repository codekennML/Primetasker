import { useFormikContext } from "formik";
import { AiOutlineCheckCircle, AiOutlinePlusCircle } from "react-icons/ai";
import CustomTextarea from "../../../../utils/CustomFieldComp/CustomTextarea";
import MultipleFileUpload from "../../../../utils/CustomFieldComp/MultipleFileUpload";

export const StepThree = () => {
  const context = useFormikContext();
  const { values } = context;

  return (
    <section>
      <h2 className="text-[30px] font-bold text-slate-900 py-2.5 text-center mb-6">
        Just a few more details
      </h2>

      <div>
        <div className="flex items-center space-x-2 ">
          <p className="text-purple-900 text-[30px]">
            <AiOutlinePlusCircle />
          </p>
          <h3 className="text-purple-900 font-medium">
            Detailed description of your task
          </h3>
        </div>
        <CustomTextarea
          name="details"
          value={values.details}
          placeholder={`Type a description`}
          inputStyle={`my-4 py-4 p-2 bg-slate-50 h-32 resize-none focus:outline-violet-500  placeholder:text-[15px] placeholder:text-gray-500 text-gray-600 `}
        />
        <div className="">
          <div className="flex items-center space-x-2  mb-6">
            <h3 className="text-purple-900 font-medium ">
              Add Images (Optional)
            </h3>
          </div>

          <MultipleFileUpload
            name="files"
            value={values.files}
            fileposition={`absolute bottom-0 left-32 bg-white  rounded-lg`}
            dimensions={`w-[40%] max-w-full`}
            style={` flex space-x-2`}
          />
          {/* {console.log(values.files)} */}
        </div>
      </div>
    </section>
  );
};
