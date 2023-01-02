import { Form, Formik } from "formik";
import CustomText from "../../../utils/CustomFieldComp/CustomText";
import CustomCheckbox from "../../../utils/CustomFieldComp/CustomCheckbox";
import { loginSchema } from "../schemas/LoginFormSchema";
import { useDispatchLoginMutation } from "../slices/authApiSlice";
import { useDispatchGoogleSSOMutation } from "../slices/authApiSlice";
import { setCredentials } from "../slices/authSlice";
import { useDispatch } from "react-redux";
import usePersist from "../../../hooks/PersistLogin";
import { Link, useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import { useEffect, useRef } from "react";
import { FcGoogle } from "react-icons/fc";
import { AiOutlineEye } from "react-icons/ai";

// import { Link }
const Login = () => {
  // console.log(token);
  // const userRef = useRef;

  const idRef = useRef;

  const handleRedirect = (location) => {
    const id = setTimeout(() => {
      navigate("/dashboard");
    }, 3000);
    idRef.current = id;
  };

  useEffect(() => {
    const timeoutId = idRef.current;
    return () => {
      clearTimeout(timeoutId);
    };
  }, []);

  const navigate = useNavigate();
  const [persist, setPersist] = usePersist();
  const [dispatchLogin, { isLoading, isSuccess, isError, error }] =
    useDispatchLoginMutation();

  const [dispatchGoogleSSO] = useDispatchGoogleSSOMutation();

  const dispatch = useDispatch();

  const onSubmit = async (values, actions) => {
    try {
      const { token, status } = await dispatchLogin(values).unwrap();
      console.log(token);

      dispatch(setCredentials({ token }));
      // Reset the Form
      actions.resetForm();
      // Toastify reaction
      if (status === 200) notify(`Logging in`);

      actions.resetForm();
      handleRedirect();
    } catch (err) {
      if (!err.status) {
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

  const handleGoogleLogin = async () => {
    // try {
    // console.log("lol");
    const token = await dispatch(dispatchGoogleSSO);
    // } catch (err) {
    console.log(token);
    // }
  };

  return (
    <section className="flex h-screen justify-center items-center relative">
      <div className="bg-gradient-to-b from-white to-white max-w-lg w-full px-12 pt-4 pb-2 rounded-lg ">
        <div>
          <div className="text-3xl font-semibold space-x-3 my-3 text-gray-700 flex justify-center items-center ">
            <img
              src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
              className=" h-10 w-auto"
              alt=""
            />
            <h2 className="text-violet-500"> Login</h2>
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
                  label="E-mail Address"
                  labelstyle={`text-[15px]  text-gray-600 py-3 text-violet-700`}
                  name="email"
                  type="text"
                  placeholder="Enter your email address"
                  inputstyle="py-3 my-2.5  border-2 border-violet-200/90 placeholder:text-[15px] placeholder:text-violet-700 focus:outline-violet-500 text-base text-gray-400 bg-white indent-2"
                />

                <CustomText
                  label="Password"
                  labelstyle={`text-[15px]  text-gray-600 py-2 text-violet-700`}
                  name="password"
                  type="password"
                  placeholder="Password (8+ characters)"
                  inputstyle="py-3 my-2.5 indent-2 placeholder:text-violet-700  border-2 border-violet-200/90 placeholder:text-[15px] focus:outline-violet-500 text-base"
                  imgAfter={<AiOutlineEye />}
                />

                <div className="flex flex-row  items-center mt-3 w-full">
                  <CustomCheckbox
                    labelstyle={`text-[13px] text-gray-600 `}
                    type="checkbox"
                    checked={persist}
                    onChange={(e) => {
                      setPersist((prev) => !prev);
                    }}
                    name="rememberUser"
                    label={`Remember Me`}
                    className=" mt-0 accent-violet-700 w-4 h-4"
                  />

                  <div className="flex-1 ">
                    <Link
                      className="text-violet-800 text-[14px] font-medium cursor-pointer float-right"
                      to="/forgot-password"
                    >
                      Forgot Password?
                    </Link>
                  </div>
                </div>

                {/* <br /> */}

                <button
                  className="bg-violet-800 hover:bg-violet-900 mt-6 rounded  text-white text-sm text-[18px] mb-4 px-8 py-4 w-full  font-medium"
                  type="submit"
                >
                  Login
                </button>
              </Form>
            )}
          </Formik>
        </div>

        <div className="my-2 text-center">
          <div class="flex items-center my-1 before:flex-1 before:border-t-2 before:border-gray-100 before:mt-0.5 after:flex-1 after:border-t-2 after:border-gray-100 after:mt-0.5">
            <p class="text-center font-semibold text-gray-300 mx-4 mb-0">or</p>
          </div>
          <div>
            <a
              href="http://localhost:3500/auth/google"
              className="bg-white px-12 mt-5 inline-block border-2 w-full text-lg  border-violet-300/90 text-gray-500 font-medium  py-3 rounded "
            >
              <p className="flex -items-center">
                <span className="text-red-500 self-start text-lg ">
                  <FcGoogle className="w-6 h-6" />
                </span>
                <span className="flex-1 justify-center">
                  Continue with Google
                </span>
              </p>
              {/* <p className="flex items-center "> */}

              {/* </p> */}
            </a>
          </div>
        </div>

        <div className="pt-6 mb-1.5 ">
          <p className="text-xs text-gray-400 text-center ">
            All Rights Reserved. Heristays Inc.Ltd &copy;{" "}
            {new Date().getFullYear()}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Login;
