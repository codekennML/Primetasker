import React, { useRef, useCallback } from "react";
import ModalHead from "../../../components/ModalHead";
import AutoCompleteCombobox from "../../../utils/CustomComboBox";
import MemoizedImageForm from "../../../components/ImageForm";
import CustomText from "../../../utils/CustomFieldComp/CustomText";
import { Formik, Form } from "formik";
import ImageUpload from "../../../components/ImageUpload";
import { AiOutlinePlusCircle } from "react-icons/ai";

const SkillModal = () => {
  const dropzoneRef = useRef(null);

  const openDropzone = useCallback(() => {
    dropzoneRef.current.click();
  }, [dropzoneRef]);

  const formats = {
    image: [".png", ".jpg", ".jpeg"],
    pdf: [".pdf"],
  };

  const experience = [
    {
      id: 1,
      name: "Less than 1 year",
      value: 1,
    },
    {
      id: 2,
      name: "Over  1 year",
      value: 2,
    },
    {
      id: 3,
      name: " 2 years",
      value: 3,
    },
    {
      id: 4,
      name: "3 years",
      value: 4,
    },
    {
      id: 5,
      name: "5 years above",
      value: 5,
    },
  ];
  return (
    <>
      <div>
        <ModalHead title="Add  skill " />
      </div>
      <div className="w-[80%] mx-auto">
        <Formik initialValues={{ title: "", experience: "", files: [] }}>
          {({ values }) => (
            <Form className="">
              <article className="space-y-6 py-5 ">
                <div>
                  <h2 className="text-primary">Your skill</h2>
                  <CustomText
                    name="title"
                    type="text"
                    value={values.title}
                    placeholder="e.g  Bachelor Degree"
                    inputstyle=" py-2 lg:py-3.5 p-2 w-full bg-slate-100   indent-4 placeholder:text-[.95rem]  placeholder:text-gray-600 text-brand-text font-medium   rounded-md "
                  />
                </div>
                <div>{/* <MemoizedImageForm /> */}</div>

                <div>
                  <h2 className="text-primary ">Years of Experience </h2>
                  <AutoCompleteCombobox
                    categories={experience}
                    name="experience"
                    paddingHeight="py:3 lg:py-3.5"
                  />
                </div>
                <div>
                  <h3 className="text-primary py-3">Certificate</h3>

                  <div className="flex flex-row space-x-4 items-center max-w-lg overflow-hidden">
                    <button
                      onClick={openDropzone}
                      type="button"
                      className="bg-slate-200 h-24 min-w-[6rem] w-[6rem] rounded-lg flex items-center
              justify-center"
                    >
                      <span>
                        <AiOutlinePlusCircle className="text-[2.5rem] text-brand-light" />{" "}
                      </span>
                    </button>
                    <>
                      <ImageUpload
                        name="files"
                        ref={dropzoneRef}
                        clearValues={false}
                        files={values.files}
                        fileFormats={formats}
                        postForm
                      />
                    </>
                  </div>
                </div>

                <button className="w-full text-primary text-white bg-brand-light mb-4 py-3.5 rounded-lg">
                  Add Skill
                </button>
              </article>
            </Form>
          )}
        </Formik>
      </div>
    </>
  );
};

export default SkillModal;
