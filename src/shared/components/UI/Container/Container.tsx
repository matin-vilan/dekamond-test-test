import React from "react";
import cnj from "@/shared/utils/cnj";
import styles from "./Container.module.scss";

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  variant?: "sm" | "md" | "lg" | "xl" | "full";
  withBackground?: boolean;
  withBorder?: boolean;
  className?: string;
}

const Container: React.FC<ContainerProps> = ({
  children,
  variant = "md",
  withBackground = false,
  withBorder = false,
  className,
  ...rest
}) => {
  const containerClasses = cnj(
    styles[variant],
    withBackground && styles.withBackground,
    withBorder && styles.withBorder,
    className
  );

  return (
    <div className={containerClasses} {...rest}>
      {children}
    </div>
  );
};

export default Container;
