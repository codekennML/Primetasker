import { Formik, Form } from "formik";
import { useState, useEffect, useRef } from "react";
import CustomText from "../../../utils/CustomFieldComp/CustomText";
import { useForgotPasswordMutation } from "../slices/authApiSlice";
import { notifySuccess } from "../../../hooks/NotifyToast";
import { Link, useNavigate } from "react-router-dom";

const ForgotPassword = () => {
  const idRef = useRef();
  const navigate = useNavigate();
  const [email, setEmail] = useState();

  const [resetPasswordCall, isLoading] = useForgotPasswordMutation();

  const handleRedirect = () => {
    const id = setTimeout(() => {
      navigate("/login");
    }, 3000);
    idRef.current = id;
  };

  useEffect(() => {
    const timeoutId = idRef.current;
    return () => {
      clearTimeout(timeoutId);
    };
  }, []);

  const onSubmit = async (values) => {
    setEmail(values.email);
    try {
      const response = await resetPasswordCall({ email: email });
      notifySuccess("Reset Password Email Sent Successfully ");
      handleRedirect();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <article className="h-screen justify-center items-center flex ">
      <div className="container mx-auto flex justify-center items-center">
        <div className="w-full xl:w-1/2 lg:w-11/12 flex shadow">
          <div className="w-full h-auto bg-gray-400 hidden lg:block lg:w-1/2 bg-cover bg-center rounded-l-lg bg-[url('https://media.istockphoto.com/id/477721454/photo/combining-their-creative-powers.jpg?s=612x612&w=0&k=20&c=p5Ig87pc5zlvK6jS0a1bOV9eV0Kc7ZEzMMyFmCJXcTg=')]"></div>

          <div className="w-full lg:w-1/2 bg-white p-5 rounded-lg lg:rounded-l-none">
            <div className="px-8 mb-4 text-center">
              <h3 className="pt-4 mb-2 text-2xl text-violet-700 font-medium">
                Reset Password?
              </h3>
              {/* <p className="mb-4 text-[15px] text-gray-500">
                Please enter your email address and we'll send you a link to
                reset your password.
              </p> */}
            </div>

            <Formik initialValues={{ email: "" }} onSubmit={onSubmit}>
              {(values) => (
                <Form>
                  <CustomText
                    name="email"
                    inputstyle="px-8 py-3 mt-2 border-2 border-gray-300/50 border-3 mb-4 bg-white rounded-none focus:outline-none"
                    label={`E-mail Address`}
                    placeholder="Please enter your email"
                  />
                  <div className="mb-6 text-center">
                    <button
                      className="w-full px-4 py-2 mt-1 font-bold text-white bg-indigo-800  hover:bg-indigo-700 focus:outline-none "
                      type="button"
                      disabled={isLoading}
                    >
                      Reset Password
                    </button>
                  </div>
                </Form>
              )}
            </Formik>

            <hr className="mb-6 border-t" />
            <div className="text-center">
              <Link className="inline-block text-sm text-indigo-500 align-baseline hover:text-blue-800">
                Create an Account!
              </Link>
            </div>
            <div className="text-center">
              <Link
                to="/password-reset"
                className="inline-block text-sm text-indigo-500 align-baseline hover:text-blue-800"
              >
                Already have an account? Login!
              </Link>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
};

export default ForgotPassword;
