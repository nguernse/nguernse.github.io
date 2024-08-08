import clsx from "clsx";
import { PropsWithChildren, useEffect } from "react";

type Props = PropsWithChildren<{
  className?: string;
  title: string;
}>;

export default function PageWrapper({ children, className, title }: Props) {
  useEffect(() => {
    document.title = title;
  }, [title]);

  return (
    <div
      className={clsx(
        "bg-white rounded border p-4 md:p-8 dark:bg-gray-800 dark:border-gray-700",
        className
      )}
    >
      {children}
    </div>
  );
}
