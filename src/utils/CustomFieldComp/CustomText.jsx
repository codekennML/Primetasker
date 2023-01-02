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
        props.wrapperclass ? props.wrapperclass : `w-full my-1.5 relative`
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

      {imgBfr ? (
        <div
          className={
            props.svgclass
              ? props.svgclass
              : `text-[18px] text-red-400  absolute top-[45%] left-[1%]`
          }
        >
          {imgBfr}
        </div>
      ) : null}
      <div className="relative">
        <input
          type={passwordVisible ? "text" : type}
          {...field}
          {...props}
          className={`${invalid ? errorStyle : validStyle} ${
            imgBfr ? "pl-9" : "pl-2"
          } ${props.inputstyle} py-2 rounded-lg pr-3  w-full text-xs`}
        />
        {imgAfter ? (
          <button
            type="button"
            onClick={() => toggleVisibility()}
            className={
              props.svgclass
                ? props.svgclass
                : `text-[18px] text-violet-600  absolute top-[40%] right-[5%] `
            }
          >
            {passwordVisible ? <AiOutlineEyeInvisible /> : imgAfter}
          </button>
        ) : null}
      </div>

      {invalid && (
        <div className="text-red-600 text-xs mt-1 mb-2"> {meta.error}</div>
      )}
    </div>
  );
};

export default CustomText;
