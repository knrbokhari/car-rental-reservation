import React, { InputHTMLAttributes } from "react";
import cn from "classnames";

export interface Props extends InputHTMLAttributes<HTMLInputElement> {
  className?: string;
  inputClassName?: string;
  label?: string;
  name: string;
  type?: string;
  disabled?: boolean;
  error?: string;
  required?: boolean;
}

const Input = React.forwardRef<HTMLInputElement, Props>(
  (
    {
      className,
      label,
      name,
      disabled = false,
      type = "text",
      inputClassName,
      error,
      required,
      ...rest
    },
    ref
  ) => {
    return (
      <div className={className}>
        {label && (
          <label
            htmlFor={name}
            className="inline-flex items-center mb-2 h-5 text-sm font-light leading-none text-[#1B1B1B]"
          >
            {label}
            {required && <span className="text-red-600">*</span>}
          </label>
        )}

        <input
          id={name}
          name={name}
          type={type}
          ref={ref}
          disabled={disabled}
          className={cn(
            "p-2 h-10 flex border border-[#D7D7FF] items-center w-full appearance-none transition duration-300 ease-in-out text-sm focus:outline-none focus:ring-0 rounded-[5px]",
            inputClassName
          )}
          {...rest}
        />
        {error && (
          <p className="my-2 text-xs text-red-500 text-start">{error}</p>
        )}
      </div>
    );
  }
);
Input.displayName = "Input";
export default Input;
