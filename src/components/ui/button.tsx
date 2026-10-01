import type { ComponentProps } from "react";
export function ButtonLink({
  variant = "primary",
  className = "",
  ...props
}: ComponentProps<"a"> & { variant?: "primary" | "secondary" }) {
  return <a className={`button button-${variant} ${className}`} {...props} />;
}
