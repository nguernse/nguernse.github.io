import clsx from "clsx";
import { PropsWithChildren } from "react";

type Props = PropsWithChildren<{
  testid?: string;
  title?: string;
  className?: string;
  variant?: "plain" | "light";
}>;

export default function Section({
  testid = "section",
  children,
  title,
  variant = "plain",
  className,
}: Props) {
  return (
    <section
      data-testid={testid}
      data-variant={variant}
      className={clsx(
        "mb-4",
        {
          "p-4 bg-gray-100 rounded dark:bg-gray-900 dark:border dark:border-gray-700":
            variant === "light",
        },
        className
      )}
    >
      {title && (
        <h2 className="font-display text-2xl mb-3 text-gray-600 dark:text-white">
          {title}
        </h2>
      )}

      {children}
    </section>
  );
}
