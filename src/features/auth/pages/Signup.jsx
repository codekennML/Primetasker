import { Form, Formik } from "formik";
import { useNavigate } from "react-router-dom";
import CustomText from "../../../utils/CustomFieldComp/CustomText";
import CustomCheckbox from "../../../utils/CustomFieldComp/CustomCheckbox";
import { SignupSchema } from "../schemas/SignUpSchema";
import toast, { Toaster } from "react-hot-toast";
import { useEffect, useRef, useState } from "react";
import { useDispatchSignupMutation } from "../slices/authApiSlice";
import { FcGoogle } from "react-icons/fc";
import { AiOutlineEye } from "react-icons/ai";
// import { notify, notifyLoad, notifyErr } from "../../hooks/NotifyToast";

const Signup = () => {
  const idRef = useRef();

  const [signupStatus, setSignupStatus] = useState(false);
  const navigate = useNavigate();

  const [dispatchSignup] = useDispatchSignupMutation();

  //------------------------------------------------------------------------------
  //Block of code to handle redirect and cleanup after setTimeout is complete
  const handleRedirect = () => {
    const id = setTimeout(() => {
      navigate("/login");
    }, 4000);
    idRef.current = id;
  };

  useEffect(() => {
    const timeoutId = idRef.current;
    return () => {
      clearTimeout(timeoutId);
    };
  }, []);

  //----------------------------------------------------------------------------//
  //Submitting the form to the signup route @ backend Server
  const onSubmit = async (values, actions) => {
    try {
      const response = await dispatchSignup(values).unwrap();
      if (response?.status === 201) {
        notify(`Account Created Successfully`);

        notifyLoad(`Redirecting to Login Page ...`);
      }

      handleRedirect();
    } catch (err) {
      if (err.status === 400) {
        notifyErr(`Invalid User Details. Please check the fields`);
      } else if (err.status === 409) {
        notifyErr(`E-mail address already Exists`);
      } else {
        notifyErr(`${err.data?.message}`);
      }
    }

    // Whatever you want
    // actions.resetForm()
  };

  //---------------------------------------------------------//
  //All Notifications based on error Types
  // @notify - success , @notifyErr - Error messages, @notifyLoad - Loading State

  const notify = (msg) =>
    toast.success(msg, {
      position: " bottom-right",
      className: "text-xs bg-purple-100",
    });

  const notifyErr = (msg) =>
    toast.error(msg, {
      position: "bottom-right",
      duration: 4000,
    });
  const notifyLoad = (msg) =>
    toast.loading(msg, {
      position: "bottom-right",
      duration: 5000,
      className: "text-xs bg-purple",
    });

  //-------------------------------------------------------------------------//

  return (
    <section className="flex h-screen justify-center items-center ">
      <div className=" max-w-lg  w-full px-6 pt-4 pb-8 rounded-lg ">
        <div>
          <div className="text-3xl font-semibold space-x-3 text-gray-700 flex justify-center items-center mt-3 mb-6">
            <img
              src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
              className=" h-10 w-auto"
              alt=""
            />
            <h2 className="text-blue-700"> Create Account</h2>
          </div>
          <Toaster />
        </div>
        <div>
          <Toaster className="relative" />
        </div>

        <div>
          <Formik
            initialValues={{
              firstname: "",
              lastname: "",
              email: "",
              username: "",
              phone: "",
              password: "",
              confirmPass: "",
              acceptedTos: false,
            }}
            validationSchema={SignupSchema}
            onSubmit={onSubmit}
          >
            {(values, actions) => (
              <Form>
                <div className="grid grid-cols-1 gap-x-4 w-full">
                  <CustomText
                    label="E-mail Address"
                    labelstyle={`text-[15px]  text-gray-600 py-3 text-violet-700`}
                    name="email"
                    type="text"
                    placeholder="Enter your email address"
                    inputstyle="py-3 my-2.5 placeholder:text-violet-700 border-2 border-violet-200/90 placeholder:text-[15px] focus:outline-violet-500 text-base text-gray-400 bg-white indent-2"
                  />

                  <CustomText
                    label="Password"
                    labelstyle={`text-[15px]  text-gray-600 py-2 text-violet-700`}
                    name="password"
                    type="password"
                    placeholder="Password (8+ characters)"
                    inputstyle="py-3 my-2.5 indent-2 placeholder:text-violet-700 border-2 border-violet-200/90 placeholder:text-[15px] focus:outline-violet-500 text-base"
                    imgAfter={<AiOutlineEye />}
                  />

                  <CustomText
                    label="Confirm Password"
                    labelstyle={`text-[15px]  text-gray-600 py-2 text-violet-700`}
                    name="confirmPass"
                    type="password"
                    placeholder="Password (8+ characters)"
                    inputstyle="py-3 my-2.5 indent-2 placeholder:text-violet-700 border-2 border-violet-200/90 placeholder:text-[15px] focus:outline-violet-500 text-base"
                    imgAfter={<AiOutlineEye />}
                  />
                </div>
                <CustomCheckbox
                  label={`I agree to abide by Heristays Privacy Policy and Terms of Use`}
                  type="checkbox"
                  checked={values.acceptedTos}
                  name="acceptedTos"
                  labelstyle={`text-[13px] text-gray-600  `}
                  className="pt-1  accent-violet-700 w-4 h-4 text-sm"
                />

                <br />

                <button
                  className="bg-violet-800 mt-2 rounded w-full text-white px-5 py-4  font-medium text-lg"
                  type="submit"
                >
                  Create Account
                </button>
              </Form>
            )}
          </Formik>
        </div>

        <div className=" mt-3 text-center">
          <div class="flex items-center my-1 before:flex-1 before:border-t-2 before:border-gray-100 before:mt-0.5 after:flex-1 after:border-t-2 after:border-gray-100 after:mt-0.5">
            <p class="text-center font-semibold text-gray-400 mx-4 mb-0">or</p>
          </div>
          <div>
            <a
              href="http://localhost:3500/auth/google"
              className="bg-white px-12 mt-3 inline-block border-2 border-violet-300/90 w-full text-lg  border-gray-300 text-gray-500 font-medium  py-3 rounded "
            >
              <p className="flex -items-center">
                <span className="text-red-500 self-start text-lg ">
                  <FcGoogle className="w-6 h-6" />
                </span>
                <span className="flex-1 justify-center">
                  Continue with Google
                </span>
              </p>
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

export default Signup;
