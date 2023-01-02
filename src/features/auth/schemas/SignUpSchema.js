import * as yup from "yup";

const passwordConstraint =
  /^(?=.*\d)(?=.*[a-z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,}$/;

export const SignupSchema = yup.object().shape({
  email: yup
    .string()
    .email("Please enter a valid e-mail")
    .required("E-mail is required"),

  // phone: yup.number().max(11).required("Phone Number is required"),

  password: yup
    .string()
    .min(8)
    .matches(passwordConstraint, {
      message:
        "Password must be greater than 8 character and contain at least one uppercase, one digit and a special character",
    })
    .required("Password is required"),

  confirmPass: yup
    .string()
    .oneOf([yup.ref("password"), null], "Passwords do not match")
    .required("This field is required"),

  acceptedTos: yup
    .boolean()
    .oneOf([true], "Please acknowlege our terms of service to proceed")
    .required(),

  // profession : yup.string().oneOf(['Developer', 'Architect' , 'Programiz'],'Please enter a profession').required('Select a profession'),
  //   rememberUser : yup.boolean(),

  // age:yup.number('Age must be a number').positive().integer().required('Age is required'),
});
