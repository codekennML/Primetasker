import { useField } from "formik";
import { useRef, useState, useEffect } from "react";
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

  const [field, meta, helpers] = useField(props.name);

  const errorStyle = "outline-red-500";
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
          props.name ? `${labelstyle} font-medium text-[12px] ` : `sr-only`
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
          className={` ${imgBfr ? "pl-7" : "pl-2"} ${props.inputstyle} ${
            invalid ? errorStyle : "focus:outline-brand-light"
          } `}
        />
        {imgAfter ? (
          <button
            type="button"
            onClick={() => toggleVisibility()}
            className={
              props.adornment
                ? props.adornment
                : `text-[18px] text-brand-light  absolute top-[40%] right-[5%] `
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
