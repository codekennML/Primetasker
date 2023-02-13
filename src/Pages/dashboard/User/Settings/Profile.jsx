import { Form, Formik } from "formik";
import CustomText from "../../../../utils/CustomFieldComp/CustomText";
import CustomFileUpload from "../../../../utils/CustomFieldComp/CustomFileUpload";
import { loginSchema } from "../../../../features/auth/schemas/LoginFormSchema";
import Verification from "./ProfileElements.jsx/Verification";
import TaskInfo from "./ProfileElements.jsx/TaskInfo";
import SvgComponent from "../../../../../assets/svgs/ccMaster";
import CustomRadio from "../../../../utils/CustomFieldComp/CustomRadio";
import PersonalInfo from "./ProfileElements.jsx/PersonalInfo";

const Profile = () => {
  const onSubmit = async (values, actions) => {
    // Whatever you want
    actions.resetForm();
  };
  return (
    <section className="max-w-screen-lg pb-12">
      <div className="px-7 space-y-8 pt-4 ">
        <PersonalInfo />

        <Verification />

        {/* <TaskInfo /> */}
      </div>

      {/* <article className="px-6 ">
        <div className="flex flex-row justify-between mb-4 border-b text-gray-600 my-4 pb-4 pt-2">
          <div className="w-[300px] ">
            <h2 className="text-[16px] font-medium">Billings &amp; Payments</h2>
            <p className="text-[12px] font-medium mb-3">
              Update your billing details and address for payments and
              withdrawals
            </p>
          </div>
          <div className="text-[14px] flex-1 px-4 ">
          

            <div className="  ">
              <Formik
                initialValues={{ name: "", profession: "", acceptedTos: false }}
                validationSchema={loginSchema}
                onSubmit={onSubmit}
              >
                {() => (
                  <Form>
                    <div className="grid grid-cols-1 w-[400px] gap-x-6 pl-8 ">
                      <CustomText
                        label="Account Name *"
                        name="accountName"
                        type="text"
                        inputstyle="py-1.5 my-1.5 indent-2 placeholder:text-gray-700  border-2 border-violet-200/90 placeholder:text-[12px] focus:outline-violet-500 text-[12px] w-full  rounded"
                        placeholder="Ciroma Chukwuma"
                      />
                      <CustomText
                        label="Account number *"
                        name="accountNumber"
                        type="text"
                        inputstyle="py-1.5 my-1.5 indent-2 placeholder:text-gray-700  border-2 border-violet-200/90 placeholder:text-[12px] focus:outline-violet-500 text-[12px] w-full  rounded"
                        placeholder="Olivia Kehye"
                      />
                      <CustomText
                        label="Bank Name *"
                        name="accountNumber"
                        type="text"
                        inputstyle="py-1.5 my-1.5 indent-2 placeholder:text-gray-700  border-2 border-violet-200/90 placeholder:text-[12px] focus:outline-violet-500 text-[12px] w-full  rounded"
                        placeholder="GTBank"
                      />
                    </div>
               
                    <button
                      type="submit"
                      className="bg-purple-700 mt-4 px-6 py-2  text-white font-medium rounded-lg float-right"
                    >
                      Update Details
                    </button>
                  </Form>
                )}
              </Formik>
            </div>
          </div>
        </div>
      </article> */}
      <button
        type="submit"
        className="bg-purple-700  px-6 py-2.5 ml-12 text-white font-medium rounded float-right hover:bg-purple-800 font-sans"
      >
        Save Details
      </button>
    </section>
  );
};

export default Profile;
