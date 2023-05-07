import { Formik, Form, FieldArray } from "formik";
import React from "react";
import CustomText from "../../../utils/CustomFieldComp/CustomText";
import CustomTextarea from "../../../utils/CustomFieldComp/CustomTextarea";
import AutoCompleteMap from "../../../features/tasks/utils/AutoCompleteMap";
import { FaCamera, FaPencilAlt } from "react-icons/fa";
import DatePicker from "../../../utils/DatePick";
import CustomCheckbox from "../../../utils/CustomFieldComp/CustomCheckbox";

const interestType = [
  {
    id: 1,
    name: "Earn Money",
    value: 1,
  },
  {
    id: 2,
    name: "Post tasks",
    value: 2,
  },
];

const Profile = () => {
  return (
    <>
      <div>
        <h2 className="font-bold text-[1.6rem]">Account</h2>

        <div className="w-full lg:w-[60%]">
          <Formik
            initialValues={{
              firstname: "",
              lastname: "",
              avatar: "",
              bio: "",
              email: "",
              homeaddress: {
                suite: "",
                location: "",
              },
              date: {
                birthDate: "",
              },
              gender: "",
              interestType: [1, 2],
            }}
          >
            {({ values }) => (
              <Form
                className="space-y-4 my-8"
                autoCorrect={false}
                autoComplete={false}
              >
                <div className="flex justify-start items-end">
                  <div className="border-2 w-[120px] h-[120px] rounded-full  relative ">
                    <img
                      src={
                        values.avatar ||
                        "https://images.unsplash.com/photo-1614436163996-25cee5f54290?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fHVzZXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
                      }
                      className=" rounded-full object-cover object-center w-full h-full  "
                    />
                    <button
                      className="
                    flex 
                    justify-center 
                    items-center
                    absolute
                    right-2
                    bottom-0
                    border
                  bg-brand-accent
                   text-white 
                   rounded-full 
                    w-6  h-6 
                    text-center
                    "
                    >
                      <FaCamera size={13} />
                    </button>
                  </div>
                </div>

                <div>
                  <CustomText
                    label="First Name"
                    labelstyle="py-4 text-primary text-[.9rem] "
                    name="firstname"
                    type="text"
                    value={values.firstname}
                    inputstyle="my-1.5 py-2 lg:py-3.5 p-2 w-full bg-slate-100   indent-4 placeholder:text-[.85rem]  placeholder:text-gray-600 text-brand-text font-medium   rounded-md "
                  />
                </div>
                <div>
                  <CustomText
                    label="Last Name"
                    labelstyle="py-4 text-primary text-[.9rem] "
                    name="lastname"
                    type="text"
                    value={values.lastname}
                    inputstyle=" my-1.5 py-2 lg:py-3.5 p-2 w-full bg-slate-100   indent-4 placeholder:text-[.85rem]  placeholder:text-gray-600 text-brand-text font-medium   rounded-md "
                  />
                </div>
                <div>
                  <CustomTextarea
                    label="Bio"
                    labelStyle="pb-3 block"
                    name="bio"
                    type="text"
                    value={values.bio}
                    placeholder={`A brief description of who you are and your services`}
                    inputStyle=" w-full py-2 lg:py-3.5 p-2 w-full bg-slate-100    text-brand-light font-medium   rounded-lg resize-none h-32 placeholder: text-primary"
                  />
                </div>
                <div>
                  <CustomText
                    label="E-mail"
                    labelstyle="py-4 text-primary text-[.9rem] "
                    name="email"
                    type="text"
                    disabled
                    value={values.email}
                    inputstyle=" my-1.5 py-2 lg:py-3.5 p-2 w-full bg-slate-100   indent-4 placeholder:text-[.85rem]  placeholder:text-gray-600 text-brand-text font-medium   rounded-md disabled:bg-slate-200"
                  />
                </div>

                <div>
                  <CustomText
                    label="Apartment/Suite/Block"
                    labelstyle="py-4 text-primary text-[.85rem] "
                    name="homeaddress.suite"
                    type="text"
                    value={values.homeaddress.suite}
                    inputstyle=" my-1.5 py-2 lg:py-3.5 w-full bg-slate-100   indent-4 placeholder:text-[.85rem]  placeholder:text-gray-600 text-brand-text text-primary   rounded-md  "
                  />
                </div>

                <div className="">
                  <h2 className="py-2 text-primary text-[.9rem]">Location</h2>
                  {/* <AutoCompleteMap name="homeaddress.location" /> */}
                </div>

                <div>
                  <p className="text-primary text-[.9rem] ">
                    {`What's your interest on Primetasker`}{" "}
                  </p>
                  <div className="flex flex-row items-center gap-x-4">
                    {" "}
                    <FieldArray name="interestType">
                      {(arrayHelpers) => (
                        <>
                          {interestType.map((type, index) => (
                            <CustomCheckbox
                              key={index}
                              type="checkbox"
                              name={type.name}
                              className="w-5 h-5 my-3 cursor-pointer accent-brand-light"
                              labelstyle={`text-[.85rem] font-medium text-brand-text`}
                              label={type.name}
                              value={type.id}
                              checked={values.interestType.includes(type.id)}
                              onChange={(e) => {
                                if (e.target.checked) {
                                  arrayHelpers.push(type.id);
                                } else {
                                  const idx = values.interestType.indexOf(
                                    type.id
                                  );
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

                <div className="flex flex-col md:flex-row items-center gap-4 my-5">
                  <button className="bg-rose-500 px-4 py-2 text-white text-primary rounded-md ">
                    Deactivate Account
                  </button>
                  <button className="bg-brand-light px-4 py-2 text-white text-primary rounded-md ">
                    Save Profile
                  </button>
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </>
  );
};
export default Profile;
