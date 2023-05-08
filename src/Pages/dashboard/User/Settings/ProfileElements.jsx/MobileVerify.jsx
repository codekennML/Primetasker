import React from "react";
import CustomText from "../../../../../utils/CustomFieldComp/CustomText";
import { Formik, Form } from "formik";
const MobileVerify = () => {
  return (
    <Formik initialValues={{ number: "" }}>
      {(values) => {
        return (
          <Form className="max-w-lg">
            {/* <div className="flex justify-between items-center space-x-3  py-3 px-4 rounded"> */}
            {/* <div className="flex items-center space-x-3  "> */}
            <h2 className="text-brand-text text-[.95rem] font-semibold">
              Verify your phone number{" "}
            </h2>
            {/* </div> */}
            {/* </div> */}

            <div className="  ">
              <div className="py-3     rounded-lg">
                <p className="text-[.75rem] font-medium py-3">
                  Verifying your mobile number helps us know you're a genuine
                  human! We won't show it to anyone or sell it on to any 3rd
                  party, it's just for us to send you some good stuff.
                </p>
                <div className="flex flex-col   max-w-lg  justify-start items-start">
                  <CustomText
                    label={`Phone Number`}
                    labelstyle="my-1 py-3 text-gray-600 font-bold text-[.85rem]"
                    type="text"
                    name="number"
                    value={values.number}
                    inputstyle="py-4 border-0 font-medium  rounded-lg placeholder:text-[15px] placeholder:text-gray-500 focus:outline-green-400 text-base text-gray-600 bg-slate-200 indent-1 w-full rounded auto my-3"
                    placeholder="0812345678"
                    adornment="absolute top-6 left-2 text-[15px] font-bold text-gray-600 "
                  />
                  <p className="text-[.75rem]  text-left text-brand-light font-bold">
                    We will send you a verification code
                  </p>
                </div>
              </div>
              <div className="flex justify-end pb-4 ">
                <button
                  type="button"
                  className=" mr-3  py-3  px-6 rounded-full bg-brand-light font-semibold text-white  text-[.9rem] "
                >
                  Send Code
                </button>
              </div>
            </div>
          </Form>
        );
      }}
    </Formik>
  );
};

export default MobileVerify;
