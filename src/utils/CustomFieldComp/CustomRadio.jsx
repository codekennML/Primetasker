import { useField } from "formik";

const CustomRadio = ({ label, style, ...props }) => {
  const [field, meta, helpers] = useField(props);
  const errorStyle = " ";
  const validStyle = "text-red-400 ";
  const invalid = meta.touched && meta.error;
  // console.log(field, meta);
  return (
    <>
      <div className={`${style ? style : ""} flex items-center space-x-1`}>
        <input {...field} {...props} />
        <label htmlFor={props.name}>{label ? label : ""}</label>
      </div>

      {/* className =
       */}
      {/* // {invalid ? errorStyle : validStyle } */}
      {/* {invalid && <div className="text-red-600" > {meta.error}</div>} */}
    </>

    //   <div role="group" aria-labelledby="my-radio-group">
    //   <label>
    //     <Field type="radio" name="picked" value="One" />
    //     One
    //   </label>
    //   <label>
    //     <Field type="radio" name="picked" value="Two" />
    //     Two
    //   </label>
    //   <div>Picked: {values.picked}</div>
    // </div>
  );
};

export default CustomRadio;
