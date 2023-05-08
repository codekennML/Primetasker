import { useFormikContext } from "formik";
import { useCallback, useRef } from "react";
import { AiOutlineCheckCircle, AiOutlinePlusCircle } from "react-icons/ai";
import ImageUpload from "../../../../components/ImageUpload";
import CustomTextarea from "../../../../utils/CustomFieldComp/CustomTextarea";

export const StepThree = () => {
  const dropzoneRef = useRef(null);

  const openDropzone = useCallback(() => {
    dropzoneRef.current.click();
  }, [dropzoneRef]);

  const context = useFormikContext();
  const { values } = context;

  return (
    <section>
      <p className=" lg:hidden uppercase font-semibold text-green-900/50 text-[.75rem]  ">
        Step 3/4
      </p>
      <h2 className="title-heading">Just a few more details</h2>

      <div>
        <div className="flex items-center space-x-2 ">
          <div>
            <h3 className="task-input-label">Describe your task</h3>
            <p className="text-[.75rem] font-medium ">
              Information on task specifics, tools or equipments the tasker may
              need for this task{" "}
            </p>
          </div>
        </div>

        <CustomTextarea
          name="details"
          labelStyle={`sr-only`}
          value={values.details}
          placeholder={``}
          inputStyle={`my-4 py-6 p-2 w-full bg-slate-100 h-48 resize-none  placeholder:text-[.85rem] placeholder:text-brand-text text-brand-text-deep `}
        />

        <div className="">
          <div className="flex items-center space-x-2  my-6">
            <h3 className="task-input-label">
              Add Images
              <span className="text-[0.7rem]">(Optional)</span>
            </h3>
          </div>

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
                postForm
              />
            </>
          </div>
        </div>
      </div>
    </section>
  );
};
