import clsx from "clsx";
import { PropsWithChildren } from "react";

type Props = PropsWithChildren<{
  className?: string;
  variant?: "default" | "secondary" | "primary";
}>;

export default function Badge({
  children,
  variant = "default",
  className,
}: Props) {
  return (
    <span
      data-testid="badge"
      data-variant={variant}
      className={clsx(
        "font-medium rounded-full px-3 py-1 text-xs",
        {
          "bg-slate-100 text-slate-500 ": variant === "default",
          "bg-slate-500 text-white ": variant === "secondary",
          "bg-blue-500 text-white": variant === "primary",
        },
        className
      )}
    >
      {children}
    </span>
  );
}
