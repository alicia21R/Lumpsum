import * as React from "react";
import { cn } from "../../helpers/utils";
import { useField } from "formik";
import clsx from "clsx";

const Input = React.forwardRef(({ className, type, ...props }, ref) => {
  return (
    <input
      type={type}
      className={cn(
        "border-input placeholder:text-muted-foreground focus-visible:ring-ring flex h-10 w-full rounded-md border bg-transparent px-3 py-2 text-sm file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:font-light focus-visible:outline-none focus-visible:ring-1 disabled:cursor-not-allowed disabled:opacity-50",
        className
      )}
      ref={ref}
      {...props}
    />
  );
});

const FormInput = ({ label, ...rest }) => {
  const [field, meta] = useField(rest);
  const inputClasses = clsx(
    "border-input placeholder:text-muted-foreground focus-visible:ring-ring flex h-10 w-full rounded-md border bg-transparent px-3 py-2 text-sm file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:font-light focus-visible:outline-none focus-visible:ring-1 disabled:cursor-not-allowed disabled:opacity-50 ",
    { "border border-red-600": meta.touched && meta.error }
  );
  return (
    <div className="mb-3 w-full">
      <label
        htmlFor={rest.id || rest.name}
        className="mb-2 block text-sm font-medium text-gray-900 "
      >
        {label} <span className="mb-3 text-sm font-medium text-red-600">*</span>
      </label>
      <input className={inputClasses} {...rest} {...field} />
      {meta.touched && meta.error && (
        <small className="text-sm text-red-500">{meta.error}</small>
      )}
    </div>
  );
};

Input.displayName = "Input";

export { Input, FormInput };
