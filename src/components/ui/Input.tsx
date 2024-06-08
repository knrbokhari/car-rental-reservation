import React, { InputHTMLAttributes } from "react";

export interface Props extends InputHTMLAttributes<HTMLInputElement> {
  className?: string;
  inputClassName?: string;
  label?: string;
  name: string;
  type?: string;
  disabled?: boolean;
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
      ...rest
    },
    ref
  ) => {
    return (
      <div className={className}>
        {label && (
          <label
            htmlFor={name}
            className="block mb-3 text-sm font-semibold leading-none text-body-dark"
          >
            {label}
          </label>
        )}
        <input
          id={name}
          name={name}
          type={type}
          ref={ref}
          disabled={disabled}
          {...rest}
        />
      </div>
    );
  }
);
Input.displayName = "Input";
export default Input;
