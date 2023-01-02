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
        <div className="flex flex-row justify-between mb-4 border-b text-gray-600 my-4 pb-4 pt-2 ">
          <div className="w-[300px] pr-3 ">
            <h2 className="text-[16px] font-medium">Personal Info</h2>
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
                        name="firstname"
                        type="text"
                        placeholder="Enter your first name"
                        value={values?.values?.firstname}
                      />
                      <CustomText
                        label="Last Name"
                        name="lastname"
                        type="text"
                        placeholder="Enter your Surname"
                        value={values.values.lastname}
                      />
                      {/* {console.log(values.values.email)} */}
                      <CustomText
                        label="E-mail address"
                        name="email"
                        type="email"
                        value={values?.values?.email}
                        disabled
                      />

                      <CustomText
                        label="Phone Number"
                        name="phone"
                        type="text"
                        placeholder="0810 234 567"
                        value={values?.values?.phone}
                      />

                      <CustomText
                        label="Date of Birth"
                        name="birthDate"
                        type="date"
                        placeholder="Date of birth"
                        value={values?.values?.birthDate}
                        disabled
                      />
                      <CustomText
                        label="Home Address"
                        name="homeaddress"
                        type="text"
                        placeholder="Home Address"
                        value={values?.values?.homeaddress}
                      />
                      <CustomText
                        label="State of Origin"
                        name="stateOfOrigin"
                        type="text"
                        placeholder="State of Origin"
                        value={values?.values?.stateOfOrigin}
                      />

                      <CustomFileUpload
                        label=""
                        name="avatar"
                        // placeholder="Choose File"
                        float={`absolute`}
                      />
                      <div className="w-full">
                        <div className=" py-2 text-xs  items-center rounded-lg  w-full ">
                          <CustomSelect label="Gender" name="gender">
                            <option value="">Select Gender</option>
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                            {/* <option value="divorced">Divorced</option> */}
                          </CustomSelect>
                        </div>
                      </div>
                      <div className="w-full">
                        <div className="  py-2   items-center rounded-lg  w-full ">
                          <CustomSelect
                            label="Marital Status"
                            name="maritalstatus"
                            value={values?.values?.maritalstatus}
                          >
                            <option value="">Select Marital Status</option>
                            <option value="Single">Single</option>
                            <option value="Married">Married</option>
                            <option value="Divorced">Divorced</option>
                          </CustomSelect>
                        </div>
                      </div>
                    </div>
                    <button
                      type="submit"
                      className="bg-purple-700 mt-4 px-6 py-2 text-white font-medium rounded-lg float-right"
                    >
                      Update Details
                    </button>
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
