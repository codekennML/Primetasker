import * as yup from "yup";

const maxSize = 5 * 1024 * 1024; //5MB
const allowedFileTypes = ["image/jpeg", "image/png", "image/gif", "image/jpg"];

const numberConstraint = /^[0-9]*/;

const fields = {
  title: "",
  budget: "",
  date: { onDate: "", beforeDate: "" },
  category: "",
  taskType: "",
  location: "",
  details: "",
  files: [],
  budget: "",
};

export const FirstStepValidator = yup.object().shape({
  title: yup
    .string()
    .min(12, "Must be at least 12 characters")
    .required("This field is required"),

  date: yup.object().shape({
    onDate: yup.date().nullable(),
    beforeDate: yup.date().when("onDate", {
      is: (value) => !value,
      then: yup.date().required("Task Date is required "),
      otherwise: yup.date(),
    }),
  }),

  taskTime: yup
    .string()
    .required("This field is required")
    .oneOf(["Before 9am", "10am-2pm", "2pm-6pm", "After 6pm"]),
});

export const SecondStepValidator = yup.object().shape({
  categoryId: yup.number().required("This field is required"),
  // .oneOf([...options], "Please select a valid category"),

  taskType: yup
    .string()
    .max(15)
    .required("This field is required")
    .oneOf(["Remote", "Physical"], "Please enter a valid task type"),

  location: yup.object().when("taskType", {
    is: "Physical",
    then: yup.object().shape({
      place: yup.string().required("Please select address"),
      lng: yup.number().required("Please select address"),
      lat: yup.number().required("Please select address"),
    }),
  }),
});

export const ThirdStepValidator = yup.object().shape({
  details: yup
    .string()
    .strict(true)
    .required("This field is required")
    .min(20, "Must be at least 20 Characters"),

  files: yup.array(
    yup.object().shape({
      file: yup.string().nullable(true),
      preview: yup.string().nullable(true),
      url: yup.string().nullable(true),
    })
  ),
});

export const LastStepValidator = yup.object().shape({
  budget: yup
    .number()
    .required("This field is required")
    .min(5000, "Budget cannot be less than 5000")
    .max(1000000, "Budget cannot be more  than 1,000,000"),
});
