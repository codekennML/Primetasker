import { Formik, Form } from "formik";
import React from "react";
import useAuth from "../../../hooks/useAuth";
import CustomTextarea from "../../../utils/CustomFieldComp/CustomTextarea";
import CustomSelect from "../../../utils/CustomFieldComp/CustomSelect";
import { useCreateFlagMutation } from "../slices/flagApiSlice";
import { notifyErr, notifySuccess } from "../../../hooks/NotifyToast";

const flags = [
  {
    id: 1,
    name: "Spam",
    value: "spam",
  },
  {
    id: 2,
    name: "Discrimination",
    value: "discriminate",
  },
  {
    id: 3,
    name: "Rude and Offensive",
    value: "offensive",
  },
  {
    id: 4,
    name: "Hate Speech",
    value: "hate",
  },
  {
    id: 5,
    name: "Pornographic Content",
    value: "porn",
  },
  {
    id: 6,
    name: "Breach of Primetasker guides",
    value: "breach",
  },
];

const NewFlag = ({ flagDetails }) => {
  const { id: userId } = useAuth();
  const { type, flagId } = flagDetails;

  const [createNewFlag] = useCreateFlagMutation();

  const createFlag = async (values) => {
    let modifiedFlag = values;
    console.log(modifiedFlag);
    try {
      if (userId) {
        Object.assign(modifiedFlag, {
          type: type,
          [type]: flagId,
          createdBy: userId,
        });
      }

      const createdFlag = await createNewFlag(modifiedFlag).unwrap();
      if (createdFlag) {
        notifySuccess(`${type} has been reported. We are looking into it `);
      }
    } catch (err) {
      notifyErr(`Failed to report ${type} - ${err}`);
    }
  };

  return (
    <article className="bg-white  mx-12 my-12 max-w-screen-lg w-[500px] ">
      <Formik
        initialValues={{ violation: "", reason: "" }}
        onSubmit={(values, { resetForm }) => {
          createFlag(values);
          resetForm();
        }}
      >
        {({ values }) => {
          return (
            <Form className="">
              <CustomSelect
                name="violation"
                selectArray={flags}
                value={values.violation}
                style={`py-4 text-[16px] bg-gray-50 border border-gray-400`}
                width={`w-full`}
              />
              <div className="">
                <CustomTextarea
                  name="reason"
                  placeholder={`Tell us more `}
                  inputStyle={`my-4 py-6 p-2 w-full bg-gray-200 h-32 resize-none focus:outline-violet-500  placeholder:text-[15px] placeholder:text-gray-500 text-gray-600 `}
                  value={values.reason}
                />
              </div>

              <div className="py-6">
                <button
                  type="submit"
                  className="bg-purple-800 text-white w-full py-4 rounded-full text-[1.1rem] font-medium"
                >
                  Send Report
                </button>
              </div>
            </Form>
          );
        }}
      </Formik>
    </article>
  );
};

export default NewFlag;
