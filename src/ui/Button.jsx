import React from "react";
import Spinner from "../utils/Spinner";

const Button = ({
  text,
  fullWidth,
  primary,
  disabled = false,
  style,
  onClick,
  rounded,
  isSubmitting = false,
  submissionText = "Please Wait",
  type,
}) => {
  return (
    <button
      disabled={isSubmitting || disabled}
      onClick={onClick}
      className={`
    ${fullWidth ? "w-full" : "w-max"}
    ${
      primary
        ? "bg-brand-light/90 text-primary text-white hover:bg-brand-light"
        : "bg-brand-secondary/90 hover:bg-brand-secondary text-primary"
    }
    transition
    ${rounded ? "rounded-full " : "rounded-md"}
    ${style}
    flex flex-row items-center justify-center gap-x-4 
    disabled:cursor-default disabled:bg-brand-light/40 disabled:hover:bg-brand-light/40
  `}
      type={type}
    >
      <span> {isSubmitting ? submissionText : text}</span>
      <span className={isSubmitting ? "animate-spin" : "hidden"}>
        <Spinner visible height={20} width={20} color="gray" />
      </span>
    </button>
  );
};

export default Button;
