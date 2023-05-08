import { Form, Formik } from "formik";
import CustomText from "../../../../utils/CustomFieldComp/CustomText";

import Verification from "./ProfileElements.jsx/IDVerify";
import MobileVerify from "./ProfileElements.jsx/MobileVerify";
import BankDetails from "../BankDetails";
import DatePicker from "../../../../utils/DatePick";

const subtitleNIN =
  "Verifying your mobile number helps us know you're a genuine human! We won't show it to anyone or sell it on to any 3rd party, it's just for us to send you some good stuff";
const subtitleUtil =
  "Verifying your mobile number helps us know you're a genuine human! We won't show it to anyone or sell it on to any 3rd party, it's just for us to send you some good stuff";

const Profile = () => {
  const onSubmit = async (values, actions) => {
    // Whatever you want
    actions.resetForm();
  };
  return (
    <section className="max-w-screen-lg pb-12">
      <div className="px-7 space-y-8  ">
        <h1 className="text-primary text-[1.6rem] font-bold">Verification</h1>
        <Verification title="Verify your ID" subtitle={subtitleNIN} name="" />

        <Formik
          initialValues={{
            date: {
              birthDate: "",
            },
          }}
        >
          {({ values }) => (
            <Form>
              <div className="my-3 flex flex-col justify-between space-y-3">
                <h2 className="text-brand-text text-[.95rem] font-semibold">
                  Verify your Birthday
                </h2>
                <p className="text-[.75rem] font-medium py-3">
                  Verifying your mobile number helps us know you're a genuine
                  human! We won't show it to anyone or sell it on to any 3rd
                  party, it's just for us to send you some good stuff.
                </p>

                <div className="">
                  <DatePicker
                    offset={0}
                    name="birthDate"
                    label="Date of birth"
                    showYearDropdown
                    dateFormatCalendar="MMMM"
                    yearDropdownItemNumber={80}
                    scrollableYearDropdown
                    dateFormat="PP"
                  />
                </div>
              </div>
            </Form>
          )}
        </Formik>
        <MobileVerify />
        <Verification
          title="Verify your Address"
          subtitle={subtitleUtil}
          name="Utility Bill"
        />
        <BankDetails />

        <div className="flex flex-col md:flex-row items-center gap-4 my-5">
          <button className="bg-brand-light px-4 py-2 text-white text-primary rounded-md ">
            Save Profile
          </button>
        </div>
      </div>
    </section>
  );
};

export default Profile;
