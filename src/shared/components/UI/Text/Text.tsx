import cnj from "@/shared/utils/cnj";
import classes from "./Text.module.scss";

type Variant = "default" | "title" | "description";
type Color =
  | "primary"
  | "secondary"
  | "success"
  | "danger"
  | "warning"
  | "info"
  | "gray-900"
  | "gray-600"
  | "white"
  | "black";

interface TextProps extends React.HTMLAttributes<HTMLParagraphElement> {
  children: React.ReactNode;
  variant?: Variant;
  color?: Color;
  className?: string;
}

const colorClassMap: Partial<Record<Color, string>> = {
  primary: classes["text--primary"],
  secondary: classes["text--secondary"],
  success: classes["text--success"],
  danger: classes["text--danger"],
  warning: classes["text--warning"],
  info: classes["text--info"],
  "gray-900": classes["text--gray-900"],
  "gray-600": classes["text--gray-600"],
  white: classes["text--white"],
  black: classes["text--black"],
};

const variantClassMap: Record<Variant, string> = {
  default: classes.text,
  title: classes["text--title"],
  description: classes["text--description"],
};

const TextComponent: React.FC<TextProps> = ({
  children,
  variant = "default",
  color,
  className,
  ...rest
}) => {
  const variantClass = variantClassMap[variant] || classes.text;
  const colorClass = color ? colorClassMap[color] : "";
  return (
    <p className={cnj(variantClass, colorClass, className)} {...rest}>
      {children}
    </p>
  );
};

export default TextComponent;
