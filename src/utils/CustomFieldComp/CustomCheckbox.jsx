import { useField } from "formik";

const CustomCheckbox = ({ label, labelstyle, ...props }) => {
  const [field, meta, helpers] = useField(props);
  const errorStyle = " ";
  const validStyle = "text-red-400 ";
  const invalid = meta.touched && meta.error;
  // console.log(field, meta);
  return (
    <article>
      <div className=" flex ">
        <div className="flex items-center space-x-2">
          <input {...field} {...props} />
          <span className="text-[12px] ">
            <label htmlFor={props.name} className={`${labelstyle}`}>
              {label}
            </label>
          </span>
        </div>
      </div>
      {invalid && (
        <span className="pl-6 text-red-600 text-xs"> {meta.error}</span>
      )}
    </article>
  );
};

export default CustomCheckbox;
