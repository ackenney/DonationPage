import { InputHTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

export const Input = ({
  className,
  type,
  ...props
}: InputHTMLAttributes<HTMLInputElement>) => {
  return (
    <input
      type={type}
      className={twMerge(
        "flex h-10 w-full border border-neutral-200 rounded-md bg-white px-3 py-2 text-base ring-offset-sky-800 placeholder:text-neutral-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
        className
      )}
      {...props}
    />
  );
};
