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
    <section className="max-w-screen-lg">
      <article className="border-b py-3 sticky top-0 z-10 bg-white ">
        <h2 className="text-xl font-medium text-gray-600 font-sans">
          User Information
        </h2>
        {/* <p className='text-sm  text-gray-600 pt-3 pb-2'>Here you can edit assets information about yourself</p> */}
      </article>
      <div className="px-7 ">
        <PersonalInfo />

        <Verification />

        <TaskInfo />
      </div>

      <article className="">
        <div className="flex flex-row justify-between mb-4 border-b text-gray-600 my-4 pb-4 pt-2">
          <div className="w-[300px] ">
            <h2 className="text-[16px] font-medium">Billings &amp; Payments</h2>
            <p className="text-[12px] font-medium mb-3">
              Update your billing details and address for payments and
              withdrawals
            </p>
          </div>
          <div className="text-[14px] flex-1 px-4 ">
            {/* <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut iusto, rerum quas dicta sit id nesciunt magnam cum dolores amet nemo ipsa dignissimos ratione dolorum et sed! Unde, sed magni!</p> */}

            <div className="  ">
              <Formik
                initialValues={{ name: "", profession: "", acceptedTos: false }}
                validationSchema={loginSchema}
                onSubmit={onSubmit}
              >
                {() => (
                  <Form>
                    <div className="grid grid-cols-2 gap-x-6 w-full ">
                      <CustomText
                        label="Account Name *"
                        name="accountName"
                        type="text"
                        placeholder="Ciroma Chukwuma"
                      />
                      <CustomText
                        label="Account number *"
                        name="accountNumber"
                        type="text"
                        placeholder="Olivia Kehye"
                      />
                      <CustomText
                        label="Bank Name *"
                        name="accountNumber"
                        type="text"
                        placeholder="GTBank"
                      />
                    </div>

                    <div>
                      <h2 className="text-sm font-semibold pt-4 text-purple-700">
                        Add New Card
                      </h2>
                      <div className="grid grid-cols-2 gap-x-6 w-full ">
                        <CustomText
                          label="Name on card"
                          name="cardName"
                          type="text"
                          placeholder="Olivia Kehye"
                        />
                        <CustomText
                          label="Expiry"
                          name="cardExpiry"
                          type="text"
                          placeholder="06/2024"
                        />

                        <CustomText
                          label="Card number"
                          name="cardNumber"
                          type="text"
                          placeholder="1234 1234 1234 1234"
                          imgBfr={<SvgComponent />}
                        />

                        <CustomText
                          label="CVV"
                          name="cardCVV"
                          type="password"
                          placeholder="534"
                          autoComplete="cc-number"
                        />
                      </div>
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
      </article>

      {/* <div>Verification</div>
            <div>Task Information</div>
            <div>Task Information</div>
            <div>Billings &amp; Payments</div> */}
    </section>
  );
};

export default Profile;
