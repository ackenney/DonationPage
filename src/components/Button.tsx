import { twMerge } from "tailwind-merge";
import { type ButtonHTMLAttributes } from "react";
import { cva, type VariantProps } from "class-variance-authority";

const buttonVariants = cva("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-bold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0", {
  variants: {
    variant: {
      default: "bg-sky-800 text-white hover:bg-sky-800/90 focus-visible:ring-teal-800 focus-visible:ring-offset-white",
      secondary: "bg-white text-teal-800 hover:bg-white/90 focus-visible:ring-white focus-visible:ring-offset-teal-800",
      outline: "border border-teal-800 bg-white text-teal-800 hover:bg-neutral-100 focus-visible:ring-teal-800 focus-visible:ring-offset-white",
      ghost: "bg-white text-black hover:bg-neutral-100",
    },
    size: {
      default: "h-10 px-4 py-2",
      sm: "h-9 rounded-md px-3",
      lg: "h-11 rounded-md px-8",
      icon: "h-10 w-10",
    },
  },
  defaultVariants: {
    variant: "default",
    size: "default",
  },
});

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> {};

export const Button = ({
  className,
  children,
  variant,
  size,
  ...props
}: ButtonProps) => {
  return (
    <button className={twMerge(buttonVariants({ className, variant, size }))} {...props}>
      {children}
    </button>
  );
};
