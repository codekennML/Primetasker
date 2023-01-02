import { Formik, Form } from "formik";
import { object, string, array } from "yup";
import MultipleFileUpload from "../../../../../utils/CustomFieldComp/MultipleFileUpload";
// import SingleFileUpload from "./SingleFileUpload";

const Verification = () => {
  return (
    <article className="">
      <div className="flex flex-row justify-between mb-4 border-b text-gray-600 my-4 pb-4 pt-2">
        <div className="w-[300px] pr-3 ">
          <h2 className="text-[16px] font-medium">Verification</h2>
          <p className="text-[12px] font-medium mb-3">
            Upload and attach documentation for your verification
          </p>
          <div>
            <h3 className="text-xs font-bold"> Required Documents </h3>
            <ul className="list-none text-xs space-y-2 mt-1">
              <li>
                Means of identification e.g National ID Card or International
                Passport
              </li>
              <li>Utility Bill e.g PHCN Bill</li>
              <li>Police Clearance Certificate(*)</li>
              <li>Referral Code(*)</li>
              <li>
                Guarantor Details containing Valid ID, Utility Bill and
                Statement of Account
              </li>
            </ul>
          </div>
        </div>
        <div className="text-[14px] flex-1 px-4 min-h-full ">
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
            // onSubmit={onSubmit}
          >
            {({ values, errors }) => (
              <Form>
                <MultipleFileUpload name="files" />
                {/* <button
                  className="bg-purple-600 text-white px-2 py-1"
                  type="submit"
                >
                  Submit
                </button> */}
                {/* <pre>{JSON.stringify({ values, errors }, null, 4)}</pre> */}
              </Form>
            )}
          </Formik>

          {/* <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut iusto, rerum quas dicta sit id nesciunt magnam cum dolores amet nemo ipsa dignissimos ratione dolorum et sed! Unde, sed magni!</p> */}
          {/* ${lists.length > 0 ? "h-[170px]" : "h-[200px]"} */}
        </div>
      </div>
    </article>
  );
};

export default Verification;
