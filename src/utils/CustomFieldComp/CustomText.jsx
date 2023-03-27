import { useField } from "formik";
import { useRef, useState } from "react";
import { AiOutlineEyeInvisible } from "react-icons/ai";

const CustomText = ({
  label,
  labelstyle,
  imgBfr,
  type,
  imgAfter,
  ...props
}) => {
  const [passwordIcon, sePasswordIcon] = useState();

  const [field, meta, helpers] = useField(props);
  const errorStyle = "border border-rose-400 ";
  const validStyle = "border-gray-400 border";
  const invalid = meta.touched && meta.error;

  const [passwordVisible, setPasswordVisible] = useState(false);
  const toggleVisibility = () => {
    setPasswordVisible((prev) => !prev);
  };

  return (
    <div
      className={
        props.wrapperclassName ? props.wrapperclass : `w-full my-1.5 relative`
      }
    >
      <label
        htmlFor={props?.name}
        className={
          props.name ? `font-medium text-[12px] ${labelstyle}` : `hidden`
        }
      >
        {label}
      </label>

      <div className="relative">
        {imgBfr ? (
          <button
            type="button"
            onClick={() => toggleVisibility()}
            className={`${
              props.adornment ? props.adornment : null
            }  text-[18px]   absolute  `}
          >
            {imgBfr}
          </button>
        ) : null}

        <input
          type={passwordVisible ? "text" : type}
          {...field}
          {...props}
          className={`${invalid ? errorStyle : validStyle} ${
            imgBfr ? "pl-7" : "pl-2"
          } ${props.inputstyle} `}
        />
        {imgAfter ? (
          <button
            type="button"
            onClick={() => toggleVisibility()}
            className={
              props.adornment
                ? props.adornment
                : `text-[18px] text-violet-600  absolute top-[40%] right-[5%] `
            }
          >
            {passwordVisible ? <AiOutlineEyeInvisible /> : imgAfter}
          </button>
        ) : null}
      </div>

      {invalid && (
        <div className="text-red-600 text-xs  py-2"> {meta.error}</div>
      )}
    </div>
  );
};

export default CustomText;
