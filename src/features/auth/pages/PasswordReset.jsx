import { Form, Formik } from "formik";
import React from "react";
import { Link } from "react-router-dom";
import { useResetPasswordMutation } from "../slices/authApiSlice";
import CustomText from "../../../utils/CustomFieldComp/CustomText";
import { IoArrowBackCircleOutline } from "react-icons/io5";

const PasswordReset = () => {
  // const [resetPassword, setResetPassword] = useResetPasswordMutation;
  const handleSubmit = (values) => {};
  return (
    <section className="bg-gray-50 dark:bg-gray-900">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <article className="flex flex-row  max-w-screen-md  rounded-lg">
          <div className="w-1/2 ">
            <img
              src="https://images.pexels.com/photos/8373993/pexels-photo-8373993.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="reset-image"
              className="w-full object-cover object-center  h-full rounded-l-lg"
              height={320}
              width={400}
            />
          </div>
          <div className="w-1/2 p-6 bg-white rounded-r-lg shadow dark:border md:mt-0 sm:max-w-md dark:bg-gray-800 dark:border-gray-700 sm:p-8">
            <h2 className="mb-1 text-xl text-center  font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
              Reset Password
            </h2>

            <Formik
              initialValues={{ password: "", confirmPassword: "" }}
              onSubmit={handleSubmit}
            >
              {(values) => (
                <Form>
                  <CustomText
                    label={`New Password`}
                    type="password"
                    name="password"
                    inputstyle="my-2"
                    placeholder="••••••••"
                    className="bg-gray-50 my-2 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    required
                  />
                  <CustomText
                    label={`Confirm  New Password`}
                    type="password"
                    name="password"
                    inputstyle="my-2"
                    placeholder="••••••••"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    required
                  />

                  <button
                    type="submit"
                    className="w-full text-white text-[15px] bg-violet-700 hover:bg-primary-700 mt-4 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg py-3 "
                  >
                    Reset password
                  </button>
                </Form>
              )}
            </Formik>

            <div className="mt-5  text-sm text-violet-500  ">
              <Link to="/login" className="inline-flex space-x-1 items-center ">
                <span className="text-[18px]">
                  <IoArrowBackCircleOutline />
                </span>
                <span>Back to Login</span>
              </Link>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
};

export default PasswordReset;
