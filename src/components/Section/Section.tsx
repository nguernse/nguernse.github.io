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
          "p-4 bg-slate-100 rounded": variant === "light",
        },
        className
      )}
    >
      {title && (
        <h2 className="font-display text-2xl mb-3 text-slate-600">{title}</h2>
      )}

      {children}
    </section>
  );
}
