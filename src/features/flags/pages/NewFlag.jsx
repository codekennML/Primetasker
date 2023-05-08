import { Formik, Form } from "formik";
import React from "react";
import useAuth from "../../../hooks/useAuth";
import CustomTextarea from "../../../utils/CustomFieldComp/CustomTextarea";
import CustomSelect from "../../../utils/CustomFieldComp/CustomSelect";
import { useCreateFlagMutation } from "../slices/flagApiSlice";
import { notifyErr, notifySuccess } from "../../../hooks/NotifyToast";
import ModalHead from "../../../components/ModalHead";

const flags = [
  {
    id: 1,
    name: "Spam",
    value: 1,
  },
  {
    id: 2,
    name: "Discrimination",
    value: 2,
  },
  {
    id: 3,
    name: "Rude and Offensive",
    value: 3,
  },
  {
    id: 4,
    name: "Hate Speech",
    value: 4,
  },
  {
    id: 5,
    name: "Pornographic Content",
    value: 5,
  },
  {
    id: 6,
    name: "Breach of Primetasker guides",
    value: 6,
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

      // console.log(modifiedFlag);

      const createdFlag = await createNewFlag(modifiedFlag).unwrap();
      if (createdFlag?.rescode === 201) {
        notifySuccess(`${type} has been reported. We are looking into it `);
      } else throw new Error(`${createdFlag.message}`);
    } catch (err) {
      notifyErr(`Failed to report ${type} - ${err}`);
    }
  };

  return (
    <article className="bg-white rounded-lg  max-w-screen-lg w-full ">
      <ModalHead title="Report Infringement" />
      <Formik
        initialValues={{ violation: "", reason: "" }}
        onSubmit={(values, { resetForm }) => {
          createFlag(values);
          resetForm();
        }}
      >
        {({ values }) => {
          return (
            <Form className="px-7 space-y-6">
              <div className="mt-4">
                <h3 className="text-[.85rem] font-medium mb-3">
                  Please select violation
                </h3>
                <CustomSelect
                  name="violation"
                  selectArray={flags}
                  value={values.violation}
                  style={`py-4 mt-6 border text-[16px] bg-gray-50 border border-gray-400`}
                  width={`w-full`}
                  selectstyle={`py-2 bg-slate-100`}
                />
              </div>
              <div className="">
                <h3 className="text-[.85rem] font-medium mb-3">
                  Infringement Details
                </h3>
                <CustomTextarea
                  name="reason"
                  placeholder={`Please state the details of your concern `}
                  inputStyle={`my-4 py-6 p-2 w-full bg-slate-100 h-32 resize-none focus:outline-green-500  placeholder:text-[.85rem] placeholder:text-gray-500 text-gray-600 outline-none border-0 `}
                  value={values.reason}
                />
              </div>

              <div className="py-6">
                <button
                  disabled={!values.reason || !values.violation}
                  type="submit"
                  className={` transition ease duration-300 border border-brand-light w-full py-3 rounded text-[.9rem] font-medium  ${
                    values.reason && values.violation
                      ? "hover:bg-brand-light hover:text-white"
                      : ""
                  }`}
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
