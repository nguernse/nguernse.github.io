import clsx from "clsx";
import { useMemo } from "react";

type Props = {
  path: string;
  size?: "small" | "medium" | "large" | "xl";
  className?: string;
  alt: string;
};

export default function Avatar({
  path,
  size = "medium",
  alt,
  className,
}: Props) {
  const dimensions = useMemo(() => {
    switch (size) {
      case "xl":
        return 150;
      case "large":
        return 75;
      case "medium":
        return 50;
      case "small":
      default:
        return 25;
    }
  }, [size]);

  return (
    <div
      className={clsx("inline-block rounded-full bg-slate-50", className)}
      style={{
        width: `${dimensions}px`,
        height: `${dimensions}px`,
      }}
    >
      <img
        src={path}
        height={dimensions}
        width={dimensions}
        className="w-full h-full rounded-full object-fit"
        alt={alt}
      />
    </div>
  );
}
