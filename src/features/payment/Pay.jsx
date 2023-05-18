import React from "react";
import CustomText from "../../utils/CustomFieldComp/CustomText";
import { Form, Formik } from "formik";
import CustomRadioCheck from "../../utils/CustomFieldComp/CustomRadioCheck";
import { AiFillCheckCircle } from "react-icons/ai";
import coins from "../../assets/icons/coins.svg";
import satisfaction from "../../assets/icons/satisfaction.svg";
import useAuth from "../../hooks/useAuth";
import { useNavigate } from "react-router-dom";
import { notifyErr, notifySuccess } from "../../hooks/NotifyToast";
import { useCreateDepositMutation } from "./slice/PayApiSlice";

const paymentMethods = [
  { name: "Cash Payment", value: "paystack", icon: satisfaction },
  { name: "Crypto Payment", value: "binance", icon: coins },
];

const Pay = () => {
  const [createDeposit, { isLoading, isError }] = useCreateDepositMutation();

  const navigate = useNavigate();
  const { id: userId } = useAuth();

  const handleSubmit = async (values) => {
    console.log(values);
    if (!userId) {
      return navigate("/login");
    }

    console.log(values);

    const response = await createDeposit(values).unwrap();
    console.log(response);

    if (response && response.status === 201) {
      return notifySuccess(response.message);
    } else {
      return notifyErr("Something went wrong", response.message);
    }
  };

  return (
    <Formik
      initialValues={{ amount: "", method: "" }}
      onSubmit={async (values, { resetForm }) => {
        await handleSubmit(values);
        resetForm();
      }}
    >
      {(values) => {
        return (
          <Form>
            <section className="">
              <div className="border-b  px-4 ">
                <h2 className="text-brand-text-deep  py-3 my-0 text-left text-[1.2rem]">
                  Make Deposit
                </h2>
              </div>

              <div className="px-6 py-6">
                <div>
                  <h3 className="text-brand-text-deep font-medium text-[.85rem]">
                    Deposit Amount
                  </h3>
                  <CustomText
                    labelstyle={`font-bold lg:font-normal  lg:text-[13px] lg:text-base  text-gray-600 py-6 `}
                    name="amount"
                    value={values.budget}
                    pattern="^[0-9]*$"
                    inputMode="numeric"
                    placeholder="Enter Amount"
                    inputstyle="my-2 py-3 p-2 w-full bg-slate-100  focus:outline-green-500 indent-4 placeholder:text-[.95rem]  placeholder:text-gray-400 text-gray-600 outline-none border-0 rounded-md font-semibold"
                    imgBfr="&#8358;"
                    adornment="top-[28%] left-[4%] font-medium text-gray-600 font-semibold"
                  />
                </div>
                <div className="space-y-2 my-4">
                  <h3 className="text-brand-text-deep font-medium text-[.85rem]">
                    Payment Method
                  </h3>

                  <CustomRadioCheck
                    options={paymentMethods}
                    name="method"
                    checked={values.method}
                    style={`grid grid-cols-2  sm:grid-cols-2 lg:grid-cols-2 gap-4 py-3  w-full  flex-wrap  `}
                    renderItem={(name, idx, icon, value, checked) => {
                      return (
                        <div
                          className={`${
                            checked
                              ? "bg-brand-light text-white border-0"
                              : "bg-slate-100 text-gray-600"
                          } relative w-full   text-center  rounded-lg cursor-pointer py-4 flex flex-col items-center justify-center   `}
                          key={idx}
                        >
                          <p
                            className={`${
                              checked
                                ? "bg-green-600 text-white border-0"
                                : "hidden"
                            }`}
                          >
                            <AiFillCheckCircle className="text-[20px] font-medium absolute top-2 right-2" />
                          </p>
                          <img src={icon} height={80} width={80} />
                          <p className="text-[15px] lg:text-[.9rem] font-medium  mt-2">
                            {name}
                          </p>
                        </div>
                      );
                    }}
                  />
                </div>
                <div className="sticky bottom-0 pt-10">
                  <button
                    type="submit"
                    className=" text-white bg-brand-light w-full  text-center rounded-lg py-3.5 "
                  >
                    Proceed to Pay
                  </button>
                </div>
              </div>
            </section>
          </Form>
        );
      }}
    </Formik>
  );
};

export default Pay;
