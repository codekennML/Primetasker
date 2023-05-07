import { Form, Formik } from "formik";
import CustomText from "../../../../../utils/CustomFieldComp/CustomText";
import { PersonalInfoSchema } from "../../../../../features/schemas/personalInfoSchema";
import CustomFileUpload from "../../../../../utils/CustomFieldComp/CustomFileUpload";
import useAuth from "../../../../../hooks/useAuth";
import CustomSelect from "../../../../../utils/CustomFieldComp/CustomSelect";
import {
  useGetUserByIdQuery,
  useUpdateUserMutation,
} from "../../../../../features/users/slices/UserApiSlice";

import { format, parseISO } from "date-fns";

const PersonalInfo = () => {
  const { roles, id } = useAuth();

  // const [user, setUser] = useState({});

  const { data, isLoading, isSuccess, isError } = useGetUserByIdQuery(id);

  const [updateUser] = useUpdateUserMutation();

  const onSubmit = async (values) => {
    // console.table(values);
    values.id = id;
    values.roles = roles;
    try {
      const updateStatus = await updateUser(values).unwrap();
      console.log(updateStatus);
    } catch (err) {
      console.log(err);
    }
  };

  let content;
  let user;

  if (isLoading) content = <p>Loading...</p>;
  if (isError) content = <p>Whoops! An Error has occured</p>;

  if (isSuccess) {
    console.log(data);
    const { ids, entities } = data;

    user = entities[id];
    let birthDate;
    if (user.birthDate) {
      birthDate = parseISO(user?.birthDate);
      birthDate = format(birthDate, "yyyy-MM-dd");
    } else {
      birthDate = format(new Date(), "yyyy-MM-dd");
    }

    content = (
      <article className=" relative">
        <div className="flex flex-row justify-between mb-4 border-b text-gray-600  pb-4  ">
          <div className="w-[300px] pr-3 ">
            <h2 className="text-[16px] font-semibold text-brand-text mb-2">
              Personal Information
            </h2>
            <p className="text-[12px] font-medium mb-3">
              Edit and verify your personal information and details
            </p>
          </div>
          <div className="text-[14px] flex-1 px-4 ">
            <div className="  ">
              <Formik
                initialValues={{
                  avatar: user.avatar,
                  firstname: user.firstname,
                  homeaddress: user.homeaddress,
                  lastname: user.lastname,
                  birthDate: birthDate,
                  stateOfOrigin: user.stateOfOrigin,
                  gender: user.gender,
                  maritalstatus: user.maritalstatus,
                  phone: user.phone,
                  email: user.email,
                }}
                validationSchema={PersonalInfoSchema}
                onSubmit={onSubmit}
              >
                {(values) => (
                  <Form>
                    <div className="grid grid-cols-2 gap-x-6 w-full ">
                      <CustomText
                        label="First Name"
                        labelstyle={`text-brand-text font-semibold`}
                        name="firstname"
                        type="text"
                        inputstyle="my-2 py-1.5 lg:py-2.5 p-2 w-full bg-slate-100   indent-4 placeholder:text-[.85rem]  placeholder:text-gray-600 text-brand-text font-medium   rounded-md "
                        placeholder="Enter your first name"
                        value={values?.values?.firstname}
                      />
                      <CustomText
                        label="Last Name"
                        labelstyle={`text-brand-text font-semibold`}
                        name="lastname"
                        type="text"
                        inputstyle="my-2 py-1.5 lg:py-2.5 p-2 w-full bg-slate-100   indent-4 placeholder:text-[.85rem]  placeholder:text-gray-600 text-brand-text font-medium   rounded-md "
                        placeholder="Enter your surname"
                        value={values.values.lastname}
                      />
                      {/* {console.log(values.values.email)} */}
                      <CustomText
                        label="E-mail address"
                        labelstyle={`text-brand-text font-semibold`}
                        name="email"
                        type="email"
                        inputstyle="my-2 py-1.5 lg:py-2.5 p-2 w-full bg-slate-100   indent-4 placeholder:text-[.85rem]  placeholder:text-gray-600 text-brand-text font-medium   rounded-md "
                        placeholder="Enter your first name"
                        value={values?.values?.email}
                        disabled
                      />

                      <CustomText
                        label="Home Address"
                        labelstyle={`text-brand-text font-semibold`}
                        name="homeaddress"
                        type="text"
                        inputstyle="my-2 py-1.5 lg:py-2.5 p-2 w-full bg-slate-100   indent-4 placeholder:text-[.85rem]  placeholder:text-gray-600 text-brand-text font-medium   rounded-md "
                        placeholder="Home Address"
                        value={values?.values?.homeaddress}
                      />

                      <CustomFileUpload
                        label=""
                        name="avatar"
                        // placeholder="Choose File"
                        float={`absolute`}
                      />
                    </div>
                    {/* <button
                      type="submit"
                      className="bg-purple-700 mt-4 px-6 py-2 text-white font-medium rounded-lg float-right"
                    >
                      Update Details
                    </button> */}
                  </Form>
                )}
              </Formik>
            </div>
          </div>
        </div>
      </article>
    );
  }

  return content;
};

export default PersonalInfo;
