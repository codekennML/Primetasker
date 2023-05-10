import { Form, Formik } from "formik";
import CustomText from "../../../utils/CustomFieldComp/CustomText";
import CustomCheckbox from "../../../utils/CustomFieldComp/CustomCheckbox";
import { loginSchema } from "../schemas/LoginFormSchema";
import { useDispatchLoginMutation } from "../slices/authApiSlice";
import { useDispatchGoogleSSOMutation } from "../slices/authApiSlice";
import { setCredentials } from "../slices/authSlice";
import { useDispatch } from "react-redux";
import usePersist from "../../../hooks/PersistLogin";
import { Link, redirect, useLocation, useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import { useEffect, useRef, useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { AiOutlineEye } from "react-icons/ai";
import useAuth from "../../../hooks/useAuth";
import Nav from "../../../components/Navbar";

const Login = () => {
  const idRef = useRef;

  const navigate = useNavigate();

  const location = useLocation();
  console.log(location);
  const redirectUri = location?.state?.redirectUri;
  const data = location?.state?.data;

  const handleRedirect = () => {
    navigate(redirectUri ? redirectUri : `/dashboard`, {
      state: { from: location, data: data },
      replace: true,
    });
  };

  useEffect(() => {
    const timeoutId = idRef.current;
    return () => {
      clearTimeout(timeoutId);
    };
  }, []);

  const [persist, setPersist] = usePersist();
  const [dispatchLogin, { isLoading, isSuccess, isError, error }] =
    useDispatchLoginMutation();

  const [dispatchGoogleSSO] = useDispatchGoogleSSOMutation();

  const dispatch = useDispatch();

  const onSubmit = async (values, actions) => {
    try {
      const { token, status } = await dispatchLogin(values).unwrap();

      dispatch(setCredentials({ token }));
      // Reset the Form
      actions.resetForm();
      // Toastify reaction
      if (status === 200) notify(`Logging in`);

      handleRedirect();
    } catch (err) {
      if (!err.status) {
        console.log(err);
        notifyErr("No Server Response");
      } else if (err.status === 401) {
        notifyErr("Invalid Username or Password");
      } else {
        notifyErr(err.data?.message);
      }
    }
  };

  const notify = (msg) =>
    toast.success(msg, {
      position: "bottom-right",
      duration: 3000,
      className: "bg-gray-50 text-[12px]",
    });
  const notifyErr = (msg) =>
    toast.error(msg, {
      position: "bottom-right",
      duration: 3000,
    });

  return (
    <section>
      <section className="flex  justify-center items-center relative">
        <div className="max-w-md lg:max-w-md w-full px-3  h-full lg:px-12 pt-4 pb-2  border bg-white">
          <div>
            <div className="flex flex-wrap items-center justify-center mb-6">
              <div className="w-auto ">
                <a
                  href="#"
                  className="text-gray-100 text-[35px] font-bold flex items-center space-x-2 text-center"
                >
                  <img
                    src="https://flowbite.com/images/logo.svg"
                    alt=""
                    className="transform rotate-[90deg]"
                  />
                  <p className="text-gray-800/80 font-bold text-[27px] ">
                    Welcome !{" "}
                  </p>
                </a>
              </div>
            </div>
            <Toaster />
          </div>
          <div>
            <Formik
              initialValues={{ email: "", password: "" }}
              validationSchema={loginSchema}
              onSubmit={onSubmit}
            >
              {(values, actions) => (
                <Form>
                  <CustomText
                    // label="E-mail Address"
                    labelstyle={`font-bold lg:font-normal lg:text-[15px]  text-gray-600 py-3 `}
                    name="email"
                    type="text"
                    placeholder="Email address"
                    inputstyle="text-[14px] py-3  my-2.5  bg-brand-secondary placeholder:text-[12px] lg:placeholder:text-[15px] placeholder:text-gray-600 focus:outline-brand-light lg:text-base text-gray-600 bg-white indent-2 w-full rounded"
                  />

                  <CustomText
                    // label="Password"
                    labelstyle={`font-bold lg:font-normal  lg:text-[15px] lg:text-base  text-gray-600 py-3 `}
                    name="password"
                    type="password"
                    placeholder="Password (8+ characters)"
                    inputstyle="text-[14px] py-3 my-2.5 indent-2 placeholder:text-gray-500  bg-brand-secondary   placeholder:text-[12px] lg:placeholder:text-[15px] focus:outline-brand-lightlg:text-base w-full rounded"
                    imgAfter={<AiOutlineEye />}
                  />

                  <div className="flex flex-col lg:flex-row items-start lg:items-center mt-1 lg:mt-3 w-full">
                    <CustomCheckbox
                      labelstyle={`text-[12px] lg:text-[13px] text-gray-600 `}
                      type="checkbox"
                      checked={persist}
                      onChange={(e) => {
                        setPersist((prev) => !prev);
                      }}
                      name="rememberUser"
                      label={`Remember Me`}
                      className=" mt-0 accent-brand-light w-3 h-3 lg:w-4 lg:h-4 "
                    />

                    <div className="flex-1 ">
                      <Link
                        className="hidden lg:block text-brand-text text-[12px] text-primary font-medium cursor-pointer float-right "
                        to="/forgot-password"
                      >
                        Forgot Password?
                      </Link>
                    </div>
                  </div>

                  <button
                    className="bg-brand-light/90 hover:bg-brand-light mt-12 rounded  text-white text-sm text-[1rem] lg:text-[1rem] mb-4 px-8 py-2.5 lg:py-3 w-full  font-semibold "
                    type="submit"
                  >
                    Login
                  </button>
                </Form>
              )}
            </Formik>
          </div>

          <div className="text-gray-500 text-[12px] lg:text-[13px] font-medium text-center mt-3 ">
            <Link to="/signup">
              Don't have an account?{" "}
              <span className="text-brand-text"> Sign up </span>
            </Link>
          </div>

          <div className="my-2 text-center">
            <div className="flex items-center my-1 before:flex-1 before:border-t-2 before:border-gray-200 before:mt-0.5 after:flex-1 after:border-t-2 after:border-gray-200 after:mt-0.5">
              <p className="text-center font-semibold text-gray-300 mx-4 mb-0 text-[14px] lg:text-base">
                or
              </p>
            </div>
            <div>
              <a
                href="http://localhost:3500/auth/google"
                className="bg-white px-6 lg:px-12 mt-4 lg:mt-5 inline-block border-2 w-full text-[12px] lg:text-lg  border-gray-300/90 text-gray-500 font-medium  py-3 rounded "
              >
                <p className="flex items-center">
                  <span className="text-red-500 self-start text-lg ">
                    <FcGoogle className="w-4 h-4  lg:w-6 lg:h-6" />
                  </span>
                  <span className="flex-1 justify-center text-[12px] lg:text-base">
                    Continue with Google
                  </span>
                </p>
              </a>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default Login;
