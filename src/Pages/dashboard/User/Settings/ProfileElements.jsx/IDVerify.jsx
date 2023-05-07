import { Formik, Form } from "formik";
import { object, string, array } from "yup";
import ImageUpload from "../../../../../components/ImageUpload";
import { useRef, useCallback } from "react";
import { AiOutlinePlusCircle } from "react-icons/ai";

const Verification = ({
  title,
  subtitle,
  buttonStyle,
  showIcon = true,
  showText = false,
  text,
  name,
}) => {
  const dropzoneRef = useRef(null);

  const openDropzone = useCallback(() => {
    dropzoneRef.current.click();
  }, [dropzoneRef]);

  return (
    <article className="">
      <div className="flex flex-col justify-between mb-4 text-gray-600 my-4 pb-4 pt-2">
        <div className="max-w-lg ">
          <h2 className="text-[16px] font-semibold text-brand-text mb-2">
            {title}
          </h2>

          <p className="text-[12px] font-medium mb-3">{subtitle}</p>
        </div>

        <div className="text-[14px]  min-h-full ">
          <Formik
            initialValues={{ files: [] }}
            onSubmit={(values) => {
              console.log("values", values);
              return new Promise((res) => setTimeout(res, 2000));
            }}
            validationSchema={object({
              files: array(
                object({
                  url: string().required(),
                })
              ),
            })}
          >
            {({ values, errors }) => (
              <Form className="">
                {/* <h3 className=" py-3 text-gray-600 font-bold text-[.85rem]">
                  {name}
                </h3> */}
                <div className="mt-3">
                  <div className=" flex flex-row space-x-4 items-center max-w-lg overflow-hidden">
                    <button
                      onClick={openDropzone}
                      type="button"
                      className={`bg-slate-200 h-24 min-w-[6rem] w-[6rem] rounded-lg flex items-center
              justify-center ${buttonStyle} `}
                    >
                      {showIcon && (
                        <span>
                          <AiOutlinePlusCircle className="text-[2.5rem] text-brand-light" />{" "}
                        </span>
                      )}

                      {showText && (
                        <span className="text-brand-text font-semibold">
                          {text}
                        </span>
                      )}
                    </button>
                    <>
                      <ImageUpload
                        name="files"
                        ref={dropzoneRef}
                        clearValues={false}
                        files={values.files}
                        postForm
                      />
                    </>
                  </div>
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </article>
  );
};

export default Verification;
