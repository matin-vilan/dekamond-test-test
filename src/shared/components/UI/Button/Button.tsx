import React from "react";
import classes from "./Buton.module.scss";
import cnj from "@/shared/utils/cnj";

export type ButtonSchema = "primary" | "secondary";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  schema: ButtonSchema;
  isLoading?: boolean;
  disabled?: boolean;
  href?: string;
  to?: string;
  children: React.ReactNode;
  className?: string;
  target?: string;
}

const Button = ({ schema, children, className, ...rest }: ButtonProps & {}) => {
  return (
    <button className={cnj(classes[schema], className)} {...rest}>
      {children}
    </button>
  );
};

export default Button;
