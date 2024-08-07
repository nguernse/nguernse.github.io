import clsx from "clsx";
import { HTMLAttributes } from "react";

type Props = HTMLAttributes<"paragraph">;

export default function Paragraph({ children, className }: Props) {
  return <p className={clsx("mb-2 text-slate-600", className)}>{children}</p>;
}
