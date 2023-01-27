import CustomCheckbox from "../../../../../utils/CustomFieldComp/CustomCheckbox";
import CustomSelect from "../../../../../utils/CustomFieldComp/CustomSelect";
import CustomText from "../../../../../utils/CustomFieldComp/CustomText";
import { Form, Formik } from "formik";
import CustomRadio from "../../../../../utils/CustomFieldComp/CustomRadio";
import HeadlessRadio from "../../../../../utils/CustomFieldComp/HeadlessRadio";

const TaskInfo = () => {
  const onSubmit = async (values, actions) => {
    // Whatever you want
    actions.resetForm();
  };
  return (
    <article className="">
      <div className="flex flex-row justify-between mb-4 border-b text-gray-600 my-4 pb-4 pt-2">
        <div className="w-[300px] ">
          <h2 className="text-[16px] font-medium">Task Information</h2>
          <p className="text-[12px] font-medium mb-3">
            Update your tasker information and details
          </p>
        </div>
        <div className="text-[14px] flex-1 px-4 ">
          {/* <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut iusto, rerum quas dicta sit id nesciunt magnam cum dolores amet nemo ipsa dignissimos ratione dolorum et sed! Unde, sed magni!</p> */}

          <div className="  ">
            <Formik
              initialValues={{ name: "", profession: "", acceptedTos: false }}
              onSubmit={onSubmit}
            >
              {() => (
                <Form>
                  <div className="grid grid-cols-2 gap-x-6 w-full ">
                    <CustomText
                      label="Username"
                      name="userame"
                      type="text"
                      inputstyle="py-1.5 my-1.5 indent-2 placeholder:text-gray-700  border-2 border-violet-200/90 placeholder:text-[12px] focus:outline-violet-500 text-[12px] w-full  rounded"
                      placeholder="Create your task alias"
                    />

                    <CustomText
                      label="Task contact"
                      name="taskPhone"
                      type="text"
                      inputstyle="py-1.5 my-1.5 indent-2 placeholder:text-gray-700  border-2 border-violet-200/90 placeholder:text-[12px] focus:outline-violet-500 text-[12px] w-full  rounded"
                      placeholder="Enter phone for task enquiries"
                    />

                    <CustomText
                      label="Minimum task amout"
                      name="minTaskAmt"
                      type="text"
                      inputstyle="py-1.5 my-1.5 indent-2 placeholder:text-gray-700  border-2 border-violet-200/90 placeholder:text-[12px] focus:outline-violet-500 text-[12px] w-full  rounded"
                      placeholder="2000"
                    />
                    <CustomText
                      label="State"
                      name="taskState"
                      type="text"
                      inputstyle="py-1.5 my-1.5 indent-2 placeholder:text-gray-700  border-2 border-violet-200/90 placeholder:text-[12px] focus:outline-violet-500 text-[12px] w-full  rounded"
                      placeholder="Lagos, Nigeria"
                    />
                    <div className="w-full">
                      <h5 className="text-xs py-1.5 font-medium">
                        Preffered Task types
                      </h5>
                      <div className="space-x-2 border py-2 text-xs flex items-center rounded-lg border-gray-300 px-2 ">
                        {/* <CustomRadio
                          label="Remote"
                          name="taskType"
                          type="radio"
                          value="Remote"
                        /> */}
                        <HeadlessRadio />
                        {/* <CustomRadio
                          label="Physical"
                          name="taskType"
                          type="radio"
                          value="Physical"
                        />
                        <CustomRadio
                          label="Hybrid"
                          name="taskType"
                          type="radio"
                          value="Hybrid"
                        /> */}
                      </div>
                    </div>
                  </div>
                  <button
                    type="submit"
                    className="bg-purple-700 mt-4 px-6 py-2  text-white font-medium rounded-lg float-right"
                  >
                    Save Settings
                  </button>
                </Form>
              )}
            </Formik>
          </div>
        </div>
      </div>
    </article>
  );
};

export default TaskInfo;
