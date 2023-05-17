import React from "react";
import ModalHead from "../../../components/ModalHead";
import { FieldArray, Formik, Form } from "formik";
import AutoCompleteCombobox from "../../../utils/CustomComboBox";
import { useSelector } from "react-redux";
import CustomText from "../../../utils/CustomFieldComp/CustomText";
import { allTaskCategories } from "../../../features/categories/slices/categorySlice";
import CustomCheckbox from "../../../utils/CustomFieldComp/CustomCheckbox";

const taskType = [
  {
    id: 1,
    name: "In-person",
    value: 1,
  },
  {
    id: 2,
    name: "Remote",
    value: 2,
  },
];

const AlertCreate = () => {
  const categories = useSelector(allTaskCategories);

  return (
    <div>
      <ModalHead title="Create an Alert" />
      <div>
        <Formik initialValues={{ taskType: [], category: "", task: "" }}>
          {({ values }) => (
            <Form className="px-8 space-y-6 mt-6">
              <div>
                <p className="text-primary my-3">Select the task type </p>
                <div className="flex flex-row items-center gap-x-4">
                  {" "}
                  <FieldArray name="taskType">
                    {(arrayHelpers) => (
                      <>
                        {taskType.map((type, index) => (
                          <CustomCheckbox
                            key={index}
                            type="checkbox"
                            name={type.name}
                            className="w-5 h-5 my-3 cursor-pointer accent-brand-light"
                            labelstyle={`text-[.85rem] font-medium text-brand-text`}
                            label={type.name}
                            value={type.id}
                            checked={values.taskType.includes(type.id)}
                            onChange={(e) => {
                              if (e.target.checked) {
                                arrayHelpers.push(type.id);
                              } else {
                                const idx = values.taskType.indexOf(type.id);
                                arrayHelpers.remove(idx);
                              }
                            }}
                          />
                        ))}
                      </>
                    )}
                  </FieldArray>
                </div>
              </div>
              <div>
                <p className="text-primary mt-3 mb-2">Task Category</p>
                <AutoCompleteCombobox
                  name="category"
                  categories={categories}
                  paddingHeight="py-3 lg:py-3.5"
                />
              </div>
              <div>
                <p className="text-primary mt-3 mb-2">Task keyword</p>
                <CustomText
                  name="task"
                  type="text"
                  value={values.task}
                  placeholder="e.g  Home cleaning"
                  inputstyle=" py-2 lg:py-3.5 p-2 w-full bg-slate-100   indent-4 placeholder:text-[.95rem]  placeholder:text-gray-600 text-brand-text font-medium   rounded-md "
                />
              </div>

              <div>
                <button className="w-full text-primary text-white text-center bg-brand-light py-4 rounded-lg my-6">
                  Create Alert
                </button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default AlertCreate;
