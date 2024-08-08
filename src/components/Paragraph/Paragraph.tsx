import clsx from "clsx";
import { HTMLAttributes } from "react";

type Props = HTMLAttributes<"paragraph">;

export default function Paragraph({ children, className }: Props) {
  return (
    <p className={clsx("mb-2 text-gray-600 dark:text-gray-100", className)}>
      {children}
    </p>
  );
}
