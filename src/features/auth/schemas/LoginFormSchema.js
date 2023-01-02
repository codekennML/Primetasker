import * as yup from "yup";

const passwordConstraint =
  /^(?=.*\d)(?=.*[a-z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,}$/;

export const loginSchema = yup.object().shape({
  email: yup
    .string()
    .email("Please enter a valid e-mail")
    .required("E-mail is required"),

  // age:yup.number('Age must be a number').positive().integer().required('Age is required'),

  password: yup.string().max(255).required("Password is required"),

  // confirmPassword:yup.string().oneOf([yup.ref('password'),null], 'Passwords must match').required('This field is required')
});
