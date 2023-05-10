import React from "react";
import { Formik, Form } from "formik";
import CustomText from "../../../utils/CustomFieldComp/CustomText";
const BankDetails = () => {
  return (
    <Formik
      initialValues={{ bankName: "", accountName: "", accountNumber: "" }}
    >
      {(values) => {
        return (
          <Form className="max-w-lg">
            <h2 className="text-brand-text text-[.95rem] font-semibold">
              Add Payment Method{" "}
            </h2>
            <p className="text-[.75rem] font-medium py-3">
              Verifying your mobile number helps us know you're a genuine human!
              We won't show it to anyone
            </p>

            <div className="  ">
              <div className="py-3     rounded-lg">
                <div className="flex flex-col   max-w-lg  justify-start items-start">
                  <CustomText
                    wrapperclass="my-0"
                    label={`Bank Name`}
                    labelstyle="my-1 py-3 text-gray-600 font-bold text-[.85rem]"
                    type="text"
                    name="bankName"
                    value={values.bankName}
                    inputstyle="py-3 border-0 font-medium  rounded-lg placeholder:text-[15px] placeholder:text-gray-500 focus:outline-brand-light text-base text-gray-600 bg-brand-secondary  indent-1 w-full rounded auto my-2 "
                    placeholder="Bank Name"
                    adornment="absolute top-6 left-2 text-[15px] font-bold text-gray-600 "
                  />

                  <CustomText
                    wrapperclass="my-0"
                    label={`Account Name`}
                    labelstyle="my-1 py-3 text-gray-600 font-bold text-[.85rem] "
                    type="text"
                    name="accountName"
                    value={values.accountName}
                    inputstyle="py-3 border-0 font-medium  rounded-lg placeholder:text-[15px] placeholder:text-gray-500 focus:outline-brand-light text-base text-gray-600 bg-brand-secondary  indent-1 w-full rounded auto my-2"
                    placeholder="Account Name"
                    adornment="absolute top-6 left-2 text-[15px] font-bold text-gray-600 "
                  />

                  <CustomText
                    wrapperclass="my-0"
                    label={`Account Number`}
                    labelstyle="my-1 py-3 text-gray-600 font-bold text-[.85rem]"
                    type="text"
                    name="accountNumber"
                    value={values.accountNumber}
                    inputstyle="py-3 border-0 font-medium  rounded-lg placeholder:text-[15px] placeholder:text-gray-500 focus:outline-brand-light text-base text-gray-600 bg-brand-secondary indent-1 w-full rounded auto my-2 "
                    placeholder="Account Number"
                    adornment="absolute top-6 left-2 text-[15px] font-bold text-gray-600 "
                  />
                </div>
              </div>
            </div>
          </Form>
        );
      }}
    </Formik>
  );
};

export default BankDetails;
