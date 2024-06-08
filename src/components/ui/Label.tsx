import cn from "classnames";

const Label: React.FC<React.LabelHTMLAttributes<HTMLLabelElement>> = ({
  className,
  ...rest
}) => {
  return (
    <label
      className={cn(
        "inline-flex items-center mb-2 h-5 text-sm font-light leading-none text-[#1B1B1B]",
        className
      )}
      {...rest}
    />
  );
};

export default Label;
