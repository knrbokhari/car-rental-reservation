import cn from "classnames";
import React, { ButtonHTMLAttributes } from "react";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  active?: boolean;
  loading?: boolean;
  disabled?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (props, ref) => {
    const {
      className,
      children,
      active,
      loading = false,
      disabled = false,
      ...rest
    } = props;

    return (
      <button
        aria-pressed={active}
        ref={ref}
        className={cn(
          "inline-flex items-center justify-center flex-shrink-0 font-semibold leading-none rounded outline-none transition duration-300 ease-in-out focus:outline-none text-white focus:shadow px-2 py-4 h-[48px] w-[175px] text-sm bg-[#5D5CFF] text-light border border-transparent hover:bg-[#5D5CFF]-hover focus:ring-1 focus:ring-[#5D5CFF]",
          className
        )}
        disabled={disabled}
        {...rest}
      >
        {children}
        {loading && (
          <span
            className="h-4 w-4 ms-2 rounded-full border-2 border-transparent border-t-2 animate-spin"
            style={{
              borderTopColor: "#ffffff",
            }}
          />
        )}
      </button>
    );
  }
);

Button.displayName = "Button";

export default Button;
