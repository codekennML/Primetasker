import * as yup from "yup";

const maxSize = 5 * 1024 * 1024; //5MB
const allowedFileTypes = [
  "image/jpeg",
  "image/png",
  "image/gif",
  "image/jpg",
  "image/jfif",
];

const numberConstraint = /^[0-9]*/;

const fields = {
  title: "",
  budget: "",
  date: { before: "", on: "" },
  category: "",
  taskType: "",
  location: "",
  details: "",
  files: [],
  budget: "",
};

const options = [
  "Pedicure & Manicure",
  "Facials",
  "Massage",
  "Bead Making",
  "Graphic Design",
  "Data Analysis",
  "Content Creation",
  "Bricklaying",
  "Homework",
  "",
];

export const FirstStepValidator = yup.object().shape({
  title: yup
    .string()
    .min(10, "Must be at least 12 characters")
    .required("This field is required"),
  date: yup.array(
    yup.object().shape({
      endDate: yup
        .date()
        .min(yup.ref("startDate"), "Before date is not valid")
        .required("Please specify your task 'on or before' date"),
      startDate: yup
        .date()
        .required("Please specify your task 'on or before' date"),
    })
  ),

  taskTime: yup
    .string()
    .required("This field is required")
    .oneOf(["Before 9am", "10am-2pm", "2pm-6pm", "After 6pm"]),
});

export const SecondStepValidator = yup.object().shape({
  category: yup
    .string()
    .required("This field is required")
    .oneOf([...options], "Please select a valid category"),

  taskType: yup
    .string()
    .max(15)
    .required("This field is required")
    .oneOf(["Remote", "Physical", "Hybrid"], "Please enter a valid task type"),

  location: yup.object().when("taskType", {
    is: "Physical",
    then: yup.object().shape({
      place: yup.string().required(),
      lng: yup.number().required(),
      lat: yup.number().required(),
    }),
  }),
});

export const ThirdStepValidator = yup.object().shape({
  details: yup
    .string()
    .min(20, "Must be at least 20 Characters")
    .required("This field is required"),
  files: yup.array(
    yup.object().shape({
      file: yup.string().nullable(true),
      preview: yup.string().nullable(true),
      url: yup.string().nullable(true),
    })
  ),
  // .of(
  // yup
  //   .mixed()
  //   .test("fileSize", "File must be less than 5MB", (value) => {
  //     return value && value.size <= maxSize;
  //   })
  //   .test("fileType", "File is not an image", (value) => {
  //     return value && allowedFileTypes.includes(value.type);
  //   })
  // ),
});

export const LastStepValidator = yup.object().shape({
  budget: yup
    .number()
    .min(5000, "Budget cannot be less than 5000")
    .max(1000000, "Budget cannot be more  than 1000,000")
    .required("This field is required"),
});
