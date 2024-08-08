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
          "bg-gray-100 text-gray-700 dark:bg-gray-500 dark:text-white":
            variant === "default",
          "bg-gray-700 text-white dark:bg-gray-800": variant === "secondary",
          "bg-blue-700 text-white": variant === "primary",
        },
        className
      )}
    >
      {children}
    </span>
  );
}
