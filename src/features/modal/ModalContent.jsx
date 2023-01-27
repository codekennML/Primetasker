import { Formik, Form } from "formik";
import CustomText from "../../utils/CustomFieldComp/CustomText";
import CustomSelect from "../../utils/CustomFieldComp/CustomSelect";
import { useDispatch } from "react-redux";
import { hideModal } from "./modalSlice";
import { useDispatchSignupMutation } from "../auth/slices/authApiSlice";
import { FaTimes } from "react-icons/fa";
import useAuth from "../../hooks/useAuth";
import { useEffect, useState } from "react";
import { notifyErr } from "../../hooks/NotifyToast";

const ModalContent = ({ modalTitle }) => {
  const { isAdmin, isManager } = useAuth();

  const canAddUser = isAdmin || isManager;

  const [userDetails, setUserDetails] = useState();

  const dispatch = useDispatch();
  const options = [
    {
      name: "Admin",
      value: "Admin",
    },
    {
      name: "Tasker",
      value: "Tasker",
    },
    {
      name: "Manager",
      value: "Manager",
    },
    {
      name: "Guest",
      value: "Guest",
    },
    {
      name: "Customer",
      value: "Customer",
    },
  ];

  const [dispatchSignup] = useDispatchSignupMutation();

  const onSubmit = async (values) => {
    try {
      const res = await dispatchSignup(values).unwrap();
      console.log(res);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="w-[400px] bg-white rounded-lg px-6 py-6">
      {/* <!-- Modal body --> */}
      <Formik
        initialValues={{
          email: "",
          password: "",
          role: "",
          canAddUser: `${canAddUser}`,
        }}
        onSubmit={onSubmit}
      >
        {(values) => (
          <Form autoComplete="off" className="py-2">
            <CustomSelect
              name="role"
              label="Role"
              selectArray={options}
              selectstyle={`w-full border-gray-400 border text-gray-700 py-1`}
              value={values.role}
            />
            <div className="grid grid-cols-1 gap-x-2 mt-1 ">
              <CustomText
                label="E-mail Address"
                name="email"
                autocomplete="off"
                labelstyle={`text-gray-500 text-sm`}
                value={values.name}
                inputstyle={`py-2.5 w-full rounded`}
              />
              <CustomText
                label="Password"
                name="password"
                autocomplete="off"
                type="password"
                labelstyle={`text-gray-500`}
                width={`w-[60px]`}
                inputstyle={`py-2.5 w-full rounded`}
              />
            </div>

            <div className="mt-8 flex justify-end space-x-3 ">
              <button
                type="submit"
                className="px-12 py-2.5 bg-purple-600 text-white rounded-lg"
              >
                Create User
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default ModalContent;
