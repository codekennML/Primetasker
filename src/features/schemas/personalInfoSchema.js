import * as yup from "yup";

const passwordConstraint =
  /^(?=.*\d)(?=.*[a-z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,}$/;

export const PersonalInfoSchema = yup.object().shape({
  firstname: yup.string().min(2).required("Please enter your first name"),

  lastname: yup.string().min(2).required("Please enter your last name"),
  stateOfOrigin: yup
    .string()
    .min(3)
    .required("Please input your state of origin"),

  birthDate: yup.date().required("Date of birth is required"),

  homeaddress: yup.string().required("Home Address is required"),

  phone: yup.number().required("Phone Number is required"),

  gender: yup
    .string()
    .oneOf(["male", "female"], "Gender must be male or female")
    .required("Please select your gender"),

  maritalstatus: yup
    .string()
    .oneOf(["Single", "Married", "Divorced"], "Please select marital status")
    .required("Please select marital Status"),
});
