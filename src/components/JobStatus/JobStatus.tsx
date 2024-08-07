import clsx from "clsx";
import { useMemo } from "react";
import { Bio } from "../../@types";

type Props = {
  status?: Bio["jobStatus"];
};

export default function JobStatus({ status = "employed" }: Props) {
  const phrase = useMemo(() => {
    switch (status) {
      case "available":
        return "Available for Work";
      case "employed":
      default:
        return "Happily Employed";
    }
  }, [status]);

  return (
    <div
      data-testid="job-status"
      className={clsx(
        "rounded-full p-1 md:px-3 md:py-1 text-sm flex items-center justify-between gap-x-2",
        {
          "bg-green-200 text-green-900 font-medium": status === "available",
          "bg-slate-200 text-slate-900 font-medium": status !== "available",
        }
      )}
    >
      <div
        className={clsx("relative h-2 w-2 rounded-full", {
          "bg-green-500": status === "available",
          "bg-slate-500": status !== "available",
        })}
      >
        {status === "available" && (
          <span
            data-testid="active-ping"
            className="absolute animate-ping h-2 w-2 rounded-full opacity-75 bg-green-500"
          />
        )}
      </div>
      <span className="hidden md:inline-block">{phrase}</span>
    </div>
  );
}
