import type { ButtonHTMLAttributes } from "react";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "ghost";
};

export function Button({
  className = "",
  variant = "primary",
  type = "button",
  ...props
}: ButtonProps) {
  const variants = {
    primary:
      "bg-citea-cobalt text-white shadow-[0_10px_25px_rgba(0,74,173,0.20)] hover:bg-[#003f94] focus-visible:outline-citea-cobalt",
    ghost:
      "bg-transparent text-[#12345b] hover:bg-citea-sky/15 focus-visible:outline-citea-cobalt",
  };

  return (
    <button
      type={type}
      className={`inline-flex items-center justify-center rounded-full font-semibold transition duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 ${variants[variant]} ${className}`}
      {...props}
    />
  );
}
